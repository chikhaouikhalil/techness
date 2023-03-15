import {
  Alert,
  Box,
  CloseIcon,
  Collapse,
  HStack,
  IconButton,
  Text,
  VStack,
} from "native-base";

export const CollapsedAlert = ({ show, setShow, status, title, text }) => {
  // status error, success,info, warning
  return (
    <Box w="100%" alignItems="center" mb="2">
      <Collapse isOpen={show}>
        <Alert variant="left-accent" status={status || "error"}>
          <VStack space={1} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{
                    color: "coolGray.800",
                  }}
                >
                  {title}
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" />}
                _icon={{
                  color: "coolGray.600",
                }}
                onPress={() => setShow(false)}
              />
            </HStack>
            <Box
              pl="6"
              _dark={{
                _text: {
                  color: "coolGray.600",
                },
              }}
            >
              {text}
            </Box>
          </VStack>
        </Alert>
      </Collapse>
    </Box>
  );
};
