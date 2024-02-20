import styled from 'styled-components';

// Estilos do componente
export const CardContainer = styled.div`
  width: 340px;
  min-width: 340px;
  height: 165px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: #FFF;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.20), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 20px;
  margin-left: 20px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  color: var(--text-primary, rgba(0, 0, 0, 0.87));
  font-family: var(--font-oxygen);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 32px */
  letter-spacing: 0.15px;
`;

export const SubText = styled.h3`
  color: var(--text-secondary, rgba(0, 0, 0, 0.60));
  font-family: var(--font-noto-Serif);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.15px;
`;

export const Chip = styled.div`
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 5px;
`;

export const BottomDiv = styled.div`
  flex: 1;
`;