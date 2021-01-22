import React, { FC } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Configurations, History, Order, Overview, Revenue, Users } from './pages/Overview';

const App: FC = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/overview" component={Overview} exact></Route>
                <Route path="/overview/users" component={Users} exact></Route>
                <Route path="/overview/revenue" component={Revenue} exact></Route>
                <Route path="/order" component={Order} exact></Route>
                <Route path="/history" component={History} exact></Route>
                <Route path="/configurations" component={Configurations} exact></Route>
            </Switch>
        </Router>
    );
};

export default App;
