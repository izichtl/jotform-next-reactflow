import React from "react";
import { CustomModal, MenuItems, MenuItem, DivButton } from "./styles";

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
      <MenuItem>
          <a
            href="https://lucassoares.substack.com/" 
            target="_blank"
            rel="noopener"
          >
            Newsletter
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="https://lifeflow.vercel.app/seu-mapa" 
            target="_blank"
            rel="noopener"
          >
            Meus Mapas
          </a>
        </MenuItem>
        <DivButton>
          <a
            href="https://form.jotform.com/formmapadavida/mapa-da-vida" 
            target="_blank"
            rel="noopener"
          >
            Crie seu mapa
          </a>
        </DivButton>
      </MenuItems>
    </CustomModal>
  );
};

export default MenuModal;
