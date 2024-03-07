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

        if($validator->fails())
        {
            return response()->json($validator->errors(), 400);
        }

        $resultGet = Societie::with('region')
                  ->where('id_card_number', $request->id_card_number)
                  ->where('password', $request->password);

        if(count($resultGet->get()) === 0) 
        {
            return response()->json(['message' => 'id card number or password incorret.'], 401);
        }

        $token = md5($request->id_card_number);

        Societie::where('id_card_number', $request->id_card_number)->first()->update(['login_tokens' => $token]);

        $result = Societie::where('id_card_number', $request->id_card_number);

        // set id societie
        Session::put('id', $result->first()->id);

        $res = [
            "name" => $result->first()->name,
            "born_date" => $result->first()->born_date,
            "gender" => $result->first()->gender,
            "address" => $result->first()->address,
            "token" => $result->first()->login_tokens,
            "regional" => $result->first()->region,
        ];

        Log::info($resultGet->toSql());

        return response()->json($res, 200);
    }

    public function logout(Request $request)
    {
        $token = $request->query('token');
        if(!$token)
        {
            return response()->json(['message' => 'Invalid Token'], 401);
        }

        $resultGet = Societie::where('login_tokens', $request->query('token'));

        if(count($resultGet->get()) === 0) {
            return response()->json(['message' => 'Invalid Token'], 401);
        }

        $request->session()->forget('id');

        Societie::where('login_tokens', $request->query('token'))->update(['login_tokens' => null]);

        Log::info($resultGet->toSql());
        return response()->json(['message' => 'Logout Success'], 200);
    }
}
