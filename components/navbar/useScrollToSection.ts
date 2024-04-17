import { useEffect, useState } from "react";

export const useScrollToSection = () => {
  const [selectedHref, setSelectedHref] = useState<string | null>(null);

  // TODO needs fix, when selecting a nav item and refreshing, it flickers.
  useEffect(() => {
    if (!selectedHref) {
      setSelectedHref(window.location.hash);
      return;
    }

    const element = document.getElementById(selectedHref);

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth" });
  }, [selectedHref]);

  return { selectedHref, setSelectedHref };
};
