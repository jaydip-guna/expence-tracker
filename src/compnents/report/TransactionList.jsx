import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { transactionContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useFilters } from "../../hooks/useFilter";
function TransactionList() {
  const { transactionsList, dispatch } = useContext(transactionContext); 
console.log("transactionsList",transactionsList)
const navigate=useNavigate();
const { filteredTransactions, Filters } = useFilters();
console.log("filteredTransactions",filteredTransactions)
if(!transactionsList||!transactionsList.length ){
    <p>no transaction to show</p>
}
  console.log("transactions", transactionsList);
function handleEdit(id){
  navigate(`/transction/${id}`)
}           
function handleDelete(id,index){
  //  const filteredTransactions = transactions.filter((transaction) => {
  //     if (transaction.id === id) {
  //       return false;
  //     }
  //     return true;
  //   });
  //   setTransactions(filteredTransactions);
  // const newTransactions = [...transactions];
  // newTransactions.splice(index, 1);
  // setTransactions(newTransactions);
  // localStorage.setItem("transactions", JSON.stringify(newTransactions));
  dispatch({ type: "DELETE", payload: id });
  alert("Deleted successfully!");
}
  return (
    <div>
      <Filters/>
      <ul  className="flex flex-col gap-2">
        {filteredTransactions.map((transaction,index) => {
          return (
            <li
              className={`${
                transaction.type === "expense"
                  ? "bg-red-100 border border-red-200"
                  : "bg-green-100 border border-green-200"
              } p-2 rounded-md flex justify-end items-center`}
            >
              <div className="grow-[1]">
                <p className="font-bold">₹{transaction.amount}</p>
                <p>{transaction.category}</p>
              </div>
              <div className="flex items-center gap-1">
                <Button size="xs" color="green" onClick={()=>{handleEdit(transaction.id)}}>
                  <HiPencil />
                </Button>
                <Button size="xs" color="failure"  onClick={()=>{handleDelete(transaction.id)}}>
                  <HiTrash />
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TransactionList;
