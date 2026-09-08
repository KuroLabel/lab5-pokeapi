export default function DetallePokemon({ pokemon, alVolver }) {
  if (!pokemon) return null;

  return (
    <div className="detalle-container" style={{ padding: '20px', border: '2px solid #3b5998', borderRadius: '10px', backgroundColor: '#f0f4f8' }}>
      <button onClick={alVolver} style={{ padding: '8px 16px', marginBottom: '15px', cursor: 'pointer' }}>
        ← Volver a la lista
      </button>

      <h2>{pokemon.name.toUpperCase()} (# {pokemon.id})</h2>
      <img 
        src={pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default} 
        alt={pokemon.name} 
        style={{ width: '150px' }}
      />

      <div className="info-basica">
        <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
        <p><strong>Tipos:</strong> {pokemon.types.map((t) => t.type.name).join(', ')}</p>
      </div>

      <h3>Estadísticas Base</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pokemon.stats.map((s) => (
          <li key={s.stat.name} style={{ margin: '5px 0' }}>
            <strong>{s.stat.name.toUpperCase()}:</strong> {s.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}