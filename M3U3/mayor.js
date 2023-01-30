let arr=[], 
min =0;
for(i=0;i< Math.floor(Math.random()*100);i++)
{
    arr.push(Math.floor(Math.random()*100));
}
min =arr[0];
for(i=0;i<arr.length;i++){
    if(arr[i]<min)
        min= arr[i];
}
alert(`El menor valor del arreglo: ${arr} es ${min}`);