import React, { Component, PropTypes } from 'react';
import { DatePicker } from 'antd';

const Ab = (test) => {
    debugger;
    return (
        <div>
            This is a app data picker
            <DatePicker/>
        </div>

    );
};

Ab.propTypes = {
};

function mapStateToProps(state) {
    debugger;
    return {
        value: state.count
    }
}

const App = connect(
    mapStateToProps
)(Ab);


export default App;
