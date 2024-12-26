import React, { createContext, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyLayout from "./layout/MyLayout";
import Desbord from "./pages/Desbord";
import Report from "./pages/Report";
import Transaction from "./pages/Transaction";

export const transactionContext = createContext([]);

const intialState = JSON.parse(localStorage.getItem("transactions")) || [];
function reducer(transactionsList, action) {
  if (action.type === "ADD") {
    const newTransactionList = [...transactionsList, action.payload];
    localStorage.setItem("transactions", JSON.stringify(newTransactionList));

    return newTransactionList;
  } else if (action.type === "UPDATE") {
    console.log(action.payload);
    const newTransactionList = transactionsList.map((transaction) => {
      if (transaction.id === Number(action.payload.id)) {
        return { ...transaction, ...action.payload.formState };
      }
      return transaction;
    });
    localStorage.setItem("transactions", JSON.stringify(newTransactionList));
    return newTransactionList;
  } else if (action.type === "DELETE") {
    const newTransactionList = transactionsList.filter((transaction) => {
      if (transaction.id === action.payload) {
        return false;
      }
      return true;
    });
    localStorage.setItem("transactions", JSON.stringify(newTransactionList));
    return newTransactionList;
  } else {
    return transactionsList;
  }
}
function App() {
  const [transactionsList, dispatch] = useReducer(reducer, intialState);
  return (
    <transactionContext.Provider
      value={{
        //  transactions, setTransactions
        transactionsList,
        dispatch,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLayout />}>
            <Route index element={<Desbord />}></Route>
            <Route path="/Report" element={<Report />}></Route>
            <Route path="/transction/:id" element={<Transaction />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </transactionContext.Provider>
  );
}

export default App;
