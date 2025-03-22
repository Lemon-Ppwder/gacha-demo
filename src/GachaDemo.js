// GachaDemo.tsx
import React, { useState } from "react";

const MAX_PITY = 80;
const BASE_DROP_RATE = 0.05;
const SCALING_MULTIPLIER = 2.5;

const calculateDropRate = (pullNumber) => {
  if (pullNumber >= MAX_PITY) return 1;
  const scaledRate = BASE_DROP_RATE + ((SCALING_MULTIPLIER - 1) * BASE_DROP_RATE * (pullNumber / MAX_PITY));
  return Math.min(scaledRate, 1);
};

const GachaDemo = () => {
  const [pullCount, setPullCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [inventory, setInventory] = useState(0);
  const [simulatedRevenue, setSimulatedRevenue] = useState(0);
  const PULL_COST = 1.85;

  const handlePull = () => {
    const currentRate = calculateDropRate(pullCount + 1);
    const isSuccess = Math.random() < currentRate;
    const newPullCount = pullCount + 1;
    let newHistory = [...history, `Pull #${newPullCount}: ${isSuccess ? "⭐ Got Item!" : "No luck"}`];

    if (isSuccess || newPullCount >= MAX_PITY) {
      setInventory(prev => prev + 1);
      setPullCount(0);
      newHistory[newHistory.length - 1] += isSuccess ? "" : " ⭐ Got Item (Pity)";
    } else {
      setPullCount(newPullCount);
    }

    setHistory(newHistory);
    setSimulatedRevenue(prev => prev + PULL_COST);
  };

  const handleReset = () => {
    setPullCount(0);
    setHistory([]);
    setInventory(0);
    setSimulatedRevenue(0);
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Gacha Fashion Demo</h1>
      <p>Pulls toward a limited drop. Item guaranteed at {MAX_PITY} pulls.</p>
      <p>Current pity: <strong>{pullCount}</strong></p>
      <p>Current drop rate: <strong>{(calculateDropRate(pullCount + 1) * 100).toFixed(2)}%</strong></p>
      <button onClick={handlePull} className="bg-black text-white px-4 py-2 rounded">Pull ($1.85)</button>
      <button onClick={handleReset} className="ml-2 bg-gray-200 px-4 py-2 rounded">Reset</button>

      <div className="mt-4">
        <h2 className="font-semibold">Inventory: {inventory} item(s)</h2>
        <h2 className="font-semibold">Simulated Revenue: ${simulatedRevenue.toFixed(2)}</h2>
        <h3 className="mt-2 font-semibold">History:</h3>
        <ul className="text-sm max-h-48 overflow-y-scroll border p-2 bg-white">
          {history.slice().reverse().map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GachaDemo;