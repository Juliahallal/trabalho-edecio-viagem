import React, { useState, useEffect } from "react";
import ListaViagens from "./ListaViagens";
import "./FormularioViagem.css";

function FormularioViagem() {
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");
  const [status, setStatus] = useState("");
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    const viagensSalvas = localStorage.getItem("viagens");
    if (viagensSalvas) {
      setViagens(JSON.parse(viagensSalvas));
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    adicionarViagem(destino, data, status);
    setDestino("");
    setData("");
    setStatus("");
  }

  function adicionarViagem(destino, data, status) {
    const novaViagem = { destino, data, status };
    const novasViagens = [...viagens, novaViagem];
    localStorage.setItem("viagens", JSON.stringify(novasViagens));
    setViagens(novasViagens);
  }

  function removerViagem(index) {
    const novasViagens = viagens.filter((_, i) => i !== index);
    localStorage.setItem("viagens", JSON.stringify(novasViagens));
    setViagens(novasViagens);
  }

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <label>
          Destino:
          <input
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </label>
        <br />
        <label>
          Data:
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </label>
        <br />
        <label>
          Status:
          <br />
          <input
            type="radio"
            value="em planejamento"
            checked={status === "em planejamento"}
            onChange={(e) => setStatus(e.target.value)}
          />
          Em planejamento
          <br />
          <input
            type="radio"
            value="confirmada"
            checked={status === "confirmada"}
            onChange={(e) => setStatus(e.target.value)}
          />
          Confirmada
          <br />
          <input
            type="radio"
            value="cancelada"
            checked={status === "cancelada"}
            onChange={(e) => setStatus(e.target.value)}
          />
          Cancelada
        </label>
        <br />
        <button type="submit">Adicionar</button>
      </form>
      <ListaViagens viagens={viagens} removerViagem={removerViagem} />{" "}
      {/* Adicione a prop "removerViagem" */}
    </div>
  );
}

export default FormularioViagem;
