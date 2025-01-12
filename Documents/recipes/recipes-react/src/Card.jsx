// eslint-disable-next-line react/prop-types
export default function Card({ title, description, image }) {
  return (
    <div className="container p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="card-item bg-white rounded-lg shadow-lg p-4">
          <img
            className="w-full h-40 object-cover rounded-lg"
            src={image}
            alt={title || "Recipe Image"}
          />
          <h3 className="text-xl font-bold mt-4">{title}</h3>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
          <div className="mt-5 flex justify-center space-x-2">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition duration-200"
              onClick={() => alert(`Viewing: ${title}`)}
            >
              View
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition duration-200"
              onClick={() => alert("Are you sure you want to edit?")}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition duration-200"
              onClick={() => alert("Are you sure you want to delete?")}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
