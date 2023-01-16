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

// DEV
export const BUSINESS_STAT_CARDS: OfferStatCards[] = [
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
export const ALL_OFFERS: OfferInfo[] = [
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

export const INFLUENCE_STAT_MODEL: OfferStatCards[] = [
  {
    records: [],
    numberContent: 0,
    textContent: "Find Ad Offers",
    isSpecial: true,
  },
  {
    records: [],
    numberContent: 0,
    textContent: "Opening Offers",
    isSpecial: false,
  },
  {
    records: [],
    numberContent: 0,
    textContent: "In Progress",
    isSpecial: false,
  },
  {
    records: [],
    numberContent: 0,
    textContent: "Completed",
    isSpecial: false,
  },
];

export const distributeDataToModel = (data: OfferInfo[], model: OfferStatCards[]) => {
  //copy original model to maniplate
  const distributedModel = [...model];

  // separate data by statsu
  const OPENING = data.filter((item) => item.status === 0);
  const PROGRESS = data.filter((item) => item.status === 1);
  const COMPLETED = data.filter((item) => item.status === 2);

  // model distribution
  distributedModel[1].records = OPENING;
  distributedModel[1].numberContent = OPENING.length;
  distributedModel[2].records = PROGRESS;
  distributedModel[2].numberContent = PROGRESS.length;
  distributedModel[3].records = COMPLETED;
  distributedModel[3].numberContent = COMPLETED.length;

  // return manipulated model
  return distributedModel;
};
