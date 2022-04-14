import React, { useState } from 'react';
import './App.css';
import { Search } from './lib';


function App() {

  const [value, setValue] = useState("");
  const change = (val) => {
    setValue(val);
  }

  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ]

  const callback = (data) => {
    console.log(data);
  }
  return (
    <div className="App">
      <Search searchText={value} data={data} filteredData={callback} onSearchChange={change}/>
    </div>
  );
}

export default App;
