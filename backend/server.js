const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5001;

let inventory = [
    {
        id: 1,
        name: "Arduino Kit",
        category: "Hardware",
        quantity: 5,
        status: "Available"  
    },
    {
        id: 2,
        name: "Figma License",
        category: "Software",
        quantity: 20,
        status: "Available"
    },
    {
        id: 3,
        name: "Raspberry Pi",
        category: "Hardware",
        quantity: 0,
        status: "Unavailable"
    },
];

app.get("/inventory", (req, res) =>{
    res.json(inventory);
});

app.post("/inventory", (req, res) =>{
    const {name, category, quantity, status} = req.body;

    const newItem = {
        id: inventory.length+1,
        name,
        category,
        quantity,
        status,
    };

    inventory.push(newItem);

    res.json({message: "item added successfully"});
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});