import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <h1 className="home">
        <h1>Home Page</h1>
        <div className="home__section">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUlZdmbdP9aMWJ9x48Jos20m4GYSsdc8rNA&usqp=CAU"
            alt="Bhavesh Thakur"
          />
        </div>
        <div className="home__details">
          <h1>Bhavesh Thakur</h1>
        </div>
      </h1>
    </>
  );
}

export default Home;
