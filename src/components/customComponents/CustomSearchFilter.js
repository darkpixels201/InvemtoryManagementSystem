import React from "react";

const CustomSearchFilter = (props) => {
  return (
    <div>
      <div className="form-floating h-5 mt-1 align-items-center">
        <input
          style={{ height: 4, width: "100%", padding: 5 }}
          type="text"
          className=" rounded"
          id="floatingInput"
          placeholder={props.placeholder}
          onChange={props.onChange}
          // onChange={(txt) => {
          //   let data = tableExample.filter((item) =>
          //     item.user.name.includes(txt) ? item : ""
          //   );
          //   setFilterList(data);
          //   console.log("Fltered Data",data);
          // }}
        />
        {/* <label>Search</label> */}
      </div>
    </div>
  );
};

export default CustomSearchFilter;
