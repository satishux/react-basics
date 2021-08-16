import React, { useState } from 'react';

import './App.css';

import Input from './components/Input/Input';
import List from './components/List/List';

const App = () => {
  const [dataList, setDataList] = useState([]);


  const addListItem = (item) => {
    const updatedDataList = [...dataList];
    updatedDataList.push(item);
    setDataList(updatedDataList);
  }

  const removeListItem = (index) => {
    // index = 3
    const updatedDataList = dataList.filter((item, i) => i !== index);
       
    setDataList(updatedDataList);    

  }

  return (
      <>
        <Input inputAdded={addListItem}  />
        <List dataList={dataList} listItemRemved={removeListItem} />
      </>
  );
}

export default App;
