import { useEffect, useState } from "react";
const useGeolocation = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: 2.9351929,
    longitude: 77.62448069999999,
  });
  const [locationError, setLocationError] = useState();
  const [locationLoading, setLocationLoading] = useState(true);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            setUserLocation(location);
          },
          (error) => {
            setLocationError(error.message);
            setLocationLoading(false);
          }
        );
      } else {
        setLocationError("Geoloaction is not supported by this browser.");
        setLocationLoading(false);
      }
    };

    getLocation();
  }, []);

  return { userLocation, locationError, locationLoading };
};

export default useGeolocation;
