import { windowHeight } from "@/themes/app.constant";
import Images from "@/utils/images";

export const slides = [
  {
    id: 0,
    image: Images.onBoardingPiggy,
    text: "Start a",
    highlightedText: " SIP",
    description:
      "Put your money aside every month in mutual fund direct plans and build your wealth.",
    size: {
      width: '80%',
      height: windowHeight(300)
    }
  },
  {
    id: 1,
    image: Images.onBoardingHandshake,
    text: "Higher Returns With",
    highlightedText: " Direct Plans",
    description:
      "Invest in Direct Plans of Mutual Funds to eliminate the distributor and save up to 1.5% on lower expense ratios",
      size: {
        width: '80%',
        height: windowHeight(260)
      }
  },
  {
    id: 2,
    image: Images.onBoardingAdvisory,
    text: "Automated ",
    highlightedText: "Advisory",
    description:
      "Get unbiased data driven recommendations on the best mutual funds most suited for you",
      size: {
        width: '80%',
        height: windowHeight(280)
      }
  },
];
