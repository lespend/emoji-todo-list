import './App.css'
import MainTitle from './UI/titles/MainTitle';
import ToDoItem from './components/ToDoItem';
import { useState, useId, useMemo } from 'react';
import ToDoList from './components/ToDoList';
import MainModal from './UI/modals/MainModal';
import RectButton from './UI/buttons/RectButton';
import PlusIcon from './assets/icons/plus.svg';
import ToDoForm from './components/ToDoForm';
import { useLocalStorage } from './hooks/useLocalStorage';
import ToDoCircleList from './components/ToDoCircleList';
import ToDoControls from './components/ToDoControls';

function App() {
  const [todos, setTodos] = useLocalStorage('todo-data', []);
  const [modalActive, setModalActive] = useState(false);
  const [cricleDisplay, setCircleDisplay] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  function todoChangeProperties(id, properties) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        let changedTodos = [...todos];
        changedTodos[i] = {...changedTodos[i], ...properties};
        setTodos(changedTodos);
      }
    }
  }

  function todoRemove(id) {
    setTodos(todos.filter((el) => el.id !== id));
  }

  function todoCreate(todo) {
    setTodos([...todos, todo]);
    setModalActive(false);
  }

  function todoCreateFakeData() {
    function generate() {
      let res = [];
      let s = 'Ты можешь это не читать но ты продолжаешь это делать'.split(' ')
      for (let i = 0; i < s.length; i++) {
        res.push({id: Date.now() + i, color: `hsl(${10*i}, 100%, 50%)`, emoji: '🧠', title: s[i], body: 'Описание дела', complete: false})
      }
      return res;
    }

    setTodos([...todos, ...generate()])
  }

  return (
    <div className="container">
      <MainTitle setStartAnimation={setStartAnimation} startAnimation={startAnimation}>Emoji Todo List</MainTitle>
      {
        cricleDisplay
        ? <ToDoCircleList todos={todos} />
        : <ToDoList todos={todos} change={todoChangeProperties} remove={todoRemove}/>
      }
      <MainModal active={modalActive} setActive={setModalActive}>
        <ToDoForm create={todoCreate}/>
      </MainModal>
      <ToDoControls setStartAnimation={setStartAnimation} showModal={setModalActive} display={cricleDisplay} setDisplay={setCircleDisplay} createFakeData={todoCreateFakeData} />
    </div>
  )
}

export default App;
