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
  const [status, setStatus] = useState("ativo");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !data) return;

    if (editing) {
      updateTorneio({ ...editing, nome, data, status });
      setNome(editing.nome);
      setData(editing.data);
      setStatus(editing.status || "ativo");
    } else {
      addTorneio({ nome, data, status });
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
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="ativo">Ativo</option>
            <option value="finalizado">Finalizado</option>
          </select>
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
