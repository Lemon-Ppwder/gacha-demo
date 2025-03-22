import React from "react";

export default function Shop({ wallet, setWallet }) {
  const shopItems = [
    { name: "60 Gems", gems: 60, bonus: 0 },
    { name: "300 + 30 Bonus", gems: 330, bonus: 30 },
    { name: "6480 Gems", gems: 6480, bonus: 0 }
  ];

  const handlePurchase = (gems) => {
    setWallet(prev => prev + gems);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">🛒 Shop</h2>
      <p className="mb-4">Current Wallet: {wallet} gems</p>
      <ul className="space-y-3">
        {shopItems.map((item, index) => (
          <li key={index} className="border p-3 rounded flex justify-between items-center">
            <span>{item.name}</span>
            <button onClick={() => handlePurchase(item.gems)} className="bg-blue-600 text-white px-3 py-1 rounded">
              Buy {item.gems} Gems
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}