import React, {useState} from 'react';




import './ExpenseForm.css';


const ExpenseForm=(props)=>{
    const [thistitle, setTitle] = useState('');
    const [thisprice, setPrice] = useState('');
    const [myDate, setmyDate] = useState('')

    const [cancel,setCancel]=useState(true);
    const [okay, setOkay] = useState(false);

    const updateChange=()=>{
        let newdate= new Date(myDate);
        const obj={ title:thistitle, price:thisprice, date:newdate};
        props.onChange(obj); 
    };


return(
    <div className="divcenter">
        
        <input type="text" className="form__input" id="title" placeholder="Product Title" required="" onChange={event => setTitle(event.target.value)}/>
        <br>
        </br><input type="text" className="form__input" id="Price" placeholder="Price " required="" onChange={event => setPrice(event.target.value)}/>
        
        <input className="dateclass" type="date" min="2019-01-01" max="2022-12-31" onChange={event => setmyDate(event.target.value)}/>
        <button className="Button1" onClick={updateChange}>Add</button>
        <button className="Button1" onClick={()=>{ props.valueCancel(false)}}>Cancel</button>
    </div>


);



};
export default ExpenseForm;

