<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

use App\Models\User;
use Request;
use App\Models\Gioco;

class HomeAccountController extends BaseController{

    public function viewHomeAcc(){

        $user=User::find(session('u_id'));
        if(isset($user)){
            return view('home_account');
        }
        else{
            return redirect('home');
        }
    }
    
    public function showGamesAcc(){
        $games=Gioco::all();
        return $games;
    }
}

?>