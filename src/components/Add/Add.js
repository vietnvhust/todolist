import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function Add(props) {
  const {todoEdit}=props;
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    status: '0',
  });
  useEffect(() => {
    setTodo(todoEdit);
  }, [todoEdit]);
  useEffect(() => {
    return () => {
      setTodo({
        id: "",
        title: "",
        status: "0",
      });
    }
  }, [])
  function handleCloseForm() {
    props.onCloseForm();
    
  }
  function onSubmit(e) {
    if (
      todoEdit.id === "" ||
      todoEdit.id === "undefined" ||
      todoEdit.id === null ||
      todoEdit.id === undefined
    ) {
      todo.id = uuidv4();
    } else {
      todo.id = todoEdit.id;
    }
    props.onSubmit(todo);
    e.preventDefault();
  }
  function handleChange(e){
    const target = e.target;
    const name = target.name;
    const value = target.name === 'checkbox' ? target.checked : target.value
    setTodo({
      ...todo,
      [name]: value,
    });
  }  
  return (
    <>
      <div className="col-xs-12">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">Thêm Công Việc</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <label>Tên :</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  name="title"
                  value={todo.title}
                />
              </div>
              <label>Trạng Thái :</label>
              <select
                className="form-control"
                required="required"
                onChange={(e) => handleChange(e)}
                name="status"
                value={todo.status}
              >
                <option value="1">Kích Hoạt</option>
                <option value="0">Ẩn</option>
              </select>
              <br />
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Thêm
                </button>
                &nbsp;
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => handleCloseForm()}
                >
                  Hủy Bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

Add.propTypes = {};

export default Add;
