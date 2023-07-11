import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Icon, ButtonTypeStyleProps } from "./styles";

import React from "react";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonTypeStyleProps;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container>
      <Icon name={icon} type={type} {...rest}/>
    </Container>
  );
}
