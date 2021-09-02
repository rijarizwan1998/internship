import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Filter from './Filter'
import ExpenseList from './ExpenseList'



const Expenses=(props)=>{

    const [changedYear, setChangedYear]=useState("2022");

    const onChange=(newYear)=>{
       
        setChangedYear(newYear);
        
    }

    const filteredList= props.expenselist.filter((expense)=>{
        return expense.date.getFullYear().toString()===changedYear;
    });

    return(
        <div className="container">
             <div >
                <Filter onChange={onChange} value={changedYear}/>
        
             </div>
             <div>
            <ExpenseList list={filteredList}/>
            </div>

        </div>
    
    );





};

export default Expenses;