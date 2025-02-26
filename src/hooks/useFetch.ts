import { useEffect, useState } from "react";

type FetchProps = {
  url: RequestInfo | URL;
  init: RequestInit;
};

function useFetch<T>({ url, init }: FetchProps, loadOnStart: boolean = true) {
  const [isPending, setIsPending] = useState<boolean>(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>('');

  async function fetchAPI() {
    const abortController = new AbortController();
    try {
      const response: Response = await fetch(url, {
        signal: abortController.signal,
        headers: {
          "Content-Type": "application/json",
        },
        ...init
      });

      const data = await response.json();
      setError('');
      setData(data);
    } catch (e: any) {
      if (e.name === "AbortError") {
        console.log("aborted");
      } else {
        setError(e.message);
      }
    } finally {
      setIsPending(false)
    }

    return () => abortController.abort();
  }

  useEffect(() => {
    if (loadOnStart) fetchAPI() 
    else setIsPending(false);
  }, []);

  return {isPending, data, error};
}

export default useFetch;
