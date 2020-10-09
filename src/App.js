import React, { Component } from 'react';
import Select from 'react-select';

//import moment from 'moment';
import './App.css';

class App extends Component {
    state = {
        country: '',
        time: '',
        mode: 'numbers',
        data: {
            confirmed: '',
            deaths: '',
            recovered: '',
        },
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');

        if (this.state.mode === 'numbers') {
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
                console.log(country);
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
                            const deaths =
                                currDay.TotalDeaths - begDay.TotalDeaths;
                            const recovered =
                                currDay.TotalRecovered - begDay.TotalRecovered;
                            console.log(confirmed, deaths, recovered);

                            this.setState({
                                data: {
                                    confirmed: confirmed,
                                    deaths: deaths,
                                    recovered: recovered,
                                },
                            });
                        });
                } else {
                    URL = `https://api.covid19api.com/country/${country}?from=${begTimeUTC}&to=${currTimeUTC}`;

                    fetch(URL)
                        .then((response) => response.json())
                        .then((data) => {
                            const begDay = data[0];
                            const currDay = data[data.length - 1];

                            const confirmed =
                                currDay.Confirmed - begDay.Confirmed;
                            const deaths = currDay.Deaths - begDay.Deaths;
                            const recovered =
                                currDay.Recovered - begDay.Recovered;
                            console.log(confirmed, deaths, recovered);

                            this.setState({
                                data: {
                                    confirmed: confirmed,
                                    deaths: deaths,
                                    recovered: recovered,
                                },
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
        console.log(this.state.data);
    }

    render() {
        //FORM OPTIONS
        const countries = [
            //{ value: 'World', label: 'World' }, // there is a problem
            { value: 'Poland', label: 'Poland' },
        ];

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
                <button className="button button-5">
                    <div className="translate"></div>
                    <span>Graph</span>
                </button>
                <div className="results">
                    <div className="data confirmed">
                        <p>Confirmed:</p>
                        <p className="num">{this.state.data.confirmed}</p>
                    </div>
                    <div className="data deaths">
                        <p>Deaths:</p>
                        <p className="num">{this.state.data.deaths}</p>
                    </div>
                    <div className="data recovered">
                        <p>Recovered:</p>
                        <p className="num">{this.state.data.recovered}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
