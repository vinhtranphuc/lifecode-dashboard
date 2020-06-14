import React from "react";
import { Container, Button } from "shards-react";

const Error404 = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>404</h2>
        <h3>Oops! This Page Could Not Be Found</h3>
        <p>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST,<br></br> HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
        <Button pill>&larr; <a href="/" style={{color:"#ffffff"}}>Go to home page</a></Button>
      </div>
    </div>
  </Container>
);

export default Error404;