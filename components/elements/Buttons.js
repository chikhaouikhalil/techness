import { Box, Button, Icon, IconButton, Link } from "native-base";

export const SolidButton = ({
  children,
  size,
  isLoading,
  isLoadingText,
  leftIcon,
  endIcon,
  onPress,
  disabled,
  bg,
  pressedBg,
  textColor,
  style,
}) => {
  // size : "xs", "sm", "md", "lg"
  // variant : "ghost","link","outline","solid","subtle","unstyled"
  // leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
  // endIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
  return (
    <Button
      style={{ ...style }}
      w="full"
      bg={disabled ? "light.300" : bg || "orange.500"}
      _pressed={{ bg: pressedBg || "orange.300" }}
      disabled={disabled || false}
      isLoading={isLoading || false}
      _loading={{ bg: "orange.500", opacity: 1 }}
      isLoadingText={isLoadingText}
      size={size || "md"}
      leftIcon={leftIcon || null}
      endIcon={endIcon || null}
      justifyContent="center"
      onPress={onPress}
      _text={{
        fontFamily: "body",
        fontWeight: 500,
        color: disabled ? "gray.400" : textColor || "white",
      }}
    >
      {children}
    </Button>
  );
};
export const OutlineButton = ({
  children,
  size,
  isLoading,
  isLoadingText,
  leftIcon,
  endIcon,
  onPress,
  disabled,
  colorText,
  borderColor,
  style,
}) => {
  // size : "xs", "sm", "md", "lg"
  // variant : "ghost","link","outline","solid","subtle","unstyled"
  // leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
  // endIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
  return (
    <Button
      style={{ ...style }}
      w="full"
      bg={"white"}
      borderColor={borderColor || "orange.500"}
      variant="outline"
      _pressed={{ bg: "white" }}
      disabled={disabled || false}
      isLoading={isLoading || false}
      _loading={{ bg: "white", opacity: 1 }}
      _spinner={{
        color: "orange.500",
      }}
      isLoadingText={isLoadingText}
      size={size || "md"}
      leftIcon={leftIcon || null}
      endIcon={endIcon || null}
      justifyContent="center"
      onPress={onPress}
      _text={{
        fontFamily: "body",
        fontWeight: 500,
        color: colorText || "orange.500",
      }}
    >
      {children}
    </Button>
  );
};

export const PrimaryLink = ({ href, children, color, style }) => {
  return (
    <Link
      style={{ ...style }}
      _text={{ color: color || "orange.500" }}
      href={href}
    >
      {children}
    </Link>
  );
};

export const ButtonIcon = ({
  icon,
  pressedIconName,
  bg,
  pressedBg,
  iconColor,
  pressedIconColor,
}) => {
  return (
    <Box alignItems="center">
      <IconButton
        variant="solid"
        bg={bg || "orange.600"}
        icon={icon}
        borderRadius="full"
        _icon={{
          color: iconColor || "white",
          size: "lg",
        }}
        _pressed={{
          bg: pressedBg || "orange.600:alpha.20",
          _icon: {
            name: pressedIconName,
            color: pressedIconColor || "orange.600",
          },
          _ios: {
            _icon: {
              size: "2xl",
            },
          },
        }}
        _ios={{
          _icon: {
            size: "2xl",
          },
        }}
      />
    </Box>
  );
};
