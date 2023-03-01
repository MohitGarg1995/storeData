import React from "react";
import Button from "@mui/material/Button";
import { clearAllusers } from "../Store/Slices/UserSlices";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const DeleteAll = () => {
    dispatch(clearAllusers());
  };
  return (
    <>
      <Box
        sx={{
          textAlign: "end",

          display: "flex",
          justifyContent: "flex-end",
          alignContent: "flex-end",
        }}
      >
        <Button
          onClick={DeleteAll}
          sx={{
            fontSize: "15px",
            background: "lightblue",
            marginTop: "5px",
            color: "blue",
            width: "18%",
          }}
        >
          Clear All
        </Button>
      </Box>
    </>
  );
};

export default DeleteAllUser;
