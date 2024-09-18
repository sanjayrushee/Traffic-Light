import React, { useState, useEffect } from 'react';
import GreenLight from './GreenLight';
import YellowLight from './YellowLight';
import RedLight from './RedLight';
import PedestrianButton from './PedestrianButton';
import EmergencyOverrideButton from './EmergencyOverrideButton';

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState('green');
  const [timer, setTimer] = useState(10); 
  const [pedestrianRequested, setPedestrianRequested] = useState(false);
  const [emergencyOverride, setEmergencyOverride] = useState(false);

  useEffect(() => {
    let timeout;

    const manageLights = () => {
      switch (currentLight) {
        case 'green':
          timeout = setTimeout(() => {
            if (pedestrianRequested) {
              setCurrentLight('red');
              setTimer(3);
              setPedestrianRequested(false); 
            } else {
              setCurrentLight('yellow');
              setTimer(3); 
            }
          }, 10000);
          break;

        case 'yellow':
          timeout = setTimeout(() => {
            setCurrentLight('red');
            setTimer(3); 
          }, 3000); 
          break;

        case 'red':
          timeout = setTimeout(() => {
            setCurrentLight('green');
            setTimer(7); 
          }, 3000); 
          break;

        default:
          break;
      }
    };

    if (emergencyOverride) {
      setCurrentLight('red');
      setTimer(5); 
      setEmergencyOverride(false);
    } else {
      manageLights();
    }

    return () => clearTimeout(timeout);
  }, [currentLight, pedestrianRequested, emergencyOverride]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [timer]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-64 bg-black rounded-lg p-4">
        <RedLight isActive={currentLight === 'red'} />
        <YellowLight isActive={currentLight === 'yellow'} />
        <GreenLight isActive={currentLight === 'green'} />
      </div>
      <div className="mt-4 mb-4 text-xl text-gray-300 font-bold">
        <span>{timer} Seconds</span>
      </div>
      <div className="flex mt-4 space-x-4">
        <PedestrianButton setPedestrianRequested={setPedestrianRequested} />
        <EmergencyOverrideButton setEmergencyOverride={setEmergencyOverride} />
      </div>
    </div>
  );
};

export default TrafficLight;
