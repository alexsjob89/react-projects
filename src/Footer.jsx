import React from "react";

function Footer({ length }) {
  const today = new Date();

  return (
    <footer>
      <p>
        {length} List {length === 1 ? "Item" : "Items"}
      </p>

      <p style={{ fontSize: "10px", marginTop: "20px", marginLeft: "20px" }}>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
