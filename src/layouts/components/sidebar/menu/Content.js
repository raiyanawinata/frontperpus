import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../../../../modules/dash/Dashboard";
import TabelNav from "../../../../modules/pinjam/tabel/TabelNav";
import DashboardPage from "./DashboardPage";



const Content = () => {
  return (
    <>
      <Route path="/dashboard" element={DashboardPage} />
      <Route exact path="/koleksi-buku" component={Dashboard} />
      <Route exact path="/data-peminjaman" component={TabelNav} />
    </>
  );
};

export default Content;
