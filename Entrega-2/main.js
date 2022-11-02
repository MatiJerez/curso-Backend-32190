const fs = require("fs");

class Contenedor {
  constructor(filename) {
    this.filename = filename;
  }

  save = async (obj) => {
    const objs = await this.getAll();
    try {
      let newId;
      objs.length === 0 ? (newId = 1) : (newId = objs[objs.length - 1].id + 1);
      const newObj = { ...obj, id: newId };
      objs.push(newObj);
      await this.writeFile(objs);
      return newObj.id;
    } catch (error) {
      console.log(error);
    }
  };

  getById = async (id) => {
    const objs = await this.getAll();
    try {
      const obj = objs.find((obj) => obj.id === id);
      return obj ? obj : null;
    } catch (error) {
      console.log(error.message);
    }
  };

  getAll = async () => {
    try {
      const objs = await fs.promises.readFile(this.filename, "utf-8");
      return JSON.parse(objs);
    } catch (error) {
      if (error.message.includes("no such file or directory")) return [];
      else console.log(error.message);
    }
  };

  deleteById = async (id) => {
    let objs = await this.getAll();
    try {
      objs = objs.filter((obj) => obj.id != id);
      await this.writeFile(objs);
    } catch (error) {
      console.log(error.message);
    }
  };

  deleteAll = async () => await this.writeFile([]);

  writeFile = async (data) => {
    try {
      await fs.promises.writeFile(this.filename, JSON.stringify(data, null, 2));
    } catch (error) {
      console.log(error.message);
    }
  };
}

// instancio un objeto de la clase Contenedor
const contenedor = new Contenedor("productos.txt");

// // Prueba de save
const producto = {
  title: "Escuadra",
  price: 123.45,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
};
const producto2 = {
  title: "Calculadora",
  price: 234.56,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
};
const producto3 = {
  title: "Globo Terráqueo",
  price: 345.67,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
};

const pruebaSave = async () => {
  const id = await contenedor.save(producto);
  console.log(id);
  const id2 = await contenedor.save(producto2);
  console.log(id2);
  const id3 = await contenedor.save(producto3);
  console.log(id3);
};
pruebaSave();

// Prueba de getById

const pruebaGetById = async () => {
  const objeto = await contenedor.getById(1);
  console.log(objeto);
};
pruebaGetById();

// Prueba de getAll

const pruebaGetAll = async () => {
  const array = await contenedor.getAll();
  console.log(array);
};
pruebaGetAll();

// Prueba de deleteById

const pruebaDeleteById = async () => {
  const objeto = await contenedor.deleteById(3);
  console.log(objeto);
};
pruebaDeleteById();

// Prueba de deleteAll

const pruebaDeleteAll = async () => {
  await contenedor.deleteAll();
};
pruebaDeleteAll();
