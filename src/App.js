import React from "react";
import "./App.css";
import {Table} from "@Pankti16/my-table";

function App() {
  const tableRef = React.useRef();
  return (
    <div>
    <div className="my-button-group">
      <button className="my-button" onClick={() => {
        tableRef?.current?.setCustomTheme(true);
      }}>Change me</button>
      <button className="my-button" onClick={() => {
        tableRef?.current?.setCustomTheme();
      }}>Change back</button>
      </div>
      <Table
        ref={tableRef}
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
        sortableExcept={[0]}
        isSelect={true}
        isMultiSelect={false}
        customTheme={{
          "primary-color": 'orange',
          "hover-color": 'gold',
          "secondary-color": 'lightyellow',
          "grey-color": "lightgoldenrodyellow",
          "divider-color": "darkgoldenrod"
        }}
        primaryColumn={0}
        // customTableWrapperStyle={{backgroundColor: 'orange'}} //correct
        // customMoTableWrapperStyle={{backgroundColor: 'blanchedalmond'}} //correct
        // customTableWrapperStyle={{myColor: 'blue'}} //in-correct
        // customTableWrapperStyle="my-table-wrapper" //correct
        // customHeaderStyle={{backgroundColor: 'orange'}} //correct
        // customRowStyle={{backgroundColor: 'blanchedalmond'}} //correct
        mobileHeader={'My Table'}
        onSelection={(vals) => {
          console.log(vals);
        }}
      />
    </div>
  );
}

export default App;
