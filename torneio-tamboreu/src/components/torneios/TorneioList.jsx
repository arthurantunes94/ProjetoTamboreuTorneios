import "../../css/Torneios.css";

export default function TorneioList({ torneios, deleteTorneio, startEdit }) {
  return (
    <>
      {torneios.map((t) => (
        <div className="torneio-card" key={t.id}>
          <div className="torneio-info">
            <strong>{t.nome}</strong>
            <span>{t.data}</span>
          </div>

          <div className="torneio-actions">
            <button onClick={() => startEdit(t)}>Editar</button>
            <button onClick={() => deleteTorneio(t.id)}>Excluir</button>
          </div>
        </div>
      ))}
    </>
  );
}
