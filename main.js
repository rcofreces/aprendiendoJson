let libro1 = {
    "nombrelibro1": "El hacedor",
    "precio": 500
};

console.log(libro1);
console.log(JSON.stringify(libro1));

let libro2 = `{
    "nombrelibro2": "El maquinon",
    "precio": 700
}`;

console.log(JSON.parse(libro2));

fetch(`http://127.0.0.1:5500/libros.json`).then((response) => response.json()).then((data) => console.log(data));

fetch(`http://127.0.0.1:5500/libros.json`)
.then((response) => response.json())
.then((libros) => {
    const nombresDeLibros = libros.map((libro) => libro.nombrelibro)
    console.log(nombresDeLibros)
});

fetch(`http://127.0.0.1:5500/libros.json`)
.then((response) => response.json())
.then((libros) => {
    const preciosDeLibros = libros.map((libro) => libro.precio)
    console.log(preciosDeLibros)
});