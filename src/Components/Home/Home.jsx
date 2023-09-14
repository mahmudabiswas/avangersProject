import React from "react";
import "./Home.css";

const home = ({ item }) => {
  const { id, name, age, role, image, salary, county, fbUrl, twitter } = item;
  console.log(item);
  return (
    <div className="container ">
      <div className="home-container ">
        <div className="card-container ">
          <div className="card">
            <div className="card-img  m-auto">
              <img src={image} alt="" className="photo" />
            </div>

            <p>{name}</p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <div className="info ">
              <p> Salary : {salary}</p>
              <p> {role} </p>
            </div>
            <button className=" btn btn-accent">Select</button>
          </div>
        </div>
        <div className=" text-6xl text-white">
          <h1 className="">hello world</h1>
        </div>
      </div>
    </div>
  );
};

export default home;
