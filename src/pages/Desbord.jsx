import React from "react";
import PageTitle from "../compnents/common/PageTitle";
import MyChart from "../compnents/dashboard/MyChart";

function Desbord() {
  return (
    <div className="p-8">
      <PageTitle title="Dashbord" />
      <div>
        <MyChart/>
      </div>
    </div>
  );
}

export default Desbord;
