import { Select, TextInput } from "flowbite-react";
import { transactionContext } from "../App";

const { useState, useContext } = require("react");

export function getFilteredTransactions(transactionsList, type, fromDate, toDate) {
  const hasDates = fromDate && toDate ? true : false;
  let fromDateObj = hasDates ? new Date(fromDate) : null;
  let toDateObj = hasDates ? new Date(toDate) : null;

  let filteredTransactions = transactionsList?.filter((value) => {
    if (hasDates) {
      const dateObj = new Date(value.date);
      if (
        dateObj >= fromDateObj &&
        dateObj <= toDateObj &&
        value.type === type
      ) {
        return true;
      } else {
        return false;
      }
    }
    return value.type === type;
  });

  return filteredTransactions || [];
}

export function useFilters() {
  const { transactionsList } = useContext(transactionContext);
  const [type, setType] = useState("income");
  const [dateRange, setDateRange] = useState({
    fromDate: "",
    toDate: "",
  });

  const filteredTransactions = getFilteredTransactions(
    transactionsList,
    type,
    dateRange.fromDate,
    dateRange.toDate
  );

  function Filters() {
    function handleDateChange(e) {
      setDateRange({ ...dateRange, [e.target.name]: e.target.value });
    }

    function handleTypeChange(e) {
      setType(e.target.value);
    }

    return (
      <div className="grid grid-cols-3 gap-4 mb-4">
        <TextInput
          type="date"
          name="fromDate"
          value={dateRange.fromDate}
          onChange={handleDateChange}
        />
        <TextInput
          type="date"
          name="toDate"
          value={dateRange.toDate}
          onChange={handleDateChange}
        />
        <Select value={type} onChange={handleTypeChange}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </Select>
      </div>
    );
  }

  return {
    filteredTransactions,
    Filters,
  };
}
