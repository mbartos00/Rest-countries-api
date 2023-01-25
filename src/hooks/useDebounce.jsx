import { useEffect, useState } from 'react';

const useDebounce = (value, delay = 250) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const debounced = setTimeout(() => setDebounceValue(value), delay);

    return () => {
      clearTimeout(debounced);
    };
  }, [value, delay]);
  return debounceValue;
};

export default useDebounce;
