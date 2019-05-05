import React, { Component } from 'react';
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';
import Login from './src/pages/Login';

export default class Routes extends Component<{}> {
    render() {
        return(
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login" hideNavBar={true}  initial={true}/>
                </Stack>
            </Router>
        );
    }
}