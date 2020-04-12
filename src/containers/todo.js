import { connect } from 'react-redux';
import { createAction } from 'redux-actions';
import Todos from '../components/Todos';

const mapStateToProps = ({ todo }) => {
  return {
    list: todo.get('list').toJS(),
    isLoading: todo.get('loading'),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (name) => {
      const actcr = createAction('todo/add');
      dispatch(actcr(name));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
