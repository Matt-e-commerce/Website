// DrawerStyles.js
import { styled } from "@mui/material/styles";
import { List } from "@mui/material";

export const StyledList = styled(List)`
  && .Mui-selected,
  && .Mui-selected:hover {
    background-color: transparent;
    color: #f7941d;
    border-left: 8px solid #f7941d;

    & .MuiListItemIcon-root,
    & .MuiTypography-root {
      color: #f7941d;
      font-weight: 700;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;
