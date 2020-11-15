<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::post('/app/create_tag', 'AdminController@addTag');

Route::post('/app/edit_tag', 'AdminController@editTag');
Route::post('/app/delete_tag', 'AdminController@deleteTag');

Route::get('/app/get_tag', 'AdminController@getTag');


Route::any('{slug}', function () {
    return view('welcome');
});
