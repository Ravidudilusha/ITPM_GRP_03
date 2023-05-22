import { useState, useEffect } from "react";
import { storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditItem() {
  const [areaName, setAreaname] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrlP, setImageUrlForPreview] = useState(null);
  const { id } = useParams();

  useEffect(() => {
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
    console.log(id);
  }, []);

  function sendData(e) {
    e.preventDefault();

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

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Edit Area</h1>
      <form onSubmit={sendData}>
        <div>
          <div>
            <label>Upload Image</label>
            <br />
            <input
              type="file"
              onChange={(e) => {
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
                     console.log(url);
                    setImageUrl(url);
                  })
                  .catch((err) => console.log(err));
              }}
            />
          </div>
          {imageUrl && (
            <img src={imageUrl} alt="preview" width={200} height={150} />
          )}
        </div>
        <div className="form-group">
          <label for="areaName">Area</label>
          <input
            type="text"
            class="form-control"
            id="areaName"
            placeholder="Enter An Area"
            onChange={(e) => {
              setAreaname(e.target.value);
            }}
            value={areaName}
          />
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <input
            style={{ height: "200px" }}
            type="text"
            class="form-control"
            id="description"
            placeholder="Enter the Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditItem;
