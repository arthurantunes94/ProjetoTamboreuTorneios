import { useState } from "react";
import "../../css/Torneios.css";

export default function TorneioForm({
  addTorneio,
  editing,
  updateTorneio,
  onClose,
}) {
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
      <h2 className="form-title">
        {editing ? "Alterar torneio" : "Incluir novo torneio"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
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
        </div>
        <div className="form-actions">
          <button className="btn-primary" type="submit">
            Confirmar
          </button>

          <button type="button" className="btn-secondary" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
