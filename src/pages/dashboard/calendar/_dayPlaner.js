import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {saveAllData} from "store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      backgroundColor: "white",
    },
    title: {
      textAlign: "center",
    },
  },
}));

export const DayPlaner = ({ dayName, state, dispatch, typeData }) => {
  const classes = useStyles();
  const [sumKcal, setSumKcal] = useState(0);

  const calculateSumKcal = () => {
    const firstDish = parseInt(state[typeData].firstDishKcal || 0);
    const secondDish = parseInt(state[typeData].secondDishKcal || 0);
    const thirdDish = parseInt(state[typeData].thirdDishKcal || 0);
    const fourthDish = parseInt(state[typeData].fourthDishKcal || 0);
    const fifthDish = parseInt(state[typeData].fifthDishKcal || 0);
    const sum = firstDish + secondDish + thirdDish + fourthDish + fifthDish;
    setSumKcal(sum);
  };

  useEffect(() => {
    calculateSumKcal();
  }, [state[typeData]]);

  return (
    <div className="box">
      <h1>{dayName}</h1>
      <form noValidate autoComplete="off" className={classes.root}>
        <div className="inputs-row">
          <TextField
            id={`${dayName}-food-1`}
            label="Breakfast"
            placeholder="Breakfast"
            value={state[typeData].firstDish}
            onChange={(e) => {
              dispatch({ type: `${typeData}SetFirstDayDish`, payload: e.target.value });
            }}
            multiline
          />
          <TextField
            id={`${dayName}-kcal-1`}
            label="kcal"
            type="number"
            className="input-kcal"
            placeholder="kcal"
            onChange={(e) => {
              dispatch({ type: `${typeData}SetFirstDayKcal`, payload: e.target.value });
            }}
            value={state[typeData].firstDishKcal}
          />
        </div>
        <div className="inputs-row">
          <TextField
            id={`${dayName}-food-2`}
            label="Second breakfast"
            placeholder="Second breakfast"
            value={state[typeData].secondDish}
            onChange={(e) => {
              dispatch({ type: `${typeData}SetSecondDayDish`, payload: e.target.value });
            }}
            multiline
          />
          <TextField
            id={`${dayName}-kcal-2`}
            label="kcal"
            type="number"
            className="input-kcal"
            placeholder="kcal"
            onChange={(e) => {
              dispatch({ type: `${typeData}SetSecondDayKcal`, payload: e.target.value });
            }}
            value={state[typeData].secondDishKcal}
          />
        </div>
        <div className="inputs-row">
          <TextField
            id={`${dayName}-food-3`}
            label="Lunch"
            placeholder="Lunch"
            value={state[typeData].thirdDish}
            onChange={(e) => {
              dispatch({ type: `${typeData}SetThirdDayDish`, payload: e.target.value });
            }}
            multiline
          />
          <TextField
            id={`${dayName}-kcal-3`}
            label="kcal"
            type="number"
            className="input-kcal"
            placeholder="kcal"
            onChange={(e) => {
              dispatch({ type: `${typeData}SetThirdDayKcal`, payload: e.target.value });
            }}
            value={state[typeData].thirdDishKcal}
          />
        </div>
        <div className="inputs-row">
          <TextField
            id={`${dayName}-food-4`}
            label="Snack"
            placeholder="Snack"
            value={state[typeData].fourthDish}
            onChange={(e) => {
              dispatch({ type: `${typeData}SetFourthDayDish`, payload: e.target.value });
            }}
            multiline
          />
          <TextField
            id={`${dayName}-kcal-4`}
            label="kcal"
            type="number"
            className="input-kcal"
            onChange={(e) => {
              dispatch({ type: `${typeData}SetFourthDayKcal`, payload: e.target.value });
            }}
            value={state[typeData].fourthDishKcal}
            placeholder="kcal"
          />
        </div>
        <div className="inputs-row">
          <TextField
            id={`${dayName}-food-5`}
            label="Supper"
            placeholder="Supper"
            value={state[typeData].fifthDish}
            onChange={(e) => {
              dispatch({ type: `${typeData}SetFifthDayDish`, payload: e.target.value });
            }}
            multiline
          />
          <TextField
            id={`${dayName}-kcal-5`}
            label="kcal"
            type="number"
            className="input-kcal"
            placeholder="kcal"
            onChange={(e) => {
              dispatch({ type: `${typeData}SetFifthDayKcal`, payload: e.target.value });
            }}
            value={state[typeData].fifthDishKcal}
          />
        </div>
        <div>
          Total calories:{sumKcal}
        </div>
      </form>
    </div>
  );
};

DayPlaner.propTypes = {
  dayName: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  typeData: PropTypes.string.isRequired,
};
