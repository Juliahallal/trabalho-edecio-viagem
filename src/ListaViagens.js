import { useState } from "react";
import "./ListaViagens.css";

export default function ListaViagens({ viagens }) {
  const [viagenas, setViagens] = useState([]);

  function removerViagem(index) {
    const novasViagens = viagens.filter((_, i) => i !== index);
    localStorage.setItem("viagens", JSON.stringify(novasViagens));
    setViagens(novasViagens);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Destino</th>
          <th>Data</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {viagens.map((viagem, index) => (
          <tr key={index}>
            <td>{viagem.destino}</td>
            <td>{viagem.data}</td>
            <td>
              <select
                value={viagem.status}
                onChange={(e) => {
                  const novasViagens = [...viagens];
                  novasViagens[index].status = e.target.value;
                  localStorage.setItem("viagens", JSON.stringify(novasViagens));
                  setViagens(novasViagens);
                }}
              >
                <option value="em planejamento">Em planejamento</option>
                <option value="confirmada">Confirmada</option>
                <option value="cancelada">Cancelada</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
