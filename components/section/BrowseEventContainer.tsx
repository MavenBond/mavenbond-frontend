import dynamic from "next/dynamic";
// import BrowseStyles from "styles/Browse.module.css";

import { ChevronDownIcon, FunnelIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import { SetStateAction, useEffect, useState } from "react";
import { DeliveryType, PlatformType, StatusType } from "models/enums";
import { Event } from "models/event";
import useSWR from "swr";

const sortOptions = [
  { name: "Latest", href: "#", current: true },
  { name: "Oldest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "platform",
    name: "Platform",
    options: [
      { value: "facebook", label: "Facebook", checked: false },
      { value: "tiktok", label: "TikTok", checked: false },
      { value: "youtube", label: "Youtube", checked: false },
      { value: "twitter", label: "Twitter", checked: false },
    ],
  },
  {
    id: "range",
    name: "Payment Range",
    options: [
      { value: "0to100", label: "$0 - $100", checked: false },
      { value: "100to500", label: "$100 - $500", checked: false },
      { value: "500to1000", label: "$500 - $1000", checked: false },
    ],
  },
  {
    id: "delivery",
    name: "Delivery",
    options: [
      { value: "video", label: "Video", checked: false },
      { value: "post", label: "Post", checked: false },
    ],
  },
];
const BrowseEventList = dynamic(() => import("components/bypage/BrowseEventList"));
const BrowseSearchBar = dynamic(() => import("components/bypage/BrowseSearchBar"));
const Pagination = dynamic(() => import("components/common/Pagination"));

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Filter = {
  key: string;
  pageNo: number;
  pageSize: number;
  sortBy: string;
  sortDir: string; // 'asc' or 'desc'
  // platform: PlatformType[];
  // delivery: DeliveryType[];
  // moneyMax: number;
  // moneyMin: number;
};

const mockData = {
  data: {
    content: [
      {
        id: 1,
        title: "Canh sat danh dan 24/7 Tet Nguyen Dan!",
        subject: "If a dog chews shoes whose shoes does he choose?",
        description: "Yo yoy yy oy oyo yo yoy ",
        moneyMin: 100,
        moneyMax: 200,
        startDate: 1672997687,
        endDate: 1673997687,
        businessId: "B002",
        businessEmail: "ssq@gmail.com",
        businessName: "Sneaky Sasquatch",
        platform: PlatformType.FACEBOOK,
        type: DeliveryType.VIDEO,
        status: StatusType.OPEN,
        offers: [],
      },
      {
        id: 2,
        title: "Canh sat danh dan 24/7 Tet Nguyen Dan!",
        subject: "If a dog chews shoes whose shoes does he choose?",
        description: "Yo yoy yy oy oyo yo yoy ",
        moneyMin: 100,
        moneyMax: 200,
        startDate: 1672997687,
        endDate: 1673997687,
        businessId: "B002",
        businessEmail: "ssq@gmail.com",
        businessName: "Sneaky Sasquatch",
        platform: PlatformType.FACEBOOK,
        type: DeliveryType.VIDEO,
        status: StatusType.OPEN,
        offers: [],
      },
      {
        id: 3,
        title: "Canh sat danh dan 24/7 Tet Nguyen Dan!",
        subject: "If a dog chews shoes whose shoes does he choose?",
        description: "Yo yoy yy oy oyo yo yoy ",
        moneyMin: 100,
        moneyMax: 200,
        startDate: 1672997687,
        endDate: 1673997687,
        businessId: "B002",
        businessEmail: "ssq@gmail.com",
        businessName: "Sneaky Sasquatch",
        platform: PlatformType.FACEBOOK,
        type: DeliveryType.VIDEO,
        status: StatusType.OPEN,
        offers: [],
      },
      {
        id: 4,
        title: "Canh sat danh dan 24/7 Tet Nguyen Dan!",
        subject: "If a dog chews shoes whose shoes does he choose?",
        description: "Yo yoy yy oy oyo yo yoy ",
        moneyMin: 100,
        moneyMax: 200,
        startDate: 1672997687,
        endDate: 1673997687,
        businessId: "B002",
        businessEmail: "ssq@gmail.com",
        businessName: "Sneaky Sasquatch",
        platform: PlatformType.FACEBOOK,
        type: DeliveryType.VIDEO,
        status: StatusType.OPEN,
        offers: [],
      },
      {
        id: 5,
        title: "Canh sat danh dan 24/7 Tet Nguyen Dan!",
        subject: "If a dog chews shoes whose shoes does he choose?",
        description: "Yo yoy yy oy oyo yo yoy ",
        moneyMin: 100,
        moneyMax: 200,
        startDate: 1672997687,
        endDate: 1673997687,
        businessId: "B002",
        businessEmail: "ssq@gmail.com",
        businessName: "Sneaky Sasquatch",
        platform: PlatformType.FACEBOOK,
        type: DeliveryType.VIDEO,
        status: StatusType.OPEN,
        offers: [],
      },
      {
        id: 6,
        title: "Canh sat danh dan 24/7 Tet Nguyen Dan!",
        subject: "If a dog chews shoes whose shoes does he choose?",
        description: "Yo yoy yy oy oyo yo yoy ",
        moneyMin: 100,
        moneyMax: 200,
        startDate: 1672997687,
        endDate: 1673997687,
        businessId: "B002",
        businessEmail: "ssq@gmail.com",
        businessName: "Sneaky Sasquatch",
        platform: PlatformType.FACEBOOK,
        type: DeliveryType.VIDEO,
        status: StatusType.OPEN,
        offers: [],
      },
      {
        id: 7,
        title: "Canh sat danh dan 24/7 Tet Nguyen Dan!",
        subject: "If a dog chews shoes whose shoes does he choose?",
        description: "Yo yoy yy oy oyo yo yoy ",
        moneyMin: 100,
        moneyMax: 200,
        startDate: 1672997687,
        endDate: 1673997687,
        businessId: "B002",
        businessEmail: "ssq@gmail.com",
        businessName: "Sneaky Sasquatch",
        platform: PlatformType.FACEBOOK,
        type: DeliveryType.VIDEO,
        status: StatusType.OPEN,
        offers: [],
      },
      {
        id: 8,
        title: "Canh sat danh dan 24/7 Tet Nguyen Dan!",
        subject: "If a dog chews shoes whose shoes does he choose?",
        description: "Yo yoy yy oy oyo yo yoy ",
        moneyMin: 100,
        moneyMax: 200,
        startDate: 1672997687,
        endDate: 1673997687,
        businessId: "B002",
        businessEmail: "ssq@gmail.com",
        businessName: "Sneaky Sasquatch",
        platform: PlatformType.FACEBOOK,
        type: DeliveryType.VIDEO,
        status: StatusType.OPEN,
        offers: [],
      },
    ],
    totalElements: 9,
  },
};

const BrowseEventContainer = () => {
  const PAGE_LIMIT = 8;
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState<{ dataList: Event[]; total: number }>({
    dataList: [],
    total: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);
  // console.log("currentPage: ", currentPage);

  // Input search value
  const [searchValue, setSearchValue] = useState("");

  // Filter
  const [filterData, setFilterData] = useState<Filter>({
    key: "",
    pageNo: currentPage - 1,
    pageSize: PAGE_LIMIT,
    sortBy: "",
    sortDir: "", // 'asc' or 'desc'
    // platform: [],
    // delivery: [],
    // moneyMin: 0,
    // moneyMax: 99999999,
  });

  const handleDataChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      const currentFilter = filterData;
      // Reset default
      currentFilter.pageNo = 0;
      currentFilter.key = "";
      setFilterData(currentFilter);
      fetchData(filterData);
    }
  };

  // Populate Data
  const fetchData = async (filter: Filter) => {
    try {
      // API HERE

      // const response = await userAPI.getAllData(loggedUser.logUserId, filter);
      const apiCall = await fetch("http://184.73.229.188:8090/api/v1/events/")
        .then((res) => {
          res.json().then((response) => {
            const data = response.content;

            setData({
              dataList: data as Event[],
              total: response.totalElements,
            });
          });
        })
        .catch((err) => console.log(err));

      setIsLoading(false);
    } catch (error) {
      console.log("Fail to fetch: ", error);
    }
  };

  // Submit search name Data
  const handleSearchData = () => {
    const currentFilter = filterData;
    // Reset default
    currentFilter.pageNo = 0;
    currentFilter.key = searchValue;
    setFilterData(currentFilter);
    fetchData(filterData);
  };

  const fetchUpdatedData = () => {
    const currentFilter = filterData;
    currentFilter.pageNo = currentPage - 1;
    setFilterData(currentFilter);
    fetchData(filterData);
  };

  useEffect(() => {
    fetchData(filterData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    // ANDREW OI SKELETON GIUP MINH
    <div className='drawer drawer-end overflow-hidden'>
      <input id='my-drawer-1' type='checkbox' className='drawer-toggle' />
      <div className='excludeNavContent'>
        <div className='drawer-content flex flex-col scrollbar-hide py-4'>
          {/* <!-- Page content here --> */}
          <div className='w-full px-4 sm:px-6 lg:px-8'>
            <div className='flex items-baseline justify-between border-b border-gray-200 pb-6'>
              <h1 className='text-4xl font-bold tracking-tight'>Events</h1>

              <div className='flex items-center'>
                <div className='dropdown dropdown-end'>
                  <label tabIndex={0} className='btn btn-outline m-1'>
                    Sort
                    <ChevronDownIcon
                      className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                      aria-hidden='true'
                    />
                  </label>

                  <ul
                    tabIndex={0}
                    className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
                  >
                    {sortOptions.map((option) => (
                      <li key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? "font-medium text-gray-900" : "text-gray-500",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {option.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type='button'
                  className='-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7'
                >
                  <span className='sr-only'>View grid</span>
                  <Squares2X2Icon className='h-5 w-5' aria-hidden='true' />
                </button>
                <label
                  htmlFor='my-drawer-1'
                  className='btn -m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
                >
                  <span className='sr-only'>Filters</span>
                  <FunnelIcon className='h-5 w-5' aria-hidden='true' />
                </label>
              </div>
            </div>

            <section aria-labelledby='products-heading'>
              <h2 id='products-heading' className='sr-only'>
                Products
              </h2>

              <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
                {/* Filters */}
                <form className='hidden lg:block'>
                  {filters.map((section) => (
                    <div key={section.id} className='border-b border-gray-200 py-6'>
                      <div className='pt-6'>
                        <div className='space-y-4'>
                          <h3 className='-my-3 flow-root'>
                            <span className='font-medium'>{section.name}</span>
                          </h3>
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className='flex items-center'>
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type='checkbox'
                                defaultChecked={option.checked}
                                className='h-4 w-4 rounded border-gray-300 focus:ring-indigo-500'
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className='ml-3 text-sm'
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </form>

                {/* Product grid */}
                <div className='lg:col-span-3'>
                  {/* Replace with your content */}
                  <BrowseSearchBar />
                  <Pagination
                    onPageChange={(page: number) => {
                      setCurrentPage(page);
                    }}
                    currentPage={currentPage}
                    pageSize={PAGE_LIMIT}
                    totalCount={data.total}
                  />
                  <div
                    className='overflow-scroll h-[72.25vh] pb-8 rounded-[2rem] 
                    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-500/40'
                  >
                    <BrowseEventList eventList={data.dataList} />
                  </div>
                  {/* /End replace */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className='drawer-side'>
        <label htmlFor='my-drawer-1' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 bg-base-100'>
          <h2 className='text-lg font-medium text-gray-900 mx-2'>Filters</h2>

          {/* <!-- Sidebar content here --> */}
          {filters.map((section) => (
            <div key={section.id} className='border-t border-gray-200 px-4 py-6'>
              <h3 className='-mx-2 -my-3 flow-root'>
                <span className='font-medium text-gray-900'>{section.name}</span>
              </h3>
              <div className='pt-6'>
                <div className='space-y-6'>
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className='flex items-center'>
                      <input
                        id={`filter-mobile-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type='checkbox'
                        defaultChecked={option.checked}
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                        className='ml-3 min-w-0 flex-1 text-gray-500'
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrowseEventContainer;
