import { FaTrash, FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={`task ${task.completed ? "completed" : ""}`}
      onClick={() => onToggle(task.id)}
    >
      <FaCheck className="icon" />
      <span>{task.name}</span>
      <div className="task-actions">
        <MdDelete className="icon" onClick={() => onDelete(task.id)} />
      </div>
    </div>
  );
}

export default Task;


