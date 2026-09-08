import { useState, useEffect } from 'react';
import TarjetaPokemon from './TarjetaPokemon';
import DetallePokemon from './DetallePokemon';

export default function ListaPokemon() {
  const [pokemones, setPokemones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);

  const obtenerPokemones = async () => {
    setCargando(true);
    setError(null);
    try {
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      if (!respuesta.ok) {
        throw new Error('Error al conectar con el servidor (HTTP ' + respuesta.status + ')');
      }
      const datos = await respuesta.json();
      setPokemones(datos.results);
    } catch (err) {
      setError(err.message || 'Error de red o conexión perdida.');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerPokemones();
  }, []);

  const pokemonesFiltrados = pokemones.filter((p) =>
    p.name.toLowerCase().includes(busqueda.toLowerCase())
  );


  if (cargando) return <div className="estado-mensaje"><p>⏳ Cargando Pokémon...</p></div>;

  if (error) return (
    <div className="estado-mensaje error-box" style={{ border: '1px solid red', padding: '15px', color: 'red' }}>
      <p> Ocurrió un error: {error}</p>
      <button onClick={obtenerPokemones}>🔄 Reintentar conexión</button>
    </div>
  );


  if (pokemonSeleccionado) {
    return (
      <DetallePokemon 
        pokemon={pokemonSeleccionado} 
        alVolver={() => setPokemonSeleccionado(null)} 
      />
    );
  }

  return (
    <div className="contenedor-lista">
      <h2>Lista de Pokémon</h2>

      {}
      <input
        type="text"
        placeholder="Buscar Pokémon por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: '8px', width: '100%', marginBottom: '20px', fontSize: '16px' }}
      />

      <div className="grid-tarjetas" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '15px' }}>
        {pokemonesFiltrados.length > 0 ? (
          pokemonesFiltrados.map((p) => (
            <TarjetaPokemon
              key={p.name}
              nombre={p.name}
              alSeleccionar={(pokeData) => setPokemonSeleccionado(pokeData)}
            />
          ))
        ) : (
          <p>No se encontraron resultados para "{busqueda}"</p>
        )}
      </div>
    </div>
  );
}