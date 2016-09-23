import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
var handleToggle = function(){
    alert(123);
};
const App = () => (
    <MuiThemeProvider>
        <RaisedButton label="Default" onClick={handleToggle}/>
    </MuiThemeProvider>
);

render(<App/>, document.getElementById("app"));