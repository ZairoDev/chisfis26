// import React from "react";

// interface Feature {
//   title: string;
//   description: string;
// }
// const TermAndCondition: React.FC = () => {
//     const features: Feature[] = [
//       {
//         title: "Contract",
//         description: "Vacation Saga is not liable for any contract made between the travelers and property owners.Any amount paid by the traveler shall be received by the owner and in case of cancellation, the owner shall refund the amount directly to the traveler according to the cancellation polices provided by the owner and Vacation Saga shall have no involvement in such transaction.",
//       },
//       {
//         title: "Booking Denied",
//         description: "If a customer is working with other websites also and receives a booking through us and through the other site also and the booking request received through Vacation Saga is cancelled by the owner,due to non availability, such booking request shall be considered as booking provided. Since we have provided a booking request and such booking is denied by the owner, then Vacation Saga shall not be liable for not providing booking or charge back or money back guarantee.",
//       },
//       {
//         title: "Pricing",
//         description: "The subscription price offered by us may vary according to the offers introduced by us may vary according to the offers introduced by us from time to time. A customer availing an offer cannot claim the same benefits that are promised to the customer taking our regular subscription package. The results may vary according to the plan since we have different marketing strategies for different subscriptions and property.",
//       },
//       {
//         title: "Discount",
//         description: "A customer availing discount cannot claim the same discount on their renewal of the same description since we give discounted rates only when the company introduces offers. Thus, the chances of availing the same offer on the expiration of the subscription are very less. The discount totally depends on the offerintroduced by the company at that time and on the offer that is expired or availed by the customer before.If no offer is ongoing at the time of the expiry of the subscription, the customer will have to pay the regular price for the renewal of the subscription.",
//       },
//       {
//         title: "Inquiries",
//         description: "Once a property owner receives an inquiry through us, he shall be solely responsible for answering such require.Vacation saga will have no role in entertaining such inquiry our role is limited till forwarding the inquiry so received to the customers.",
//       },
//       {
//         title: "Payments",
//         description: "Where any customer's property is listed for free under any offer for the time period provided in the offer,such property shall be removed after the expiry of the offer and shall be visible on the site only when the customer pays for the amount subscription package opted by him.",
//       },
//       {
//         title: "Personal website",
//         description: "Where a person takes a subscription which includes a personal website, then the customer shall provide us with the domain to be used for his personal website. The credentials for such domain shall be shared by the customers and the website shall be made on the domain so provided",
//       },
//       {
//         title: "Reviews",
//         description: "In case two bad reviews are given by our registered travelers regarding the condition of the property, Vacation Saga shall remove the Property from the site and the same shall not be visible for 45 days. ",
//       },
//       {
//         title: "Returning investments",
//         description: "In case two bad reviews are given by our registered travelers regarding the condition of the property, Vacation Saga shall remove the Property from the site and the same shall not be visible for 45 days.",
//       },
//     ];



//     return (
        
//     );
// };
//   export default TermAndCondition;
import React from "react";

interface Feature {
  title: string;
  description: string;
}

const TermAndCondition: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Contract",
      description: "Vacation Saga is not liable for any contract made between the travelers and property owners. Any amount paid by the traveler shall be received by the owner and in case of cancellation, the owner shall refund the amount directly to the traveler according to the cancellation policies provided by the owner and Vacation Saga shall have no involvement in such transactions.",
    },
    {
      title: "Booking Denied",
      description: "If a customer is working with other websites also and receives a booking through us and through the other site also and the booking request received through Vacation Saga is cancelled by the owner due to non-availability, such booking request shall be considered as booking provided. Since we have provided a booking request and such booking is denied by the owner, then Vacation Saga shall not be liable for not providing booking or charge back or money back guarantee.",
    },
    {
      title: "Pricing",
      description: "The subscription price offered by us may vary according to the offers introduced by us from time to time. A customer availing an offer cannot claim the same benefits that are promised to the customer taking our regular subscription package. The results may vary according to the plan since we have different marketing strategies for different subscriptions and properties.",
    },
    {
      title: "Discount",
      description: "A customer availing discount cannot claim the same discount on their renewal of the same description since we give discounted rates only when the company introduces offers. Thus, the chances of availing the same offer on the expiration of the subscription are very less. The discount totally depends on the offer introduced by the company at that time and on the offer that is expired or availed by the customer before. If no offer is ongoing at the time of the expiry of the subscription, the customer will have to pay the regular price for the renewal of the subscription.",
    },
    {
      title: "Inquiries",
      description: "Once a property owner receives an inquiry through us, he shall be solely responsible for answering such inquiry. Vacation Saga will have no role in entertaining such inquiry. Our role is limited to forwarding the inquiry so received to the customers.",
    },
    {
      title: "Payments",
      description: "Where any customer's property is listed for free under any offer for the time period provided in the offer, such property shall be removed after the expiry of the offer and shall be visible on the site only when the customer pays for the amount subscription package opted by him.",
    },
    {
      title: "Personal website",
      description: "Where a person takes a subscription which includes a personal website, then the customer shall provide us with the domain to be used for his personal website. The credentials for such domain shall be shared by the customers and the website shall be made on the domain so provided.",
    },
    {
      title: "Reviews",
      description: "In case two bad reviews are given by our registered travelers regarding the condition of the property, Vacation Saga shall remove the Property from the site and the same shall not be visible for 45 days.",
    },
    {
      title: "Returning investments",
      description: "In case two bad reviews are given by our registered travelers regarding the condition of the property, Vacation Saga shall remove the Property from the site and the same shall not be visible for 45 days.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold text-neutral-900 dark:text-neutral-100 mb-6">
        Terms and Conditions
      </h1>
      <ol className="list-decimal list-inside space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 text-xl font-semibold w-8 text-neutral-900 dark:text-neutral-100">
              {index + 1}.
            </div>
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {feature.title}
              </h2>
              <p className="mt-2 text-base text-justify text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TermAndCondition;
