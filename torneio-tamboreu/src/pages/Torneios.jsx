import { useState, useEffect } from "react";
import TorneioForm from "../components/torneios/TorneioForm";
import TorneioList from "../components/torneios/TorneioList";
import "../css/Torneios.css";
import toast from "react-hot-toast";
import Modal from "../components/Modal";
import { Search } from "lucide-react";

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
  const [torneioToDelete, setTorneioToDelete] = useState(null);
  const [search, setSearch] = useState("");
  const currentYear = new Date().getFullYear().toString();
  const [year, setYear] = useState(currentYear);

  const torneiosOrdenados = [...torneios].sort(
    (a, b) => new Date(b.data) - new Date(a.data),
  );

  const torneiosFiltrados = torneiosOrdenados.filter((t) => {
    const matchName = t.nome.toLowerCase().includes(search.toLowerCase());

    const matchYear =
      year === "all" || new Date(t.data).getFullYear().toString() === year;

    return matchName && matchYear;
  });

  const years = [
    ...new Set(torneios.map((t) => new Date(t.data).getFullYear())),
  ].sort((a, b) => b - a);

  useEffect(() => {
    localStorage.setItem("torneios", JSON.stringify(torneios));
  }, [torneios]);

  function addTorneio(torneio) {
    setTorneios([...torneios, { ...torneio, id: Date.now() }]);
    setIsModalOpen(false);
    toast.success("Torneio criado com sucesso!");
  }

  function confirmDelete(torneio) {
    setTorneioToDelete(torneio);
  }

  function handleDelete() {
    setTorneios(torneios.filter((t) => t.id !== torneioToDelete.id));

    toast.error("Torneio removido!");

    setTorneioToDelete(null);
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
        <div className="header-actions">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Buscar torneio..."
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="search-icon">
              <Search size={18} />
            </button>
          </div>
          <div className="select-wrapper">
            <select
              className="year-filter"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="all">Todos os anos</option>

              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
            <span className="select-icon">▼</span>
          </div>
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
          torneios={torneiosFiltrados}
          startDelete={confirmDelete}
          startEdit={startEdit}
        />
      </div>
      <Modal
        isOpen={!!torneioToDelete}
        onClose={() => setTorneioToDelete(null)}
      >
        <div className="confirm-modal">
          <h2>Confirmar exclusão</h2>

          <p>
            Tem certeza que deseja excluir o torneio{" "}
            <strong>{torneioToDelete?.nome}</strong>?
          </p>

          <div className="confirm-actions">
            <button className="btn-danger" onClick={handleDelete}>
              Excluir
            </button>

            <button
              className="btn-secondary"
              onClick={() => setTorneioToDelete(null)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
