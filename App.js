import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AllGiantsScreen from "./screens/AllGiantsScreen/AllGiantsScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import MapScreen from "./screens/MapScreen/MapScreen";
import RewardScreen from "./screens/RewardScreen/RewardScreen";
import AboutGiantScreen from "./screens/AboutGiantScreen/AboutGiantScreen";
import RewardCollection from "./screens/RewardCollection/RewardCollectionScreen";
import PracticalInfo from "./screens/PracticalInfo/PracticalInfo";
import Colors from "./constants/colors";

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    AllGiantsScreen: AllGiantsScreen,
    MapScreen: MapScreen,
    RewardScreen: RewardScreen,
    AboutGiantScreen: AboutGiantScreen,
    RewardCollection: RewardCollection,
    PracticalInfo: PracticalInfo
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.white,
      },
      headerTintColor: Colors.black,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppNavigator);