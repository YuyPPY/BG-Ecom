import CostomDataTable from "@/components/backend/CostomDataTable";
import DataTable from "@/components/backend/DataTable";
import PageHeader from "@/components/backend/form/PageHeader";
import TableAction from "@/components/backend/TableAction";
import React from "react";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="ນຳເຂົ້າສິນຄ້າ"
        href="/dashboard/imports/new"
        linkTitle="ເພີ່ມນຳເຂົ້າສິນຄ້າ"
      />
      {/* Table  Actions */}
      {/* Export || Search || Bulk Delete */}
      <TableAction />
      <div className="py-8">
        <DataTable/>
      </div>
    </div>  
  );
}
