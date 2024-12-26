import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import { expenseCategories, incomeCategories } from "../../data/Categories";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { transactionContext } from "../../App";

const intialState = {
  id: Date.now(),
  amount: "",
  type: "expense",
  category: "fuel",
  date: new Date().toISOString(),
};

function AddTransactionForm() {
  const { transactionsList, dispatch } = useContext(transactionContext);

  const { id } = useParams();
  const isAdd = id === "add";
  const [formState, setFormState] = useState(
    isAdd ? intialState : transactionsList.find((v) => v.id == id)
  );
  console.log("formstate", formState);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isAdd) {
      dispatch({ type: "ADD", payload: formState });
      e.target.reset();
      alert("Transaction Added!");
    } else {
      // const updatedTransactions = transactions.map((transaction, index) => {
      //   if (transaction.id == id) {
      //     return { ...transaction, ...formState };
      //   }
      //   return transaction;
      // });
      // console.log(updatedTransactions);
      // setTransactions(updatedTransactions);
      dispatch({ type: "UPDATE", payload: { id, formState } });
      alert("Transaction Updated!");
      // navigate("/reports");
    }
    console.log(e);
  }
  console.log("transactions", transactionsList);

  console.log("category", expenseCategories);
  return (
    <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <Label htmlFor="amount">Transcation Amount</Label>
        <TextInput
          name="amount"
          type="number"
          value={formState.amount}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Radio
            name="type"
            value="income"
            onChange={handleChange}
            id="income"
            checked={formState.type === "income"}
          />
          <Label htmlFor="income">Income</Label>
        </div>
        <div className="flex items-center gap-1">
          <Radio
            name="type"
            value="expense"
            onChange={handleChange}
            id="expense"
            checked={formState.type === "expense"}
          />
          <Label htmlFor="expense">Expense</Label>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label id="category">Category</Label>
        <Select
          htmlFor="category"
          name="category"
          value={formState.category}
          onChange={handleChange}
        >
          {(formState.type === "expense"
            ? expenseCategories
            : incomeCategories
          ).map((value) => {
            return <option value={value.value}>{value.name}</option>;
          })}
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="date">Transaction Date</Label>
        <TextInput
          id="date"
          name="date"
          type="date"
          onChange={handleChange}
          value={formState.date}
        />
      </div>
      <Button type="submit" className="text-black">
        Submit
      </Button>
    </form>
  );
}

export default AddTransactionForm;
