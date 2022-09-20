import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes/app.routes";
import { Header } from "./components/Header";
import { Container } from "./components/Container";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Container>
          <Header />

          <AppRoutes />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}
