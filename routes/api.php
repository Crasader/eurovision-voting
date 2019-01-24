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

Route::get('contries', 'CountryController@index');
Route::get('contries/voteStatus', 'CountryController@voteStatus');
Route::get('contries/results', 'CountryController@results');

Route::get('votes/details', 'VoteController@index');
Route::put('votes/{id}', 'VoteController@vote');