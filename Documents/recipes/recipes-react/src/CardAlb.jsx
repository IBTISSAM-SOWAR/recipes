export default function CardAlb(){

    const recipes = [
        { title: "Pizza", description: "Classic pizza with an Indian twist.", image: "./immg.jpg" },
        { title: "Sheqerpare", description: "Sweet syrup-soaked cookies.", image: "./immg.jpg" },
        { title: "Flija Pancake", description: "Layered pancake, a Balkan delicacy.", image: "./immg.jpg" },
        { title: "Revani Cake", description: "Traditional semolina-based dessert.", image: "./immg.jpg" },
      ];
  
      return (
        <div className="albanian-recipe-list p-5">
          <h1 className="text-2xl text-center font-semibold mb-4 mt-4">Albanian Recipes</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe, index) => (
              <div key={index} className="recipe-item bg-white rounded shadow-lg p-4">
                <img className="w-full h-36 object-cover rounded" src={recipe.image} alt={recipe.title} />
                <h3 className="text-lg font-bold mt-2">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{recipe.description}</p>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => alert(recipe.title)}>View</button>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded"onClick={() => alert("are you sure to edit?")}>Edit</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded"onClick={() => alert("are you sure to deleted ?")}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

