import React, {useEffect, useReducer} from "react";
import { reducer, initialState } from "./_formReduce";
import "./styles.scss";
import {useDispatch, useSelector} from "react-redux";
import { DayPlaner } from "./_dayPlaner";
import {saveAllData} from "store/actions";
import {showAllData} from "../../../store/actions/saveUserKcal";


export const Calendar = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const allDataKcal = useSelector(state => state.user.userData);
  const disp = useDispatch();

  const save = () => {
    const stateToSave = Object.assign({}, state)
    disp(saveAllData(stateToSave))
    }

    useEffect(() => {
      console.log(allDataKcal)
       if (allDataKcal.requireAllKcal) {
         dispatch({type: "setAllData", payload: allDataKcal.requireAllKcal});
       }
    }, [allDataKcal])

    return (
        <div className="calendar-container">
          <div className="row">
            <div className="col-12 ">
              <div className="box calendar_title"> Your weekly food planner</div>
            </div>
          </div>
          <div className="days-container">
            <div className="day-wrapper">
              <DayPlaner
                  dayName="Monday"
                  state={state}
                  dispatch={dispatch}
                  typeData="monday"
              />
            </div>
            <div className="day-wrapper">
              <DayPlaner
                  dayName="Tuesday"
                  state={state}
                  dispatch={dispatch}
                  typeData="tuesday"
              />
            </div>
            <div className="day-wrapper">
              <DayPlaner
                  dayName="Wednesday"
                  state={state}
                  dispatch={dispatch}
                  typeData="wednesday"
              />
            </div>

            <div className="day-wrapper">
              <DayPlaner
                  dayName="Thursday"
                  state={state}
                  dispatch={dispatch}
                  typeData="thursday"
              />
            </div>
            <div className="day-wrapper">
              <DayPlaner
                  dayName="Friday"
                  state={state}
                  dispatch={dispatch}
                  typeData="friday"
              />
            </div>
            <div className="day-wrapper">
              <DayPlaner
                  dayName="Saturday"
                  state={state}
                  dispatch={dispatch}
                  typeData="saturday"
              />
            </div>

            <div className="day-wrapper">
              <DayPlaner
                  dayName="Sunday"
                  state={state}
                  dispatch={dispatch}
                  typeData="sunday"
              />
            </div>
          </div>
          <div className='btnWrapper'>
            <button className='calendar_title ' onClick={() => save()}>Save</button>
          </div>
        </div>
    );
  };

