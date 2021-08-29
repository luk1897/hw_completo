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
    image.src=event.currentTarget.src;
    console.log(event.currentTarget);
    modale.appendChild(image);
    document.body.classList.add('no-scroll');
}


function onJson(json){
    
    console.log(json);
    const c=document.querySelector('.main_flex');
    c.innerHTML='';

    if(json.length===0){
        const mex=document.createElement('span');
        mex.textContent='Collezione vuota!';
        mex.classList.add('ris_null');
        c.appendChild(mex);
    }

    for(r of json){
        const cont=document.createElement('div');
        cont.classList.add('carte');
        const img=document.createElement('img');
        const title=document.createElement('p');
        img.src=r.img;
        title.textContent=r.nome;
        img.classList.add('image');
        title.classList.add('nome');
        img.addEventListener('click', apriModale);
        cont.appendChild(img);
        cont.appendChild(title);
        c.appendChild(cont);

        
    }
}

function onResponse(response){
    return response.json();
}



function getC(event){

    const aux=document.querySelector('#aux');
    aux.classList.add('hidden');
    console.log('fetch partita');
    fetch("show_all_cards").then(onResponse).then(onJson);
}

getC();



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

