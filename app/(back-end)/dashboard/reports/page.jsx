import CostomDataTable from "@/components/backend/CostomDataTable";
import DashBoardCharts from "@/components/backend/DashBoardCharts";
import Heading from "@/components/backend/heading";
import LargeCards from "@/components/backend/LargeCards";
import SmallCards from "@/components/backend/SmallCards";
import React from "react";

export default function page() {
  return (
    <div>
      <Heading title="ລາຍງານ" />
      {/* Large Cards */}
      <LargeCards/>
      {/* small Cards */}
      {/* Charts */}
      {/* <DashBoardCharts/> */}
      {/* Recent Orders Table */}
      {/* <CostomDataTable/> */}
    </div>
  );
}
