import React from "react";
import { CustomModal, MenuItems, MenuItem } from "./styles";

interface MenuModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Menu Modal"
      style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
    >
      <MenuItems>
        <MenuItem href={'/'} >Home</MenuItem>
        <MenuItem href={'/seu-mapa'} >Mapa</MenuItem>
        <MenuItem href={'/comunidade'} >Comunidade</MenuItem>
        <MenuItem href={'/sobre'} >Sobre</MenuItem>
      </MenuItems>
    </CustomModal>
  );
};

export default MenuModal;
