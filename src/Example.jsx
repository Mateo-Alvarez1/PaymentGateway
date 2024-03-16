import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export default function Example() {
  const [loading, setLoading] = useState({
    paypal: false,
    mercadopago: false,
  });

  const onRequest = async (paymentMethod) => {
    setLoading((prevState) => ({
      ...prevState,
      [paymentMethod]: !prevState[paymentMethod],
    }));
    const response = await fetch(
      "https://paymentgateway.zeabur.app/create-order",
      {
        method: "POST",
      }
    );
    const data = await response.json();
    window.location.href = data.links[1].href;
  };

  const onMpRequest = async (paymentMethod) => {
    setLoading((prevState) => ({
      ...prevState,
      [paymentMethod]: !prevState[paymentMethod],
    }));
    const response = await fetch(
      "https://paymentgateway.zeabur.app/mp/create-order",
      {
        method: "POST",
      }
    );
    const data = await response.json();
    window.location.href = data;
  };

  return (
    <div className="bg-gray-900 py-24 sm:py-42  min-h-lvh">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-yellow-200 sm:text-4xl">
            Payment Gateway
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Secure and efficient online payment processing solution.
          </p>
        </div>
        <div className="  mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-white sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto ">
            <h3 className="text-2xl font-bold tracking-tight text-yellow-200">
              Lifetime Membership
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-200">
              Unlock unlimited access with our Lifetime Membership – your
              passport to endless benefits and exclusive perks.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-yellow-200">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex text-gray-400 gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-yellow-200"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs ">
                <p className="text-base font-semibold text-gray-600">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $349
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <div className="flex mr-32 w-80 justify-between item-center">
                  <button
                    onClick={() => onRequest("paypal")}
                    className="mt-10 block w-full rounded-md bg-yellow-300 px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {loading.paypal ? (
                      <ClipLoader size={18} />
                    ) : (
                      <p style={{ fontSize: "16px" }}>Paypal</p>
                    )}
                  </button>

                  <button
                    onClick={() => onMpRequest("mercadopago")}
                    className="mt-10 ml-5 block w-full rounded-md bg-yellow-300 px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {loading.mercadopago ? (
                      <ClipLoader size={18} />
                    ) : (
                      <p style={{ fontSize: "16px" }}>Mercado Pago</p>
                    )}
                  </button>
                </div>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
