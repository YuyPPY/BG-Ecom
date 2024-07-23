import DataTable from "@/components/backend/DataTable";
import PageHeader from "@/components/backend/form/PageHeader";
import TableAction from "@/components/backend/TableAction";
import React from "react";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="ຂໍ້ມູນໂປຣໂມຊັ່ນ"
        href="/dashboard/exchange/new"
        linkTitle="ເພີ່ມຂໍ້ມູນໂປຣໂມຊັ່ນ"
      />
      {/* Table  Actions */}
      {/* Export || Search || Bulk Delete */}
      <TableAction />
      <div className="py-8">
        <DataTable/>
      </div>
    </div>
  //  selling_price
  //   promotion_name
  //   promotion_description
  //   start_date
  //   end_date
    
  );
}
