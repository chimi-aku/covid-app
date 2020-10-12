import React from 'react';
import { Bar } from 'react-chartjs-2';
import Page from './Page';

const ChartResults = (props) => {
    const chartData = {
        labels: '',
        datasets: []
        
    };

    // Setting chart properities
    (function(){
        chartData.type = 'line';
        chartData.labels = props.chartData.map(day => day.Date.substring(0,10));
        chartData.datasets = [
            {
                label: 'confirmed',
                data: props.chartData.map(day => day.Confirmed),
                backgroundColor: 'rgb(163, 19, 48);',
                borderColor: 'rgb(163, 19, 48);',
            },
        ]
        
    })();
    

    return(
    <div className="chart">
        <Bar
            data={chartData}
            options={{
                title: {
                    text: 'covid chart',
                    fontSize: 25
                },
                legend: {
                    display: true,
                    position: 'rignt'
                }
            }}
        />
    </div>);
};

export default ChartResults;
