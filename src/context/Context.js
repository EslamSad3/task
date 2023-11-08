import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

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

  // Date Formatter
  const formatCreatedAt = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const [LoadedData, setData] = useState([]);

  async function getData() {
    const data = await axios.get('https://taskback-1pxp.onrender.com/api/get');
    console.log(data);
    setData(data.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <DomainContext.Provider
      value={{ LoadedData, formatCreatedAt, compareValues,handleClickOpen,handleClose,open }}
    >
      {children}
    </DomainContext.Provider>
  );
}

export default ContextProvider;
