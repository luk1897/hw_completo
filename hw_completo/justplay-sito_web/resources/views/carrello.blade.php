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
        <script src='{{ url("js\carrello.js") }}' defer='true'></script>
        <title>
            JustPlay
      </title>
 </head>
    <body  id='b_info' >
        <header>
            <div id='logo'>JustPlay</div>
            
                <nav>
                <div id='flex_nav'> 
                <a class='navig' href='{{ url("home_account") }}'>Home</a>
                <a class='navig' href='{{ url("comics") }}'>Comics</a>
                <a class='navig' href='{{ url("magic") }}'>Magic</a>
                <a class='navig' href='{{ url("stats") }}'>Stats</a>
                <a class='navig' href='{{ url("carrello") }}'>Carrello</a>
                <a class='navig' href='{{ url("cardMagic") }}'>Carte</a>
                <a class='navig' href='{{ url("logout") }}'>Logout</a>
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
         
           <div class='main_cart'></div>   
           <div id="modale" class="hidden"></div>            
     </section>
     <footer>
            <a href="">Servizi</a>
            <a href="">Contatti</a>
            <a href="">Privacy</a>
            <div id='abs_footer'>Web Developer: Luca Petruzzello O46002016</div>
        </footer>
 </body>
</html>