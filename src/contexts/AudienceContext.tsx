import React, { createContext, useContext, useState, ReactNode } from "react";

export type AudienceType = "students" | "educators" | "executives" | null;

interface AudienceContextType {
  audience: AudienceType;
  setAudience: (audience: AudienceType) => void;
}

const AudienceContext = createContext<AudienceContextType | undefined>(undefined);

export const AudienceProvider = ({ children }: { children: ReactNode }) => {
  const [audience, setAudience] = useState<AudienceType>(null);

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
};

export const useAudience = () => {
  const context = useContext(AudienceContext);
  if (context === undefined) {
    throw new Error("useAudience must be used within an AudienceProvider");
  }
  return context;
};
