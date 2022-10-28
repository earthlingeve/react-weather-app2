import React, { useState } from "react";
//import axios from "axios";

export default function Form() {
  return (
    <div className="row">
      <form className="search-engine">
        <input
          type="search"
          className="col-6"
          placeholder="Search a City"
          autoFocus="on"
        />{" "}
        <input type="submit" className="col-3" />
      </form>
    </div>
  );
}
