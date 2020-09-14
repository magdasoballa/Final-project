/* eslint-disable no-case-declarations */

export const initialState = {
  monday: {
    firstDish: "",
    firstDishKcal: 0,
    secondDish: "",
    secondDishKcal: 0,
    thirdDish: "",
    thirdDishKcal: 0,
    fourthDish: "",
    fourthDishKcal: 0,
    fifthDish: "",
    fifthDishKcal: 0,
    sumKcal: 0,
  },
  tuesday: {
    firstDish: "",
    firstDishKcal: null,
    secondDish: "",
    secondDishKcal: null,
    thirdDish: "",
    thirdDishKcal: null,
    fourthDish: "",
    fourthDishKcal: null,
    fifthDish: "",
    fifthDishKcal: null,
    sumKcal: null,
  },
  wednesday: {
    firstDish: "",
    firstDishKcal: null,
    secondDish: "",
    secondDishKcal: null,
    thirdDish: "",
    thirdDishKcal: null,
    fourthDish: "",
    fourthDishKcal: null,
    fifthDish: "",
    fifthDishKcal: null,
    sumKcal: null,
  },
  thursday: {
    firstDish: "",
    firstDishKcal: null,
    secondDish: "",
    secondDishKcal: null,
    thirdDish: "",
    thirdDishKcal: null,
    fourthDish: "",
    fourthDishKcal: null,
    fifthDish: "",
    fifthDishKcal: null,
  },
  friday: {
    firstDish: "",
    firstDishKcal: null,
    secondDish: "",
    secondDishKcal: null,
    thirdDish: "",
    thirdDishKcal: null,
    fourthDish: "",
    fourthDishKcal: null,
    fifthDish: "",
    fifthDishKcal: null,
    sumKcal: null,
  },
  saturday: {
    firstDish: "",
    firstDishKcal: null,
    secondDish: "",
    secondDishKcal: null,
    thirdDish: "",
    thirdDishKcal: null,
    fourthDish: "",
    fourthDishKcal: null,
    fifthDish: "",
    fifthDishKcal: null,
  },
  sunday: {
    firstDish: "",
    firstDishKcal: null,
    secondDish: "",
    secondDishKcal: null,
    thirdDish: "",
    thirdDishKcal: null,
    fourthDish: "",
    fourthDishKcal: null,
    fifthDish: "",
    fifthDishKcal: null,
    sumKcal: null,
  },
};

