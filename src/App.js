import './App.css';
import phone from './assets/phone.svg'
import search from './assets/search.svg'
import Card from './components/Card'
import flowers from './db'

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="Header__Info">
          <p className="Header__Logo">Flowers<br></br>Store</p>
          <div className="Header__Tel">
            <img src={phone} />
            <p>777-8888</p>
          </div>
        </div>
        <form className="Header__Form">
          <input type="search" placeholder="Buscar..."/>
          <input type="image" src={search}/>
        </form>
      </header>
      <h1>Flores</h1>
      <div className="Container">
        {flowers.map(flower => {
          return (
            <Card 
              img={flower.img}
              price={flower.precio}
              descripcion={flower.descripcion}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
