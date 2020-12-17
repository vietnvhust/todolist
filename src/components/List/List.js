import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Item from "../Item/Item";

function List(props) {
  const [list, setList] = useState([]);
  const { todo } = props;
  todo.id = uuidv4();
  const listLocalStorage = localStorage.getItem("todolist") ? localStorage.getItem("todolist") : [];
  const newList = [...listLocalStorage, todo];
  useEffect(()=>{
    
  },[list]);
  return (
    <>
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <select className="form-control">
                    <option value="-1">Tất Cả</option>
                    <option value="0">Ẩn</option>
                    <option value="1">Kích Hoạt</option>
                  </select>
                </td>
                <td></td>
              </tr>
              <Item list={list}></Item>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

Item.propTypes = {
  list: PropTypes.array,
};

export default List;
