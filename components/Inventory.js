import React from "react";

export default function Inventory({ inventory }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">📂 Inventory</h2>
      {inventory.length === 0 ? (
        <p>You haven't pulled any items yet.</p>
      ) : (
        <ul className="space-y-2">
          {inventory.map((entry, index) => (
            <li key={index} className="border p-2 rounded">
              <div><strong>{entry.item.name}</strong> ({entry.rarityLabel})</div>
              <div>Pity at pull: 4⭐ {entry.pity4} / 5⭐ {entry.pity5}</div>
              <div>Value: {entry.value} gems</div>
              <div>Pulled at: {entry.timestamp}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}