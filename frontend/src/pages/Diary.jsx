import React from "react";
import { useParams } from "react-router-dom";
function Diary() {
  let params = useParams();
  return (
    <>
      <h1>Diary Page</h1>
      <h1>{params.date}</h1>
    </>
  );
}

export default Diary;
