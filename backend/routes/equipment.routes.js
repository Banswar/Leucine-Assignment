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
    const { name, type, status, last_cleaned } = req.body;
    db.query(
        "INSERT INTO equipment (name, type, status, last_cleaned) VALUES (?, ?, ?, ?)",
        [name, type, status, last_cleaned],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ id: results.insertId, name, type, status, last_cleaned });
        }
    );
});

// Update equipment
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, type, status, last_cleaned } = req.body;
    db.query(
        "UPDATE equipment SET name = ?, type = ?, status = ?, last_cleaned = ? WHERE id = ?",
        [name, type, status, last_cleaned, id],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ id, name, type, status, last_cleaned });
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