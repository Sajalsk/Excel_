import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ExcelUploader = () => {
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    if (selectedFile) {
      if (
        selectedFile.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
      } else {
        alert("File is Not Valid , Change the File");
      }
    }
  }, [selectedFile]);

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    if (
      selectedFile !==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      return;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("No file Selected");
      return;
    }
    if (
      selectedFile.type !==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      alert("Select the Right file type");
      return ;
    }
    const formData = new FormData();
    formData.append("excelFile", selectedFile);

    try {
      if (
        selectedFile.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        axios.post("http://localhost:8000/api/uploadExcelFile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        navigate("/thankyou");
        alert("Excel file uploaded and data inserted into MongoDB.");
      }
    } catch (error) {
      alert("Inserting the duplicate data in the Database");
    }
  };

  return (
    <div className="style ">
      <h1>Excel Files to MongoDB</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <div>
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExcelUploader;
