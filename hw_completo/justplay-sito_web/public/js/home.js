function games(){
    fetch('get_games/').then(onResponse).then(onJson);
}

games();

function onResponse(response){
    return response.json();
}




const det_text='Dettagli';


function onJson(json){

    console.log(json);
    const mf=document.querySelector('.main_flex');
    mf.innerHTML='';

    for(let r of json){
        console.log('hello');

        
        const blocco=document.createElement('div');
        blocco.classList.add('giochi');
        mf.appendChild(blocco);
    

        const img=document.createElement('img');
        const paragrafo=document.createElement('p');
        const det=document.createElement('p');
        const nome=document.createElement('p');
    
    
        img.classList.add('image');
        det.classList.add('dettagli');
        paragrafo.classList.add('hidden');
        paragrafo.classList.add('descrizione');
        nome.classList.add('nome');
       


        img.src=r.immagine;
        det.textContent=det_text;
        paragrafo.textContent=r.descrizione;
        nome.textContent=r.nome;

        
        blocco.appendChild(img);
        blocco.appendChild(nome);
        blocco.appendChild(paragrafo);
        blocco.appendChild(det);
    }


    function removeDesc(event){
        event.currentTarget.textContent='Dettagli';
        let d=event.currentTarget.parentNode.querySelector('.descrizione');
        d.classList.add('hidden');


        event.currentTarget.removeEventListener('click',removeDesc);
        event.currentTarget.addEventListener('click',addDesc);
    }

    function addDesc(event){
        console.log('helloDESC');
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
        let r=ric.value.toUpperCase();
        const lista_giochi=document.querySelectorAll('.nome');
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

