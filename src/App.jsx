import Item from "./components/Item";

const App = () => {
  return (
    <div>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item name="Space suit" isPacked={true} />
        <Item name="Helmet with a golden leaf" isPacked={true} />
        <Item name="Photo of Tam" isPacked={false} />
      </ul>
    </div>
  )
}

export default App;