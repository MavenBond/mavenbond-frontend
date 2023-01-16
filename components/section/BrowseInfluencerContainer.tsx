import { Influencer } from "models/influencer";
import dynamic from "next/dynamic";
import { SetStateAction, useEffect, useState } from "react";

const BrowseInfluencerList = dynamic(() => import("components/bypage/BrowseInfluencerList"));
const BrowseSearchBar = dynamic(() => import("components/bypage/BrowseSearchBar"));
const Pagination = dynamic(() => import("components/common/Pagination"));

type Filter = {
  key: string;
  pageNo: number;
  pageSize: number;
  sortBy: string;
  isAsc: boolean;
};

const BrowseInfluencerContainer = () => {
  const PAGE_LIMIT = 12;
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState<{ dataList: Influencer[]; total: number }>({
    dataList: [],
    total: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);

  // Input search value
  const [searchValue, setSearchValue] = useState("");

  // Filter
  const [filterData, setFilterData] = useState<Filter>({
    key: "",
    pageNo: currentPage - 1,
    pageSize: PAGE_LIMIT,
    sortBy: "",
    isAsc: true,
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
  const fetchData = async (filter: any) => {
    try {
      // API HERE
      // const response = await userAPI.getAllData(loggedUser.logUserId, filter);
      const apiCall = await fetch(
        "http://184.73.229.188:8080/api/v1/influencer/?" + new URLSearchParams(filter)
      )
        .then((res) => {
          res.json().then((response) => {
            const data = response.content;
            console.log("data: ", data);

            setData({
              dataList: data as Influencer[],
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
    fetchUpdatedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    // ANDREW OI SKELETON GIUP MINH
    <div className='px-10'>
      <BrowseSearchBar value={searchValue} onChange={handleDataChange} onClick={handleSearchData} />
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
        <BrowseInfluencerList influencerList={data.dataList} />
      </div>
    </div>
  );
};

export default BrowseInfluencerContainer;
