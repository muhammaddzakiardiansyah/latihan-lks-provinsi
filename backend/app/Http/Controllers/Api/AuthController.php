<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Societie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id_card_number" => "required",
            "password" => "required",
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $resultGet = Societie::with('region')
            ->where('id_card_number', $request->id_card_number)
            ->where('password', $request->password);

        if (count($resultGet->get()) === 0) {
            return response()->json(['message' => 'id card number or password incorret.'], 401);
        }

        $token = md5($request->id_card_number);
        $result = Societie::where('id_card_number', $request->id_card_number)->first();

        $result->update(['login_tokens' => $token]);

        $res = [
            "name" => $result->name,
            "born_date" => $result->born_date,
            "gender" => $result->gender,
            "address" => $result->address,
            "token" => $token,
            "regional" => $result->region,
        ];

        Log::info($resultGet->toSql());

        return response()->json($res, 200);
    }

    public function logout(Request $request)
    {
        $request["society"]->update(['login_tokens' => null]);
        return response()->json(['message' => 'Logout Success'], 200);
    }
}
