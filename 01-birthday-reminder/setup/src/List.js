import React from "react";

const List = ({ task }) => {
  return (
    <>
      {task.map((tasks) => {
        const { id, task, duration, priority } = tasks;
        return (
          <article key={id} className="tasks">
            <div>
              <h4>{priority} {task}</h4>
              <p>{duration} Minutes</p>
            </div>
          </article>
        );
      })}{" "}
    </>
  );
};

export default List;
