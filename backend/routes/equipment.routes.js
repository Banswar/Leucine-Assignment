import express from 'express';
import db from '../config/db.js';

const router = express.Router();

// Get all equipment
router.get("/", (req, res) => {
    db.query("SELECT * FROM equipment", (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Add new equipment
router.post("/", (req, res) => {
    const { name, type, status, lastCleaned } = req.body;
    db.query(
        "INSERT INTO equipment (name, type, status, lastCleaned) VALUES (?, ?, ?, ?)",
        [name, type, status, lastCleaned],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ id: results.insertId, name, type, status, lastCleaned });
        }
    );
});

// Update equipment
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, type, status, lastCleaned } = req.body;
    db.query(
        "UPDATE equipment SET name = ?, type = ?, status = ?, lastCleaned = ? WHERE id = ?",
        [name, type, status, lastCleaned, id],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ id, name, type, status, lastCleaned });
        }
    );
});


// Delete equipment
router.delete("/:id", (req, res) => {
    const { id } = req.params;  
    db.query("DELETE FROM equipment WHERE id = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Equipment deleted successfully" });
    });
});

export default router;