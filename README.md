## Installation

``` npm i react-search-universal ```

## Usage

```import React, { useState } from 'react';
import { Search } from 'react-search-universal';


function App() {

  const [value, setValue] = useState("");
  const onSearch = (val) => {
    setValue(val);
  }

  const data = [
    {
      name: "Carl",
      role: "Engineer",
    },
    {
      name: "Josh",
      role: "Doctor",
    },
    {
      name: "Mark",
      role: "Lawyer",
    },
    {
      name: "Karthik",
      role: "Architect",
    },
    {
      name: "Philips",
      role: "Actor",
    },
  ]

  const callback = (data) => {
    console.log(data);
  }
  return (
    <div className="App">
      <Search searchText={value} data={data} filteredData={callback} onSearchChange={onSearch}/>
    </div>
  );
}

export default App;
```

## License
MIT Licensed. Copyright (c) Hari Prasad 2022.

