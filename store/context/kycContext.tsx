import { createContext, useState, ReactNode } from "react";

interface KYCContextProps {
  question1: string;
  setQuestion1: (question1: string) => void;
  question2: string;
  setQuestion2: (question2: string) => void;
  question3: string;
  setQuestion3: (question3: string) => void;
  question4: string;
  setQuestion4: (question4: string) => void;
}

const defaultValues: KYCContextProps = {
  question1: "",
  setQuestion1: () => {},
  question2: "",
  setQuestion2: () => {},
  question3: "",
  setQuestion3: () => {},
  question4: "",
  setQuestion4: () => {},
};

export const KYCContext = createContext<KYCContextProps>(defaultValues);

const KYCContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [question1, setQuestion1] = useState<string>("");
  const [question2, setQuestion2] = useState<string>("");
  const [question3, setQuestion3] = useState<string>("");
  const [question4, setQuestion4] = useState<string>("");

  const value = {
    question1,
    setQuestion1,
    question2,
    setQuestion2,
    question3,
    setQuestion3,
    question4,
    setQuestion4,
  };

  return <KYCContext.Provider value={value}>{children}</KYCContext.Provider>;
};

export default KYCContextProvider;
