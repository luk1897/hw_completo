<!DOCTYPE html>
<html>
    <head >
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href='{{ url("css\hw.css") }}'/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet">  
        <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet"> 
        <script src='{{ url("js\signup.js") }}' defer></script>
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
                    <form  name='name_f' id='sign' method='post'>
                        <input type='hidden' name='_token' value='{{ csrf_token() }}'>
                        <label class='login-signup'>Nome <input type='text' id='nome' name='nome'></label>
                        <p class='err_campo hidden' >Riempi il campo</p>

                        <label class='login-signup'>Cognome <input type='text' id='cognome' name='cognome'></label>
                        <p class='err_campo hidden' >Riempi il campo</p>

                        <label class='login-signup'>Data di nascita &nbsp;<input type='text' placeholder='aaaa-mm-gg' id='data_nascita' name='data_nascita'></label>
                        <p id='err_data' class='hidden'>Formato data non corretto</p>

                        <label class='login-signup'>Email <input type='text' id='email' name='email'></label>
                        <p id='err_email' class='hidden' >Campo vuoto o email non valida</p>

                        <label class='login-signup'>Username <input type='text' id='username' name='username'></label>
                        <p id='err_u' class='hidden'>Username già utilizzato</p>
                        <p class='err_campo hidden' >Riempi il campo</p>

                        <label class='login-signup'>Password <input type='password' id='password' name='password'></label>
                        
                        <p id='err_p' class='hidden'>La password deve essere lunga almeno 5 caratteri, <br> contenere almeno un carattere minuscolo, <br> almeno un carattere maiuscolo <br> e almeno un numero</p>
                        
                        <label>&nbsp;<input type='submit' value='Registrati'></label>
                        <a class='login-signup' href='{{ url("login") }}'>Hai già un account? Accedi</a>
                    </form>
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
