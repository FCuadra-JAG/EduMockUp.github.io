# 🍔 Menú Digital - Mockup Estático

## 📋 Descripción
Este proyecto es un **mockup estático desarrollado con HTML, CSS y JavaScript**, que simula la interfaz de un **menú digital de restaurante**.  
El objetivo es mostrar la estructura visual y funcional de una aplicación web tipo carta interactiva, donde los usuarios pueden visualizar productos, filtrar por categoría y explorar opciones sin necesidad de conexión a un servidor o base de datos.

---

## 🎯 Objetivo del proyecto
Crear una maqueta web que represente el diseño y la funcionalidad básica de un menú digital, aplicando los conocimientos de estructura HTML, estilos CSS y manipulación básica del DOM con JavaScript.

---

## 🧱 Tecnologías utilizadas
- **HTML5** → para la estructura del contenido.
- **CSS3** → para los estilos, colores y disposición de los elementos.
- **JavaScript (vanilla)** → para simular interactividad (filtrar productos, mostrar categorías, etc.).
- **Sin backend** → todos los datos están definidos directamente en el código como una lista de objetos.

---

## 🧩 Estructura del proyecto

/menu-digital
│
├── index.html # Página principal del mockup
├── style.css # Hoja de estilos (opcional, puede estar en el mismo HTML)
├── script.js # Lógica para el filtrado y renderizado de productos
└── README.md # Documento explicativo del proyecto


---

## 🍟 Funcionalidades simuladas
- Visualización de productos (nombre, precio, categoría).
- Filtro de búsqueda por texto.
- Filtro por categoría (ejemplo: Hamburguesas, Bebidas, Postres).
- Diseño adaptable y visualmente limpio.
- Interactividad básica usando JavaScript sin dependencias externas.

---

## 🎨 Paleta de colores sugerida
| Elemento | Color | Código |
|-----------|--------|--------|
| Color principal | Turquesa | `#0099A8` |
| Fondo claro | Blanco | `#FFFFFF` |
| Texto | Gris oscuro | `#333333` |
| Botones / Hover | Amarillo mostaza | `#F5B301` |

---

## 📱 Vista general
El mockup representa una página web de menú digital donde el usuario puede explorar los distintos productos disponibles del restaurante **“Big Diddy Burger”**, separados por categorías.

Ejemplo de estructura de producto:
```js
const menu = [
  { id: 1, name: "Big Diddy Classic", category: "Hamburguesas", price: 5.99 },
  { id: 2, name: "Papas Deluxe", category: "Acompañamientos", price: 2.50 },
  { id: 3, name: "Refresco de Cola", category: "Bebidas", price: 1.25 }
];
