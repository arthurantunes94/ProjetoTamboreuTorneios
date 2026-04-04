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
            <strong>{t.nome}</strong>
            <span>{formatDate(t.data)}</span>
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
