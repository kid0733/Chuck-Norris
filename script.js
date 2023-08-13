//Setting All elements into var

const btn=document.getElementById('btn');
const text=document.getElementById('text');

function getJoke(){
//Retriving data from API
    const xmr=new XMLHttpRequest();
    xmr.open('GET','https://api.chucknorris.io/jokes/random');
//function for getting data and setting into DOM
    xmr.onreadystatechange=function getJoke(){

        if(this.readyState===4 && this.status===200){
            const data =JSON.parse(this.responseText);
            console.log(data.value);
            text.innerHTML=`${data.value}`;
            text.style.fontSize='18px';
        }

    }
    xmr.send();
}
btn.addEventListener('click',getJoke)