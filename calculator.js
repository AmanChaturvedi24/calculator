let btn = (document.querySelectorAll('span'));
console.log("i m in")
let button = document.querySelector('.buttons');
let value = document.getElementById('value');

for(let i=0; i<btn.length; i++)
{

    btn[i].addEventListener("click",function(){

        if(this.innerHTML=="="){
        value.innerHTML = eval(value.innerHTML);
        console.log("done =");

       }
       else if(this.innerHTML=="Clear"){
           value.innerHTML = ""; 
           console.log("done clear");
        }
        else{
            value.innerHTML += this.innerHTML;
        }
       
    })
}