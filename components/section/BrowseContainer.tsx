import BrowseList from "components/bypage/BrowseList";
import BrowseStyles from "styles/Browse.module.css";

const BrowseContainer = () => {
  return (
    <div className={BrowseStyles.container} id='browse-container'>
      <BrowseList />
    </div>
  );
};

export default BrowseContainer;
