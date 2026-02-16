import React from "react";

const inventory = [
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
  }
];

function InventoryTable(){
    return (
        <div>
            <h2>Inventory List</h2>
            <table border = "1" cellPadding = "10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {inventory.map((item, index) => (
                        <tr key = {index}>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.quantity}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default InventoryTable;