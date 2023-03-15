import { Actionsheet, Box } from "native-base";
export const ActionSheetComponent = ({ isOpen, onClose, children }) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <Box w="100%" h={60} px={4} justifyContent="center"></Box>
        {children}
      </Actionsheet.Content>
    </Actionsheet>
  );
};
