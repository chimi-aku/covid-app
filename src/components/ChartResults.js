import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
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
                borderWidth: 1,
            },

        ]
        
        console.log(chartData)
    })();
    

    return(
    <div className="chart">
        <Line 
            data = {{
                labels: chartData.labels,
                datasets: [{
                    label: 'confirmed',
                    data: props.chartData.map(day => day.Confirmed),
                    //backgroundColor: 'rgb(163, 19, 48)',
                    borderColor: 'rgb(163, 19, 48)',
                    borderWidth: 1,
                },
                {
                    label: 'deaths',
                    data: props.chartData.map(day => day.Deaths),
                    //backgroundColor: 'rgb(46, 28, 32)',
                    borderColor: 'rgb(46, 28, 32)',
                    borderWidth: 1,
                },
                {
                    label: 'recovered',
                    data: props.chartData.map(day => day.Recovered),
                    //backgroundColor: 'rgb(23, 83, 8)',
                    borderColor: 'rgb(23, 83, 8)',
                    borderWidth: 1,
                },
            
            ]
            }}
            width={400} 
            height={300}
            options = {{
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
            }
               
        />
        {/* <Line
            data={chartData}
            width={40}
            height={40}
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
        /> */}
    </div>);
};

export default ChartResults;
