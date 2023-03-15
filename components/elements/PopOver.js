import { Box, Button, Popover } from "native-base";

export const PopOverComponent = () => {
  return (
    <Box w="100%" alignItems="center">
      <Popover
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps} colorScheme="danger">
              Delete Customer
            </Button>
          );
        }}
      >
        <Popover.Content accessibilityLabel="Delete Customerd" w="56">
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Delete Customer</Popover.Header>
          <Popover.Body>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </Popover.Body>
          <Popover.Footer justifyContent="flex-end">
            <Button.Group space={2}>
              <Button colorScheme="danger">Delete</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Box>
  );
};
