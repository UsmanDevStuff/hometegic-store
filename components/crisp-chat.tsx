"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d6d7a749-505b-43c9-a445-450b7aa92850");
  }, []);

  return null;
};
