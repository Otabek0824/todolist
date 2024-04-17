import { useState } from "react";

const Todolist = () => {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);

  const getInputValue = (e) => {
    setState(e.target.value);
  };

  const add = () => {
    setData([...data, { text: state, id: data.length + 1 }]);
  };

  const handleClick = (e) =>{
    e.preventDefault();
    setState("");   
  }

  const onDelete = (id) => {
    const newData = data.filter((value) => value.id !== id);
    setData(newData);
  };
  return (
    <div className="bg-gray-200 h-[100vh]">
      <div onClick={handleClick} className="flex gap-[30px] p-[50px]">
          <input
            onChange={getInputValue} value={state} name="state"
            className="w-[70%] border-[3px] border-black placeholder-black h-[50px] ps-[20px] text-black text-[25px] outline-black"
            type="text"
            placeholder="Write your plans"
          />
          <button
            onClick={add}
            className="w-[30%] text-white bg-green-800 border-green-800 border-[3px]"
          >
            press the button
          </button>
      </div>
      <div>
        <ul>
          {data.map((todo) => (
            <li
              className="mt-[20px] text-2xl flex mx-[50px] px-[20px] justify-between items-center border-[3px] bg-white border-black h-[50px]"
              key={todo.id}
            >
              <span className="select-none">{todo.text}</span>
              <span>{todo.text2}</span>
              <button
                onClick={() => onDelete(todo.id)}
                className="bg-red-400 text-white w-[30%] h-[80%]"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todolist;
