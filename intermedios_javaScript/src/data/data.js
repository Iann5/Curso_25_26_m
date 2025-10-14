export const productos = 
[
    {
        id: 1,
        nombre: "laptop",
        precio: 1000,
        fabricante: {
            nombre: "HP",
            pais: "USA",
            contacto: {
                email: "info@hp.com",
                telefono: "+82-2-1234-5678"
            },
        },
        especificaciones: {
            ram: "16GB",
            cpu: "Intel i7"
        }
    },
    {
        id: 2,
        nombre: "smartphone",
        precio: 800,
        fabricante: {
            nombre: "Samsung",
            pais: "Corea del Sur",
            contacto: {
                email: "support@samsung.com",
                telefono: "+82-2-8765-4321"
            },
        },
        especificaciones: {
            ram: "12GB",
            cpu: "Snapdragon 8 Gen 2"
        }
    },
    {
        id: 3,
        nombre: "tablet",
        precio: 600,
        fabricante: {
            nombre: "Apple",
            pais: "USA",
            contacto: {
                email: "contact@apple.com",
                telefono: "+1-408-996-1010"
            },
        },
        especificaciones: {
            ram: "6GB",
            cpu: "Apple M2"
        }
    },
    {
        id: 4,
        nombre: "monitor",
        precio: 300,
        fabricante: {
            nombre: "LG",
            pais: "Corea del Sur",
            contacto: {
                email: "info@lg.com",
                telefono: "+82-2-3456-7890"
            },
        },
        especificaciones: {
            resolucion: "4K",
            tamaño: "27 pulgadas"
        }
    }
]