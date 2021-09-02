import React, {useState} from 'react';
import './addExpense.css';
import ExpenseForm from './ExpenseForm';

const AddExpense =(props)=>{

    

    const [active, setActive]= useState(false);

   const setNowActive=()=>{
    setActive(false);
   }
    const addToList=(object)=>{
        props.onChange(object);

    }




  
    if(active){
        return(
        <ExpenseForm valueCancel={setNowActive} onChange={addToList} />
        );

    }
    else{
        return(
            <div className="divcenter">
                 <button className="Button" onClick={()=>{ setActive(true)}}> Add Expenses</button>
            </div>
           

        );
    }
    


};

export default AddExpense;

