<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\User;
use App\Models\Card;
use Http;
use DB;

class MagicController extends BaseController{

    public function showMagic(){

        $user=User::find(session('u_id'));

        if(isset($user)){
            return view('magic');
        }
        else{
            return redirect('home');
        }
    }

    public function apiMagic(){

        $json = Http::get('https://api.magicthegathering.io/v1/cards',[
        'pageSize' => 3 ,
        'random' => 'true'
        ]);

        if ($json->failed()){
            abort(500);
        }   
        
        $newj=array();

        for ($i = 0; $i < count($json['cards']); $i++){
        $newj[]=array('nome' => $json['cards'][$i]['name'], 'img' => $json['cards'][$i]['imageUrl']);
        }

        
        return response()->json($newj);
           
    }

    public function addCard($nome, $img){

        $image = urldecode(base64_decode($img)); 
        

        Card::create([
            'id' => null,
            'nome' => $nome,
            'image' => $image,
            'created_at' => null,
            'updated_at' => null
        ]);

        
        $cliente=User::find(session('u_id'));
        $card=Card::where('nome',$nome)->latest('created_at')->first();
        $id=$card->id;

        $card -> cDB() -> attach($cliente, ['carta' => $id]);
    }




    public function indexCards(){
        
        $user=User::find(session('u_id'));

        if(isset($user)){
            return view('cardMagic');
        }
        else{
            return redirect('home');
        }
    }

    public function showCards(){
        
        $cliente=User::find(session('u_id'));
        $c_id=$cliente->codice;
                
        return (DB::select("SELECT c.nome as nome,c.image as img FROM card c JOIN cliente_carta cc ON c.id=cc.carta WHERE cc.cliente=$c_id"));
    }
}
?>