import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import userLocationStore from "../store/UserLocation";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAP_API_KEY } from "@env";
const Map = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  const startLocation = userLocationStore((state) => state.startLocation);
  const startDescription = userLocationStore((state) => state.startDescription);
  const endDescription = userLocationStore((state) => state.endDescription);
  const endLocation = userLocationStore((state) => state.endLocation);

  useEffect(() => {
    if (!startLocation || !endLocation) return;

    if (startLocation && endLocation) {
      setOrigin({ latitude: startLocation.lat, longitude: startLocation.lng });
      setDestination({ latitude: endLocation.lat, longitude: endLocation.lng });

      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });
    }
  }, [startLocation, endLocation]);

  const mapRef = useRef();
  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: startLocation.lat,
        longitude: startLocation.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {startLocation && endLocation && (
        <MapViewDirections
          origin={origin}
          destination={destination}
          strokeWidth={4}
          strokeColor="black"
          mode="DRIVING"
          apikey={GOOGLE_MAP_API_KEY}
          channel="directions"
          optimizeWaypoints={true}
          onError={(err) => {
            console.log(err.message);
          }}
          timePrecision="now"
          onReady={(result) => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
              animated: true,
            });
          }}
        />
      )}

      {startLocation != null && (
        <Marker
          coordinate={{
            latitude: startLocation.lat,
            longitude: startLocation.lng,
          }}
          image={{ uri: "https://img.icons8.com/color/48/000000/marker.png" }}
          title="Start Location"
          description={startDescription}
          identifier="origin"
        />
      )}
      {endLocation != null && (
        <Marker
          coordinate={{
            latitude: endLocation.lat,
            longitude: endLocation.lng,
          }}
          image={{ uri: "https://img.icons8.com/color/48/000000/marker.png" }}
          title="End Location"
          description={endDescription}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
