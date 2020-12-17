import Add from "./components/Add/Add";
import ButtonAdd from "./components/ButtonAdd/ButtonAdd";
import Fillter from "./components/Fillter/Fillter";
import List from "./components/List";
import React, { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);
  const [todo, setTodo] = useState({
    title: "",
    status: "0",
  });
  function onToggleForm($toggle) {
    setToggle($toggle);
  }
  function onCloseForm() {
    setToggle(false);
  }
  function onSubmit(todo) {
    setTodo(todo);
  }
  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        {/* Form Add */}
        {toggle ? <Add onSubmit={onSubmit} onCloseForm={onCloseForm} /> : ""}
        {/* Form Add */}
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          {/* Button Add */}
          <ButtonAdd oldToggle={toggle} onToggleForm={onToggleForm}></ButtonAdd>
          {/* Button Add */}
          {/* Filter */}
          <Fillter></Fillter>
          {/* Filter */}
          {/* List */}
          <List todo={todo}></List>
          {/* List */}
        </div>
      </div>
    </div>
  );
}

export default App;
