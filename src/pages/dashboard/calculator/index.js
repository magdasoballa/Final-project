import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./styles.scss";
import { saveUserKcal } from "store/actions";

export const Calculator = () => {
  const [result, setResult] = useState("");
  const [sex, setSex] = useState("");
  const [kilos, setKilos] = useState("");
  const [centimeters, setCentimeters] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState(1.2);
  const [validate,setValidate]=useState(false)
  const userData = useSelector(state => state.user.userData)
  const dispatch = useDispatch();
  const menNumber = 5;
  const womanNumber = -162;

  useEffect(() => {
    const calculator = userData.calculatorData;
    if (calculator) {
      setResult(calculator.result);
      setSex(calculator.sex);
      setAge(calculator.age);
      setActivity(calculator.activity)
      setKilos(parseInt(calculator.kilos))
      setCentimeters(parseInt(calculator.centimeters))
    }
  },[userData])

  const saveData = () => {
    const dataObject =  {
      result,
      sex,
      kilos,
      centimeters,
      age,
      activity
    }

    dispatch(saveUserKcal(dataObject));
  };


  const handleCalories = (e) => {
    e.preventDefault();
    setValidate(true)
      setResult("");
      const number = sex === "male" ? menNumber : womanNumber;
      setResult(
        parseInt(
          (9.99 * kilos + (6.25 * centimeters - 4.92 * age + number)) * activity
        )
      );
    }

  return (
    <>
      <form className="form-calculator">
        <h1>Calculate,how many calories you need every day</h1>
        I'm a:
        <select value={sex} onChange={(e) => setSex(e.target.value)} className='input_calculator'>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>{" "}
        <br />
        <label>
          Your weight
            <input
            type="number"
            name="kilos"
            value={kilos}
            className= {validate=== true && kilos === '' ? 'error' : 'input_calculator'}
            onChange={(e) => setKilos(e.target.value)}
          />
          kgs
        </label>{" "}
        <br />
        <label >
          Your height:
          <input
            type="number"
            name="centimeters"
            value={centimeters}
            className= {validate=== true && centimeters === '' ? 'error' : 'input_calculator'}
            onChange={(e) => setCentimeters(e.target.value)}
          />
          cm
        </label>{" "}
        <br />
        <label>
          Your age:
          <input
            type="number"
            name="age"
            value={age}
            className= {validate=== true && age === '' ? 'error' : 'input_calculator'}
            onChange={(e) => setAge(e.target.value)}
          />

        </label>{" "}
        <br />
          Level of your physical activity:
        <select value={activity}  className='input_calculator' onChange={(e) => setActivity(e.target.value)}>
          <option value={1.2}>None</option>
          <option value={1.4}>Low</option>
          <option value={1.6}>Average</option>
          <option value={1.8}>High</option>
          <option value={2.2}>Very high</option>
        </select>{" "}
        <br />
        <button onClick={handleCalories} className='input_calculator'>Calculate</button>
        <p>
          Your total caloric requirement is
          <strong>{result}</strong>
        </p>
      </form>

      {result && (
        <div className="save-button-wrapper">
          <button onClick={saveData}>
            Save
          </button>
        </div>
      )}
    </>
  );
};
