import DashboardStyles from "styles/Dashboard.module.css";

type Props = {
  children?: React.ReactNode;
};

const DashboardCard = ({ children }: Props) => {
  return (
    <div
      className={`dark:shadow-white/40
      ${DashboardStyles.dashboardCard}`}
    >
      {children}
    </div>
  );
};

export default DashboardCard;
