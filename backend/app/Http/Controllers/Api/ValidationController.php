<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Societie;
use App\Models\Validation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

class ValidationController extends Controller
{
    public function validation(Request $request)
    {
        if(!$request->query('token'))
        {
            return response()->json(['message' => 'Unauthorized user'], 400);
        }
        $societie = Societie::where('login_tokens', $request->query('token'));

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
            $create = Validation::create([
                'work_experience' => $request->work_experience,
                'job_category_id' => $request->job_category_id,
                'job_position' => $request->job_position,
                'reason_accepted' => $request->reason_accepted,
                'society_id' => $societie->first()->id,
                'status' => 'pending',
            ]);
            
            Log::info($create->toSql());
            return response()->json(['message' => 'Request data Validation sent successfull']);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()],500);
        }

    }

    public function getValidation(Request $request)
    {
        if(!$request->query('token'))
        {
            return response()->json(['message' => 'Unauthorized user'], 401);
        }

        $societie = Societie::where('login_tokens', $request->query('token'));

        try {
            $validation = Validation::where('society_id', $societie->first()->id);
            return response()->json($validation->first(), 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()],500);
        }
    }
}
