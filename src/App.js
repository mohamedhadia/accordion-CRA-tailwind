import SingleQuestion from "./Questions";
import data from "./data";

function App() {
  return (
    <div className=" h-screen bg-green-300 grid place-items-center">
      <div className="container mx-auto grid place-items-center  grid-cols-3 bg-gray-100 rounded-3xl py-12">
        <div className="col-span-3 md:col-span-1 p-6  text-gray-900 text-3xl lg:text-5xl tracking-wider ">
          <h2>Questions and answers about login </h2>
        </div>
        <div className="col-span-3 md:col-span-2 w-full p-4">
          {data.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
