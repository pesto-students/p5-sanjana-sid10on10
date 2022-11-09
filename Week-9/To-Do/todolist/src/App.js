import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function App() {

  const [list, setList] = useState([
    {'id': 1, 'title': 'Go to Doctor', 'status': 'Pending', 'deleted': false},
    {'id': 2, 'title': 'Buy Green tea', 'status': 'Done', 'deleted': false},
    {'id': 3, 'title': 'Buy Ayurveda medicine', 'status': 'Pending', 'deleted': false},
    {'id': 4, 'title': 'Go to Gym', 'status': 'Pending', 'deleted': false},
    {'id': 5, 'title': 'Take Bath', 'status': 'Pending', 'deleted': false},
  ])

  const [text, setText] = useState('')

  const [filtered, setFiltered] = useState([])

  useEffect(()=>{
    let temp = list.filter((item)=>{
      return item.deleted === false
    })
    setFiltered(temp)
  }, [list])

  const handleChange = (event)=>{
    setText(event.target.value)
  }

  const onSubmit = ()=>{
    let temp = {'title': text, 'status': 'Pending', 'deleted': false}
    let id = list.length + 1
    temp['id'] = id
    list.push(temp)
    setList([...list])
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <TextField 
            onChange={handleChange}
            value={text}
            sx={{
              backgroundColor: 'white',
              color: 'white'
            }}
          />
          <Button variant="contained" onClick={()=>{
            onSubmit()
          }} sx={{ marginLeft: '20px' }}>
            Add
          </Button>
        </div>

        {filtered.map((item, index)=>{
          return <ToDoItem key={index} data={item} list={list} setList={setList}/>
        })}
      </header>
    </div>
  );
}

export default App;
