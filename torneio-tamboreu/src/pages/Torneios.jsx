import { useState, useEffect } from "react";
import TorneioForm from "../components/torneios/TorneioForm";
import TorneioList from "../components/torneios/TorneioList";
import "../css/Torneios.css";
import toast from "react-hot-toast";

export default function Torneios() {
  const [torneios, setTorneios] = useState(() => {
    try {
      const stored = localStorage.getItem("torneios");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    localStorage.setItem("torneios", JSON.stringify(torneios));
  }, [torneios]);

  function addTorneio(torneio) {
    setTorneios([...torneios, { ...torneio, id: Date.now() }]);
    toast.success("Torneio criado com sucesso!");
  }

  function deleteTorneio(id) {
    setTorneios(torneios.filter((t) => t.id !== id));

    toast.error("Torneio removido!");
  }

  function startEdit(torneio) {
    setEditing(torneio);
  }

  function updateTorneio(updated) {
    setTorneios(torneios.map((t) => (t.id === updated.id ? updated : t)));
    setEditing(null);

    toast.success("Torneio atualizado!");
  }

  return (
    <div className="torneios-container">
      <h1 className="title">Torneios</h1>

      <div className="torneios-content">
        <div className="form-area">
          <TorneioForm
            key={editing ? editing.id : "new"}
            addTorneio={addTorneio}
            editing={editing}
            updateTorneio={updateTorneio}
          />
        </div>

        <div className="list-area">
          <TorneioList
            torneios={torneios}
            deleteTorneio={deleteTorneio}
            startEdit={startEdit}
          />
        </div>
      </div>
    </div>
  );
}
