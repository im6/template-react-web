import React from 'react';
import { render } from 'react-dom';
import { DatePicker } from 'antd';

const App = React.createClass({
    render: () =>{
        return <DatePicker />
    }
});

render(<App/>, document.getElementById("app"));