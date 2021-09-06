
import './App.css';
import React, {useState} from 'react';
import AddExpense from './component/addExpense';
import Expenses from './component/Expenses';
import ExpenseItem from './component/ExpenseItem';

const ITEM_LIST=[
    {
    title: "Kitkat",
    price:200,
    date:new Date(2021,7,26)

    },
    {
      title: "LED Screen",
      price:200,
      date:new Date(2022,8,26)
    },
    {
      title: "iPhone 12",
      price:1099,
      date:new Date(2021,4,26)
    }
    
]

const App=()=> {



  const [itemList, setItemsList]=useState(ITEM_LIST);
  const addItemToList=(object)=>{
      setItemsList(oldList=>[...oldList, object]);
  }

 

  return(
    <div className="App">
      <AddExpense onChange={addItemToList}/>
      <hr/>
      <Expenses expenselist={itemList}/>
     


    </div>
  );
}

export default App;
