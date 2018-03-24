import * as React from "react";
import { Platform, Text } from "react-native";

const Paragraph: React.SFC = ({ children }) => <p>{children}</p>;

const ParagraphMobile: React.SFC = ({ children }) => <Text>{children}</Text>;

export default Platform.select({
  android: ParagraphMobile,
  ios: ParagraphMobile,
  web: Paragraph
});
