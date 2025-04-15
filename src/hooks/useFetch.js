import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [datos, setDatos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      if (!res.ok) throw Error("Error al consumir api");
      //   NOTA: El throw hae que salte al catch
      const data = await res.json();
      setDatos(data);
    } catch (error) {
      setError(error.message);
      setDatos([]);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  return { data: datos, loading, error };
};
