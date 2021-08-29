<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Session;
use Request;
use App\Models\User;
use Hash;

class LoginController extends BaseController
{
    public function login()
    {
        
        if(session('u_id') != null)
        {
            
            return view('home_account');
        }
        else
        {
            
            $old_username = Request::old('username');
            return view('login')->with('csrf_token', csrf_token())->with('old_username', $old_username);
        }
    }

    public function checkLogin()
    {

        $user = User::where('username', request('username'))->where('password',request('password'))->first(); //first = prima riga risultante//

        if(isset($user)) //perchè ho una riga e quindi se non è null entro qui//
        {
            Session::put('u_id', $user->codice);
            return redirect('home_account');
        }
        else
        {
          return redirect('login')->withInput(); //mandiamo i dati inseriti precedentemente//
        }
    }

    public function logout()
    {
        
        Session::flush();
        return redirect('home');
    }

}
?>