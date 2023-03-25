import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

function ItemList({ items, handleCheck, handleDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li className="item" key={item.id}>
          <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
          <label onDoubleClick={() => handleCheck(item.id)} style={item.checked ? { textDecoration: "line-through" } : null}>
            {item.item}
          </label>

          <DeleteIcon role="button" tabIndex="0" onClick={() => handleDelete(item.id)} />
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
