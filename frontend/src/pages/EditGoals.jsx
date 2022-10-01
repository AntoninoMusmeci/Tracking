import { useState } from "react";
import { useStateContext } from "../utils/context";
import { useNavigate } from "react-router-dom";
function EditGoals() {
  const navigate = useNavigate();
  const { setGoals } = useStateContext();
  const [goal, setGoal] = useState({});
  const handleChange = (e) => {
    console.log(e);
    setGoal({ ...goal, [e.target.name]: parseInt(e.target.value) });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setGoals(goal);
    navigate("/user");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      Calories <input name="calories" onChange={(e) => handleChange(e)} />
      Fat <input name="fat" onChange={(e) => handleChange(e)}></input>
      Protein <input name="protein" onChange={(e) => handleChange(e)}></input>
      Carbs <input name="carbs" onChange={(e) => handleChange(e)}></input>
      <button type="submit"> Update</button>
    </form>
  );
}

export default EditGoals;
