class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = [];
        this.librosNombre = [];
        this.librosAutor = [];
    }
    
getFullName(){
    console.log(`Tu nombre es ${this.nombre} y tu apellido ${this.apellido}`)
}
addMascota(nombreMascota){
    this.mascotas.push(nombreMascota);
}
countMascotas(){
    console.log(`Tenes ${this.mascotas.length} mascotas!`);
}
addBook(nombre, autor){
    this.librosNombre.push(nombre);
    this.librosAutor.push(autor);
}
getBookNames(){
    console.log(`El/Los nombres de tus libros son : ${this.librosNombre}`);
}
}


const marcio = new Usuario("Marcio", "Dubokovic");


marcio.getFullName();
marcio.addMascota('Tiger');
marcio.addMascota('Ambar');

marcio.addBook('El Señor de los Anillos', 'Talkien');
marcio.addBook('Pennywise', 'Stephen King');

marcio.countMascotas();
marcio.getBookNames();
