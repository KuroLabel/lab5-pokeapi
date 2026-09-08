import ListaPokemon from './components/ListaPokemon';

export default function App() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Laboratorio 5: PokéAPI & React</h1>
      <ListaPokemon />
    </div>
  );
}