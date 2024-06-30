import { useState, userState } from "react";
export default function NewTask({ onAdd }) {
  //   nên đặt giá trị ban đầu cho useState là một chuỗi rỗng để đinh nghĩa type dữ liệu state này là chuỗi
  //    nếu không sẽ báo lỗi khi nhập vào input ( undefine --> defined (after typing))
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim().length === 0) return;
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
