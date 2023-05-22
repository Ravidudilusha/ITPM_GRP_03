import React, { useState, useEffect } from "react";
import axios from "axios";
import edit from "./edit.module.css";
import { Link } from "react-router-dom";

function Edit() {
  const [Area, setArea] = useState([
    {
      areaName: "",
      description: "",
      imageUrl: "",
    },
  ]);
  function getArea() {
    axios
      .get("http://localhost:8090/area/")
      .then((res) => {
        setArea(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  useEffect(() => {
    getArea();
  }, []);

  return (
    <div>
      <div className={edit.bar}>
        <div className={edit.title}>
          <h2>Overview</h2>
        </div>
      </div>
      <div className={edit.contend}>
        {Area.map((area) => (
          <div key={area._id} className={edit.card}>
            <div className={edit.image}>
              <img
                src={area.imageUrl}
                alt=""
                srcset=""
                className={edit.styleimg}
              />
            </div>
            <div className={edit.text}>
              <div className={edit.texttile}>{area.areaName}</div>
              <div className={edit.descriptiom}>{area.description}</div>
              <div className={edit.btn}>
                {/* <button className={edit.edit}>Edit</button> */}
                <Link className={edit.edit} to={area._id}>
                  Edit
                </Link>
                <button
                  className={edit.delect}
                  onClick={() => {
                    if (window.confirm("Are you sure to delete ?")) {
                      axios
                        .delete("http://localhost:8090/area/delete/" + area._id)
                        .then(() => {
                          getArea();
                        });
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className={edit.empty}></div>
      </div>
      <div className={edit.footer}>
        <div className={edit.fotterbtn}>
          <button className={edit.save}>Save and chanege</button>
          <button className={edit.add}>Insert new area</button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
