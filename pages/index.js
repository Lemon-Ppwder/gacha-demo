import { useState } from "react";
import GachaPage from "../components/GachaPage";
import InventoryPage from "../components/InventoryPage";
import ShopPage from "../components/ShopPage";

export default function Home() {
  const [tab, setTab] = useState("gacha");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-around mb-4">
        <button onClick={() => setTab("gacha")}>🎰 Gacha</button>
        <button onClick={() => setTab("inventory")}>📂 Inventory</button>
        <button onClick={() => setTab("shop")}>🛒 Shop</button>
      </div>
      {tab === "gacha" && <GachaPage />}
      {tab === "inventory" && <InventoryPage />}
      {tab === "shop" && <ShopPage />}
    </div>
  );
}