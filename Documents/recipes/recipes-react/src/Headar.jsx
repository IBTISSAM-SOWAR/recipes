import { useState } from "react";
import "./header.css";
import Card from "./Card";

export default function Header() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const albanianRecipes = [
    { title: "albanian pizza", description: "Classic pizza with an Indian twist.", image: "./immg.jpg" },
    { title: "albanian Sheqerpare", description: "Sweet syrup-soaked cookies.", image: "./immg.jpg" },
    { title: " albanian Flija Pancake", description: "Layered pancake, a Balkan delicacy.", image: "./immg.jpg" },
    { title: "albanian Revani Cake", description: "Traditional semolina-based dessert.", image: "./immg.jpg" },
  ];

  const indianRecipes = [
    { title: "rise", description: "Classic pizza with an Indian twist.", image: "./immge.jpg" },
    { title: "cary chikin", description: "Sweet syrup-soaked cookies.", image: "./immge.jpg" },
    { title: "briany", description: "Layered pancake, a Balkan delicacy.", image: "./immge.jpg" },
    { title: "pacomba", description: "Traditional semolina-based dessert.", image: "./immge.jpg" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
          <h1 className="text-center text-xxl font-bold mt-4">Albanian and Indain Recipes</h1>
            {albanianRecipes.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          
       <hr />    {indianRecipes.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image} 
              />
            ))}
          </>
        );;
      case "albanian":
        return (
          <>
          <h1 className="text-center text-xxl font-bold mt-4">Albanian Recipes</h1>
            {albanianRecipes.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </>
        );
      case "indian":
        return (
          <>
          <h1 className="text-center text-xxl font-bold mt-4">Indian Recipes</h1>
            {indianRecipes.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image} 
              />
            ))}
          </>
        );
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <>
      <header>
        <nav>
          <ul className="headerx">
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
      <main>{renderContent()}</main>
    </>
  );
}
