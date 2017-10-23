<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Blade::extend(function($value)
{
	return preg_replace('/(\s*)@(break|continue)(\s*)/', '$1<?php $2; ?>$3', $value);
});

Route::controllers([
'auth' => 'Auth\AuthController',
'password' => 'Auth\PasswordController',
]);

// Route::group(array('prefix'=>'install','before'=>'install'),function()
// {
//     Route::get('/','InstallController@index');
//     Route::get('/database','InstallController@getDatabase');
//     Route::post('/database','InstallController@postDatabase');
//     Route::get('/user','InstallController@getUser');
//     Route::post('/user','InstallController@postUser');
// });


Route::get('login', 'Auth\AuthController@login');
Route::get('register', 'Auth\AuthController@register');

Route::get('/', 'cfiController@show');
Route::get('home', 'cfiController@show');
Route::get('create', ['middleware' => 'auth', 'uses' => 'cfiController@create']);
Route::get('plata', ['middleware' => 'auth', 'uses' => 'cfiController@plata']);
Route::get('receptie', ['middleware' => 'auth', 'uses' => 'cfiController@receptie']);
Route::get('sala', ['middleware' => 'auth', 'uses' => 'cfiController@index']);

Route::any('store', 'cfiController@store');
Route::post('updateplata', ['middleware' => 'auth', 'uses' => 'cfiController@updatePlata']);
Route::post('updateinplata', ['middleware' => 'auth', 'uses' => 'cfiController@updateInPlata']);
Route::post('updatereceptie', ['middleware' => 'auth', 'uses' => 'cfiController@updateReceptie']);
