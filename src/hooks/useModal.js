import { useEffect, useState } from "react";

const useModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  return [show, setShow];
};

export default useModal;
