function onJson(json){
  const i=document.querySelector('#username');
  console.log(i);
  if(json.exists===true){
   i.classList.add('errore');
   i.classList.remove('ok');
   document.querySelector('#err_u').classList.remove('hidden'); 
   
  }
  else{
   i.classList.remove('errore');
   i.classList.add('ok');
   document.querySelector('#err_u').classList.add('hidden');
  }
}

function onResponse(response){
  return response.json();
}



function fetchUsername(event){
  
    const i=event.currentTarget;
    console.log(i.value.length);
    avv=event.currentTarget.parentNode.nextSibling.nextSibling.nextSibling.nextSibling;
    console.log(avv);
    if(i.value.length>0){
      fetch("justplay-sito_web/signup/username/"+encodeURIComponent(i.value)).then(onResponse).then(onJson);
      i.classList.remove("errore");
      i.classList.add("ok");
      avv.classList.add('hidden');
    }  
    else{
        
      i.classList.remove("ok");
      i.classList.add("errore");
      avv.classList.remove('hidden');
    }
}

const username= document.querySelector('#username');
username.addEventListener('blur',fetchUsername);



function checkLength(event){

  const input = event.currentTarget;
  //console.log(input);
  const avv=event.currentTarget.parentNode.nextSibling.nextSibling;
  //console.log(avv);
 

  if(input.value.length>0)
  {
    input.classList.remove("errore");
    input.classList.add("ok");
    avv.classList.add('hidden'); 
  }
  else
  {
    input.classList.remove("ok");
    input.classList.add("errore");
    avv.classList.remove('hidden');
  }
}

function CheckData(event){
  
  const i=event.currentTarget;
  const data=event.currentTarget.value;
  const formato = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
   
  const err=document.querySelector('#err_data');
  console.log(err);

  const a=parseInt(data.substr(0, 4),10);
  const m=parseInt(data.substr(5, 2),10);
  const g=parseInt(data.substr(8,2),10);
  
  console.log(g);

  if(data.length > 0 && formato.test(data) && a<2022 && m<13 && 0<m && g<31 && 0<g){
    i.classList.remove('errore');
    i.classList.add('ok');
    err.classList.add('hidden');
  }
  else{
    i.classList.remove('ok');
    i.classList.add('errore');
    err.classList.remove('hidden');
  }

}

function checkEmail(event){

  const i=event.currentTarget;
  const email=i.value;
  const c=/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const err=document.querySelector('#err_email');

  if(c.test(email) && email.length > 0){
    i.classList.remove('errore');
    i.classList.add('ok');
    err.classList.add('hidden');
  }
  else{
    i.classList.remove('ok');
    i.classList.add('errore');
    err.classList.remove('hidden');
  }
}


const nome = document.querySelector('#nome');
const cognome = document.querySelector('#cognome');
const data_nascita = document.querySelector('#data_nascita');
const email = document.querySelector('#email');
nome.addEventListener('blur', checkLength);
cognome.addEventListener('blur', checkLength);
data_nascita.addEventListener('blur',CheckData);
email.addEventListener('blur', checkEmail);







function password(event){
    const inp=event.currentTarget;
    const pass=event.currentTarget.value;

    if(/[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass))
  {
    inp.classList.remove('errore');
    inp.classList.add('ok');
    document.querySelector('#err_p').classList.add('hidden');
  }
  else{
    inp.classList.remove('ok');
    inp.classList.add("errore");
    document.querySelector('#err_p').classList.remove('hidden');
  }
}

const password_input = document.querySelector('#password');
password_input.addEventListener('blur', password);



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

