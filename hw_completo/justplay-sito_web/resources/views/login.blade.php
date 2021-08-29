<!DOCTYPE html>
<html>
    <head >
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href='{{ url("css\hw.css") }}' />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet">  
        <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet"> 
        <title>
            JustPlay
      </title>
 </head>
    <body  id='b_info' >
        <header>
            <div id='logo'>JustPlay</div>
            <nav>
            <div id='flex_nav'> 
                <a class='navig' href='{{ url("home") }}'>Home</a>
                <a class='navig' href='{{ url("signup") }}'>Registrati</a>
                <a class='navig' href='{{ url("login") }}'>Accedi</a>
                
                </div>
                
                <div id='m_mob'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div id='bg' class='hidden'></div>
            </nav>
            <div id='frase_comm'> <em>I giochi ad un prezzo da gaming</em>  </div>
      </header>
       
   <section class='show_main'> 
           <div class='main_login'>
                     @if(isset($old_username))
                        <span class='err_login'>Username e/o password errati</span>
                    @endif

                    <div id='f_login'>
                        <form  name='name_f' id='log' method='post'>
                            <input type='hidden' name='_token' value='{{ $csrf_token }}'>
                            <label class='login-signup' >Username <input type='text' name='username' value='{{ $old_username }}'></label>
                            <label class='login-signup'>Password <input type='password' name='password'></label>
                            <label>&nbsp;<input type='submit' value='Accedi'></label>
                            <a class='login-signup' href='{{ url("signup") }}'>Non hai un account? Registrati</a>
                        </form>
                    </div>
             </div>
    </section>
     <footer>
            <a href="">Servizi</a>
            <a href="">Contatti</a>
            <a href="">Privacy</a>
            <div id='abs_footer'>Web Developer: Luca Petruzzello O46002016</div>
        </footer>
 </body> 
</html>
