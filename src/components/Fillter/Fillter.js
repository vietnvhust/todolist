import React from "react";
import PropTypes from "prop-types";

const Fillter = (props) => (
  <>
    <div className="row mt-15">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
          />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button">
              <span className="fa fa-search mr-5"></span>Tìm
            </button>
          </span>
        </div>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
            </li>
            <li>
              <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
            </li>
            <li role="separator" className="divider"></li>
            <li>
              <span role="button">Trạng Thái Kích Hoạt</span>
            </li>
            <li>
              <span role="button">Trạng Thái Ẩn</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

const FillterPropTypes = {
  // always use prop types!
};

Fillter.propTypes = FillterPropTypes;

export default Fillter;
