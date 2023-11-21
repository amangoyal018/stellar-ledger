// import styles from "./dashboard.css";
import friends_img from "../Media/friends.png";
import groups_img from "../Media/groups.png";
import expense_img from "../Media/expense.png";
import transaction_img from "../Media/transaction.png";
import logo_img from "../Media/logo.png";
// import left_arrow from "../Media/left-arrow.png";
import right_arrow from "../Media/right-arrow.png";
import { useState } from "react";

const Content = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    console.log("changed");
  };
  return (
    <div
      className={`flex-1 bg-slate-400 content_d ${
        isCollapsed ? "collapsed" : ""
      }`}
    >
      <nav>
        <div className="sidebar-top">
          <a href="#" className="logo__wrapper">
            <img src={logo_img} alt="Logo" className="logo" />
            <h1 className="hide">SplitKaro</h1>
          </a>
          <div className="expand-btn py-6" onClick={handleToggleCollapse}>
            <img src={right_arrow} alt="Chevron" />
          </div>
        </div>
        <div className="sidebar-links">
          <ul>
            <li>
              <a href="#dashboard" title="Dashboard" className="tooltip">
                <img src={friends_img} alt="Dashboard" />
                <span className="link hide">Friends</span>
                <span className="tooltip__content">Friends</span>
              </a>
            </li>
            <li>
              <a href="#project" title="Project" className="tooltip">
                <img src={groups_img} alt="Analytics" />
                <span className="link hide">Groups</span>
                <span className="tooltip__content">Groups</span>
              </a>
            </li>
            <li>
              <a href="#performance" title="Performance" className="tooltip">
                <img src={expense_img} alt="Performance" />
                <span className="link hide">Expenses</span>
                <span className="tooltip__content">Expenses</span>
              </a>
            </li>
            <li>
              <a href="#funds" title="Funds" className="tooltip">
                <img src={transaction_img} alt="Funds" />
                <span className="link hide">Transactions</span>
                <span className="tooltip__content">Transactions</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Content;
