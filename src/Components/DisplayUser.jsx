import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box } from "@mui/material";
import "./style.css";
import { removeUser } from "../Store/Slices/UserSlices";
import { useDispatch } from "react-redux";
import { grey } from "@mui/material/colors";
// with the help of useselector hook we can access the data & state represent the complete data in (store)
// example is   like user   user:usersSlice.reducer

const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.user;
  });
  console.log("usesElector data hooks", data);

  const deleteUser = (id) => {
    console.log("delete this data..", id);
    dispatch(removeUser(id));
  };
  return (
    <Wrapper>
      <div>
        {data.map((value, id) => (
          <Box className="box" key={id}>
            <Box className="text">{value}</Box>
            <Box className="inputData">
              <DeleteForeverIcon
                sx={{ fontSize: "32px" }}
                onClick={() => deleteUser()}
              />
            </Box>
          </Box>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  div {
    text-align: left;
  }
  li {
    border: 1px solid red;
  }
`;
export default DisplayUser;

{
  /* <li key={id}>
            
            </li> */
}
