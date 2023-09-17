/*import { useEffect, useState } from "react";
import axios from "axios";

export default function GetCurrentLocation() {
  const [latitude, setLatitude] = useState({});
  const [longitude, setLongitude] = useState({});

  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };
const getWeather = async () => {
    try {
      const res = await axios.get(
        "https://api.shecodes.io/weather/v1/current?lon=-9.142685&lat=38.736946&key=e4f4205dbc58tb74afad5c9e48f3co33&units=metric"
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };
}*/
