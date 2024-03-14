import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [username, setUsername] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [descripcion, setDescripcion] = useState(null);
  const [url, setUrl] = useState(null);
  const [posts, setPosts] = useState(null);
  const [seguidores, setSeguidores] = useState(null);
  const [seguidos, setSeguidos] = useState(null);

  let urlDatos = "https://raw.githubusercontent.com/Luisfetoga2/Parcial1-Web/main/datos.json";

  if (username===null) {
    fetch(urlDatos).then(response => response.json()).then(datos => {
      console.log(datos);
      console.log(datos.username);   
      setUsername(datos.username);
      setNombre(datos.nombre);
      setDescripcion(datos.descripcion);
      setUrl(datos.url);
      setPosts(datos.posts);
      setSeguidores(datos.seguidores);
      setSeguidos(datos.seguidos);
    });
  }

  const renderHome = () => {
    if (username === null) {
      return <p>Cargando...</p>;
    }
    return <Home username={username} nombre={nombre} descripcion={descripcion} url={url} posts={posts} seguidores={seguidores} seguidos={seguidos}/>
  }

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={
      <div className="App" style={{marginTop: "20px"}}>
        {renderHome()}
      </div>} />
      <Route path="/profile" element={<Profile username={username} nombre={nombre} descripcion={descripcion} url={url} posts={posts} seguidores={seguidores} seguidos={seguidos} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
