import "./App.css";
import { useState } from "react";

const TodoCell = ({ handleChange, e, children }) => {
  return (
    <div className="todo-item" key={e.work}>
      <div className="checker">
        <span className="">
          <input
            type="checkbox"
            defaultChecked={e.status}
            onChange={() => handleChange(e)}
          />
        </span>
      </div>
      {children}
    </div>
  );
};
function App() {
  let [task, setTask] = useState();
  const [activeFilter, setFilter] = useState("all");
  let [todo, setTodo] = useState([
    {
      id: 1,
      work: "Create Theme",
      status: false,
    },
    {
      id: 2,
      work: "work on Wordpress",
      status: false,
    },
    {
      id: 3,
      work: "Organize office main department",
      status: false,
    },
    {
      id: 4,
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
    console.log(update);
  };
  let add = () => {
    if (task) {
      let newArr = [...todo];
      newArr.push({
        id: todo.length,
        work: task,
        status: false,
      });

      setTodo(newArr);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <form>
                  <input
                    type="text"
                    className="form-control add-task"
                    placeholder="New Task..."
                    onChange={(e) => {
                      setTask(e.target.value);
                    }}
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => add()}
                  >
                    Create
                  </button>
                </form>
                <ul className="nav nav-pills todo-nav">
                  <li role="presentation" className="nav-item all-task active">
                    <span
                      className={[
                        "nav-link cursor-pointer",
                        activeFilter === "all" ? "active-filter" : "",
                      ].join(" ")}
                      onClick={() => setFilter("all")}
                    >
                      All
                    </span>
                  </li>
                  <li role="presentation" className="nav-item active-task">
                    <span
                      className={[
                        "nav-link cursor-pointer",
                        activeFilter === "active" ? "active-filter" : "",
                      ].join(" ")}
                      onClick={() => setFilter("active")}
                    >
                      Active
                    </span>
                  </li>
                  <li role="presentation" className="nav-item completed-task">
                    <span
                      className={[
                        "nav-link cursor-pointer",
                        activeFilter === "completed" ? "active-filter" : "",
                      ].join(" ")}
                      onClick={() => setFilter("completed")}
                    >
                      Completed
                    </span>
                  </li>
                </ul>
                <div className="todo-list">
                  {todo.map((e) => {
                    return activeFilter === "active" && !e.status ? (
                      <TodoCell handleChange={handleChange} e={e} key={e.work}>
                        <span>{e.work}</span>
                      </TodoCell>
                    ) : activeFilter === "completed" && e.status ? (
                      <TodoCell handleChange={handleChange} e={e} key={e.work}>
                        <s>
                          {" "}
                          <span>{e.work}</span>
                        </s>
                      </TodoCell>
                    ) : activeFilter === "all" ? (
                      <TodoCell handleChange={handleChange} e={e} key={e.work}>
                        {e.status ? (
                          <s>
                            {" "}
                            <span>{e.work}</span>
                          </s>
                        ) : (
                          <span>{e.work}</span>
                        )}
                      </TodoCell>
                    ) : (
                      ""
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
