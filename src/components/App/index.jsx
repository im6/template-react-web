import React, { Component, PropTypes } from 'react';
import { DatePicker } from 'antd';
import { connect } from 'react-redux';

const App = (test) => {
    debugger;
    return (
        <div>
            This is a app data picker
            <DatePicker/>
        </div>

    );
};
function mapStateToProps({list}) {
    debugger;
    return {
        todos: list
    };
}

export default connect(mapStateToProps)(App);
