const CreateToDo = (props) => {
  let { todo, handleTodo, handleSubmit } = props;
  return (
     <div className="bg-white shadow-xl rounded-xl p-6 m-6 max-w-xl mx-auto border border-gray-200">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">📝 Todo App</h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
      <div>
            <input className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition w-full sm:w-auto"
          type="text"
          placeholder="Enter your todo..."
          value={todo}
          onChange={handleTodo}
        />
       <button
          type="submit"
          className="bg-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-600 transition"
        >
          ➕Add Todo
        </button>
        </div>
      </form>
    </div>
  );
};

export default CreateToDo;
