const History = ({ clicks }) => {
  return (
    <p>History of Clicks: { clicks.join(', ') }</p>
  )
}

export default History;