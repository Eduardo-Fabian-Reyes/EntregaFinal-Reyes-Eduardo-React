const productsStock =  [
    {  
        id: 1,
        producto: "Deftones S/T",
        categoria: "Vinilos",
        precio: "28.000",
        imagen: "/img/deftones-st-coloredvinyl.jpg",
        detalles: "Edicion Impresa de Vinilo en Rojo",
    },
    {  
        id: 2,
        producto: "Idles - Brutalism",
        categoria: "Vinilos",
        precio: "32.000",
        imagen: "/img/idles-brutalism.jpg",
        detalles: "Edicion Impresa de Vinilo Nueva",
    },
    {  
        id: 3,
        producto: "Turnstile - Glow On",
        categoria: "Vinilos",
        precio: "42.000",
        imagen: "/img/turnstile-glow.jpg",
        detalles: "Edicion Impresa de Vinilo Nueva",
    },
    {  
        id: 4,
        producto: "Title Fight - Floral Green",
        categoria: "Cds",
        precio: "18.000",
        imagen: "/img/title-fight.jpg",
        detalles: "Edicion Sellada Nueva",
    },
    {  
        id: 5,
        producto: "Drain - Living Proof",
        categoria: "Cds",
        precio: "20.000",
        imagen: "/img/drain.jpg",
        detalles: "Edicion Sellada Nueva",
    },
    {  
        id: 6,
        producto: "American Football S/T",
        categoria: "Cds",
        precio: "22.000",
        imagen: "/img/american.jpg",
        detalles: "Edicion Sellada Nueva",
    },
    {  
        id: 7,
        producto: "Ghost - 7' Inches of Satanic Panic",
        categoria: "Sale",
        precio: "18.000",
        sale: "25.000",
        imagen: "/img/ghost.jpg",
        detalles: "Edicion Impresa de Vinilo en Morado",
    },
    {  
        id: 8,
        producto: "The Strokes - Is This It?",
        categoria: "Sale",
        sale: "28.000",
        precio: "20.000",
        imagen: "/img/strokes.webp",
        detalles: "Edicion Impresa de Vinilo",
    },
    {  
        id: 9,
        producto: "Lebanon Hanover - Tomb For Two",
        categoria: "Sale",
        precio: "20.000",
        sale: "28.000",
        imagen: "/img/lebanonhanover.jpg",
        detalles: "Edicion Impresa de Vinilo",
    },
    {  
        id: 10,
        producto: "SADNESS IS REBELLION BAG",
        categoria: "Accesorios",
        precio: "8.000",
        imagen: "/img/lebanonhanover-shirt.jpg",
        detalles: "Estampado hecho en Serigrafia",
    },
    {  
        id: 11,
        producto: "Remera Deftones",
        categoria: "Accesorios",
        precio: "12.000",
        imagen: "/img/deftones-shirt.jpg",
        detalles: "Estampado hecho en Serigrafia",
        talla: ["S", "M", "L", "XL"],
    },
    {  
        id: 12,
        producto: "Remera Ghost",
        categoria: "Accesorios",
        precio: "12.000",
        imagen: "/img/ghost-shirt.jpg",
        detalles: "Remera hecho en Serigrafia",
        talla: ["S", "M", "L", "XL"],
    },
];

export const getProductsStock = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsStock);
        }, 500);
    });
};

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = productsStock.find((prod) => prod.id == id);
            resolve(product);
        }, 700);
    });
};

export { productsStock };
