import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";
import { Typography } from "@/components/atomics/Typography";

interface SelectItem {
  id: string;
  name: string;
  className: string;
  imageUrl: string;
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
        <S.ProfileImage source={{ uri: selectedItem.imageUrl }} />
        <S.InfoContainer>
          <Typography
            style={{
              fontWeight: "bold",
            }}
          >
            {selectedItem.name}
          </Typography>
          <Typography>{selectedItem.className}</Typography>
        </S.InfoContainer>
        <S.ArrowIcon isOpen={isOpen} />
      </S.SelectContainer>

      <S.ModalContainer visible={isOpen} transparent animationType="fade">
        <S.ModalBackground onPress={() => setIsOpen(false)}>
          <S.ModalContent>
            <FlatList
              data={itens}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <S.Option onPress={() => handleSelect(item)}>
                  <Typography>
                    {item.name} - {item.className}
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

export const SelectUsageExample = () => {
  const itens = [
    {
      id: "1",
      name: "Mateus Azevedo",
      className: "Turma 1A",
      imageUrl: "https://github.com/diego3g.png",
    },
    {
      id: "2",
      name: "Maria Silva",
      className: "Turma 2B",
      imageUrl: "https://github.com/diego3g.png",
    },
    {
      id: "3",
      name: "João Souza",
      className: "Turma 3C",
      imageUrl: "https://github.com/diego3g.png",
    },
  ];

  return (
    <Select
      itens={itens}
      onSelect={(item) => console.log("Selecionado:", item)}
    />
  );
};
