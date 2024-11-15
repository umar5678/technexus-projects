import React from "react";

const Container = ({ children }) => {
  return <div className="pt-20 mx-4 md:mx-10 xl:mx-20 2xl:mx-40">{children}</div>;
};

export default Container;


// i will use this container to add padding-top: 20 and mx-4 to each page