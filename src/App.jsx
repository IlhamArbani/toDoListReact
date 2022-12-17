import React, {useState} from 'react';

import './App.css'
import {Card, Item, TextInput} from './components'

function App() {

  const [toDos, setToDos] = useState([]);

  const handleSetTodDos = (value, keyCode) => {
    if (keyCode === 13) {
      const toDo = {
        id: Math.floor(Math.random() * 100),
        title: value,
        status: 'do'
      }
      setToDos([...toDos, toDo])
    }
  }

  const handleDoneTodo = (id) => {
    setToDos(toDos.filter((item) => item.id !== id ))
  }

  return (
    <div className="container">
      <Card>
        <div style={{flexGrow: 1}}>
          {
            toDos.map((item) => {
              return (
              <Item 
                key={item.id}
                title={item.title}
                value={item.id}
                onDone={handleDoneTodo}
              />
              )
            })
          }
        </div>
        <TextInput
          onKeyUp={(event) => handleSetTodDos(event.target.value, event.keyCode)}
        />
      </Card>
    </div>
  )
}

export default App
