const DisplayTodo = ({ allTodos, handleDelete,handleUpdate }) => {
  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      {allTodos.length === 0 ? (
        <h1 className="text-center text-2xl font-semibold text-gray-500">
          No Todo Available
        </h1>
      ) : (
        <div className="grid h-56 grid-cols-2 content-evenly gap-4 ...">
          {allTodos.map((todo) => (
            <div className="bg-white shadow-xl rounded-2xl p-5 border border-gray-200 transition hover:scale-[1.02] hover:shadow-2xl" key={todo.id}>
              <h3 className="font-semibold text-lg text-gray-800 mb-4 text-center">
                <p>{todo.text}</p>
              </h3>
              <div className="flex justify-center gap-4">

                <button onClick={() => handleUpdate(todo)} className="px-4 py-2 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-800 transition"> Update</button>

                <button onClick={() => handleDelete(todo)} className="px-4 py-2 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-800 transition"> Delete</button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayTodo;
