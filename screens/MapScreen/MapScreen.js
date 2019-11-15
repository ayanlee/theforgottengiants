import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";
import MapView from "react-native-maps";
import { OrangeButton } from "../../components/Buttons/OrangeButton";
import { YellowButton } from "../../components/Buttons/YellowButton";
import giants from "../../data/giants";
import { getDistance } from "geolib";

export default class MapScreen extends React.Component {
  state = {
    distance: 0
  };

  getDistanceFromUserToGiant = () => {
    var dis = getDistance(
      { latitude: 55.661788, longitude: 12.266105 },
      { latitude: 55.670382, longitude: 12.524393 }
    );
    this.setState({ distance: dis });
  };

  componentWillMount() {
    this.getDistanceFromUserToGiant();
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name");
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={navigation.getParam("region")}
          showsUserLocation={true}
        >
          <MapView.Circle
            center={navigation.getParam("region")}
            showUserLocation={true}
            radius={275}
            strokeWidth={4}
            strokeColor="#D48104"
            fillColor="rgba(83, 106, 225, 0.51)"
          />
        </MapView>

        <View style={styles.bottom}>
          <OrangeButton
            btnText={"Click if you found " + name}
            onPress={() =>
              this.props.navigation.navigate("RewardScreen", {
                name: navigation.getParam("name"),
                desc: navigation.getParam("desc")
              })
            }
          ></OrangeButton>

          <Text style={styles.distanceText}>
            {" "}
            You are {this.state.distance} meters away from the Giant{" "}
          </Text>
          <YellowButton
            btnText="Practical info"
            onPress={() => this.props.navigation.navigate("PracticalInfo")}
          ></YellowButton>
          <OrangeButton
            btnText="Next >"
            onPress={() => this.props.navigation.navigate("RewardScreen")}
          ></OrangeButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48972C",
    alignItems: "center",
    justifyContent: "center"
  },
  bottom: {
    fontFamily: "amatic-sc",
    fontSize: 20,
    flex: 1,
    marginLeft: 7
  },
  textStyle: {
    fontFamily: "amatic-sc",
    fontSize: 35,
    marginTop: 5
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    flex: 3
  }
});
