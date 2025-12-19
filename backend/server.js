import express from 'express';
import cors from 'cors';
import equipmentRoutes from './routes/equipment.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/equipment', equipmentRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});