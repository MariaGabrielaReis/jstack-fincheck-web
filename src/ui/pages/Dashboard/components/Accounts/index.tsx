import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { AccountsSliderNavigation } from "./AccountsSliderNavigation";
import { useAccountsController } from "./useAccountsController";

export function Accounts() {
  const { sliderState, setSliderState } = useAccountsController();

  return (
    <div className="bg-teal-700 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 100.000,00
          </strong>
          <button className="w-8 h-8 flex items-center justify-center">
            <EyeIcon open={true} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={2.2}
            onSlideChange={swiper =>
              setSliderState({
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd,
              })
            }
          >
            <div
              slot="container-start"
              className="flex items-center justify-between mb-2"
            >
              <span className="tracking-[-1px] text-white text-lg">
                Minhas contas
              </span>

              <AccountsSliderNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
              />
            </div>

            <SwiperSlide>
              <AccountCard color="#045caa" name="BTG" balance={7000.21} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
