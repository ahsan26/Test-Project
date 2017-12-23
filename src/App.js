import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import { connect } from "react-redux";
import { increament, decreament } from "./Actions/counterActions";
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={_ => (<Home increament={this.props.increament} counterVal={this.props.counter.counter} decreament={this.props.decreament} />)} />
                    <Route render={_ => (<div className="container"><h1>404 Not Found</h1></div>)} />
                </Switch>
            </Router>
        );
    }
}
export default connect((state) => ({ counter: state.CounterReducer }), dispatch => ({
    increament: _ => { dispatch(increament()); },
    decreament: _ => { dispatch(decreament()); }
}))(App);