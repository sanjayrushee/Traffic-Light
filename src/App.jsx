import React from 'react';
import { TrafficLightProvider } from './context/TrafficLightContext';
import TrafficLight from './components/TrafficLight';
import './index.css'
const App = () => {
  return (
    <TrafficLightProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-8">Traffic Light System</h1>
        <TrafficLight />
      </div>
    </TrafficLightProvider>
  );
};

export default App;
