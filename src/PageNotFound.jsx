import React from "react";
import NavBar from "./components/NavBar";

function PageNotFound() {
  return (
    <>
      <NavBar></NavBar>
      <main className="container">
        <div className="row justify-content-center mt-3 mb-4">
          <div className="col-8">
            <h1 className="text-danger">Error (Page Not Found)</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default PageNotFound;
