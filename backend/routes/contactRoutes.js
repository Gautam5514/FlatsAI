import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
    res.json({ message: "Contact form submitted!" });
});

export default router; // ✅ Use default export
