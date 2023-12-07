import React from "react";
import { HiPlusSm } from "react-icons/hi";
import axios from "axios";

const Button = () => {
  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", e.target.files[0]);

    axios
      .post("http://localhost:8000/api/save", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <label className="button" htmlFor="file_picker">
      <HiPlusSm />
      <input hidden type="file" name="file_picker" id="file_picker" onChange={(e) => handleChange(e)} />
    </label>
  );
};

export default Button;
