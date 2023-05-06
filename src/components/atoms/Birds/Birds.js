import { useEffect, useState } from "react";
import "./Birds.css";

const Birds = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const setLoad = () => setIsReady(true);

    if (document.readyState === "complete") {
      setLoad();
    } else {
      window.addEventListener("load", setLoad);

      return () => window.removeEventListener("load", setLoad);
    }
  }, []);

  return (
    <div className="birds-container">
      <div className={isReady ? "birds birds-animate" : "birds"}></div>
    </div>
  );
};
export default Birds;
