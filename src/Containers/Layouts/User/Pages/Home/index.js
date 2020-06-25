import React, { useState } from "react";
import { connect } from "react-redux";
// import AllPosts from './AllPosts'

function Home(props) {
  console.log(props);
  const [search, setSearch] = useState("");

  const data = props.Profile.map((item, index) => {
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
      return (
        <div className="container" key={index}>
          <div className="border rounded mb-5">
            <div>
              <h1 className="text-center">{item.name}</h1>
            </div>
            <div>
              <img className="img-fluid w-100" src={item.content} alt="pic" />
            </div>
            <div></div>
          </div>
        </div>
      );
    }
    return null;
  });

  return (
    <div className="row ">
      <div className="col col-sm-12 col-md-7 col-lg-7 col-xl-7">
        <input
          className="form-control mb-4"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {data}
      </div>

      <div className="col col-sm-12 col-md-5 col-lg-5 col-xl-5 fixed">
        <div className="border rounded">
          <div className="bg-primary text-center">
            <h1>Ram</h1>
          </div>
          <div>
            <div className="round bg-success"></div>
            <span>Ram</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Profile: state.Profile.userArray,
  };
};

export default connect(mapStateToProps, null)(Home);
