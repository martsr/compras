const submitBtn = document.querySelector('button');
const txtarea = document.querySelector('textarea');

submitBtn.addEventListener('click',()=>{
    let text = txtarea.value;
    if(text ==='') alert("Por favor ingrese texto antes de apretar SUBMIT");
    else{
        alert(`La Cantidad Total de Caracteres es: ${text.length}`);
    }
}, false);