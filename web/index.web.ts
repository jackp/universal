import * as React from "react";
import App from "src/App";
import { AppRegistry } from "react-native";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("app")
});
