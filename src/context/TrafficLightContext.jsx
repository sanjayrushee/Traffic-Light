import React, { createContext, useReducer } from 'react';

const TrafficLightContext = createContext();

const initialState = {
  currentLight: 'green',
  pedestrianRequested: false,
  emergencyOverride: false,
  timer: 10,
};

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return { ...state, currentLight: action.payload, timer: action.timer };
    case 'REQUEST_PEDESTRIAN':
      return { ...state, pedestrianRequested: true };
    case 'EMERGENCY_OVERRIDE':
      return { ...state, emergencyOverride: true, currentLight: 'red', timer: 7 };
    case 'RESET_EMERGENCY':
      return { ...state, emergencyOverride: false };
    default:
      return state;
  }
};

const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export { TrafficLightContext, TrafficLightProvider };
