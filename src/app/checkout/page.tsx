"use client";

const Checkout = () => {
  return (
    <>
      <h1 className="text-center font-bold py-3 text-3xl">Billing</h1>
      <form className=" w-full space-y-10 flex flex-col items-center my-20">
        <div className="space-x-2">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            className="border border-black text-center py-px rounded-sm"
            placeholder="xxxx xxxx xxxx xxxx"
          />
        </div>
        <div className="space-x-2">
          <label htmlFor="holderName">Holder name:</label>
          <input
            type="text"
            name="holderName"
            className="border border-black text-center py-px rounded-sm"
            placeholder="John Doe"
          />
        </div>
        <div className="space-x-2">
          <label htmlFor="expairyDate">Expiry date:</label>
          <input
            type="date"
            name="expairyDate"
            className="border border-black text-center py-px rounded-sm"
          />
        </div>
        <div className="space-x-2">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="password"
            name="cvv"
            placeholder="***"
            className="border w-fit border-black text-center py-px rounded-sm"
          />
        </div>

        <button className="px-10 mx-auto text-white font-bold  py-2 bg-yellow-400 rounded-lg">
          Pay
        </button>
      </form>
    </>
  );
};

export default Checkout;
