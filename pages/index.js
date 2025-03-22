import React, { useState } from "react";
import GachaDemo from "../components/GachaDemo";
import Inventory from "../components/Inventory";
import Shop from "../components/Shop";

export default function Home() {
  const [tab, setTab] = useState("gacha");
  const [inventory, setInventory] = useState([]);
  const [wallet, setWallet] = useState(0);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-around gap-4 text-lg font-semibold">
        <button onClick={() => setTab("gacha")} className={tab === "gacha" ? "text-blue-600" : ""}>🎰 Gacha</button>
        <button onClick={() => setTab("inventory")} className={tab === "inventory" ? "text-blue-600" : ""}>📂 Inventory</button>
        <button onClick={() => setTab("shop")} className={tab === "shop" ? "text-blue-600" : ""}>🛒 Shop</button>
      </div>

      <div className="border p-4 rounded shadow">
        {tab === "gacha" && (
          <GachaDemo 
            wallet={wallet} 
            setWallet={setWallet} 
            inventory={inventory} 
            setInventory={setInventory} 
          />
        )}
        {tab === "inventory" && (
          <Inventory 
            inventory={inventory} 
          />
        )}
        {tab === "shop" && (
          <Shop 
            wallet={wallet} 
            setWallet={setWallet} 
          />
        )}
      </div>
    </div>
  );
}
