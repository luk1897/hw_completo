function chiudiModale(event)
{
    const m=event.currentTarget;
    m.classList.add('hidden');
    m.innerHTML='';
    document.body.classList.remove('no-scroll');
}

const modale=document.querySelector('#modale');
modale.addEventListener('click', chiudiModale);

function apriModale(event)
{
    modale.classList.remove('hidden');
    const image=document.createElement('img');
    modale.style.top = window.pageYOffset + 'px';
    image.id='selected';
    image.src='https://www.gifanimate.com/data/media/1633/carrello-per-la-spesa-immagine-animata-0007.gif'; 
    console.log(event.currentTarget);
    modale.appendChild(image);
    document.body.classList.add('no-scroll');
}




let tot=0;

function onJson(json){
    console.log(json);

    const mc=document.querySelector('.main_cart');
    mc.innerHTML='';
    
    if(json.length===0){
        const mex=document.createElement('div');
        mex.textContent='Carrello vuoto! Aggiungi i giochi che vuoi acquistare.';
        mex.classList.add('ris_null');
        mc.appendChild(mex);
    }
    
    const pay=document.createElement('button');
    pay.textContent='Procedi al pagamento';
    pay.classList.add('pag');
    mc.appendChild(pay);


    pay.addEventListener('click',buy); // event per lo svuotamento del carrello

    for(let j of json){

        const blocco=document.createElement('div');
        blocco.classList.add('giochi');
        blocco.dataset.id=j.codice;
        mc.appendChild(blocco);

        const img=document.createElement('img');
        const nome=document.createElement('p');
        const prezzo=document.createElement('p');
        const butt_rim=document.createElement('img');

        img.classList.add('image');
        butt_rim.classList.add('b_rimozione');
        nome.classList.add('nome');
        prezzo.classList.add('prezzo'); 
        
        img.src=j.immagine;
        nome.textContent=j.nome;
        prezzo.textContent=j.prezzo;
        butt_rim.src='https://media.istockphoto.com/photos/red-x-picture-id621475462?k=6&m=621475462&s=170667a&w=0&h=bxVz2Gv-IyEsDb2W7h225UVCI1eX3xH0t89XUzsWqG0=';
        
        blocco.appendChild(butt_rim);
        blocco.appendChild(img);
        blocco.appendChild(nome);
        blocco.appendChild(prezzo);
        
        mc.appendChild(blocco);

        
        
        butt_rim.addEventListener('click',removeGames);
        tot=tot+j.prezzo;
        
    }
   
    
    p=document.createElement('p');
    p.classList.add('p_totale');
    p.textContent='Prezzo totale: '+tot+'$';
    mc.appendChild(p);

    if(json.length===0){
        pay.classList.add('hidden');
        p.classList.add('hidden');
    }

}



function onResponse(response){
    return response.json();
}



function showGames(){
    fetch('get_cart_games/').then(onResponse).then(onJson);
}

showGames();



function removeGames(event){

    const m=document.querySelector('.main_cart');

    const gioco=event.currentTarget.parentNode;
    const id=gioco.dataset.id;
    const prezzo=event.currentTarget.nextSibling.nextSibling.nextSibling.textContent;
    tot=tot-prezzo;
    
    fetch('delete_game/gioco/'+ id);
    console.log(gioco);
    m.removeChild(gioco);
    const p=document.querySelector('.p_totale');
    p.textContent='Prezzo totale: '+tot+'$';


    let game=document.querySelectorAll('.giochi');

    if(game.length===0){
        const mex=document.createElement('p');      
        const pay=document.querySelector('.pag'); 
        mex.textContent='Carrello vuoto! Aggiungi i giochi che vuoi acquistare.';
        mex.classList.add('ris_null');
        m.removeChild(p);
        m.removeChild(pay);
        m.appendChild(mex);
    }
}





function buy(event){
    apriModale(event);

    const main=document.querySelector('.main_cart'); 
    const mex=document.createElement('p');       
    mex.textContent='Carrello vuoto! Aggiungi i giochi che vuoi acquistare.';
    mex.classList.add('ris_null');
    main.appendChild(mex); // apparizione messaggio

    main.removeChild(event.currentTarget);

    let game=document.querySelectorAll('.giochi');  //sparizione giochi

    for(g of game){
        main.removeChild(g);
        console.log(g.dataset.id);
        fetch('delete_game/gioco/'+g.dataset.id);
        fetch('buy_game/gioco/'+g.dataset.id);
    }
    
    p_totale=document.querySelector('.p_totale');
    main.removeChild(p_totale);
    
    
}



/*MENU MOBILE*/



function dropMMobile(event)
{
    const bg=event.currentTarget;
    bg.classList.add("hidden");
    bg.innerHTML="";
}
document.querySelector("#bg").addEventListener("click", dropMMobile);




function showMMobile(){

    const bg=document.querySelector('#bg');
    bg.classList.remove('hidden');
    

    let lista=document.querySelectorAll('.navig');

    const flexLink=document.createElement('div');
    flexLink.id="main_link";
    flexLink.style.top=window.pageYOffset + "px";
    bg.appendChild(flexLink);

    for(ar of lista){
        console.log(ar.textContent);
        console.log(ar.href);
        

        const link=document.createElement("a");

        link.textContent=ar.textContent;
        link.href=ar.href;

        link.classList.add('mobile-link')

        flexLink.appendChild(link);
    }
}



const m=document.querySelector('#m_mob');
console.log(m);
m.addEventListener('click',showMMobile);


