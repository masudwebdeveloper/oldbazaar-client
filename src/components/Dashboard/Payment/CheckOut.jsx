import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOut = ({ bookingProduct }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactinId, setTransactionId] = useState("");
  const [processing, setPorcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { price } = bookingProduct;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.firstName.value;
    const phone = form.phone.value;
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setPorcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        buyerName: name,
        email,
        phone,
        productId: bookingProduct.productId,
        transactinId: paymentIntent.id,
      };
      const transactinId = paymentIntent.id;
      addPaymentData(payment, transactinId);
      setPorcessing(false);
    }
    console.log(["paymentIntent"], paymentIntent);
  };

  const addPaymentData = (data, paymentId) => {
    fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setSuccess("Congrates! your payment is Sucessfull");
          setTransactionId(paymentId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(stripe, clientSecret);
  return (
    <section>
      <h1 class="sr-only">Checkout form</h1>

      <div class="relative mx-auto max-w-screen-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="bg-gray-50 py-12 md:py-24">
            <div class="mx-auto max-w-lg px-4 lg:px-8">
              <div class="flex items-center">
                <span class="h-10 w-10 rounded-full bg-blue-900"></span>

                <h2 class="ml-4 font-medium">{bookingProduct.productName}</h2>
              </div>
              <div class="mt-12">
                <div class="flow-root">
                  <ul class="-my-4 divide-y divide-gray-200">
                    <li class="flex items-center justify-between py-4">
                      <div class="flex items-start">
                        <img
                          alt="Trainer"
                          src={bookingProduct.picture}
                          class="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                        />

                        <div class="ml-4">
                          <p class="text-sm">
                            Buyer: {bookingProduct.buyerName}
                          </p>

                          <dl class="mt-1 space-y-1 text-xs text-gray-500">
                            <div>
                              <dt class="inline">
                                Booking Date: {bookingProduct.bookingDate}
                              </dt>
                            </div>

                            <div>
                              <dt class="inline">
                                Seller: {bookingProduct.sellerName}
                              </dt>
                            </div>
                          </dl>
                        </div>
                      </div>

                      <div>
                        <p class="text-sm">
                          <strong>${bookingProduct.price}</strong>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-12">
                  {success && (
                    <>
                      <h1 className="text-2xl text-green-600 font-semibold italic">
                        {success}
                      </h1>
                      <p className="text-2xl text-gray-500 font-mono">
                        Please note your TransactionId :-{" "}
                        <strong>{transactinId}</strong>!
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white py-12 md:py-24">
            <div class="mx-auto max-w-lg px-4 lg:px-8">
              <form onSubmit={handleSubmit} class="grid grid-cols-6 gap-4">
                <div class="col-span-3">
                  <label
                    class="mb-1 block text-sm text-gray-600"
                    for="first_name"
                  >
                    First Name
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                    type="text"
                    id="first_name"
                    name="firstName"
                    defaultValue={bookingProduct.buyerName}
                  />
                </div>

                <div class="col-span-3">
                  <label
                    class="mb-1 block text-sm text-gray-600"
                    for="last_name"
                  >
                    Last Name
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                    type="text"
                    id="last_name"
                    name="lastName"
                  />
                </div>

                <div class="col-span-6">
                  <label class="mb-1 block text-sm text-gray-600" for="email">
                    Email
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={bookingProduct.email}
                  />
                </div>

                <div class="col-span-6">
                  <label class="mb-1 block text-sm text-gray-600" for="phone">
                    Phone
                  </label>

                  <input
                    class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                    type="tel"
                    id="phone"
                    name="phone"
                    defaultValue={bookingProduct.phone}
                  />
                </div>

                {/* <fieldset class="col-span-6">
                                    <legend class="mb-1 block text-sm text-gray-600">
                                        Card Details
                                    </legend>

                                    <div class="-space-y-px rounded-lg bg-white shadow-sm">
                                        <div>
                                            <label class="sr-only" for="card-number">Card Number</label>

                                            <input
                                                class="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                type="text"
                                                name="card-number"
                                                id="card-number"
                                                placeholder="Card number"
                                            />
                                        </div>

                                        <div class="flex -space-x-px">
                                            <div class="flex-1">
                                                <label class="sr-only" for="card-expiration-date">
                                                    Expiration Date
                                                </label>

                                                <input
                                                    class="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                    type="text"
                                                    name="card-expiration-date"
                                                    id="card-expiration-date"
                                                    placeholder="MM / YY"
                                                />
                                            </div>

                                            <div class="flex-1">
                                                <label class="sr-only" for="card-cvc">CVC</label>

                                                <input
                                                    class="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                    type="text"
                                                    name="card-cvc"
                                                    id="card-cvc"
                                                    placeholder="CVC"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset> */}

                {/* <fieldset class="col-span-6">
                                    <legend class="mb-1 block text-sm text-gray-600">
                                        Billing Address
                                    </legend>

                                    <div class="-space-y-px rounded-lg bg-white shadow-sm">
                                        <div>
                                            <label class="sr-only" for="country">Country</label>

                                            <select
                                                class="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                                                id="country"
                                                name="country"
                                                autocomplete="country-name"
                                            >
                                                <option>England</option>
                                                <option>Wales</option>
                                                <option>Scotland</option>
                                                <option>France</option>
                                                <option>Belgium</option>
                                                <option>Japan</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label class="sr-only" for="postal-code">
                                                ZIP/Post Code
                                            </label>

                                            <input
                                                class="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autocomplete="postal-code"
                                                placeholder="ZIP/Post Code"
                                            />
                                        </div>
                                    </div>
                                </fieldset> */}

                <div className="col-span-6 my-6">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#424770",
                          "::placeholder": {
                            color: "#aab7c4",
                          },
                        },
                        invalid: {
                          color: "#9e2146",
                        },
                      },
                    }}
                  />
                </div>

                <div className="col-span-6 text-red-600">{cardError}</div>

                <div class="col-span-6">
                  <button
                    class="w-full btn btn-primary rounded-lg p-2.5 text-sm text-white"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                  >
                    {processing ? "Loading..." : "Pay Start"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
