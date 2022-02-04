const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

function esPrimo(ejercicio1){
  console.log("((((EJERCICIO 1))))");

    for (let i = 0; i < ejercicio1.length; i++) {
      let valor= ejercicio1[i];
      if (valor % 2  === 1 ) {
        console.log(`${valor} es un numero primo`);
      }      
    }
};

esPrimo(ejercicio1);

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];
console.log("  ");

console.log("((((EJERCICIO 2))))");

function accesoFiesta(invitado){

  if (invitado.edad >= 18 && invitado.esFamiliar=== true) {
    console.log(`Hola ${invitado.nombre}, bienvenido a la fiesta.`);
  }
}

ejercicio2.forEach(element => {
  console.log(accesoFiesta(element));
});

console.log("  ");

console.log("((((EJERCICIO 3 - SERIE FIBONACCI))))");