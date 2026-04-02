import { useState } from "react";
import TorneioForm from "../components/torneios/TorneioForm";
import TorneioList from "../components/torneios/TorneioList";

export default function Torneios() {
  const [torneios, setTorneios] = useState([]);
  const [editing, setEditing] = useState(null);

  function addTorneio(torneio) {
    setTorneios([...torneios, { ...torneio, id: Date.now() }]);
  }

  function deleteTorneio(id) {
    setTorneios(torneios.filter((t) => t.id !== id));
  }

  function startEdit(torneio) {
    setEditing(torneio);
  }

  function updateTorneio(updated) {
    setTorneios(torneios.map((t) => (t.id === updated.id ? updated : t)));
    setEditing(null);
  }

  return (
    <div>
      <h1>Torneios</h1>

      <TorneioForm
        key={editing ? editing.id : "new"}
        addTorneio={addTorneio}
        editing={editing}
        updateTorneio={updateTorneio}
      />

      <TorneioList
        torneios={torneios}
        deleteTorneio={deleteTorneio}
        startEdit={startEdit}
      />
    </div>
  );
}
