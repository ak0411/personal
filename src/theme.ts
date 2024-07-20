import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html,
        body,
        #root {
          height: 100%;
        }
      `,
    },
  },
});
