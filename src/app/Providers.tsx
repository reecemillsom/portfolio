"use client";
import { FC, PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@personal/app/theme";

interface Props extends PropsWithChildren {}

export const Providers: FC<Props> = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
