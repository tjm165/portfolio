import { useEffect } from "react";

function getDecoration(title?: string) {
  switch (title) {
    case undefined:
      return "";
    default:
      return title + " |";
  }
}

function useTitle(title?: string) {
  useEffect(() => {
    switch (title) {
      case undefined:
    }
    document.title = `${getDecoration(title)} Thomas Moawad`;
  }, []);
}

export { useTitle };
