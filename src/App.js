import Input from "./components/Input/Input";
import TodoListTabs from "./components/TodoListTabs/TodoListTabs";
import TodoList from "./components/TodoList/TodoList";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="todo">
          <div className="todo__title">
            <h1>#todo</h1>
          </div>
          <TodoListTabs />
          <Input />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
