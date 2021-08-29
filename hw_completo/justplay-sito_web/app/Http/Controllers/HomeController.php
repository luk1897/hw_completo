<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

use App\Models\User;
use Request;
use App\Models\Gioco;

class HomeController extends BaseController
{
    public function homeCheck()
    {
        
        $user = User::find(session('u_id'));
        if(isset($user))
        {
            return view('home_account')->with('user', $user); //passaggio variabile

        }
        else
        {
            return view('home');

        }
    }

    public function showGames(){

        $games=Gioco::all();
        return $games;

    }

}


?>