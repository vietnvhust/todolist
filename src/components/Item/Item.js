import React from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
function Item(props) {
  function handleDeleteItem(id){
    props.onDelete(id);
  }
  function handleEditItem(id) {
    props.onEdit(id);
  }
  function handleChangeStatus(id) {
    props.onStatus(id);
  }
  const { redux_todos } = props;
  const elmItem = redux_todos.map((todo, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{todo.title}</td>
        <td className="text-center">
          {todo.status === "0" ? (
            <span
              onClick={() => handleChangeStatus(todo.id)}
              className="label label-success"
            >
              Inactive
            </span>
          ) : (
            <span
              onClick={() => handleChangeStatus(todo.id)}
              className="label label-success"
            >
              Active
            </span>
          )}
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => handleEditItem(todo.id)}
          >
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDeleteItem(todo.id)}
          >
            <span className="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    );
  });
  return <>{elmItem}</>;
}

Item.defaultProps = {
  list: [],
};

Item.propTypes = {};

const mapStateToProps = (state) => {
  return {
    redux_todos: state.todos,
  };
};
export default connect(mapStateToProps, null)(Item);