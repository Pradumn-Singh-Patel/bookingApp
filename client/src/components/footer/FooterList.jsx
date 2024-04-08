import React from "react";

function FooterList({ keywords }) {
  return (
    <ul className="fList">
      {keywords?.map((item) => (
        <li className="fListItem">{item}</li>
      ))}
    </ul>
  );
}

export default FooterList;
