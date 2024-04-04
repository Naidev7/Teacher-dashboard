"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";


export const AuthProvider = ({ children }) => {
  return <SessionProvider>{children} </SessionProvider>
};