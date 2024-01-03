import React from "react";

function NameList() {
  const names = ["Java", "React", "JavaScript", "NodeJS"];
  const nameList = names.map((name) => <h1> {name} </h1>);
  return <div>{nameList}</div>;
}

export default NameList;
