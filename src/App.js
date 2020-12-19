import Add from "./components/Add/Add";
import ButtonAdd from "./components/ButtonAdd/ButtonAdd";
import Fillter from "./components/Fillter/Fillter";
import List from "./components/List";
import React, { useState, useEffect } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  const [list, setList] = useState([]);
  const [todoEdit, setTodoEdit] = useState({
    title: "",
    status: "0",
  });
  function onToggleForm($toggle) {
    setToggle($toggle);
    setTodoEdit({
      title: "",
      status: "0",
    });
  }
  function onCloseForm() {
    setToggle(false);
  }
  function onSubmit(todo) {
    let newList;
    const index = list.findIndex((x) => x.id === todo.id);
    if (index > 0) {
      list[index]["title"] = todo.title;
      list[index]["status"] = todo.status;
      newList = [...list];
    } else {
      newList = [...list, todo];
    }
    localStorage.setItem("getList", JSON.stringify(newList));
    setList(newList);
  }
  function onDelete(id) {
    const index = list.findIndex((x) => x.id === id);
    const newList = [...list];
    newList.splice(index, 1);
    localStorage.setItem("getList", JSON.stringify(newList));
    setList(newList);
  }
  function onEdit(id) {
    const index = list.findIndex((x) => x.id === id);
    const newList = [...list];
    setTodoEdit(newList[index]);
    setToggle(true);
  }
  function onStatus(id) {
    const index = list.findIndex((x) => x.id === id);
    const newList = [...list];
    if (newList[index].status === "0") {
      newList[index].status = "1";
    } else {
      newList[index].status = "0";
    }
    localStorage.setItem("getList", JSON.stringify(newList));
    setList(newList);
  }
  function onSubmitSearchTitle(searchTitle) {
    if (searchTitle !== "") {
      const newList = list.filter((obj) =>
        Object.values(obj).some((val) =>
          val
            .toString()
            .toLowerCase()
            .includes(searchTitle.toString().toLowerCase())
        )
      );
      setList(newList);
    } else {
      setList(JSON.parse(localStorage.getItem("getList")));
    }
  }
  function onSort(sort) {
    let newList = [...list];
    if (sort === "z-a") {
      newList = newList.sort((a, b) =>
        a.title > b.title ? -1 : b.title > a.title ? 1 : 0
      );
    } else if (sort === "active") {
      newList = newList.sort((a, b) =>
        parseInt(a.status) > parseInt(b.status)
          ? -1
          : parseInt(b.status) > parseInt(a.status)
          ? 1
          : 0
      );
    } else if (sort === "inactive") {
      newList = newList.sort((a, b) =>
        parseInt(a.status) > parseInt(b.status)
          ? 1
          : parseInt(b.status) > parseInt(a.status)
          ? -1
          : 0
      );
    } else {
      newList = newList.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
    }
    setList(newList);
  }
  useEffect(() => {
    const listLocalStorage = localStorage.getItem("getList")
      ? JSON.parse(localStorage.getItem("getList"))
      : [];
    setList(listLocalStorage);
  }, []);
  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        {/* Form Add */}
        {toggle ? (
          <Add
            onSubmit={onSubmit}
            onCloseForm={onCloseForm}
            todoEdit={todoEdit}
          />
        ) : (
          ""
        )}
        {/* Form Add */}
        <div className="col-xs-12">
          {/* Button Add */}
          <ButtonAdd oldToggle={toggle} onToggleForm={onToggleForm}></ButtonAdd>
          {/* Button Add */}
          {/* Filter */}
          <Fillter
            onSubmitSearchTitle={onSubmitSearchTitle}
            onSort={onSort}
          ></Fillter>
          {/* Filter */}
          {/* List */}
          <List
            list={list}
            onStatus={onStatus}
            onDelete={onDelete}
            onEdit={onEdit}
          ></List>
          {/* List */}
        </div>
      </div>
    </div>
  );
}

export default App;
