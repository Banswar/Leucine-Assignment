import { useState, useEffect } from 'react';
import api from './api/axios';
import EquipmentForm from './components/EquipmentForm';
import EquipmentTable from './components/EquipmentTable';
import './App.css';

function App() {

      const [equipment, setEquipment] = useState([]);
      const [editingItem, setEditingItem] = useState(null);

      const fetchEquipment = async () => {
        try {
          const response = await api.get('/equipment');
          setEquipment(response.data);
        } catch (error) {
          console.error('Error fetching equipment:', error);
        }
      };

      useEffect(() => {
        fetchEquipment();
      }, []);

      return (
        <div style={{ padding: "20px"}}>
          <h1>Equipment Management</h1>
          <EquipmentForm
            editingItem={editingItem}
            refresh={fetchEquipment}
            clearEditing={() => setEditingItem(null)}
          />

          <EquipmentTable
            equipment={equipment}
            setEditingItem={setEditingItem}
            refresh={fetchEquipment}
          />
        </div>
      );
}

export default App
