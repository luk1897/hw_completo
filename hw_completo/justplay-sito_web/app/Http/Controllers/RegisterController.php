<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Session;
use Request;
use Hash;
use App\Models\User;
use DateTime;

class RegisterController extends BaseController
{
    public function create()
    {
        $req=request();
        if($this->checkErrors($req) === 0){
            $new_user = User::create([
                'nome' => $req->nome,
                'cognome' => $req->cognome,
                'data_nascita' => $req->data_nascita,
                'eta' => null,
                'email' => $req->email,
                'password' => $req->password,
                'username' => $req->username,
            ]);

            if($new_user){
                Session::put("u_id", $new_user->codice);
                return redirect('home_account');
            }
            else{
                return redirect('signup')->withInput();
            }
        }
        else{
            return redirect('signup')->withInput();
        }

    }

    public function checkUsername($q){
        $exists = User::where('username', $q)->exists();
        return ['exists' => $exists];
    }

    public function checkErrors($data)
        {
            $errors = array();

            //Controllo PASSWORD
            if (strlen($data['password'])>5                 //almeno 5 caratteri           
                && preg_match('`[A-Z]`', $data['password']) //Almeno un carattere maiuscolo
                && preg_match('`[a-z]`', $data['password']) //Almeno un carattere minuscolo
                && preg_match('`[0-9]`', $data['password']) //Almeno un numero
            ){
                echo "Password valida";
            }else
            {
                $errors[] = "Caratteri non validi";
                echo "password non valida";
            }

            $us=User::where('username', $data['username']);
            if(isset($us)){
                $errors[]="Username già esistente";
                echo "Username già esistente";
            }
            else{
                echo "Nuovo username";
            }

            if(strlen($data['nome'])==0 ||  (strlen($data['cognome'])==0 || strlen($data['data_nascita'])==0 || strlen($data['email'])==0) ||
                strlen($data['username'])==0){

                $errors[]="Campo non riempito";
                echo "Campo non riempito";
            }
            else{
                echo "Campo riempito";
            }
            
            if(preg_match('`[0-9]{4}-[0-9]{2}-[0-9]{2}`', $data['data_nascita'])){

                $ex = explode("-", $data['data_nascita']);

                $a = $ex[0];
                $m = $ex[1];
                $g = $ex[2];

                if(checkdate($m, $g, $a)){
                echo "Ok data";
                }
                else{
                    $errors[]="Data non valida";
                    echo "Data non valida";
                }
            }   
            else{
                $errors[]="Data non valida";
                echo "Data non valida";
            }
            
            if(filter_var($data['email'], FILTER_VALIDATE_EMAIL)){
                echo "Ok email";
            }
            else{
                $errors[]="Email non valida";
                echo "Email non valida";
            }

            return count($errors);
        }




    public function viewSignup(){
        return view('signup');
    }

}

?>