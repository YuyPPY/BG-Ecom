import React from "react";
import WeeklySalesChart from "./WeeklySalesChart";
import BestSellingProductsCart from "./BestSellingProductsCart";

export default function DashBoardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <WeeklySalesChart />
      <BestSellingProductsCart />
    </div>
  );
}
