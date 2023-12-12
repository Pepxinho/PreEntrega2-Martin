import grafica1 from "./assets/img/Asus-ROG-Strix.jpg";
import grafica2 from "./assets/img/Gigabyte-OC-3060.jpg";
import grafica3 from "./assets/img/Radeon-RX7900XT.jpg";
import motherboard1 from "./assets/img/Z790-AORUS-S1700.jpg";
import motherboard2 from "./assets/img/Asrock-X670e-AM5.jpg";
import procesador1 from "./assets/img/Ryzen7-5800X.jpg";
import procesador2 from "./assets/img/Ryzen9-7950X3D.jpg";
import procesador3 from "./assets/img/i7-13700KF.jpg";
import procesador4 from "./assets/img/i9-13900KF.jpg";
import procesador5 from "./assets/img/i9-14900K.webp";
import memoria1 from "./assets/img/Kingston-Renegade.jpg";
import memoria2 from "./assets/img/Kingston-Beast.jpg";
import almacenamiento1 from "./assets/img/Seagate-sata3.webp";
import almacenamiento2 from "./assets/img/Kingston-KC3000.webp";
import almacenamiento3 from "./assets/img/Kingston-NV2.jpg";


const products = [
    {
        id: '1',
        name: 'Asus ROG Strix RTX 4070 12Gb',
        price: 1140,
        category: 'Tarjetas_graficas',
        img: grafica1,
        stock: 22,
        description: 'Disfruta del más poderoso entorno de gaming con tú RTX 4070 Strix.'
    },

    {
        id: '2',
        name: 'Gigabyte RTX 3060 OC 8Gb',
        price: 411,
        category: 'Tarjetas_graficas',
        img: grafica2,
        stock: 8,
        description: 'Disfruta del más poderoso entorno de gaming con tú RTX 3060 OC.'
    },

    {
        id: '3',
        name: 'Gigabyte Radeon RX7900XT 20Gb',
        price: 1545,
        category: 'Tarjetas_graficas',
        img: grafica3,
        stock: 11,
        description: 'Disfruta del más poderoso entorno de gaming con tú RX7900XT OC.'
    },

    {
        id: '4',
        name: 'Gigabyte z790 AORUS MASTER S1700',
        price: 898,
        category: 'Motherboards',
        img: motherboard1,
        stock: 3,
        description: 'Acompaña tus componentes con la excelente z790 AORUS MASTER.'
    },

    {
        id: '5',
        name: 'Asrock X670e Taichi M5',
        price: 850,
        category: 'Motherboards',
        img: motherboard2,
        stock: 7,
        description: 'Acompaña tus componentes con la excelente Taichi AM5 DDR5.'
    },

    {
        id: '6',
        name: 'AMD Ryzen 7 5800X',
        price: 355,
        category: 'Procesadores',
        img: procesador1,
        stock: 18,
        description: 'Excelente procesador con el mayor rendimiento posible. Calidad precio una opción muy comoda para gaming.'
    },

    {
        id: '7',
        name: 'AMD Ryzen 9 7950X3D',
        price: 1050,
        category: 'Procesadores',
        img: procesador2,
        stock: 9,
        description: 'Lo mejor en el mercado en cuanto a procesadores por la marca AMD, el mayor rendimiento posible a la más altas resoluciones de juego.'
    },

    {
        id: '8',
        name: 'Intel Core i7 13700KF',
        price: 585,
        category: 'Procesadores',
        img: procesador3,
        stock: 15,
        description: 'Intel diseñando sus procesadores KF sin gráficos integrados pero con una respuesta de trabajo excelente, gaming, oficina, para lo que precises.'
    },

    {
        id: '9',
        name: 'Intel Core i9 13900KF',
        price: 879,
        category: 'Procesadores',
        img: procesador4,
        stock: 11,
        description: 'Intel diseñando sus procesadores KF sin gráficos integrados pero con una respuesta de trabajo excelente, gaming, oficina, para lo que precises.'
    },

    {
        id: '10',
        name: 'Intel Core i9 14900K',
        price: 875,
        category: 'Procesadores',
        img: procesador5,
        stock: 28,
        description: 'Intel diseñando sus procesadores KF sin gráficos integrados pero con una respuesta de trabajo excelente, gaming, oficina, para lo que precises.'
    },

    {
        id: '11',
        name: 'Kingston Fury Renegade 16gb DDR5',
        price: 235,
        category: 'Memorias',
        img: memoria1,
        stock: 44,
        description: 'Disfruta con las mejores RAM del mercado, Kingston Fury DDR5 a 6800Mhz.'
    },

    {
        id: '12',
        name: 'Kingston Fury Beast 16gb DDR4',
        price: 235,
        category: 'Memorias',
        img: memoria2,
        stock: 38,
        description: 'Disfruta con las mejores RAM del mercado, Kingston Fury DDR4 a 3600Mhz.'
    },

    {
        id: '13',
        name: 'Seagate Barracuda 4Tb sata III',
        price: 139,
        category: 'Almacenamiento',
        img: almacenamiento1,
        stock: 55,
        description: 'Una cantidad de almacenamiento inimaginable con los discos HDD sata III de Seagate.'
    },

    {
        id: '14',
        name: 'Kingston SSD PCIe NVMe KC3000 2048Gb',
        price: 215,
        category: 'Almacenamiento',
        img: almacenamiento2,
        stock: 33,
        description: 'Almacenamiento y velocidad en un mismo lugar. Velocidades de lectura y escritura inimaginables con Kingston GEN 4.0.'
    },

    {
        id: '15',
        name: 'Kingston SSD PCIe NVMe NV2 2Tb',
        price: 129,
        category: 'Almacenamiento',
        img: almacenamiento3,
        stock: 48,
        description: 'Almacenamiento y velocidad en un mismo lugar. Velocidades de lectura y escritura inimaginables con Kingston GEN 4.0.'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)

    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}