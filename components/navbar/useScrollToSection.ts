import { useEffect, useState } from "react";

// TODO when refreshing, should scroll me back into same place on the page.
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
