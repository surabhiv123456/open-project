import React, { useState, useEffect } from "react";

export default function InventoryDashboard() {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: 0,
    status: "Available",
  });

  // Fetch inventory on component mount
  useEffect(() => {
    fetch("http://localhost:5001/inventory")
      .then(res => res.json())
      .then(data => setInventory(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5001/inventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setFormData({ name: "", category: "", quantity: 0, status: "Available" });
        return fetch("http://localhost:5001/inventory");
      })
      .then(res => res.json())
      .then(data => setInventory(data));
  };

  return (
    <div>
      <h1>Inventory Dashboard</h1>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
