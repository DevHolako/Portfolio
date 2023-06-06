import React from "react";

function Name({ title = "Rgubi Marouane" }) {
  return <span className="font-bold underline-hover-6 -p-1">{title}</span>;
}

export default Name;
