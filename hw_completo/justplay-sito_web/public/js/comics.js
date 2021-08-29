

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
    const game=document.createElement('img');
    modale.style.top = window.pageYOffset + 'px';
    game.id='selected';
    game.src=event.currentTarget.src;
    console.log(event.currentTarget);
    modale.appendChild(game);
    document.body.classList.add('no-scroll');
}


function onJson(json){

    
    console.log(json);
    const c=document.querySelector('.main_flex');
    console.log(c);
    c.innerHTML='';

    if(json.length===0){
        const mex=document.createElement('span');
        mex.textContent='Nessun risultato!';
        mex.classList.add('ris_null_comics');
        c.appendChild(mex);
    }
    
    for(let r of json ){
        
        
        const cont=document.createElement('div');
        cont.classList.add('fumetti');
        const img=document.createElement('img');
        const title=document.createElement('p');
        img.src=r.img;
        title.textContent=r.title;
        title.classList.add('nome_fumetti');
        img.addEventListener('click', apriModale);
        cont.appendChild(img);
        cont.appendChild(title);
       
        c.appendChild(cont);
    }

}


function onResponse(response){
    console.log('resp_comics');
    console.log(response);
    return response.json();
}



function search(event){

    event.preventDefault();
    const aux=document.querySelector('#aux');
    aux.classList.add('hidden');

    const cont=document.querySelector('#comics').value;
    const t=encodeURIComponent(cont);
    console.log(t);
    
    fetch("get_comics/title/"+t).then(onResponse).then(onJson);
}


const form_c=document.querySelector('#form');
form_c.addEventListener('submit',search);


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

