import React from "react";
import Image from "next/image";
import Layout from "../components/layout";
import pfp from '/public/pfp.jpg';

const Index = () => {
    return (
      <Layout>
        <div className="introduction">
          <div className="imageAndText">
            <Image
              src={pfp}
              alt="Profile Picture"
              width={200}
              height={200}
              className="pfpC"
            />
            <p>
              Hey! I’m Akshat.
            </p>
            </div>
        </div>
      </Layout>
    );
}
export default Index;
