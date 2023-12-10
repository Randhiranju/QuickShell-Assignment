import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Bars
        color="#3498db"
        height={20}
        width={40}
        margin="10px"
      />
      <span
        style={{
          color: "#3498db",
          fontSize: "1.5em",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        QuickShell
      </span>
    </div>
  );
};

export default Loader;
