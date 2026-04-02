import { useState } from "react";
import "../../css/Torneios.css";

export default function TorneioForm({ addTorneio, editing, updateTorneio }) {
  const [nome, setNome] = useState(editing ? editing.nome : "");
  const [data, setData] = useState(editing ? editing.data : "");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !data) return;

    if (editing) {
      updateTorneio({ ...editing, nome, data });
    } else {
      addTorneio({ nome, data });
    }

    setNome("");
    setData("");
  }

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome do torneio"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <button className="btn-primary" type="submit">
          {editing ? "Atualizar" : "Criar"}
        </button>
      </form>
    </div>
  );
}
