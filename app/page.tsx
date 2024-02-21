import React from "react";
import axios from "axios";

const Home = async () => {




  // req body
  const bodyResp = await axios.post(
    "/api/text",
    {
      text: "example-text",
    },
    { withCredentials: true }
  );




  // req params

  const paramId: string = "12345";

  const paramsResp = await axios.get(`/api/text/${paramId}`, {
    withCredentials: true,
  });




  // req query

  const queryId: string = "12345";

  const queryResp = await axios.delete(`/api/text?id=${queryId}`, {
    withCredentials: true,
  });



  // form data request

  const formText: string = "text"

  const formData = new FormData()

  formData.append("text", formText)

  const formResp = await axios.post("/api/form", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  })



  // multiple files without multer

  const files: any = [{ file1: "file1" }, { file2: "file2" }]

  const formDatafiles = new FormData()

  files.map((file: any, i: number) => {
    formDatafiles.append(`file${i}`, file)
  })

  const filesResp = await axios.post("/api/files", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  })

  return <>SEE_CODE_NOT_UI</>;
};

export default Home;
