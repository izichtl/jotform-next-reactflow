import styled from "styled-components";
import { PRIMARY_GRAY, PRIMARY_GREEN } from "@/utils/colors";

export const LoadingText = styled.strong`
  font-size: 17px;
  color: ${PRIMARY_GRAY}
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
