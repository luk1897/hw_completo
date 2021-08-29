function onJson(json){
    console.log(json);

    const mf=document.querySelector('.main_flex');

    if(json.length===0){
        const mex=document.createElement('span');
        mex.textContent='Nessun risultato!';
        c.appendChild(mex);
    }

    for(let j of json){
        

        const blocco=document.createElement('div');
        blocco.classList.add('giochi');
        

        const img=document.createElement('img');
        const nome=document.createElement('p');
        const conteggio=document.createElement('p');
        const media=document.createElement('p');

        img.classList.add('image');
        nome.classList.add('nome');
        conteggio.classList.add('descrizione');
        media.classList.add('descrizione');

        img.src=j.immagine;
        nome.textContent=j.nome;
        conteggio.textContent='Numero di volte acquistato: ' + j.conteggio;
        media.textContent='Età media degli acquirenti: ' + j.media_età;

        blocco.appendChild(img);
        blocco.appendChild(nome);
        blocco.appendChild(conteggio);
        blocco.appendChild(media);

        mf.appendChild(blocco);
    }
}
function onResponse(response){

    return response.json();
}


function show_stats(){
    fetch("get_stats").then(onResponse).then(onJson);
}

show_stats();




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

