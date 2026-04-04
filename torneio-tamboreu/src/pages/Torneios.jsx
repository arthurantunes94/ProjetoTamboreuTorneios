import { useState, useEffect } from "react";
import TorneioForm from "../components/torneios/TorneioForm";
import TorneioList from "../components/torneios/TorneioList";
import "../css/Torneios.css";
import toast from "react-hot-toast";
import Modal from "../components/Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("torneios", JSON.stringify(torneios));
  }, [torneios]);

  function addTorneio(torneio) {
    setTorneios([...torneios, { ...torneio, id: Date.now() }]);
    setIsModalOpen(false);
    toast.success("Torneio criado com sucesso!");
  }

  function deleteTorneio(id) {
    setTorneios(torneios.filter((t) => t.id !== id));

    toast.error("Torneio removido!");
  }

  function startEdit(torneio) {
    setEditing(torneio);
    setIsModalOpen(true);
  }

  function updateTorneio(updated) {
    setTorneios(torneios.map((t) => (t.id === updated.id ? updated : t)));
    setEditing(null);
    setIsModalOpen(false);

    toast.success("Torneio atualizado!");
  }

  return (
    <div className="torneios-container">
      <div className="header">
        <h1 className="title">Torneios</h1>

        <button
          className="btn-primary"
          onClick={() => {
            setEditing(null);
            setIsModalOpen(true);
          }}
        >
          + Novo Torneio
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditing(null);
        }}
      >
        <TorneioForm
          key={editing ? editing.id : "new"}
          addTorneio={addTorneio}
          editing={editing}
          updateTorneio={updateTorneio}
          onClose={() => {
            setIsModalOpen(false);
            setEditing(null);
          }}
        />
      </Modal>

      <div className="list-area">
        <TorneioList
          torneios={torneios}
          deleteTorneio={deleteTorneio}
          startEdit={startEdit}
        />
      </div>
    </div>
  );
}
