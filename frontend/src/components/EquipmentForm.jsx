import { useEffect, useState } from "react";
import api from "../api/axios";

const initialState = {
  name: "",
  type: "Machine",
  status: "Active",
  last_cleaned: "",
};

function EquipmentForm({ editingItem, refresh, clearEdit }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingItem) setForm(editingItem);
  }, [editingItem]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.last_cleaned) {
      setError("Name and date are required");
      return;
    }

    if (editingItem) {
      await api.put(`/equipment/${editingItem.id}`, form);
    } else {
      await api.post("/equipment", form);
    }

    await refresh();
    setForm(initialState);
    setError("");
    clearEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editingItem ? "Edit Equipment" : "Add Equipment"}</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <select name="type" value={form.type} onChange={handleChange}>
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>

      <select name="status" value={form.status} onChange={handleChange}>
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>

      <input
        type="date"
        name="last_cleaned"
        value={form.last_cleaned}
        onChange={handleChange}
      />

      <button type="submit">
        {editingItem ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default EquipmentForm;
