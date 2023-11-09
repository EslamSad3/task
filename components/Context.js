import React, { createContext, useState } from 'react';
export const DomainContext = createContext();

export function ContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



    // Sortting
    const compareValues = (key, order = 'asc') => {
        return function (a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
          }
          const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
          const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return order === 'desc' ? comparison * -1 : comparison;
        };
      };
  return <DomainContext.Provider value={{handleClickOpen,compareValues,open,handleClose}}>{children}</DomainContext.Provider>;
}
