import {useEffect,useState} from "react";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import {Header} from "./Header";
import "./index.css";
import SearchItem from "./SearchItem";

function App() {
  const API_URL = 'http://localhost:8000/items';
  const [items, setItems] = useState([]);

  useEffect(() => {
   const fetchItems = async () => {
    try {
      const response = await fetch(API_URL)
      const listItems = await response.json();
      console.log(listItems);
      setItems(listItems);
    } catch (err) {
      console.log(err.stack)
    }
   }

   (async () => await fetchItems())();
  }, [])

  const [
    newItem,
    setNewItem] = useState("")
  const [search, setSearch] = useState("")





  const addItem = (item) => {
     const id =items.length ? items[items.length -1].id + 1 : 1;
     const myNewItem = {id, checked: false, item}
     const listItems = [...items, myNewItem]
     setItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems)

    const myItem = listItems.filter((item) => item.id === id)
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    };
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
if (!newItem) return
addItem(newItem)
setNewItem("")
  }

  return (
    <div className="App">
      <Header title="Grocery List" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem
        search={search}
        setSearch={setSearch}
      />

      <Content
      items={items.filter(item =>
      ((item.item).toLowerCase())
      .includes(search.toLowerCase()))}

      handleCheck={handleCheck}
      handleDelete={handleDelete} />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
