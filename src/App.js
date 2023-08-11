import React from "react";
import "./App.css";
import {Table} from "@Pankti16/my-table";

function App() {
  return (
    <div className="App">
      <Table
        dataSource={[
          {
            id: 1,
            body: "First Item",
            severity: 1,
            status: 0,
          },
          {
            id: 2,
            body: "Second Item",
            severity: 2,
            status: 1,
          },
        ]}
        sortableColumns={-1}
        isSelect
        onSelection={(vals) => {
          console.log(vals);
        }}
      />
    </div>
  );
}

export default App;
