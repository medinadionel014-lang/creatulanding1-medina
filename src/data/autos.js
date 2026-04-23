export const autos = [
  {
    id: 1,
    nombre: "Toyota Corolla",
    categoria: "sedan",
    precio: 20000,
    img: "https://via.placeholder.com/300",
    descripcion: "Sedán confiable y económico"
  },
  {
    id: 2,
    nombre: "Ford Ranger",
    categoria: "pickup",
    precio: 35000,
    img: "https://via.placeholder.com/300",
    descripcion: "Potencia y versatilidad para trabajo y ruta"
  },
  {
    id: 3,
    nombre: "Honda Civic",
    categoria: "sedan",
    precio: 25000,
    img: "https://via.placeholder.com/300",
    descripcion: "Diseño moderno y excelente rendimiento"
  }
];

export const getAutos = () =>
  new Promise(resolve => setTimeout(() => resolve(autos), 800));

export const getAutoById = (id) =>
  new Promise(resolve =>
    setTimeout(() => resolve(autos.find(a => a.id === Number(id))), 800)
  );