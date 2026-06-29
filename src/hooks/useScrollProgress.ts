import { useEffect, useState } from "react";

export default function useScrollProgress() {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.body.scrollHeight -
        window.innerHeight;

      const current =
        window.scrollY / total;

      setProgress(current);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return progress;
}