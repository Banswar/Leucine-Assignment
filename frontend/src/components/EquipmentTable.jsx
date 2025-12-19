import api from "../api/axios";
import { useState } from "react";

function EquipmentTable({ equipment, onEdit, refresh }) {
  const handleDelete = async (id) => {
    if (!confirm("Delete this item?")) return;
    await api.delete(`/equipment/${id}`);
    refresh();
  };

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const sortedEquipment = [...equipment].sort((a, b) => {
    if (!sortConfig.key) return 0;

    let valA = a[sortConfig.key];
    let valB = b[sortConfig.key];

    if (sortConfig.key === "last_cleaned") {
      valA = new Date(valA);
      valB = new Date(valB);
    }

    if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>Name</th>
          <th onClick={() => handleSort("type")}>Type</th>
          <th onClick={() => handleSort("status")}>Status</th>
          <th onClick={() => handleSort("last_cleaned")}>Last Cleaned</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {sortedEquipment.map((item) => (
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
