import React from "react";
import Layout from "../../components/Layout";
import paymentProof from "../../public/img/paymentproof.gif";
import Image from "next/image";
import PaymentProofSlider from "../../components/PaymentProofSlider";
export default function Index() {
  return (
    <Layout pageTitle={"Payment Proof"}>
      <PaymentProofSlider></PaymentProofSlider>
      <div style={{ width: "98%", margin: "auto", textAlign: "center" }}>
        <Image src={paymentProof} alt="paymentProof" quality={100} />
      </div>
    </Layout>
  );
}
