// Clase 2 - Principios básicos de Javascript
//  Declarar una clase Usuario con constructor que reciba nombre, apellido y libros y mascotas.
class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  //  Agregar un método getFullName que retorne el nombre y apellido del usuario separados por un espacio.
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  //  Agregar un método addMascota que acepte un nombre y lo agregue al arreglo de mascotas del usuario.
  addMascota(nombre) {
    this.mascotas.push(nombre);
  }
  //  Agregar un método countMascotas que retorne la cantidad de mascotas que tiene el usuario.
  countMascotas() {
    return this.mascotas.length;
  }
  //  Agregar un método addBook que reciba un nombre, un autor  Debe agregar un objeto: {nombre, autor} al arreglo de libros del usuario.
  addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
  }
  //  Agregar un método getBookNames que retorne un arreglo con sólo los nombres del arreglo de libros del usuario.
  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}
//  Crear una instancia de Usuario
const usuario = new Usuario();
//  Agregar nombre, apellido y libros a la instancia
usuario.nombre = "Matias";
usuario.apellido = "Jerez";
usuario.libros = [
  { nombre: "El principito", autor: "Antoine de Saint-Exupéry" },
  { nombre: "El alquimista", autor: "Paulo Coelho" }, //este lo estoy leyendo ahora xd
];
//  Agregar mascotas a la instancia
usuario.mascotas = ["Perro", "Gato", "Pez"];
//  Probar los métodos
console.log(usuario.getFullName());
console.log(usuario.countMascotas());
console.log(usuario.getBookNames());
usuario.addMascota("Pájaro");
console.log(usuario.countMascotas());
usuario.addBook({ nombre: "El señor de los anillos", autor: "J.R.R. Tolkien" });
console.log(usuario.getBookNames());
function hacerTarea(num, cb) {
  console.log('haciendo tarea ' + num)
  setTimeout(cb,100)
}

console.log('inicio de tareas');
hacerTarea(1, () => {
  hacerTarea(2, () => {
      hacerTarea(3, () => {
          hacerTarea(4, () => {
              console.log('fin de tareas')
          })
      })
  })
})
console.log('otras tareas ...')
