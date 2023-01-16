export interface OfferInfo {
  id?: string;
  influencerId?: string;
  companyId?: string;
  companyName?: string;
  eventId?: string;
  eventName?: string;
  eventDescription?: string;
  message?: string;
  acceptPrice?: number;
  unit?: string;
  platform?: string;
  startDate?: number;
  endDate?: number;
  status?: string | number;
}

export interface EventInfo {
  id?: number;
  title?: string;
  subject?: string;
  type?: string;
  platform?: string;
  description?: string;
  moneyMin?: number;
  moneyMax?: number;
  status?: string;
  businessId?: string;
  businessEmail?: string;
  businessName?: string;
  startDate?: number;
  endDate?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offers?: any[];
}

export interface EventStatCards {
  records?: EventInfo[];
  numberContent?: number;
  textContent?: string;
  isSpecial?: boolean;
}

export interface OfferStatCards {
  records?: OfferInfo[];
  numberContent?: number;
  textContent?: string;
  isSpecial?: boolean;
}

// DEV
export const BUSINESS_STAT_MODEL: EventStatCards[] = [
  {
    records: [],
    numberContent: 0,
    textContent: "New Event Ad",
    isSpecial: true,
  },
  {
    records: [],
    numberContent: 10,
    textContent: "Opening Events",
    isSpecial: false,
  },
  {
    records: [],
    numberContent: 12,
    textContent: "In Progress",
    isSpecial: false,
  },
  {
    records: [],
    numberContent: 6,
    textContent: "Completed",
    isSpecial: false,
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

export const distributeDataToModel = (
  data: (OfferInfo | EventInfo)[] | undefined,
  model: OfferStatCards[] | EventStatCards[]
) => {
  //copy original model to maniplate
  const distributedModel = [...model];

  // separate data by status
  const OPENING = data?.filter((item) => item.status === 0 || item.status === "OPEN");
  const PROGRESS = data?.filter((item) => item.status === 1 || item.status === "INPROGRESS");
  const COMPLETED = data?.filter((item) => item.status === 2 || item.status === "COMPLETED");

  // model distribution
  distributedModel[1].records = OPENING as EventInfo[] | OfferInfo[] | undefined;
  distributedModel[2].records = PROGRESS as EventInfo[] | OfferInfo[] | undefined;
  distributedModel[3].records = COMPLETED as EventInfo[] | OfferInfo[] | undefined;
  distributedModel[1].numberContent = OPENING?.length;
  distributedModel[2].numberContent = PROGRESS?.length;
  distributedModel[3].numberContent = COMPLETED?.length;

  // return manipulated model
  return distributedModel;
};
