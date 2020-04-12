import { connect } from 'react-redux';
import Hello from '../components/Hello';

const mapStateToProps = ({ auth }) => {
  return {
    name: auth.get('name'),
  };
};

export default connect(mapStateToProps)(Hello);
