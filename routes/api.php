<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/users', function (Request $request) {
    return $request->user();
});

Route::post('register', 'APIRegisterController@register');
Route::post('login', 'APILoginController@login');

Route::group(['middleware' => ['jwt.auth']], function(){
    //auth routes
});

Route::group(['middleware' => ['web']], function () {
    Route::get('/post', 'Api\PostController@index');
    Route::get('/post/{post}', 'Api\PostController@show');
    Route::post('/post', 'Api\PostController@store');
    Route::put('/post/{id}', 'Api\PostController@update');
    Route::delete('/post/{id}', 'Api\PostController@destroy');
});



