import { useState, useEffect } from 'react';

export default function TarjetaPokemon({ nombre, alSeleccionar }) {
  const [detalle, setDetalle] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignorar = false;
    setCargando(true);
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener detalle del pokémon");
        return res.json();
      })
      .then((data) => {
        if (!ignorar) {
          setDetalle(data);
          setCargando(false);
        }
      })
      .catch((err) => {
        if (!ignorar) {
          setError(err.message);
          setCargando(false);
        }
      });

    return () => { ignorar = true; };
  }, [nombre]);

  if (cargando) return <div className="tarjeta cargando">Cargando datos de {nombre}...</div>;
  if (error) return <div className="tarjeta error">Error al cargar {nombre}</div>;

  return (
    <div className="tarjeta" onClick={() => alSeleccionar(detalle)} style={{ cursor: 'pointer' }}>
      <img src={detalle.sprites.front_default} alt={nombre} />
      <h3>{nombre.toUpperCase()}</h3>
      <p><strong>Tipo:</strong> {detalle.types.map((t) => t.type.name).join(', ')}</p>
      <small>Ver detalle completo →</small>
    </div>
  );
}