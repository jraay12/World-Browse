// hooks/useFetch.js
import { useState, useMemo } from "react";

const useFetch = (url) => {
  const data = useMemo(() => {
    if (!url) return null;
    return fetch(url).then((res) => {
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    });
  }, [url]);

  return { data };
};
export default useFetch;
