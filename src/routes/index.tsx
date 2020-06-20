import * as React from 'react';
import { observer } from 'mobx-react';
import {
    Route,
    withRouter,
    Switch,
} from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import { endpoints } from './endpoints';
import NotFound from '../containers/not-found';
import MainMenu from '../components/main-menu';

// @ts-ignore
@withRouter //Question
@observer 
export default class Routes extends React.Component {
    render() {
        console.log(endpoints);
        return (
            <>
                <MainMenu />
                <Divider hidden={true} />
                <Switch>
                    {endpoints.map((route, i) => (                        
                        <Route key={i} {...route} />
                    ))}
                    <Route path='*' exact={true} render={props => <NotFound {...props} />} />
                </Switch>
            </>
        );
    }
}