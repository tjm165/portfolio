import { useEffect } from "react";

function getDecoration(title?: string) {
  switch (title) {
    case undefined:
      return "";
    case "Home":
      return "";
    default:
      return title + " |";
  }
}

function useTitle(title?: string) {
  useEffect(() => {
    document.title = `${getDecoration(title)} Thomas Moawad`;
  }, []);
}

export { useTitle };
