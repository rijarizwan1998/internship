import React from 'react';
import './Chart.css';
import './ChartBar';
import ChartBar from './ChartBar';


const Chart=(props)=>{

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
      ];

      for (const expense of props.list) {
        const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.price;
      }
      const dataPointValues = chartDataPoints.map(dataPoint => dataPoint.value);
      const totalMaximum = Math.max(...dataPointValues);
    debugger;
return(
    
          <div className="container1">
          {
          chartDataPoints.map(dataPoint => <ChartBar
          key= {dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.value}
          maxValue={totalMaximum}
          />)
          }
      </div>
    
    );




}
export default Chart;
