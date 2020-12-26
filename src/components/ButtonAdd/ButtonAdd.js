import React from 'react'

function ButtonAdd(props) {
  const { oldToggle } = props;
  function handleToggleForm() {
    props.onToggleForm(!oldToggle)
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleToggleForm()}
      >
        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
      </button>
    </>
  );
}

ButtonAdd.propTypes = {

}

export default ButtonAdd

