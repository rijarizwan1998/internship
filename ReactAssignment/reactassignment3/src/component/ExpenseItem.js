import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const expenseItem=(props)=>{
    return(
        <div className="expense-item">
            
            <div className="expense-item__description">
            <ExpenseDate date={props.date}/>
            <h2>{props.title}</h2>
            <h2 className="expense-item__price">${props.price}</h2>
            </div>
       
      </div>
    

    );

};


export default expenseItem;
