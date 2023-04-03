import "./App.css";
import LoadingBar from "react-top-loading-bar";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/NewzzApp"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="general"
                  pagesize="6"
                  country="in"
                  category="general"
                  titlename="Get Daily Newzz for Free!!"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="business"
                  pagesize="6"
                  country="in"
                  category="business"
                  titlename="Business"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="science"
                  pagesize="6"
                  country="in"
                  category="science"
                  titlename="Science"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="entertainment"
                  pagesize="6"
                  country="in"
                  category="entertainment"
                  titlename="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="technology"
                  pagesize="6"
                  country="in"
                  category="technology"
                  titlename="Technology"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="health"
                  pagesize="6"
                  country="in"
                  category="health"
                  titlename="Health"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="sports"
                  pagesize="6"
                  country="in"
                  category="sports"
                  titlename="Sports"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="general"
                  pagesize="6"
                  country="in"
                  category="general"
                  titlename="General"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
export default App;
