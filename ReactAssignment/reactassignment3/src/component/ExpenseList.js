import React from 'react';
import ExpenseItem from './ExpenseItem';


const expenselist=(props)=>{
return(
    <div>
    {
        props.list.map((expense)=>(
        <div>
        <ExpenseItem

            title={expense.title}
            price={expense.price}
            date={expense.date}/>
        
        </div>

        ))
    }

    </div>
    );

}
export default expenselist;