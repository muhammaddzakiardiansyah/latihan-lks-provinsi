<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ValidationController extends Controller
{
    public function validation(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'work_experience' => 'required',
            'job_category_id' => 'required',
            'job_position' => 'required',
            'reason_accepted' => 'required',
        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors(), 400);
        }

        try {
            $request["society"]->validation()->create([
                'work_experience' => $request->work_experience,
                'job_category_id' => $request->job_category_id,
                'job_position' => $request->job_position,
                'reason_accepted' => $request->reason_accepted,
                'status' => 'pending',
            ]);
            
            // Log::info($create->toSql());
            return response()->json(['message' => 'Request data Validation sent successfull']);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()],500);
        }

    }

    public function getValidation(Request $request)
    {
        $data = $request["society"]->validation()->where('status', 'accepted')->first();
        if(!$data)
        {
            return response()->json(['message' => 'Data Not Found'], 404);
        }
        return response()->json([
            "validation" => [
                "id" => $data->id,
                "status" => $data->status,
                "work_experience" => $data->work_experience,
                "job_category_id" => $data->job_category_id,
                "job_position" => $data->job_position,
                "reason_accepted" => $data->reason_accepted,
                "validator_notes" => $data->validator_notes,
                "validator" => $data->validator,
            ]], 
            200
        );
    }
}
