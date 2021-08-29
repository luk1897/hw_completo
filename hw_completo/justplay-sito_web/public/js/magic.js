function onJson(json){
    
    console.log(json);
    const c=document.querySelector('.main_flex_cards_tre');
    c.innerHTML='';

    if(json.length===0){
        const mex=document.createElement('span');
        mex.textContent='Nessun risultato!';
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
        cont.appendChild(img);
        cont.appendChild(title);
        c.appendChild(cont);

        cont.addEventListener('click',addCards);
    }
}

function onResponse(response){
    return response.json();
}



function search(event){

    const aux=document.querySelector('#aux');
    aux.classList.add('hidden');

    fetch("get_magic").then(onResponse).then(onJson);
}




const button=document.querySelector('#magic_b');
button.addEventListener('click',search);




function addCards(event){
    
    let img=event.currentTarget.firstChild.src; 
    let nome=event.currentTarget.firstChild.nextSibling.textContent;

    const main=document.querySelector('.main_flex_cards_tre');
    console.log(main);
    let cards=document.querySelectorAll('.carte');
    
    for(c of cards){
        main.removeChild(c);
    }
    

    let mex=document.createElement('p');
    mex.textContent='Carta scelta e inserita nella tua collezione!';
    mex.classList.add('mex_carta');
    main.appendChild(mex);
    
    fetch("add_card/name/"+nome+"/image/"+window.btoa(encodeURIComponent(img)));
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

