<?php


namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\User;
use Http;

class ComicsController extends BaseController{


    public function showComics(){

        $user=User::find(session('u_id'));

        if(isset($user)){
            return view('comics');
        }
        else{
            return redirect('home');
        }   
    }

    public function apiComics($t){
        $string_req='/portrait_xlarge.jpg';
        $marvel_hash='5e35930b9414dfd86b58e412f5bac91e';
        $ts=1;

        $json = Http::get('https://gateway.marvel.com/v1/public/comics', [
            'title' => $t,
            'hash' => $marvel_hash,
            'ts'   => $ts,
            'apikey' => env('MARVEL_APIKEY'),
        ]);
        
        if ($json->failed()) 
            abort(500);

        $newJ = array();

        for ($i = 0; $i < count($json['data']['results']); $i++)
        {
            $newJ[] = array(
            'img' => $json['data']['results'][$i]['images'][0]['path'].$string_req, 'title' => $json['data']['results'][$i]['title']);
            
        }

        return response()->json($newJ);
    
    }


}
?>