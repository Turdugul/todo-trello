import React from "react";


import styled from "@emotion/styled";
import List from "./List";

const Body = () => {
  return (
    <MyBody>
      {/* <Filter /> */}
      <div className="list-box">
        <List/>
      </div>
    </MyBody>
  );
};
const MyBody = styled("div")({
  color: "black",
  width: "100%",
  border: "1px",


  "& .list-box": {
    display: "flex",
    gap:'1rem',
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default Body;
