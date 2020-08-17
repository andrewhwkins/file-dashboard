<?php

use Illuminate\Support\Facades\Route;

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

Route::delete('/v1/files/{file}', 'FileController@destroy');

Route::get('/v1/files', 'FileController@index');

Route::get('/v1/files/{file}', 'FileController@show');
