
import React from "react";
import PaymentsFeatures from "./PaymentsFeatures";
import HIW1img from "@/images/HIW2-1.png";
import HIW2img from "@/images/HIW2-2.png";
import HIW3img from "@/images/HIW2-3.png";
import HIW1imgDark from "@/images/HIW2-1-dark.png";
import HIW2imgDark from "@/images/HIW2-2-dark.png";
import HIW3imgDark from "@/images/HIW2-3-dark.png";
const HowItwork:React.FC=() =>{
    return (

        <PaymentsFeatures
          data={[
            {
              id: 1,
              img: HIW1img,
              imgDark: HIW1imgDark,
              title: "No Commission",
              desc: "No hidden charges or commissions on Vacation Saga",
            },
            {
              id: 2,
              img: HIW2img,
              imgDark: HIW2imgDark,
              title: "Direct Payment",
              desc: "Get paid directly from the guest in your bank account",
            },
            {
              id: 3,
              img: HIW3img,
              imgDark: HIW3imgDark,
              title: "Stay Connected ",
              desc: "Renew your subscription once it gets expired ",
            },
          ]}
        />
    );
};
export default HowItwork;