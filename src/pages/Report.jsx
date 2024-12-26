import React from "react";
import PageTitle from "../compnents/common/PageTitle";
import TransactionList from "../compnents/report/TransactionList";

function Report() {
  return (
    <div className="p-8">
      <PageTitle title="Report" />

      <div>
        <TransactionList />
      </div>
    </div>
  );
}

export default Report;
