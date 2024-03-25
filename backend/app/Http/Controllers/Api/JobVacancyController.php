<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\JobVacancy;
use App\Models\Validation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class JobVacancyController extends Controller
{
    // get all job vacancy by categories
    public function getAllJobVacancy(Request $request)
    {
        $societyId = $request['society']->id;
        $resultSociety = Validation::where('society_id', $societyId)->first();

        $result = JobVacancy::with(['availableJobs', 'categoryJobs'])->where('job_category_id', $resultSociety->job_category_id)->first();

        return response()->json([
            "vacancies" => [
                "id" => $result->id,
                "category" => $result->categoryJobs,
                "company" => $result->company,
                "address" => $result->address,
                "description" => $result->description,
                "available_position" => [["position" => $result->availableJobs[0]->position]]
            ],
        ]);
    }

    public function getDetailJobVacancy(Request $request, $jobVacancyId)
    {
        $societyId = $request['society']->id;
        $resultSociety = Validation::where('society_id', $societyId)->first();

        $result = JobVacancy::with(['availableJobs', 'categoryJobs'])->where('job_category_id', $resultSociety->job_category_id)->where('id', $jobVacancyId)->first();

        foreach($result->availableJobs as $availableJob)
        {
            $data[] = [
                "position" => $availableJob->position,
                "capacity" => $availableJob->capacity,
                "appaly_capacity" => $availableJob->apply_capacity,
            ];
            
        }

        return response()->json([
            "vacancy" => [
                "id" => $result->id,
                "category" => $result->categoryJobs,
                "company" => $result->company,
                "address" => $result->address,
                "description" => $result->description,
                "available_position" => $data
            ],
        ]);
    }
}
