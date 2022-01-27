import "./App.css";
import { useState } from "react";

function App() {
  let [task, setTask] = useState();
  let [todo, setTodo] = useState([
    {
      work: "Create Theme",
      status: false,
    },
    {
      work: "work on Wordpress",
      status: false,
    },
    {
      work: "Organize office main department",
      status: false,
    },
    {
      work: "Error solve in HTML template",
      status: false,
    },
  ]);
  const handleChange = (e) => {
    let update = [...todo];
    let item = e;
    item.status = !item.status;
    update.splice(update.indexOf(e), 1, item);
    setTodo(update);
    //console.log(todo);
  };
  let add = () => {
    if (task) {
      let newArr = [...todo];
      newArr.push({
        work: task,
        status: false

      })

      setTodo(console.log(newArr))
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <form action="">
                  <input
                    type="text"
                    className="form-control add-task"
                    placeholder="New Task..."
                    onChange={(e) => { setTask(e.target.value) }}

                  />
                  <button className="btn btn-primary" onClick={() => add()} >Create</button>
                </form>
                <ul className="nav nav-pills todo-nav">
                  <li role="presentation" className="nav-item all-task active">
                    <a href="http" className="nav-link">
                      All
                    </a>
                  </li>
                  <li role="presentation" className="nav-item active-task">
                    <a href="http" className="nav-link">
                      Active
                    </a>
                  </li>
                  <li role="presentation" className="nav-item completed-task">
                    <a href="http" className="nav-link">
                      Completed
                    </a>
                  </li>
                </ul>
                <div className="todo-list">
                  {todo.map((e, index) => {
                    return (
                      <div className="todo-item" key={index}>
                        <div className="checker" >
                          <span className="">
                            <input

                              type="checkbox"
                              defaultChecked={e.status}
                              onChange={() => handleChange(e)}
                            />
                          </span>
                        </div>
                        {e.status ? (<span><s>{e.work}</s> </span>) : (<span>{e.work}</span>)}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
