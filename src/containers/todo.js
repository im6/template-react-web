import { connect } from "react-redux";
import Todos from "../components/Todos";

const mapStateToProps = ({ todo }) => {
  return {
    list: todo.get("list"),
    isLoading: todo.get("loading"),
  };
};

export default connect(mapStateToProps)(Todos);
