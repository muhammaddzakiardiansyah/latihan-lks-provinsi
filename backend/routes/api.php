<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ValidationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/v1')->middleware('api-session')->group(function()
{
    Route::controller(AuthController::class)->group(function()
    {
        Route::post('/auth/login', 'login')->name('login');
        Route::post('/auth/logout', 'logout')->name('logout');
    });
    Route::controller(ValidationController::class)->group(function()
    {
        Route::post('/validations','validation')->name('create validation');
        Route::get('/validations','getValidation')->name('get validation');
    });
});
