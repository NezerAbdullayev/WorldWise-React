import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

function useCities() {
  const cities = useContext(CitiesContext);
  if (cities === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return cities;
}

export { useCities };
