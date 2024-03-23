<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\JobVacancyController;
use App\Http\Controllers\Api\ValidationController;
use App\Models\Societie;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Http\Response;
use Illuminate\Routing\Router;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::prefix('/v1')->middleware('api-session')->group(function()
// {
// });

Route::controller(ValidationController::class)->middleware('api-session')->group(function()
{
    Route::post('/validations','validation')->name('create validation');
    Route::get('/validations','getValidation')->name('get validation');
});

Route::controller(AuthController::class)->middleware('api-session')->group(function()
{
        Route::post('/auth/login', 'login')->name('login')->withoutMiddleware('api-session');
        Route::post('/auth/logout', 'logout')->name('logout');
});

Route::controller(JobVacancyController::class)->middleware('api-session')->group(function()
{
    Route::get('/job_vacancies', 'getAllJobVacancy')->name('get all job vacancies');
});

// Route::get('/user/{name?}/{id?}', function(?string $name = null, ?string $id = null)
// {
//     return $name . ' ' . $id;
// })->whereAlpha('name')->whereUuid('id');

// Route::get('/socity/{name}', function(Societie $nama)
// {
//     return $nama->name . ' ' . ' ada?';
// });

// Route::get('/money', function(HttpRequest $request)
// {
//     // var_dump($request->ips());

//     // if($request->hasAny('username'))
//     // {
//     //     return 'Ini wajib diisi looo';
//     // }

//     // if($request->filled('username'))
//     // {
//     //     // return 'Ini gaboleh kosong';
//     //     $request->input('username', 'user1');
//     // }

//     // var_dump($request->file('image')->extension());

//     // return $request->input('name.name', 'Umar') . ' ' . $request->name;
//     // return $request->only(['username', 'password']);
//     // return 'You get Money ' . $request->fullUrl() . ' ' . $request->header('token') . ' ';

//     return ['abi', 'umi', 'akhi', 'ukhti', ["name" => "abimantra"]];
// });

// Route::get('/home', function () {
//     return response('Hello World', 200)
//                   ->header('Content-Type', 'text/plain');
// });

// Route::get('/users', function(Societie $societie)
// {
//     return response()->json($societie, 200);
// });

