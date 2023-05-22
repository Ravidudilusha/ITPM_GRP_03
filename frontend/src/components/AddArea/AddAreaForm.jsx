import React, { useEffect, useState } from "react";
import "./AddAreaForm.css";
import { IoImageOutline } from "react-icons/io5";
import axios from "axios";
import { storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useParams } from "react-router-dom";

const AddAreaForm = () => {
  const [areaName, setAreaname] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrlP, setImageUrlForPreview] = useState(null);
  const { id } = useParams();
  const location=useLocation();
  console.log("location",location)
  useEffect(() => {
    if(id){
         axios
      .get("http://localhost:8090/area/get/" + id)
      .then((res) => {
        console.log(res.data);
        setAreaname(res.data.area.areaName);
        setDescription(res.data.area.description);
        setImageUrl(res.data.area.imageUrl);
      })
      .catch((err) => {
        alert(err.message);
      });
    }
    else{
        setAreaname("")
        setDescription("")
        setImageUrl(null)
    }
   
    console.log(id);
  }, [id]);

  function addData(e) {
    // e.preventDefault();

    const newArea = {
      areaName,
      description,
      imageUrl,
    };
    axios
      .post("http://localhost:8090/area/add", newArea)
      .then(() => {
        alert("Details Successfully Enterd!!");
        setAreaname("");
        setDescription("");
      })
      .catch((err) => {
        alert(err);
      });
  }
  function updateData(e) {
    // e.preventDefault();

    const newArea = {
      areaName,
      description,
      imageUrl,
    };
    axios
      .put("http://localhost:8090/area/update/" + id, newArea)
      .then(() => {
        alert("Details Successfully Enterd!!");
      })
      .catch((err) => {
        alert(err);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(location.pathname==="/add"){
        addData()
    }
    else{
updateData()
    }
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // preview the image
    const imageBlob = URL.createObjectURL(file);
    setImageUrlForPreview(imageBlob);

    // upload the image
    const imageRef = ref(storage, `avatar/${uuidv4()}`);
    uploadBytes(imageRef, file)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        setImageUrl(url);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="addAreaContainer">
      <div className="addImageDiv">
        {/* <IoImageOutline className="addImageIcon" /> */}
        <form onSubmit={handleSubmit}>
          <div className="formItem imageInputDiv">
            {!imageUrl && <label htmlFor="imageUpload">
              <IoImageOutline className="addImageIcon" />
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </label>}

            {imageUrl && (
            <img src={imageUrl} alt="preview" className="previewImage" />
          )}
          </div>
          <div className="formItem">
            <label className="inputLable" htmlFor="areaName">
              Area Name
            </label>
            <input
              className="areaName addInput"
              type="text"
              placeholder="Area Name"
              id="areaName"
              onChange={(e)=>setAreaname(e.target.value)}
              value={areaName}
            />
          </div>
          <div className="formItem">
            <label className="inputLable" htmlFor="discription">
              Description
            </label>
            <textarea
              className="areaDescription addInput"
              rows={6}
              type="text"
              placeholder="Description"
              id="description"
              onChange={(e)=>setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="buttonDiv">
            <button type="submit" className="saveButton">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAreaForm;
