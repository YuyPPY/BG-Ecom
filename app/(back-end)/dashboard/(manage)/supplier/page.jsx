import DataTable from "@/components/backend/DataTable";
import PageHeader from "@/components/backend/form/PageHeader";
import TableAction from "@/components/backend/TableAction";
import React from "react";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="ຂໍ້ມູນຜູ້ສະໜອງ"
        href="/dashboard/supplier/new"
        linkTitle="ເພີ່ມຂໍ້ມູນຜູ້ສະໜອງ"
      />
      {/* Table  Actions */}
      {/* Export || Search || Bulk Delete */}
      <TableAction />
      <div className="py-8">
        <DataTable/>
      </div>
    </div>
    // emp_lname
    // emp_gender
    // emp_village
    // emp_district
    // emp_provine
    // emp_roles
    // emp_tel
    
  );
}
