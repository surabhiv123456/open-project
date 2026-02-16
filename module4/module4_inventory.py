# module4_inventory.py
import pandas as pd

# 1️⃣ Use the same inventory items from your frontend
inventory_data = [
    {"id": 1, "name": "Arduino Kit", "category": "Hardware", "quantity": 5, "status": "Available"},
    {"id": 2, "name": "Figma License", "category": "Software", "quantity": 20, "status": "Available"},
    {"id": 3, "name": "Raspberry Pi", "category": "Hardware", "quantity": 0, "status": "Unavailable"},
]

# 2️⃣ Load into a DataFrame
df = pd.DataFrame(inventory_data)

# 3️⃣ Add flags
df['Low Stock'] = df['quantity'] <= 3
df['Unavailable'] = df['status'] == "Unavailable"

# 4️⃣ Group by category for summary
category_summary = df.groupby('category').agg(
    Total_Items=('quantity', 'sum'),
    Low_Stock_Items=('Low Stock', 'sum'),
    Unavailable_Items=('Unavailable', 'sum')
).reset_index()

# 5️⃣ Display both tables
print("\n=== Full Inventory ===")
print(df)

print("\n=== Summary by Category ===")
print(category_summary)
