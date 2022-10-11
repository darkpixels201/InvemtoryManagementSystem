import React from "react";

const CustomSearchFilter = (props) => {
  return (
    <div>
      <div className="form-floating h-5 mt-1 " style={{display:"flex",justifyContent:"center"}}>
        <input
          style={{ height: 4, width: "80%", padding: 8, borderRadius:50 }}
          type="text"
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
