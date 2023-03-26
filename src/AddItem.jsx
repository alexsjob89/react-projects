import AddIcon from '@mui/icons-material/Add';
import React,{useRef} from 'react';

function AddItem({
 newItem, setNewItem, handleSubmit}) {
const inputRef = useRef()

  return (
    <form
    className="addForm"
    onSubmit={handleSubmit}>

<label htmlFor='addItem'>Add Item</label>
<input
   autoFocus
   ref={inputRef}
   id="addItem"
   type="text"
   placeholder="Add Item"
   required
   value={newItem}
   onChange={(e) => setNewItem(e.target.value)}
/>
<button
typy="submit"
arial-label="Add Item"
onClick={(e) => inputRef.current.focus()}>

<AddIcon style={{
 fontSize: "50px",
 textAlign: "center",
 paddingBottom: "30px",
 backgroundImage: "{ButtonLogo}"}}/>

     </button>
    </form>
  )
}

export default AddItem