import { useEffect, useState } from "react";

const Dashboard = () => {

  useEffect(() => {
    // we need to make an api call
    fetch('https://6ad21f9966cd28aed82da8b7.mockapi.io/todos', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard;