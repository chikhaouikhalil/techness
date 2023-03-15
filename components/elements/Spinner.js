import { Spinner } from "native-base";

export const SpinnerComponent = ({ color, size }) => {
  return (
    <Spinner
      size={size || "lg"}
      colorScheme="warning"
      color={color || "orange.600"}
    />
  );
};
