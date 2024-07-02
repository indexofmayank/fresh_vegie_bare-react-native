import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./navigations/BottomTabNavigation";
import RootNavigation from "./navigations/RootNavigation";




class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    );
  }

}

export default App;