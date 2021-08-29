<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeAccountController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ComicsController;
use App\Http\Controllers\MagicController;
use App\Http\Controllers\CarrelloController;
use App\Http\Controllers\StatsController;


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
    return redirect('home');
});

Route::get('login', [LoginController::class, 'login']);
Route::post('login', [LoginController::class, 'checkLogin']);

Route::get('logout', [LoginController::class, 'logout']);

Route::get('home', [HomeController::class, 'homeCheck']);
Route::get('get_games', [HomeController::class, 'showGames']);

Route::get('signup', [RegisterController::class, 'viewSignup']);
Route::post('signup', [RegisterController::class, 'create']);
Route::get("justplay-sito_web/signup/username/{q}", [RegisterController::class, 'checkUsername']);

Route::get('home_account', [HomeAccountController::class, 'viewHomeAcc']);
Route::get('get_games_account', [HomeAccountController::class, 'showGamesAcc']);

Route::get('comics', [ComicsController::class, 'showComics']);
Route::get('get_comics/title/{t}', [ComicsController::class, 'apiComics']);

Route::get('magic', [MagicController::class, 'showMagic']);
Route::get('get_magic', [MagicController::class, 'apiMagic']);
Route::get('add_card/name/{nome}/image/{img}',[MagicController::class, 'addCard']);
Route::get('cardMagic',[MagicController::class, 'indexCards']);
Route::get('show_all_cards',[MagicController::class, 'showCards']);

Route::get('carrello',[CarrelloController::class,'showCart']);
Route::get('get_carrello/gioco/{id}',[CarrelloController::class,'addGames']);
Route::get('get_cart_games', [CarrelloController::class, 'showGames']);
Route::get('delete_game/gioco/{id}', [CarrelloController::class, 'deleteGames']);
Route::get('buy_game/gioco/{id}',[CarrelloController::class,'buyGame']);

Route::get('stats',[StatsController::class, 'showStats']);
Route::get('get_stats',[StatsController::class, 'getStats']);