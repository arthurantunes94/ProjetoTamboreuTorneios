import "../../css/Torneios.css";

export default function TorneioList({ torneios, startDelete, startEdit }) {
  function formatDate(date) {
    const d = new Date(date);

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
  }

  if (torneios.length === 0) {
    return <p>Nenhum torneio encontrado.</p>;
  }
  return (
    <>
      {torneios.map((t) => (
        <div className="torneio-card" key={t.id}>
          <div className="torneio-info">
            <div className="torneio-header">
              <strong>{t.nome}</strong>

              <span className={`status ${t.status}`}>{t.status}</span>
            </div>

            <span className="torneio-data">{formatDate(t.data)}</span>
          </div>

          <div className="torneio-actions">
            <button onClick={() => startEdit(t)}>Editar</button>
            <button onClick={() => startDelete(t)}>Excluir</button>
          </div>
        </div>
      ))}
    </>
  );
}
