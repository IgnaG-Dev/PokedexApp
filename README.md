
# PokedexApp 📖

Esta aplicación se enfoca en conceptos avanzados como manejo de caché, búsqueda eficiente, carga perezosa de imágenes y reutilización de componentes, con el objetivo de crear una experiencia fluida y visualmente atractiva.

![PokedexApp](https://github.com/user-attachments/assets/05819276-4fa4-4d2f-b167-6365b5689a6f 'PokedexApp')

## Funcionalidades principales 🌟

- **Exploración de Pokémons**: Visualiza una lista completa de Pokémons con detalles relevantes como habilidades, tipos y estadísticas.
- **Búsqueda avanzada**:
  - Búsqueda por **ID** y **nombre**.
  - Implementación de **debounce manual** para evitar llamadas excesivas a la API.
- **Manejo de caché**: Optimización del acceso a datos almacenados localmente para reducir la dependencia de la API.
- **Carga perezosa de imágenes**: Mejora del rendimiento mediante la carga diferida de imágenes.
- **Memorización de valores**: Uso de estrategias para mejorar el rendimiento en componentes que dependen de datos complejos.
- **Múltiples `useQueries`**: Ejecución simultánea de consultas para diferentes datos en el mismo componente.

## Tecnologías utilizadas 🛠️

- **React Native**: Framework para el desarrollo de aplicaciones móviles.
- **TanStack Query**:
  - `useQuery` para consultas simples.
  - `useInfiniteQuery` para listas con paginación infinita.
- **TypeScript**: Tipado estático para mejorar la mantenibilidad del código.
- **React Navigation**: Manejo de navegación fluida entre pantallas.
- **Axios**: Cliente HTTP para consumir la API de PokeApi.
- **Debounce**: Técnica para optimizar las búsquedas reduciendo la frecuencia de llamadas a la API.
- **Lazy Loading**: Carga perezosa de imágenes para optimizar el rendimiento.

## Configuración del Proyecto ⚙️

> **Nota:** Asegúrate de tener Node.js, npm o yarn, y un entorno configurado para React Native CLI.

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/IgnaG-Dev/PokedexApp
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd PokedexApp
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
   o
   ```bash
   yarn install
   ```

4. Ejecuta la aplicación en un emulador o dispositivo físico:
   - Para Android:
     ```bash
     npx react-native run-android
     ```
   - Para iOS:
     ```bash
     npx react-native run-ios
     ```
     
## Contribución 🤝

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar esta aplicación, abre un issue o envía una pull request con tus propuestas.

## Contacto 📧

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto.
