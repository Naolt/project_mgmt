"use client";
import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import { Provider } from "react-redux";
import { store } from "@/store";
import AuthProvider from "@/components/AuthProvider";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import MainLayout from "@/components/MainLayout";
export default function RootLayout(props) {
  return (
    <html lang="en">
      <GoogleReCaptchaProvider reCaptchaKey="6LfRm28pAAAAAAiDJU7rSJcr9CWhojEzNfHavVnJ">
        <body>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Provider store={store}>
                <AuthProvider>
                  <MainLayout>{props.children}</MainLayout>
                </AuthProvider>
              </Provider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </GoogleReCaptchaProvider>
    </html>
  );
}
