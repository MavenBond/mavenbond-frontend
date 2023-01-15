import { useAuth } from "context/useAuth";
import dynamic from "next/dynamic";
import Router from "next/router";
import { useState } from "react";
import DashboardStyles from "styles/Dashboard.module.css";
import { formatted } from "utils/time";
import { SocialIcon } from "react-social-icons";

const DashboardStatCardsRow = dynamic(() => import("components/bypage/DashboardStatCardsRow"));
const DashboardCard = dynamic(() => import("components/bypage/DashboardCard"));
const Modal = dynamic(() => import("components/common/Modal"));

export interface OfferInfo {
  offerId: string;
  influencerId: string;
  companyId: string;
  companyName: string;
  eventId: string;
  eventName: string;
  eventDescription: string;
  message: string;
  acceptedPrice: number;
  unit: string;
  platform: string;
  startDate: number;
  endDate: number;
  status: number;
}

export interface OfferStatCards {
  records?: OfferInfo[];
  numberContent: number;
  textContent: string;
  isSpecial: boolean;
}

const OPENING: OfferInfo[] = [
  {
    offerId: "O001",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 500,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 0,
  },
  {
    offerId: "O002",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 501,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 0,
  },
  {
    offerId: "O003",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 502,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 0,
  },
  {
    offerId: "O004",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 503,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 0,
  },
  {
    offerId: "O005",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 504,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 0,
  },
  {
    offerId: "O006",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 505,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 0,
  },
  {
    offerId: "O007",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 506,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 0,
  },
  {
    offerId: "O008",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 507,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 0,
  },
  {
    offerId: "O009",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 508,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 0,
  },
  {
    offerId: "O0010",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 509,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 0,
  },
];

const INRPOGRESS: OfferInfo[] = [
  {
    offerId: "O0011",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 510,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 1,
  },
  {
    offerId: "O0012",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 511,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 1,
  },
  {
    offerId: "O0013",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 512,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 1,
  },
  {
    offerId: "O0014",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 513,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 1,
  },
  {
    offerId: "O0015",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 514,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 1,
  },
  {
    offerId: "O0016",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 515,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 1,
  },
];

const COMPLETED: OfferInfo[] = [
  {
    offerId: "O0017",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 516,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 2,
  },
  {
    offerId: "O0018",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 517,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 2,
  },
  {
    offerId: "O0019",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 518,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 2,
  },
  {
    offerId: "O0020",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 519,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 2,
  },
  {
    offerId: "O0021",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 520,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 2,
  },
  {
    offerId: "O0022",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 521,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 2,
  },
  {
    offerId: "O0023",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 522,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 2,
  },
  {
    offerId: "O0024",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 523,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 2,
  },
  {
    offerId: "O0025",
    influencerId: "I001",
    companyId: "C001",
    companyName: "LULULOLA COFFEE",
    eventId: "E001",
    eventName: "[LULULOLA SHOW] BẰNG KIỀU | NGƯỜI ĐỨNG SAU HẠNH PHÚC",
    eventDescription:
      "Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.",
    message: "I make to make you rich as fuck by selling all the tickets and the bitches.",
    acceptedPrice: 524,
    unit: "USD",
    platform: "FACEBOOK",
    startDate: 1672896645,
    endDate: 1672896645,
    status: 2,
  },
];

