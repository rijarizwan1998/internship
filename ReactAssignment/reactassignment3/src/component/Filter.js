import React from 'react';

import './Filter.css'


const filter=(props)=>{

    const filterChange=(event)=>{
        props.onChange(event.target.value);
    }

    



    return(
        <div className="expenses-filter expenses-filter__control">
            <label className="expenses-filter-label" >Filter by year: </label><span></span>
            <select className="expenses-filter-select" value={props.value} onChange={filterChange}>
             <option value='2022'>2022</option>
             <option value='2021'>2021</option>
             <option value='2020'>2020</option>
             <option value='2019'>2019</option>
            </select>


        </div>

    );

};

export default filter;