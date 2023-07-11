import { TouchableOpacity } from "react-native";
import { styled, css } from "styled-components/native";

export type ButttonTypesStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButttonTypesStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;

  align-items: center;
  justify-content: center;

  margin-top: 20px;

  background-color: ${(props) =>
    props.type === "PRIMARY"
      ? props.theme.COLORS.GREEN_700
      : props.theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;
