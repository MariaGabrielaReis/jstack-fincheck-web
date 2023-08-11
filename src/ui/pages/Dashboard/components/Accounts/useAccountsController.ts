import { useState } from "react";

export function useAccountsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: false,
    isEnd: false,
  });

  return { sliderState, setSliderState };
}
