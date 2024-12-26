import React from 'react'
import PageTitle from '../compnents/common/PageTitle'
import AddTransactionForm from '../compnents/addtransaction/AddTransactionForm'
import { useParams } from 'react-router-dom'

function Transaction() {
  const {id}= useParams();
  const isAdd=id==="add";
  return (
    <div className='p-8'>
      
      <PageTitle title={isAdd? "Add Transaction" : "Edit Transaction"}/>
      <div>
        <AddTransactionForm/>
      </div>
    </div>
  )
}

export default Transaction
