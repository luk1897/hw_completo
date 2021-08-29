<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\User;
use App\Models\Gioco;
use App\Models\Informazioni;
use App\Models\Carrello;
use DB;

class CarrelloController extends BaseController{



    public function showCart(){
        $user=User::find(session('u_id'));

        if(isset($user)){
            return view('carrello');
        }
        else{
            return redirect('home');
        }
    }

    public function addGames($id){

        $cliente=User::find(session('u_id'));
        $c_id=$cliente->codice;
        print_r($c_id);

        Carrello::create([
            'id' => null,
            'codice_cliente' => $c_id,
            'codice_gioco' => $id,
            'created_at' => null,
            'updated_at' => null,
        ]);

    }

    
    public function showGames(){

        $cliente=User::find(session('u_id'));
        $c_id=$cliente->codice;
        return (DB::select("SELECT g.codice, g.nome, g.immagine, g.prezzo FROM carrello c JOIN gioco g 
        ON c.codice_gioco=g.codice WHERE c.codice_cliente=$c_id"));

    }

    public function deleteGames($id){

        $cliente=User::find(session('u_id'));
        $c_id=$cliente->codice;

        $gioco=Carrello::where('codice_cliente',$c_id)->where('codice_gioco',$id)->limit(1);
        $gioco->delete();


    }

    public function buyGame($id){

        $cliente=User::find(session('u_id'));
        $c_id=$cliente->codice;

        $p=Gioco::where('codice',$id)->first();
        $prezzo=$p->prezzo;
        
        
        Informazioni::create([
            'id' => null,
            'codice_cliente' => $c_id,
            'codice_gioco' => $id,
            'spesa_cliente' => $prezzo,
            'created_at' => null,
            'updated_at' => null,
        ]); 

        
    }


}
?>