import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [task, settask] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{task.length} Task Today</h3>
        <List task={task} />
        <div className="flex">
          <button
            onClick={() => {
              settask([]);
            }}
          >
            Clear All
          </button>
          <button
            onClick={() => {
              settask(task.slice(1));
              console.log(task);
            }}
          >
            Clear One by One
          </button>
        </div>
        <button
          onClick={() => {
            const task = prompt("Enter task");
            const duration = prompt("Enter Duration");
            var priority = prompt("Enter priority");
            if (task === null || duration === null) {
              window.alert("Please fill all the details");
            } else {
              const newPerson = {
                id: task.length + 1,
                task,
                duration,
                priority,
              };
              settask([...task, newPerson]);
            }
          }}
        >
          Add Task
          {data.sort((a, b) => {
            return a.priority - b.priority;
          })}
        </button>
        <button
          onClick={() => {
            settask(data);
          }}
        >
          Refresh
        </button>
      </section>
    </main>
  );
}

export default App;
