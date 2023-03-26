import DeleteIcon from "@mui/icons-material/Delete";
import React from 'react';


function LineItem({ item, handleCheck, handleDelete }) {
  return (
   <li className="item" >
          <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleCheck(item.id)} />

          <label
          onDoubleClick={() => handleCheck(item.id)} style={item.checked ? { textDecoration: "line-through" } : null}>
            {item.item}
          </label>

          <DeleteIcon
          role="button"
          tabIndex="0"
          onClick={() => handleDelete(item.id)}
          aria-label={`Delete ${item.item}`} />
        </li>
  )
}

export default LineItem