import CityItem from "../CityItem/CityItem";
import Spinner from "../Spinner/Spinner";
import styles from "./CityList.module.css";
import Message from "../Message/Message";
import { useCities } from "../../Hooks/use-cities";

function CityList() {
  const { isLoading, cities }=useCities()
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
