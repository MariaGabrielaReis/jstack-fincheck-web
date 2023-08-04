import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function AccountsSliderNavigation() {
  const swiper = useSwiper();

  return (
    <div>
      <button className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-teal-600 transition-colors disabled:opacity-40">
        <ChevronLeftIcon
          onClick={() => swiper.slidePrev()}
          className="text-white w-6 h-6"
        />
      </button>
      <button className="py-3 pr-2.5 pl-3.5 rounded-full enabled:hover:bg-teal-600 transition-colors disabled:opacity-40">
        <ChevronRightIcon
          onClick={() => swiper.slideNext()}
          className="text-white w-6 h-6"
        />
      </button>
    </div>
  );
}
