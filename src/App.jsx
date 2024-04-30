import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [lugar, setLugar] = useState("");

  const contenidoACopiar = `
  *Nombre: ${nombre}*
  *Fecha: ${fecha}*
  *Lugar: ${lugar}*
`;

  useEffect(() => {
    console.log(nombre);
    console.log(fecha);
    console.log(lugar);
  }, [nombre, fecha, lugar]);

  return (
    <form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Nombre</label>
          <label>Fecha</label>
          <label>Lugar</label>
          <label></label>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
            type="text"
          />
          <input
            id="fecha"
            onChange={(e) => setFecha(e.target.value)}
            type="text"
          />
          <input
            id="lugar"
            onChange={(e) => setLugar(e.target.value)}
            type="text"
          />
        </div>
      </div>
      <button style={{ background: "black", color: "white" }}>
        <Link
          to={`https://wa.me/+${51}${931557353}?text=${encodeURIComponent(
            contenidoACopiar
          )}`}
        >
          Enviar
        </Link>
      </button>
    </form>
  );
}

export default App;
