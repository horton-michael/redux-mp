import { createContext, useContext } from "react";
import { Provider } from "react-redux";
import store from "./store";

// Create our car context using createContext()
export const CarContext = createContext();

// Create a custom hook that allows easy access to our CarContext values
export const useCar = () => useContext(CarContext);

// Creating our car provider. Accepts an argument of `props`
export default function CarProvider(props) {
  const cars = [
    {
      id: 1,
      make: "Honda",
      model: "Civic",
      year: "2008",
      isRunning: false,
    },
    {
      id: 2,
      make: "Tesla",
      model: "Y",
      year: "2021",
      isRunning: false,
    },
  ];

  return (
    <Provider store={store}>
      <CarContext.Provider value={{ cars }} {...props} />
    </Provider>
  );
}
