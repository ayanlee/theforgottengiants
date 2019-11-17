import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "black",
    fontFamily: "amatic-sc",
    fontSize: 25,
    textAlign: "center"
  },
  rewardImage: {
    marginTop: 45,
    marginBottom: 5,
    height: hp("25%"),
    width: wp("60%"),
    resizeMode: "cover",
    borderRadius: 20,
  }
});

export default styles;