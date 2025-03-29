import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";
import { Typography } from "@/components/atomics/Typography";

interface SelectItem {
  id: number;
  name: string;
  class: string;
}

interface SelectProps {
  itens: SelectItem[];
  onSelect: (item: SelectItem) => void;
}

export const Select: React.FC<SelectProps> = ({ itens, onSelect }) => {
  const [selectedItem, setSelectedItem] = useState<SelectItem>(itens[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item: SelectItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item);
  };

  return (
    <>
      <S.SelectContainer onPress={() => setIsOpen(!isOpen)}>
        <S.ProfileImage source={{ uri: "https://github.com/diego3g.png" }} />
        <S.InfoContainer>
          <Typography
            style={{
              fontWeight: "bold",
            }}
          >
            {selectedItem.name}
          </Typography>
          <Typography>{selectedItem.class}</Typography>
        </S.InfoContainer>
        <S.ArrowIcon isOpen={isOpen} />
      </S.SelectContainer>

      <S.ModalContainer visible={isOpen} transparent animationType="fade">
        <S.ModalBackground onPress={() => setIsOpen(false)}>
          <S.ModalContent>
            <FlatList
              data={itens}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <S.Option onPress={() => handleSelect(item)}>
                  <Typography>
                    {item.name} - {item.class}
                  </Typography>
                </S.Option>
              )}
            />
          </S.ModalContent>
        </S.ModalBackground>
      </S.ModalContainer>
    </>
  );
};
