
// import { PrismaClient } from "@prisma/client";
// import AddTodo from "./actions/AddTodo";
// import DeleteTodo from "./actions/deleteTodo";


// export default async function Home() {
//   const prisma = new PrismaClient();
//   const todos = await prisma.todo.findMany();
  

//   return (
//     <div className="max-w-lg mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Todo List</h1>

//       {/* Form to add a new todo */}
//       <form action={AddTodo} className="flex items-center mb-4 space-x-2">
//         <input
//           type="text"
//           name="todo"
//           id="todo"
//           placeholder="Add a new todo"
//           className="w-full border rounded-lg p-2"
//         />
//         <button
//           type="submit"
//           className="bg-green-500 rounded-lg text-white px-4 py-2"
//         >
//           Add
//         </button>
//       </form>

//       {/* List of todos */}
//       <ul className="space-y-4">
//         {todos.map((todo) => (
//           <li key={todo.id} className="flex justify-between items-center bg-gray-400 p-4 rounded-lg">
//             <span className="text-lg">{todo.title}</span>
           
//             {/* Form to delete a todo */}
//             <form action={DeleteTodo}>
//               <input type="hidden" name="id" value={todo.id} />
//               <button
//                 type="submit"
//                 className="bg-red-500 text-white px-3 py-1 rounded-lg"
//               >
//                 Delete
//               </button>
//             </form>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }















// import { PrismaClient } from "@prisma/client";
// import AddTodo from "./actions/AddTodo";
// import EditTodo from "./actions/EditTodo";
// import DeleteTodo from "./actions/deleteTodo";

// export default async function Home() {
//   const prisma = new PrismaClient();
//   const todos = await prisma.todo.findMany();
  
//   return (
//     <div className="max-w-lg mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Todo List</h1>

//       {/* Form to add a new todo */}
//       <form action={AddTodo} className="flex items-center mb-4 space-x-2">
//         <input
//           type="text"
//           name="todo"
//           id="todo"
//           placeholder="Add a new todo"
//           className="w-full border rounded-lg p-2"
//         />
//         <button
//           type="submit"
//           className="bg-green-500 rounded-lg text-white px-4 py-2"
//         >
//           Add
//         </button>
//       </form>

//       {/* List of todos */}
//       <ul className="space-y-4">
//         {todos.map((todo) => (
//           <li key={todo.id} className="flex justify-between items-center bg-gray-400 p-4 rounded-lg">
//             <form action={EditTodo} className="flex items-center w-full">
//               <input type="hidden" name="id" value={todo.id} />
//               <input
//                 type="text"
//                 name="todo"
//                 defaultValue={todo.title}
//                 disabled
//                 className="w-full border rounded-lg p-2 mr-4"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2"
//               >
//                 Edit
//               </button>
//             </form>

//             {/* Form to delete a todo */}
//             <form action={DeleteTodo}>
//               <input type="hidden" name="id" value={todo.id} />
//               <button
//                 type="submit"
//                 className="bg-red-500 text-white px-3 py-1 rounded-lg"
//               >
//                 Delete
//               </button>
//             </form>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }








// import { PrismaClient } from "@prisma/client";
// import AddTodo from "./actions/AddTodo";
// import EditTodo from "./actions/EditTodo";
// import DeleteTodo from "./actions/deleteTodo";

// export default async function Home() {
//   const prisma = new PrismaClient();
//   const todos = await prisma.todo.findMany();
  
//   return (
//     <div className="max-w-lg mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Todo List</h1>

//       {/* Form to add a new todo */}
//       <form action={AddTodo} className="flex items-center mb-4 space-x-2">
//         <input
//           type="text"
//           name="todo"
//           id="todo"
//           placeholder="Add a new todo"
//           className="w-full border rounded-lg p-2"
//         />
//         <button
//           type="submit"
//           className="bg-green-500 rounded-lg text-white px-4 py-2"
//         >
//           Add
//         </button>
//       </form>

//       {/* List of todos */}
//       <ul className="space-y-4">
//         {todos.map((todo) => (
//           <li key={todo.id} className="flex justify-between items-center bg-gray-400 p-4 rounded-lg">
//             <form action={EditTodo} className="flex items-center w-full">
//               <input type="hidden" name="id" value={todo.id} />
//               <input
//                 type="text"
//                 name="todo"
//                 defaultValue={todo.title}
//                 disabled={todo.isEditable ? false : true}  // Control input based on isEditable from the server
//                 className={`w-full border rounded-lg p-2 mr-4 ${todo.isEditable ? "bg-white" : "bg-gray-100"}`}
//               />
//               <button
//                 type="submit"
//                 name="action"
//                 value={todo.isEditable ? "save" : "edit"}
//                 className={`${
//                   todo.isEditable ? "bg-green-500" : "bg-blue-500"
//                 } text-white px-3 py-1 rounded-lg mr-2`}
//               >
//                 {todo.isEditable ? "Save" : "Edit"}
//               </button>
//             </form>

//             {/* Form to delete a todo */}
//             <form action={DeleteTodo}>
//               <input type="hidden" name="id" value={todo.id} />
//               <button
//                 type="submit"
//                 className="bg-red-500 text-white px-3 py-1 rounded-lg"
//               >
//                 Delete
//               </button>
//             </form>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




import { PrismaClient } from "@prisma/client";
import AddTodo from "./actions/AddTodo";
import EditTodo from "./actions/EditTodo";
import DeleteTodo from "./actions/deleteTodo";

export default async function Home() {
  const prisma = new PrismaClient();
  const todos = await prisma.todo.findMany();

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Todo List</h1>

      {/* Form to add a new todo */}
      <form action={AddTodo} className="flex items-center mb-4 space-x-2">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Add a new todo"
          className="w-full border rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-green-500 rounded-lg text-white px-4 py-2"
        >
          Add
        </button>
      </form>

      {/* List of todos */}
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-400 p-4 rounded-lg">
            <form action={EditTodo} className="flex items-center w-full">
              <input type="hidden" name="id" value={todo.id} />
              <input
                type="text"
                name="todo"
                defaultValue={todo.title}
                disabled={!todo.isEditable}  // Control input based on isEditable
                className={`w-full border rounded-lg p-2 mr-4 ${todo.isEditable ? "bg-white" : "bg-gray-100"}`}
              />
              <button
                type="submit"
                name="action"
                value={todo.isEditable ? "save" : "edit"}
                className={`${
                  todo.isEditable ? "bg-green-500" : "bg-blue-500"
                } text-white px-3 py-1 rounded-lg mr-2`}
              >
                {todo.isEditable ? "Save" : "Edit"}
              </button>
            </form>

            {/* Form to delete a todo */}
            <form action={DeleteTodo}>
              <input type="hidden" name="id" value={todo.id} />
              <button
                type="submit"
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
