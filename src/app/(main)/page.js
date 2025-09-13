import Banner from "@/src/components/home/Banner";
import Category from "@/src/components/home/Category";
import EachProductSection from "@/src/components/home/EachProductSection";
import Divider from "@/src/components/ui/Divider";
import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <EachProductSection
        subTitle="Today's"
        title="Flash Sales"
        isSection={true}
      />
      <Divider />
      {/* //?** Category Section */}
      <Category subTitle="Categories" title="Browse By Category" />
      <Divider />
      <EachProductSection
        subTitle="This Month"
        title="Best Selling Product"
        isSection={false}
      />
    </>
  );
};

export default Home;
