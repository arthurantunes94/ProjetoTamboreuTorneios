export default function TorneioList({ torneios, deleteTorneio, startEdit }) {
  return (
    <div>
      {torneios.map((t) => (
        <div key={t.id}>
          <strong>{t.nome}</strong> - {t.data}
          <button onClick={() => startEdit(t)}>Editar</button>
          <button onClick={() => deleteTorneio(t.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}
