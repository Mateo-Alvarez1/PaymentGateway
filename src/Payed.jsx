import { Link } from "react-router-dom";

const Payed = () => {
  return (
    <div className="bg-gray-900 min-h-lvh py-24 sm:py-42">
      <div className=" flex justify-center items-center pt-60 flex-col">
        <h1 className="mb-10 text-yellow-200 text-3xl font-bold">
          ! Thank you very much for purchasing your membership !{" "}
        </h1>
        <p className="text-2xl text-gray-200">
          Your payment was successfully completed
        </p>
        <Link
          className="mt-10 bg-yellow-200 py-2 px-10 rounded"
          to={"/"}
          replace="true"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Payed;
