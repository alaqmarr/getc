import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Do you have an inquiry or just want to say hi? Feel free to contact us!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
