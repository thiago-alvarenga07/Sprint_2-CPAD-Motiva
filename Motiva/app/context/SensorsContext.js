import { createContext, useContext, useState } from 'react';
import { initialSensors } from '../data/sensorsData';

const SensorsContext = createContext();

export function SensorsProvider({ children }) {
  const [sensors, setSensors] = useState(initialSensors);

  function simulateCut(sensorId) {
    setSensors((prev) =>
      prev.map((sensor) =>
        sensor.id === sensorId ? { ...sensor, grassHeight: 0 } : sensor
      )
    );
  }

  return (
    <SensorsContext.Provider value={{ sensors, simulateCut }}>
      {children}
    </SensorsContext.Provider>
  );
}

export function useSensors() {
  return useContext(SensorsContext);
}

export default SensorsProvider;
