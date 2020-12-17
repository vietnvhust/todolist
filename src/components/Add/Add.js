import React from "react";
import PropTypes from "prop-types";

function Add(props) {
  function handleCloseForm() {
    props.onCloseForm();
  }
  return (
    <>
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              Thêm Công Việc
            </h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label>Tên :</label>
                <input type="text" className="form-control" />
              </div>
              <label>Trạng Thái :</label>
              <select className="form-control" required="required">
                <option value="1">Kích Hoạt</option>
                <option value="0">Ẩn</option>
              </select>
              <br />
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Thêm
                </button>
                &nbsp;
                <button type="submit" className="btn btn-danger" onClick={() => handleCloseForm()}>
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
