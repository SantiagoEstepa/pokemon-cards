# pokemon-cards
##### Informe del Proyecto: Mapeo de Información en Cartas

#### Descripción del Proyecto
El objetivo de este proyecto fue desarrollar una aplicación web que accede a un endpoint de la API de PokeAPI, obtiene información sobre Pokémon y la mapea en tarjetas sencillas. La aplicación está diseñada para ser fácil de entender y utilizar, enfocándose en la presentación clara y estructurada de los datos.

#### Decisiones de Diseño

1. **Estructura del Proyecto**
   - El proyecto se estructuró en tres archivos principales: `index.html` para el marcado HTML, `styles.css` para los estilos CSS, y `script.js` para la lógica JavaScript.
   - Utilicé Visual Studio Code como entorno de desarrollo.

2. **HTML**
   - Cree un documento HTML5 básico con una estructura clara y sencilla.
   - Añadí un `<header>` con un título grande (`<h1>`) para proporcionar una identificación clara de la aplicación.
   - Un contenedor principal (`<main>`) incluye un `div` con el id `card-container` donde se insertarán dinámicamente las tarjetas de los Pokémon.

3. **CSS**
   - Definí estilos básicos para el cuerpo del documento para asegurar una apariencia consistente y legible.
   - El encabezado (`<header>`) se estilizó con un fondo azul y texto blanco para destacarse visualmente.
   - Las tarjetas de Pokémon se diseñaron con flexbox en el contenedor `#card-container` para una disposición flexible y responsive.

4. **JavaScript**
   - Utilicé el evento `DOMContentLoaded` para asegurar que el DOM esté completamente cargado antes de ejecutar cualquier código JavaScript.
   - La función `fetchPokemons` se implementó para realizar una solicitud a la PokeAPI y obtener datos de los Pokémon.
   - La función `displayPokemons` se encargó de crear y mostrar las tarjetas de los Pokémon en el DOM.

#### Desafíos Encontrados

1. **Integración con la API**
   - Inicialmente, tuve desafíos con la comprensión del formato de datos devueltos por la PokeAPI. Se resolvió mediante la inspección de la respuesta JSON en la consola del navegador.
   - Manejar errores de la solicitud fetch fue crucial para asegurar que la aplicación no fallara silenciosamente. Se implementó un manejo de errores básico que registra cualquier error en la consola.

2. **Diseño Responsive**
   - Asegurar que las tarjetas se vean bien en diferentes tamaños de pantalla fue un desafío. Se utilizó flexbox para permitir que las tarjetas se ajusten y distribuyan de manera adecuada en el contenedor.
   - Se consideraron los márgenes y el relleno para mantener un espacio consistente y visualmente agradable entre las tarjetas.

3. **Estilos CSS**
   - Definir estilos que sean simples pero atractivos fue una parte importante del diseño. Se decidió utilizar una paleta de colores mínima y centrarse en la legibilidad del contenido.


El proyecto se completó con éxito, proporcionando una aplicación web funcional y atractiva que obtiene datos de la PokeAPI y los muestra en tarjetas.