const tabla= document.querySelector('table');
var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];

 const aprobados = alumnos.filter(alumno =>alumno.nota>=7);
 aprobados.forEach(alumno => {
    let row = tabla.insertRow();
    let cell= row.insertCell();
    let text = document.createTextNode(`${alumno.nombre}`)
    cell.appendChild(text);
     cell= row.insertCell();
     text = document.createTextNode(` ${alumno.nota}`)
    cell.appendChild(text);

    
    
 });