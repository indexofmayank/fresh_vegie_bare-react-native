import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./navigations/BottomTabNavigation";

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    );
  }

}

export default App;