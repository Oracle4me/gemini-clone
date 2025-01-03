import { createContext, useState } from "react";

export const ExtendContext = createContext();

const ExtendProvider = ({ children }) => {
  const [extend, setExtend] = useState(false);

  return (
    <ExtendContext.Provider value={{ extend, setExtend }}>
      {children}
    </ExtendContext.Provider>
  );
};

export default ExtendProvider;
