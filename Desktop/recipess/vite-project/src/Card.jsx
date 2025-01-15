/* eslint-disable react/prop-types */
export default function Card({title, description, image }) {
    return (
      <div className="card-item bg-white rounded shadow-lg p-4">
        <img
          className="w-56 h-36 object-cover rounded"
          src={image}
          alt={title || "Recipe Image"}
        />
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="mt-4 flex space-x-2">
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => alert(`Viewing: ${title}`)}
          >
            View
          </button>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => alert("Are you sure you want to edit?")}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => alert("Are you sure you want to delete?")}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  