import * as React from "react";
import { View } from "react-native";

import { Paragraph } from "components/atoms";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Paragraph>Hello world</Paragraph>
      </View>
    );
  }
}
