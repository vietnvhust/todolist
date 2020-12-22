import React from 'react'
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
function ButtonAdd(props) {
  function handleToggleForm() {
    props.handleToggleForm();
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleToggleForm()}
      >
        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
      </button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleForm: () => {
      dispatch(actions.toogleForm());
    },
  };
};

export default connect(null, mapDispatchToProps)(ButtonAdd);