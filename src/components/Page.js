import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Importing pages
import Results from './Results';
import ChartResults from './ChartResults';
import ErrorPage from './ErrorPage';

const Page = (props) => {
    return (
        <>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={() => <Results data={props.data} />}
                />
                <Route
                    path="/chart"
                    component={() => 
                        <ChartResults chartData={props.chartData} />
                    }
                />
                <Route path="/" component={ErrorPage} />
            </Switch>
        </>
    );
};

export default Page;
