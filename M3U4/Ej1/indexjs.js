const squareOne= document.getElementById('one');
const squareTwo= document.getElementById('two');
const squareThree= document.getElementById('three');
const resetBtn = document.querySelector('button');
const title = document.querySelector('h1');

squareOne.addEventListener('click',()=>{
 document.body.style.backgroundColor='lightblue';
 title.style.color='white';
},false);


squareTwo.addEventListener('click',()=>{
 document.body.style.backgroundColor= 'palevioletred';
 title.style.color='white';
},false);


squareThree.addEventListener('click',()=>{
 document.body.style.backgroundColor= 'lightgreen';
 title.style.color='white';
},false);


resetBtn.addEventListener('click',()=>{
 document.body.style.backgroundColor= '';
title.style.color='';
},false);
