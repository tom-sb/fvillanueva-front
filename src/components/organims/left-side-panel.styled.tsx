import { Box, styled } from '@mui/material';

export const SidebarWrapper = styled(Box)(
  ({ theme }) => `
  width: width;
  min-width: width;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 7;
  height: 100vh;
  border-right: 1px solid ${theme.palette.divider};
  padding: 24px 16px 32px 24px;
  justify-content: space-between;
`,
);

export const HeaderWrapper = styled(Box)(
  () => `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`,
);

export const BodyWrapper = styled(Box)(
  () => `
  overflow-y: auto;
  height: 100%;
`,
);

export const FooterWrapper = styled(Box)(
  () => `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  bottom: 0;
`,
);
