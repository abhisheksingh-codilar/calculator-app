 const rand = () => {
    var l=document.querySelector('.ran').value;
    if(l==1){
        document.querySelector('.container').style.backgroundColor='hsl(222, 26%, 31%)';
        document.body.style.backgroundColor='hsl(222, 26%, 31%)';
        document.querySelector('.heading').style.color="white";

        document.querySelector('#output-screen').style.backgroundColor=' hsl(224, 36%, 15%)';
        document.querySelector('#output-screen').style.color='white';
        document.querySelector('#output-screen').style.border='1px solid hsl(224, 36%, 15%)';
        document.querySelector('.table').style.backgroundColor='hsl(223, 31%, 20%)';

        var x=document.getElementsByClassName('btn');
        var i;
         for ( i = 0; i < x.length; i++) {
             x[i].style.backgroundColor = "hsl(30, 25%, 89%)";
             x[i].style.color = "hsl(221, 14%, 31%)";
             
             x[i].style.border='1px solid hsl(30, 25%, 89%)';
             x[i].style.boxShadow='0px 3px 1px 0px hsl(28, 16%, 65%)';
           }

        document.querySelector('#delt').style.backgroundColor='hsl(225, 21%, 49%)';
        document.querySelector('#delt').style.border='1px solid hsl(225, 21%, 49%)';
        document.querySelector('#delt').style.boxShadow='0px 3px 1px 0px  hsl(225, 21%, 49%)';

        document.querySelector('.reset').style.backgroundColor='hsl(225, 21%, 49%)';
        document.querySelector('.reset').style.border='1px solid hsl(225, 21%, 49%)';
        document.querySelector('.reset').style.boxShadow='0px 3px 1px 0px  hsl(225, 21%, 49%)';

        document.querySelector('.equals').style.backgroundColor='hsl(6, 63%, 50%)';
        document.querySelector('.equals').style.border='1px solid hsl(6, 63%, 50%)';
        document.querySelector('.equals').style.boxShadow='0px 3px 1px 0px hsl(6, 63%, 50%)';


    }
    if(l==2){
        document.querySelector('.container').style.backgroundColor='hsl(0, 0%, 90%)';
        document.body.style.backgroundColor=' hsl(0, 0%, 90%)';
        document.querySelector('.heading').style.color="black";
        document.querySelector('#output-screen').style.backgroundColor='hsl(0, 0%, 94%)';
        document.querySelector('#output-screen').style.color='black';
        document.querySelector('#output-screen').style.border='1px solid hsl(0, 0%, 94%)';
        document.querySelector('.table').style.backgroundColor='hsl(0, 5%, 81%)';

        var x=document.getElementsByClassName('btn');
        var i;
         for ( i = 0; i < x.length; i++) {
             x[i].style.backgroundColor = "hsl(30, 25%, 89%)";
             x[i].style.color = "hsl(221, 14%, 31%)";
             
             x[i].style.border='1px solid hsl(30, 25%, 89%)';
             x[i].style.boxShadow='0px 3px 1px 0px hsl(28, 16%, 65%)';
           }

        document.querySelector('#delt').style.backgroundColor='hsl(185, 42%, 37%)';
        document.querySelector('#delt').style.border='1px solid hsl(185, 42%, 37%)';
        document.querySelector('#delt').style.boxShadow='0px 3px 1px 0px  hsl(185, 58%, 25%)';

        document.querySelector('.reset').style.backgroundColor='hsl(185, 42%, 37%)';
        document.querySelector('.reset').style.border='1px solid hsl(185, 42%, 37%)';
        document.querySelector('.reset').style.boxShadow='0px 3px 1px 0px  hsl(185, 58%, 25%)';

        document.querySelector('.equals').style.backgroundColor='hsl(25, 98%, 40%)';
        document.querySelector('.equals').style.border='1px solid hsl(25, 98%, 40%)';
        document.querySelector('.equals').style.boxShadow='0px 3px 1px 0px hsl(35, 11%, 61%)';
    }
    if(l==3){
        document.querySelector('.container').style.backgroundColor='hsl(268, 75%, 9%)';

        document.body.style.backgroundColor=' hsl(268, 75%, 9%)';
        document.querySelector('.heading').style.color="hsl(52, 100%, 62%)";
        document.querySelector('#output-screen').style.backgroundColor='hsl(268, 71%, 12%)';
        document.querySelector('#output-screen').style.color='hsl(52, 100%, 62%)';
        document.querySelector('#output-screen').style.border='1px solid hsl(268, 71%, 12%)';
        document.querySelector('.table').style.backgroundColor='hsl(268, 71%, 12%)';


             
        var x=document.getElementsByClassName('btn');
       var i;
        for ( i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "hsl(268, 47%, 21%)";
            x[i].style.color = "hsl(52, 100%, 62%)";
            
            x[i].style.border='1px solid hsl(268, 47%, 21%)';
            x[i].style.boxShadow='0px 3px 1px 0px hsl(290, 70%, 36%';
          }
 

        document.querySelector('#delt').style.backgroundColor='hsl(281, 89%, 26%)';
        document.querySelector('#delt').style.border='1px solid hsl(281, 89%, 26%)';
        document.querySelector('#delt').style.boxShadow='0px 3px 1px 0px  hsl(285, 91%, 52%)';

        document.querySelector('.reset').style.backgroundColor='hsl(281, 89%, 26%)';
        document.querySelector('.reset').style.border='1px solid hsl(281, 89%, 26%)';
        document.querySelector('.reset').style.boxShadow='0px 3px 1px 0px   hsl(285, 91%, 52%)';

        document.querySelector('.equals').style.backgroundColor='hsl(176, 100%, 44%)';
        document.querySelector('.equals').style.border='1px solid hsl(176, 100%, 44%)';
        document.querySelector('.equals').style.boxShadow='0px 3px 1px 0px hsl(177, 92%, 70%)';
    }
}

let outputScreen = document.querySelector('#output-screen');

function display(num){
    outputScreen.value+=num;
}

function reset(){
    outputScreen.value="";
}
 
function calculate(){
    try{

        outputScreen.value=eval(outputScreen.value);

    }
    catch(err){
        alert("Invalid");
    }
}

function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}




