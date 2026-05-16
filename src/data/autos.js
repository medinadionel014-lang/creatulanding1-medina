export const autos = [
  {
    id: 1,
    nombre: "Toyota Corolla",
    categoria: "sedan",
    precio: 20000,
    stock: 5,
    img: "/creatulanding1-medina/img/corolla.jpg",
    descripcion: "Sedán confiable y económico"
  },
  {
    id: 2,
    nombre: "Ford Ranger",
    categoria: "pickup",
    precio: 35000,
    stock: 3,
    img: "/creatulanding1-medina/img/ranger.jpg",
    descripcion: "Potencia y versatilidad"
  },
  {
    id: 3,
    nombre: "Honda Civic",
    categoria: "sedan",
    precio: 25000,
    stock: 8,
    img: "/creatulanding1-medina/img/civic.jpg",
    descripcion: "Diseño moderno"
  }
];

export const getAutos = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(autos), 800)
  );

export const getAutoById = (id) =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(
        autos.find(a => a.id === Number(id))
      ),
      800
    )
  );