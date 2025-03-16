import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const SelectContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 12px;
  margin: 8px;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;
  border-color: #a855f7;
`;

export const InfoContainer = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <Ionicons
    name={isOpen ? "chevron-up" : "chevron-down"}
    size={20}
    color="#000"
  />
);

export const ModalContainer = styled.Modal``;

export const ModalBackground = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 80%;
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
`;

export const Option = styled.TouchableOpacity`
  padding: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
