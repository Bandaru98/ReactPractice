import React from "react";
import { courseContext } from "./CompA";

const CompC = () => {
  return (
    <div>
      <courseContext.Consumer>
        {(value) => <h2>Course name is {value}</h2>}
      </courseContext.Consumer>
    </div>
  );
};

export default CompC;
