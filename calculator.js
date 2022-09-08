console.log("i m in")
let btn = (document.querySelectorAll('span'));
let button = document.querySelector('.buttons');
let value = document.getElementById('value');
let theme =document.querySelector('.theme');
let body =document.querySelector('body');
for(let i=0; i<btn.length; i++)
{

    btn[i].addEventListener("click",function(){
        

        if(this.innerHTML=="="){
        value.innerHTML = eval(value.innerHTML);
        console.log("done =");

       }
       else if(this.innerHTML=="Clear"){
           value.innerHTML = ""; 
           navigator.vibrate(200);
           console.log("done clear");
        }
        else{
            value.innerHTML += this.innerHTML;
        }
       
    })
}
theme.onclick =function(){
    body.classList.toggle('dark');
}