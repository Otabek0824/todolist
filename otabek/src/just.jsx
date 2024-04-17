import { useState } from "react";

const Just = () => {
  const [firstName, setFirstName] = useState("");

  const show = (e) => {
    setFirstName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setFirstName("");    
  };

  return (
    <div>
      <div onClick={handleClick}>
        <input className="border-[3px]" type="text" name="firstName" value={firstName} onChange={show} />
        <button>comfirm</button>
        <span>{firstName}</span>
      </div>
    </div>
  );
};
export default Just;
