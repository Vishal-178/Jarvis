import BlogSection from "@/components/Blog";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Contact Us | PrepBundles – Get Support & Assistance",
//   description: "Need help with your PrepBundles purchase? Contact us via email or our support page. Check FAQs for quick answers to common questions.",
// };


export default function ContactUsPage() {
  return (
    <>
      
      <section className="container mx-auto px-6 pt-24 pb-12 text-gray-300">
        <BlogSection number={6}/>
      </section>
    </>
  );
}
