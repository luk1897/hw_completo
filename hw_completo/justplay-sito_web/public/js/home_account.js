

function onResponse(response){
    console.log('ok2');
    return response.json();
}

const butt="https://thumbs.dreamstime.com/b/icona-del-carrello-di-acquisto-simbolo-online-segno-negozio-con-il-121639362.jpg";
const det_text='Dettagli';



function onJson(json){

    console.log(json);

    const mf=document.querySelector('.main_flex');
    mf.innerHTML='';

    for(let r of json){
        console.log('hello');
        

        const blocco=document.createElement('div');
        blocco.classList.add('giochi');
        blocco.dataset.id=r.codice;
        mf.appendChild(blocco);
        

        const img=document.createElement('img');
        const paragrafo=document.createElement('p');
        const det=document.createElement('p');
        const bot=document.createElement('img');
        const nome=document.createElement('p');
        const prezzo=document.createElement('p');
    
        img.classList.add('image');
        det.classList.add('dettagli');
        paragrafo.classList.add('hidden');
        paragrafo.classList.add('descrizione');
        bot.classList.add('bottone');
        nome.classList.add('nome');
        prezzo.classList.add('prezzo')
        


        img.src=r.immagine;
        det.textContent=det_text;
        paragrafo.textContent=r.descrizione;
        bot.src=butt;
        nome.textContent=r.nome;
        prezzo.textContent=r.prezzo+'$';
        
        blocco.appendChild(bot);
        blocco.appendChild(img);
        blocco.appendChild(nome);
        blocco.appendChild(paragrafo);
        blocco.appendChild(prezzo)
        blocco.appendChild(det);

        

        bot.addEventListener('click',addCart);
        
        
    }

    function removeDesc(event){
        event.currentTarget.textContent='Dettagli';
        let d=event.currentTarget.parentNode.querySelector('.descrizione');
        d.classList.add('hidden');


        event.currentTarget.removeEventListener('click',removeDesc);
        event.currentTarget.addEventListener('click',addDesc);
    }

    function addDesc(event){
        
        event.currentTarget.textContent='Meno Dettagli';
        let d=event.currentTarget.parentNode.querySelector('.descrizione');
        d.classList.remove('hidden');

        event.currentTarget.addEventListener('click',removeDesc);
        event.currentTarget.removeEventListener('click',addDesc);
    }



    const dt=document.querySelectorAll('.dettagli');
    for(let d of dt){
        d.addEventListener('click', addDesc);
    }


    function ricerca(event){
        let ric=event.currentTarget;
        console.log(ric);
        let r=ric.value.toUpperCase();
        console.log(r);
        const lista_giochi=document.querySelectorAll('.nome');
        console.log(lista_giochi);
        for(let lg of lista_giochi){
            if(lg.textContent.toUpperCase().indexOf(r)!=-1){
                lg.parentNode.style.display='';
             }
             else{
                 lg.parentNode.style.display='none';
             }
        }
     
     }
     
     const input=document.querySelector('#search');
     input.addEventListener('keyup',ricerca);
    
}
    
 
//funzione carrello
//let array=[];

function addCart(event){

    const b=event.currentTarget;
    console.log(b);
    const gioco=event.currentTarget.parentNode;
    const id=gioco.dataset.id;

    b.classList.add('bottone_mini');
    b.classList.remove('bottone_mini');

    //array.push(id);
    fetch('get_carrello/gioco/'+id);
      

}

function show_games(){ //prima era sopra
    fetch('get_games_account').then(onResponse).then(onJson);
}
    
show_games();


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
