import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import ServiceOne from "@/components/service-one";
import MenuContextProvider from "@/context/menu-context";
import HeaderOne from "@/components/header-one";
import ServiceTabOne from "@/components/service-tab-1";

const AllServices = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="All Services">
        <HeaderOne />
        <PageHeader title="All Services" name="Services" />
        <ServiceTabOne />
        <ServiceOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default AllServices;
