import React from "react";

function Item(props) {
  const { list } = props;
  const elmItem = list.map((todo, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{todo.title}</td>
        <td className="text-center">
          <span className="label label-success">{todo.status}</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
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

export default Item;
