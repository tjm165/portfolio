import { useEffect } from "react";

function useTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Thomas Moawad`;
  }, []);
}

export { useTitle };
