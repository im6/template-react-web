import { connect } from "react-redux";
import Todos from "../components/Todos";

const mapStateToProps = ({ todo }) => {
  console.log("he 123");
  return {
    list: todo.get("list").toJS(),
    isLoading: todo.get("loading"),
  };
};

export default connect(mapStateToProps)(Todos);
