import React, {PropTypes} from 'react';
import { render } from 'react-dom';

//const ErrorPage = ()=>{
//    return <h1> this is Error Page Container </h1>;
//};

class ErrorPage extends React.Component {

    static propTypes = {
        children: PropTypes.element.isRequired,
    };

    render() {
        // NOTE: If you need to add or modify header, footer etc. of the app,
        // please do that inside the Layout component.
        return <h1> this is Error Page Container </h1>;
    }

}

export default ErrorPage;