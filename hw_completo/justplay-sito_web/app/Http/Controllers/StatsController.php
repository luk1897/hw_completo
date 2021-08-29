<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\User;
use App\Models\Gioco;
use App\Models\Informazioni;
use DB;

class StatsController extends BaseController{


    public function showStats(){
        $user=User::find(session('u_id'));

        if(isset($user)){
            return view('stats');
        }
        else{
            return redirect('home');
        }
    }

    public function getStats(){


    return(DB::select("SELECT g.nome, g.immagine, count(*) as conteggio, round(avg(c.eta),2) as media_età
    FROM cliente c JOIN informazioni i on c.codice=i.codice_cliente JOIN gioco g on g.codice=i.codice_gioco
    GROUP BY g.nome,g.immagine"));

    }


}
?>