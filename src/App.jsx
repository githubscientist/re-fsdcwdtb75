import Item from "./components/Item";

const App = () => {
  return (
    <div>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item name="Space suit" />
        <Item name="Helmet with a golden leaf" />
        <Item name="Photo of Tam" />
      </ul>
    </div>
  )
}

export default App;