Se uso stackblitz 
En este proyecto se integro la API publica de PokeAPI (`https://pokeapi.co/api/v2/pokemon`) para renderizar dinámicamente la lista de Pokémon en la pagina de inicio junto con el endpoint detallado (`https://pokeapi.co/api/v2/pokemon/{nombre}`) para cargar los datos de cada tarjeta individual.
se agregaron
carga (`loading`):** Se implemento un estado que muestra un indicador o mensaje de carga mientras se completan las peticiones asíncronas con fetch
errores (`error`):** Se capturan fallos de red y respuestas no válidas (!response.ok) utilizando bloques try/catch para mostrar mensajes informativos en la interfaz de usuario en lugar de romper la aplicacion.

src/main.jsx: Punto de entrada principal.
src/components/App.jsx: Componente principal de la aplicación.
src/components/InicioCapstone.jsx: Vista principal que consume la API.
src/components/ListaPokemon.jsx: Renderiza la lista completa de Pokémon.
src/components/TarjetaPokemon.jsx: Componente funcional para cada tarjeta de Pokémon.
src/components/DetallePokemon.jsx: Muestra información ampliada del Pokémon seleccionado. 
Bueno tambien por que asi me lo genero stackblitz 
