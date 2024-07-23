import CostomDataTable from "@/components/backend/CostomDataTable";
import DataTable from "@/components/backend/DataTable";
import PageHeader from "@/components/backend/form/PageHeader";
import TableAction from "@/components/backend/TableAction";
import React from "react";
import LargeCards from "@/components/backend/LargeCards";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="ຂາຍສິນຄ້າ"
        href="/dashboard/imports/new"
        linkTitle="ເພີ່ມຂາຍສິນຄ້າ"
      />
         <LargeCards/>
      {/* Table  Actions */}
      {/* Export || Search || Bulk Delete */}
      <TableAction />
      <div className="py-8">
        <DataTable/>
      </div>
    </div>  
  );
}
