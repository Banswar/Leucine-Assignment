import api from "../api/axios";

function EquipmentTable({ equipment, onEdit, refresh }) {
  const handleDelete = async (id) => {
    if (!confirm("Delete this item?")) return;
    await api.delete(`/equipment/${id}`);
    refresh();
  };

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Cleaned</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {equipment.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>{item.last_cleaned}</td>
            <td>
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EquipmentTable;