const DashboardCardsColumn = () => {
  // DEV
  const BUSINESS_STAT_CARDS: OfferStatCards[] = [
    {
      numberContent: 0,
      textContent: "New Event Ad",
      isSpecial: true,
    },
    {
      numberContent: 10,
      textContent: "Opening Events",
      isSpecial: false,
    },
    {
      numberContent: 12,
      textContent: "In Progress",
      isSpecial: false,
    },
    {
      numberContent: 6,
      textContent: "Completed",
      isSpecial: false,
    },
  ];

  // DEV
  const INFLUENCE_STAT_CARDS: OfferStatCards[] = [
    {
      records: [],
      numberContent: 0,
      textContent: "Find Ad Offers",
      isSpecial: true,
    },
    {
      records: OPENING,
      numberContent: OPENING.length,
      textContent: "Opening Offers",
      isSpecial: false,
    },
    {
      records: INRPOGRESS,
      numberContent: INRPOGRESS.length,
      textContent: "In Progress",
      isSpecial: false,
    },
    {
      records: COMPLETED,
      numberContent: COMPLETED.length,
      textContent: "Completed",
      isSpecial: false,
    },
  ];

  const { profile } = useAuth();
  const isBusiness = profile?.user_role === "business";
  const statsModel = isBusiness ? BUSINESS_STAT_CARDS : INFLUENCE_STAT_CARDS;
  const [currSectionTitle, setCurrSectionTitle] = useState<string>(statsModel[1].textContent);
  const [sectionFadedin, setSectionFadedIn] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // DEV
  const CURRENT_LIST = statsModel.filter(({ textContent }) => textContent === currSectionTitle)[0];
  const handleStatusToText = (enumValue: number) =>
    ["Open", "In Progress", "Completed"][enumValue] || "N/A";

  return (
    <div className='flex flex-col flex-1 overflow-hidden select-none'>
      {/* small stat cards row */}
      <DashboardStatCardsRow
        {...{
          statsModel,
          isBusiness,
          handleInfluencerSpecial: () => Router.push("/browse"),
          handleBusinessSpecial: undefined,
          currSectionTitle,
          setCurrSectionTitle,
          sectionFadedin,
          setSectionFadedIn,
        }}
      />
      <Modal {...{ title: "OFFER DETAILS", isOpen, closeModal: () => setIsOpen(false) }}>
        Default Content
      </Modal>

      {/* main cards grid */}
      <div
        className={`
          ${sectionFadedin && "animate-fadeIn"} 
          flex flex-col justify-between basis-3/4
        `}
        onAnimationEnd={() => setSectionFadedIn(false)}
      >
        <div className={DashboardStyles.cardsSectionTitle}>{currSectionTitle}</div>
        <div id='cardsScrollContainer' className={DashboardStyles.cardsScrollContainer}>
          {/* DEV */}
          {CURRENT_LIST?.records?.map(
            ({
              unit,
              acceptedPrice,
              status,
              startDate,
              endDate,
              offerId,
              eventName,
              companyName,
              platform,
            }) => (
              <DashboardCard key={offerId}>
                {/* card details */}
                <span
                  className='scale-[0.8] absolute top-[0.9rem] 
                  right-[1.5rem] bg-pink-500 
                text-white self-end px-4 py-1 rounded-2xl mb-2'
                >
                  {handleStatusToText(status)}
                </span>
                <div
                  style={{ position: "absolute", flexShrink: 0, bottom: "1.75rem", left: "2rem" }}
                  className='tooltip'
                  data-tip='Event Platform'
                >
                  <SocialIcon
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                    url={`https://${platform.toLowerCase()}.com/`}
                  />
                </div>
                <p
                  className='text-gray-400 text-[0.9rem] w-full 
                  flex justify-between items-center'
                >
                  {companyName}
                </p>
                <p className={`${DashboardStyles.dashboardCardTitle}`}>{eventName}</p>
                <div className='divider m-0' />
                <div className='flex flex-col flex-1'>
                  <div
                    className={`flex flex-col gap-3 py-2 flex-1 
                    ${DashboardStyles.dashboardCardItems}`}
                  >
                    <p>
                      <strong>Offer ID:</strong> {offerId}
                    </p>
                    <p>
                      <strong>Start Date:</strong> {formatted(startDate)}
                    </p>
                    <p>
                      <strong>End Date:</strong> {formatted(endDate)}
                    </p>
                    <p>
                      <strong>Accepted Price:</strong> {acceptedPrice} {unit}
                    </p>
                  </div>

                  <div className='self-end'>
                    <button
                      onClick={() => setIsOpen(true)}
                      className='btn btn-outline btn-primary rounded-[2rem]'
                    >
                      VIEW MORE
                    </button>
                  </div>
                </div>
              </DashboardCard>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCardsColumn;
