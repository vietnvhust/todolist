import React from 'react'
import PropTypes from 'prop-types'

function ButtonAdd() {
	function handleCloseForm() {
		console.log("aaaa");
	}
	return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleCloseForm()}
      >
        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
      </button>
    </>
  );
}

ButtonAdd.propTypes = {

}

export default ButtonAdd

