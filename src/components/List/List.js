import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";
import useDebounce from "../../custom-hook/useDebounce";

function List(props) {
  const { list } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchStatus, setsearchStatus] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    // Make sure we have a value (user has entered something in input)
    if (debouncedSearchTerm) {
      setIsSearching(true);
      if (searchCharacters(debouncedSearchTerm)) {
        setIsSearching(false);
        setResults(searchCharacters(debouncedSearchTerm));
      }
    } else {
      setResults(list);
    }
  }, [debouncedSearchTerm, list]);
  useEffect(() => {
    let newList = [...results];
    if (searchStatus === "1") {
      newList = newList.sort((a, b) =>
        parseInt(a.status) > parseInt(b.status)
          ? -1
          : parseInt(b.status) > parseInt(a.status)
          ? 1
          : 0
      );
    } else if (searchStatus === "0") {
      newList = newList.sort((a, b) =>
        parseInt(a.status) > parseInt(b.status)
          ? 1
          : parseInt(b.status) > parseInt(a.status)
          ? -1
          : 0
      );
    }
    setResults(newList);
  }, [searchStatus]);

  function searchCharacters(search) {
    let newList = [...list];
    if (search !== "") {
      newList = props.list.filter((obj) =>
        Object.values(obj).some((val) =>
          val.toString().toLowerCase().includes(search.toString().toLowerCase())
        )
      );
    }
    return newList;
  }
  function onDelete(id) {
    props.onDelete(id);
  }
  function onEdit(id) {
    props.onEdit(id);
  }
  function onStatus(id) {
    props.onStatus(id);
  }
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
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {isSearching && <div>Searching ...</div>}
                </td>
                <td>
                  <select
                    className="form-control"
                    onChange={(e) => setsearchStatus(e.target.value)}
                  >
                    <option value="-1">Tất Cả</option>
                    <option value="0">Ẩn</option>
                    <option value="1">Kích Hoạt</option>
                  </select>
                </td>
                <td></td>
              </tr>
              <Item
                list={results}
                onDelete={onDelete}
                onEdit={onEdit}
                onStatus={onStatus}
              ></Item>
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
