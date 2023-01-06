import BrowseEventFilter from "components/bypage/BrowseEventFilter";
import BrowseEventList from "components/bypage/BrowseEventList";
import BrowseSearchBar from "components/bypage/BrowseSearchBar";
import BrowseStyles from "styles/Browse.module.css";

const BrowseContainer = () => {
  return (
    <div className={BrowseStyles.container} id='browse-container'>
      <div className='grid grid-cols-4 gap-4 h-full w-full'>
        <div className='...' id='browse-filter'>
          <BrowseEventFilter />
        </div>
        <div className='col-span-3 overflow-auto ...' id='browse-list'>
          <BrowseSearchBar />

          <BrowseEventList />
        </div>
      </div>
    </div>
  );
};

export default BrowseContainer;
