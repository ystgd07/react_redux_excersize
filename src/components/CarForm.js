import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store/index";

function CarForm() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });
  console.log(name);

  const namChangeHandler = (event) => {
    event.preventDefault();
    dispatch(changeName(event.target.value));
  };
  const costChangeHandler = (e) => {
    dispatch(changeCost(e.target.value * 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };
  return (
    <div className="car-form panel">
      <h4 className="subtiltle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={namChangeHandler}
            ></input>
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={costChangeHandler}
            ></input>
          </div>
        </div>
        <div className="field">
          <button className="button is-link">submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
