import { useState } from "react";
import "./header.css";
import CardInd from "./CardInd";
import CardAlb from "./CardAlb";

export default function Header() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab); 
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <><CardAlb/><hr />
        <CardInd/></>
      case "albanian":
        return <CardAlb />;
      case "indian":
        return <CardInd />;
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <>
      <header>
        <nav>
          <ul className="header">
            <li>
              <a
                href="#"
                id="tab-dashboard"
                className={activeTab === "dashboard" ? "dashboard" : "not-dashboard"}
                onClick={() => handleTabClick("dashboard")}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                id="tab-albanian"
                className={activeTab === "albanian" ? "dashboard" : "not-dashboard"}
                onClick={() => handleTabClick("albanian")}
              >
                Albanian Recipes
              </a>
            </li>
            <li>
              <a
                href="#"
                id="tab-indian"
                className={activeTab === "indian" ? "dashboard" : "not-dashboard"}
                onClick={() => handleTabClick("indian")}
              >
                Indian Recipes
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {renderContent()}
      </main>
    </>
  );
}