export const reducer = (state, action) => {
  const mondayData = Object.assign({}, state.monday);
  const tuesdayData = Object.assign({}, state.tuesday);
  const wednesdayData = Object.assign({}, state.wednesday);
  const thursdayData = Object.assign({}, state.thursday);
  const fridayData = Object.assign({}, state.friday);
  const saturdayData = Object.assign({}, state.saturday);
  const sundayData = Object.assign({}, state.sunday);
  switch (action.type) {
    case "mondaySetFirstDayDish":
      mondayData.firstDish = action.payload;
      return { ...state, monday: mondayData };
    case "mondaySetFirstDayKcal":
      mondayData.firstDishKcal = action.payload;
      return { ...state, monday: mondayData };
    case "mondaySetSecondDayDish":
      mondayData.secondDish = action.payload;
      return { ...state, monday: mondayData };
    case "mondaySetSecondDayKcal":
      mondayData.secondDishKcal = action.payload;
      return { ...state, monday: mondayData };
    case "mondaySetThirdDayDish":
      mondayData.thirdDish = action.payload;
      return { ...state, monday: mondayData };
    case "mondaySetThirdDayKcal":
      mondayData.thirdDishKcal = action.payload;
      return { ...state, monday: mondayData };
    case "mondaySetFourthDayDish":
      mondayData.fourthDish = action.payload;
      return { ...state, monday: mondayData };
    case "mondaySetFourthDayKcal":
      mondayData.fourthDishKcal = action.payload;
      return { ...state, monday: mondayData };
    case "mondaySetFifthDayDish":
      mondayData.fifthDish = action.payload;
      return { ...state, monday: mondayData };
    case "mondaySetFifthDayKcal":
      mondayData.fifthDishKcal = action.payload;
      return { ...state, monday: mondayData };
    case "mondaySumKcal":
      mondayData.sumKcal = action.payload;
      return { ...state, monday: mondayData };

    case "tuesdaySetFirstDayDish":
      tuesdayData.firstDish = action.payload;
      return { ...state, tuesday: tuesdayData };
    case "tuesdaySetFirstDayKcal":
      tuesdayData.firstDishKcal = action.payload;
      return { ...state, tuesday: tuesdayData };
    case "tuesdaySetSecondDayDish":
      tuesdayData.secondDish = action.payload;
      return { ...state, tuesday: tuesdayData };
    case "tuesdaySetSecondDayKcal":
      tuesdayData.secondDishKcal = action.payload;
      return { ...state, tuesday: tuesdayData };
    case "tuesdaySetThirdDayDish":
      tuesdayData.thirdDish = action.payload;
      return { ...state, tuesday: tuesdayData };
    case "tuesdaySetThirdDayKcal":
      tuesdayData.thirdDishKcal = action.payload;
      return { ...state, tuesday: tuesdayData };
    case "tuesdaySetFourthDayDish":
      tuesdayData.fourthDish = action.payload;
      return { ...state, tuesday: tuesdayData };
    case "tuesdaySetFourthDayKcal":
      tuesdayData.fourthDishKcal = action.payload;
      return { ...state, tuesday: tuesdayData };
    case "tuesdaySetFifthDayDish":
      tuesdayData.fifthDish = action.payload;
      return { ...state, tuesday: tuesdayData };
    case "tuesdaySetFifthDayKcal":
      tuesdayData.fifthDishKcal = action.payload;
      return { ...state, tuesday: tuesdayData };
    case "tuesdaySumKcal":
      tuesdayData.sumKcal = action.payload;
      return { ...state, tuesday: tuesdayData };

    case "wednesdaySetFirstDayDish":
      wednesdayData.firstDish = action.payload;
      return { ...state, wednesday: wednesdayData };
    case "wednesdaySetFirstDayKcal":
      wednesdayData.firstDishKcal = action.payload;
      return { ...state, wednesday: wednesdayData };
    case "wednesdaySetSecondDayDish":
      wednesdayData.secondDish = action.payload;
      return { ...state, wednesday: wednesdayData };
    case "wednesdaySetSecondDayKcal":
      wednesdayData.secondDishKcal = action.payload;
      return { ...state, wednesday: wednesdayData };
    case "wednesdaySetThirdDayDish":
      wednesdayData.thirdDish = action.payload;
      return { ...state, wednesday: wednesdayData };
    case "wednesdaySetThirdDayKcal":
      wednesdayData.thirdDishKcal = action.payload;
      return { ...state, wednesday: wednesdayData };
    case "wednesdaySetFourthDayDish":
      wednesdayData.fourthDish = action.payload;
      return { ...state, wednesday: wednesdayData };
    case "wednesdaySetFourthDayKcal":
      wednesdayData.fourthDishKcal = action.payload;
      return { ...state, wednesday: wednesdayData };
    case "wednesdaySetFifthDayDish":
      wednesdayData.fifthDish = action.payload;
      return { ...state, wednesday: wednesdayData };
    case "wednesdaySetFifthDayKcal":
      wednesdayData.fifthDishKcal = action.payload;
      return { ...state, wednesday: wednesdayData };
    case "wednesdaySumKcal":
      wednesdayData.sumKcal = action.payload;
      return { ...state, wednesday: wednesdayData };

    case "thursdaySetFirstDayDish":
      thursdayData.firstDish = action.payload;
      return { ...state, thursday: thursdayData };
    case "thursdaySetFirstDayKcal":
      thursdayData.firstDishKcal = action.payload;
      return { ...state, thursday: thursdayData };
    case "thursdaySetSecondDayDish":
      thursdayData.secondDish = action.payload;
      return { ...state, thursday: thursdayData };
    case "thursdaySetSecondDayKcal":
      thursdayData.secondDishKcal = action.payload;
      return { ...state, thursday: thursdayData };
    case "thursdaySetThirdDayDish":
      thursdayData.thirdDish = action.payload;
      return { ...state, thursday: thursdayData };
    case "thursdaySetThirdDayKcal":
      thursdayData.thirdDishKcal = action.payload;
      return { ...state, thursday: thursdayData };
    case "thursdaySetFourthDayDish":
      thursdayData.fourthDish = action.payload;
      return { ...state, thursday: thursdayData };
    case "thursdaySetFourthDayKcal":
      thursdayData.fourthDishKcal = action.payload;
      return { ...state, thursday: thursdayData };
    case "thursdaySetFifthDayDish":
      thursdayData.fifthDish = action.payload;
      return { ...state, thursday: thursdayData };
    case "thursdaySetFifthDayKcal":
      thursdayData.fifthDishKcal = action.payload;
      return { ...state, thursday: thursdayData };
    case "thursdaySumKcal":
      thursdayData.sumKcal = action.payload;
      return { ...state, thursday: thursdayData };

    case "fridaySetFirstDayDish":
      fridayData.firstDish = action.payload;
      return { ...state, friday: fridayData };
    case "fridaySetFirstDayKcal":
      fridayData.firstDishKcal = action.payload;
      return { ...state, friday: fridayData };
    case "fridaySetSecondDayDish":
      fridayData.secondDish = action.payload;
      return { ...state, friday: fridayData };
    case "fridaySetSecondDayKcal":
      fridayData.secondDishKcal = action.payload;
      return { ...state, friday: fridayData };
    case "fridaySetThirdDayDish":
      fridayData.thirdDish = action.payload;
      return { ...state, friday: fridayData };
    case "fridaySetThirdDayKcal":
      fridayData.thirdDishKcal = action.payload;
      return { ...state, friday: fridayData };
    case "fridaySetFourthDayDish":
      fridayData.fourthDish = action.payload;
      return { ...state, friday: fridayData };
    case "fridaySetFourthDayKcal":
      fridayData.fourthDishKcal = action.payload;
      return { ...state, friday: fridayData };
    case "fridaySetFifthDayDish":
      fridayData.fifthDish = action.payload;
      return { ...state, friday: fridayData };
    case "fridaySetFifthDayKcal":
      fridayData.fifthDishKcal = action.payload;
      return { ...state, friday: fridayData };
    case "fridaySumKcal":
      fridayData.sumKcal = action.payload;
      return { ...state, friday: fridayData };

    case "saturdaySetFirstDayDish":
      saturdayData.firstDish = action.payload;
      return { ...state, saturday: saturdayData };
    case "saturdaySetFirstDayKcal":
      saturdayData.firstDishKcal = action.payload;
      return { ...state, saturday: saturdayData };
    case "saturdaySetSecondDayDish":
      saturdayData.secondDish = action.payload;
      return { ...state, saturday: saturdayData };
    case "saturdaySetSecondDayKcal":
      saturdayData.secondDishKcal = action.payload;
      return { ...state, saturday: saturdayData };
    case "saturdaySetThirdDayDish":
      saturdayData.thirdDish = action.payload;
      return { ...state, saturday: saturdayData };
    case "saturdaySetThirdDayKcal":
      saturdayData.thirdDishKcal = action.payload;
      return { ...state, saturday: saturdayData };
    case "saturdaySetFourthDayDish":
      saturdayData.fourthDish = action.payload;
      return { ...state, saturday: saturdayData };
    case "saturdaySetFourthDayKcal":
      saturdayData.fourthDishKcal = action.payload;
      return { ...state, saturday: saturdayData };
    case "saturdaySetFifthDayDish":
      saturdayData.fifthDish = action.payload;
      return { ...state, saturday: saturdayData };
    case "saturdaySetFifthDayKcal":
      saturdayData.fifthDishKcal = action.payload;
      return { ...state, saturday: saturdayData };
    case "saturdaySumKcal":
      saturdayData.sumKcal = action.payload;
      return { ...state, saturday: saturdayData };

    case "sundayFirstDayDish":
      sundayData.firstDish = action.payload;
      return { ...state, sunday: sundayData };
    case "sundaySetFirstDayKcal":
      sundayData.firstDishKcal = action.payload;
      return { ...state, sunday: sundayData };
    case "sundaySetSecondDayDish":
      sundayData.secondDish = action.payload;
      return { ...state, sunday: sundayData };
    case "sundaySetSecondDayKcal":
      sundayData.secondDishKcal = action.payload;
      return { ...state, sunday: sundayData };
    case "sundaySetThirdDayDish":
      sundayData.thirdDish = action.payload;
      return { ...state, sunday: sundayData };
    case "sundaySetThirdDayKcal":
      sundayData.thirdDishKcal = action.payload;
      return { ...state, sunday: sundayData };
    case "sundaySetFourthDayDish":
      sundayData.fourthDish = action.payload;
      return { ...state, sunday: sundayData };
    case "sundaySetFourthDayKcal":
      sundayData.fourthDishKcal = action.payload;
      return { ...state, sunday: sundayData };
    case "sundaySetFifthDayDish":
      sundayData.fifthDish = action.payload;
      return { ...state, sunday: sundayData };
    case "sundaySetFifthDayKcal":
      sundayData.fifthDishKcal = action.payload;
      return { ...state, sunday: sundayData };
    case "sundaySumKcal":
      sundayData.sumKcal = action.payload;
      return { ...state, sunday: sundayData }
    case "setAllData":
      console.log(action.payload)
      return { ...action.payload };
  }
};
