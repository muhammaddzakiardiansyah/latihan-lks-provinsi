<?php

namespace App\Http\Middleware;

use App\Models\Societie;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(!$request->filled('token'))
        {
            return response()->json(['message' => 'Unauthorized user'], 401);
        }
        $data = Societie::where('login_tokens', $request->query('token'))->first();
        if(!$data)
        {
            return response()->json(['message' => 'Unauthorized user'], 401);
        }
        $request["society"] = $data;
        return $next($request);
    }
}
