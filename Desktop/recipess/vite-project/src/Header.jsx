import { useState } from "react";
import "./header.css";
import Card from "./Card";

export default function Header() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab); 
  };

  const albanianRecipes = [
    { title: "Pizza", description: "Classic pizza with an Indian twist.", image: "./immg.jpg" },
    { title: "Sheqerpare", description: "Sweet syrup-soaked cookies.", image: "./immg.jpg" },
    { title: "Flija Pancake", description: "Layered pancake, a Balkan delicacy.", image: "./immg.jpg" },
    { title: "Revani Cake", description: "Traditional semolina-based dessert.", image: "./immg.jpg" },
  ];

  const indianRecipes = [
    { title: "cary", description: "Classic pizza with an Indian twist.", image: "./immge.jpg" },
    { title: "chiken rise", description: "Sweet syrup-soaked cookies.", image: "./immge.jpg" },
    { title: "dewaly", description: "Layered pancake, a Balkan delicacy.", image: "./immge.jpg" },
    { title: "indian Cake", description: "Traditional semolina-based dessert.", image:"./immge.jpg" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return(
          <>
          <h1 className="text-center bold text-3xl p-4">All Recipes</h1>
          <div className="flex  gap-7 justify-around  items-center m-6">
            
            {albanianRecipes.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
            </div>
         <hr />
         <div className="flex  gap-7 justify-around  items-center m-6">
         {indianRecipes.map((item, index) => (
           <Card
             key={index}
             title={item.title}
             description={item.description}
             image={item.image}
           />
         ))}
       </div>
       </>
     );
      case "albanian":
        return (
          <>
          <h1 className="text-center bold text-3xl p-5">Albanian Recipes</h1>
          <div className="flex  gap-7 justify-around  items-center m-6">
          
            {albanianRecipes.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
            </div>
          </>
        );
      case "indian":
        return (
          <>  
          <h1 className="text-center bold text-3xl p-5">Indain Recipes</h1>
          <div className="flex  gap-7 justify-around  items-center m-6">
        
            {indianRecipes.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
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
      <main>{renderContent()}</main>
    </>
  );
}
