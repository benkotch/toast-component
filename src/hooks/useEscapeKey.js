import { useEffect, useRef } from "react";

function useEscapeKey(callback) {
  useEffect(() => {
    function handleKeydown(event) {
      if (event.key === "Escape") {
        console.log("Escape key pressed");
        callback(event);
      }
    }

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return null;
}

export default useEscapeKey;
