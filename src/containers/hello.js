import { createAction } from "redux-actions";
import { connect } from "react-redux";
import Hello from "../components/Hello";

const mapStateToProps = ({ auth }) => {
  return {
    name: auth.get("name"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    click: () => {
      const actcr = createAction("hello/get");
      dispatch(actcr());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
