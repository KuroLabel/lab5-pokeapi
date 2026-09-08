import { useState, useEffect } from 'react';

export default function InicioCapstone() {
  const [servicios, setServicios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const cargarDatosPrueba = async () => {
    setCargando(true);
    setError(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
      if (!res.ok) throw new Error('Error al cargar datos del proyecto Capstone');
      const data = await res.json();
      setServicios(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarDatosPrueba();
  }, []);

  if (cargando) return <p>Cargando servicios del proyecto Capstone...</p>;
  if (error) return <p>Error en Capstone: {error} <button onClick={cargarDatosPrueba}>Reintentar</button></p>;

  return (
    <section style={{ marginTop: '40px', borderTop: '2px dashed #ccc', paddingTop: '20px' }}>
      <h2>Proyecto Capstone: Vista de Inicio</h2>
      <p>Simulación de API REST con datos de prueba previo a Django REST Framework:</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
        {servicios.map((s) => (
          <article key={s.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h4 style={{ textTransform: 'capitalize' }}>{s.title}</h4>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}