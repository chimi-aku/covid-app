import React, { Component } from 'react';
import Select from 'react-select';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
//import moment from 'moment';
import '../App.css';
import Results from './Results';
import Navigation from './Navigation';
import ErrorPage from './ErrorPage';
import Page from './Page';

class App extends Component {
    state = {
        country: '',
        time: '',
        data: {
            confirmed: '-',
            deaths: '-',
            recovered: '-',
        },
        chartData: []
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');

        if (this.state.country !== '' && this.state.time !== '') {
            const country = this.state.country.toLowerCase();
            const period = this.state.time;

            let currTimeInSecs = new Date().getTime();

            currTimeInSecs -= currTimeInSecs % (24 * 3600000);

            const currTimeUTC = new Date(currTimeInSecs).toISOString();

            let begTimeInSecs;
            const dayOneUTC = '2020-02-26T00:00:00Z';

            if (period === 'yesterday') {
                begTimeInSecs = currTimeInSecs - 2 * 24 * 3600000;
            } else if (period === 'last 7 days') {
                begTimeInSecs = currTimeInSecs - 7 * 24 * 3600000;
            } else if (period === 'last 30 days') {
                begTimeInSecs = currTimeInSecs - 30 * 24 * 3600000;
            }

            let begTimeUTC;
            if (period === 'whole time') {
                begTimeUTC = dayOneUTC;
            } else {
                begTimeUTC = new Date(begTimeInSecs).toISOString();
            }

            //console.log(currTimeUTC);
            //console.log(begTimeUTC);
            //console.log(country);
            
            let URL;

            if (country === 'world') {
                URL = `https://api.covid19api.com/world?from=${begTimeUTC}&to=${currTimeUTC}`;
                fetch(URL)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        const begDay = data[data.length - 1];
                        const currDay = data[0];

                        const confirmed =
                            currDay.TotalConfirmed - begDay.TotalConfirmed;
                        const deaths = currDay.TotalDeaths - begDay.TotalDeaths;
                        const recovered =
                            currDay.TotalRecovered - begDay.TotalRecovered;
                        console.log(confirmed, deaths, recovered);

                        this.setState({
                            data: {
                                confirmed: confirmed,
                                deaths: deaths,
                                recovered: recovered,
                            },
                            chartData: data
                        });
                    });
            } else {
                URL = `https://api.covid19api.com/country/${country}?from=${begTimeUTC}&to=${currTimeUTC}`;

                fetch(URL)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        const begDay = data[0];
                        const currDay = data[data.length - 1];

                        const confirmed = currDay.Confirmed - begDay.Confirmed;
                        const deaths = currDay.Deaths - begDay.Deaths;
                        const recovered = currDay.Recovered - begDay.Recovered;
                        console.log(confirmed, deaths, recovered);

                        this.setState({
                            data: {
                                confirmed: confirmed,
                                deaths: deaths,
                                recovered: recovered,
                            },
                            chartData: data
                        });
                        
                    });
            }
        } else {
            console.log('bad form');
            /*
                let d = new Date().getTime();
                console.log(d);
                d -= 7 * 24 * 3600000; //bo milisecs
                console.log(d);
                const cd = new Date(d).toISOString();
                console.log(cd);
                */
        }
    };

    handleFormChange = (e) => {
        //console.log(this.state);

        if (
            e.value === 'yesterday' ||
            e.value === 'last 7 days' ||
            e.value === 'last 30 days' ||
            e.value === 'whole time'
        ) {
            this.setState({
                time: e.value,
            });
        } else {
            this.setState({
                country: e.value,
            });
        }
    };

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state);
    }

    render() {
        //FORM OPTIONS
        const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
        /*
        const countries = [
            //{ value: 'World', label: 'World' }, // there is a problem
            { value: 'Poland', label: 'Poland' },
        ];
        */
       const countries = country_list.map(country => ({ value: country, label: country }))
        const timePeriods = [
            { value: 'yesterday', label: 'yesterday' },
            { value: 'last 7 days', label: 'last 7 days' },
            { value: 'last 30 days', label: 'last 30 days' },
            { value: 'whole time', label: 'whole time' },
        ];

        const selectStyle = {
            color: '#BFC0C0',
            backgroundColor: '#2D3142',
        };

        return (
            <HashRouter basename={'/'}>
                <div className="App">
                    <form onSubmit={this.handleSubmit} className="form">
                        <Select
                            options={countries}
                            //value={this.state.country}
                            onChange={this.handleFormChange}
                            isSearchable
                            placeholder="select country"
                            className="select"
                        />
                        <Select
                            options={timePeriods}
                            //value={this.state.country}
                            onChange={this.handleFormChange}
                            placeholder="select time period"
                            className="select"
                        />
                        <button type="submit" className="button button-5">
                            <div className="translate"></div>
                            <span>Submit</span>
                        </button>
                    </form>
                    <Navigation />
                    <div className="results">
                        <Page
                            data={this.state.data}
                            chartData={this.state.chartData}
                        />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
