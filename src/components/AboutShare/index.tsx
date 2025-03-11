"use client"
import { useState } from "react";
import Heading from "./Heading";
import ContentBody from "./ContentBody";
import SubContent from "./SubContent";

const AboutShare = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="max-w-3xl py-8">
      <h2 className="text-xl font-bold">About Share</h2>
      <Heading text="Chennai Super Kings (CSK) Unlisted Shares – Complete Guide to Buy, Sell & Price Updates" />
      <SubContent text="Chennai Super Kings (CSK) is one of the most iconic and successful franchises in the Indian Premier League (IPL). With a loyal fanbase, consistent high performance, and powerful leadership, CSK has established itself as a dominant force in the IPL. Along with its massive fan following, CSK has also become a highly lucrative brand, attracting the interest of investors in the unlisted share market."/>
      <SubContent text="In this comprehensive guide, we will provide insights into Chennai Super Kings unlisted shares, including the latest Chennai Super Kings share price, how to buy and sell these unlisted shares, and why investing in CSK unlisted shares can be a great financial opportunity. Additionally, we will explore the performance and growth factors that influence the Chennai Super Kings unlisted share price and what makes it a valuable investment."/>
      {expanded && (
        <>
        <Heading text = "Chennai Super Kings (CSK) Overview"/>
        <SubContent text={`Chennai Super Kings was established in 2008, and since then, the team has been one of the most successful franchises in IPL history. Led by the iconic MS Dhoni, CSK has not only gained immense popularity but also accumulated several prestigious titles. With its consistent on-field performances and successful business ventures off the field, CSK has managed to become one of the most valuable IPL teams.`}/>
        {/* more data */}
        <SubContent text={`These impressive numbers highlight the consistent success and growth of CSK, and it's this sustained popularity and performance that drives demand for Chennai Super Kings unlisted shares in the private market.`}/>
        <Heading text = "Chennai Super Kings Unlisted Shares: A High-Value Investment"/>
        <SubContent text={`Chennai Super Kings unlisted shares are non-publicly traded shares of the CSK IPL franchise. These shares are traded in the unlisted or private equity market, where investors can buy and sell them. While CSK's shares are not available on the stock exchange, they are highly sought after due to the team's performance and its market potential.`}/>
        <Heading text = "Why Invest in Chennai Super Kings Unlisted Shares?"/>
        <SubContent text={`Investing in Chennai Super Kings unlisted shares offers several compelling advantages:`}/>
        {/* list with counting 1,2,3 */}
        {/* list */}
        <ol className="list-decimal pl-6 text-[#757575] ml-6">
          <li>
            <SubContent
              head="Strong Brand and Fan Loyalty:"
              text=" CSK’s brand is strong, with one of the largest and most loyal fanbases in the IPL. The team's enduring popularity and market presence make it a highly attractive proposition for investors looking to capitalize on this growing brand."
            />
          </li>
          <li>
          <SubContent
              head="Consistent Performance:"
              text="Over the years, CSK has consistently delivered excellent performances on the field. With 4 IPL titles and multiple top finishes in the IPL standings, the team’s financial health remains robust, making their shares valuable."
            />
          </li>
          <li>
          <SubContent
              head="Revenue Growth:"
              text="CSK generates revenue from multiple sources, including media rights, sponsorships, merchandise sales, and more. This financial stability adds value to its unlisted shares."
            />
          </li>
          <li>
          <SubContent
              head="Future Growth Potential: "
              text="As IPL continues to grow in popularity and global viewership, the value of CSK is expected to rise, enhancing the Chennai Super Kings share price in the unlisted market. This makes CSK unlisted shares a promising long-term investment."
            />
          </li>
          <li>
          <SubContent
              head="Diversification:"
              text=" Investing in Chennai Super Kings unlisted shares gives you exposure to the sports and entertainment sector, diversifying your portfolio and mitigating risks associated with other sectors."
            />
          </li>
        </ol>
        <Heading text = "Chennai Super Kings Unlisted Share Price: Latest Updates"/>
        <SubContent text={`The Chennai Super Kings unlisted share price fluctuates based on various factors such as team performance, financial health, market demand, and future projections. CSK has consistently maintained a strong position both on and off the field, which positively influences the Chennai Super Kings share price.`}/>
        <Heading text = "Latest Price Trends"/>
        <SubContent text={`As of the most recent updates, Chennai Super Kings unlisted share price has been valued in the range of ₹1,500 to ₹2,500 per share, depending on market conditions. This price is subject to change based on factors such as:`}/>
        <ul className="list-disc pl-6 text-[#757575] ml-6">
          <li>
          <SubContent
              head="Team Performance:"
              text="Winning IPL titles or making strong playoff performances enhances the brand's value, which drives up share prices."
            />
          </li>
          <li>
          <SubContent
              head="Sponsorship and Media Deals: "
              text=" CSK’s ongoing sponsorship deals and media rights agreements contribute significantly to its revenue, which impacts the Chennai Super Kings unlisted share price."
            />
          </li>
          <li>
          <SubContent
              head="Market Sentiment:"
              text=" Investor confidence in CSK’s performance and future prospects plays a major role in determining the price of CSK shares."
            />
          </li>
          </ul>
        <Heading text = "How to Buy Chennai Super Kings Unlisted Shares?"/>
        <SubContent text={`Investing in Chennai Super Kings unlisted shares can be a rewarding experience. Here's how you can go about it:`}/>
        <ol className="list-decimal text-[#757575] sm:pl-6 sm:ml-6">
          <li>
          <SubContent text={`Register on a Trusted Platform To buy Chennai Super Kings unlisted shares, first, you need to sign up on a trusted unlisted share trading platform such as UnlistedSharesIndia.com. These platforms specialize in unlisted shares and ensure secure transactions.`}/>
          </li>
          <li>
          <SubContent text={`Check Availability of CSK Shares Unlike listed shares, unlisted shares are not readily available on the market. You’ll need to check for active listings of Chennai Super Kings unlisted shares on the platform. Sellers typically list CSK shares based on availability, so it's important to stay updated on available offers.`}/>
          </li>
          <li>
          <SubContent text={`Negotiate the Price Once you find available shares, negotiate with the seller based on the Chennai Super Kings share price. Consider current market conditions, the team’s performance, and any upcoming sponsorship deals that may affect the value of the shares.`}/>
          </li>
          <li>
          <SubContent text={`Complete the Transaction Once you’ve agreed on the price, you can proceed with the transaction. Payments are securely processed through the platform, and shares are transferred to your account following standard procedures.`}/>
          </li>
        </ol>
        <Heading text = "How to Sell Chennai Super Kings Unlisted Shares?"/>
        <ol className="list-decimal text-[#757575] sm:pl-6 sm:ml-6">
          <li>
          <SubContent text={`List Your Shares on the Platform To sell your CSK shares, list them on a trusted unlisted share trading platform like UnlistedSharesIndia.com. This allows potential buyers to view your offer.`}/>
          </li>
          <li>
          <SubContent text={`Set Your Selling Price Set the price at which you wish to sell your shares. The Chennai Super Kings share price will vary based on demand, supply, and the latest market trends. Keep an eye on the market to set a competitive price.`}/>
          </li>
          <li>
          <SubContent text={` Finalize the Sale Once a buyer expresses interest, finalize the transaction. The platform facilitates secure payments and the transfer of shares, ensuring a smooth transaction process.`}/>
          </li>
          
        </ol>
        <Heading text = "Risks and Considerations When Investing in Chennai Super Kings Unlisted Shares"/>
        <ol className="list-decimal text-[#757575] sm:pl-6 sm:ml-6">
          <li>
          <SubContent text={`Liquidity Risk Unlike publicly traded stocks, Chennai Super Kings unlisted shares are less liquid. You may have to wait for a buyer to sell your shares, especially in the off-season when IPL performance isn’t in the spotlight.`}/>
          </li>
          <li>
          <SubContent text={`Volatility The Chennai Super Kings share price can fluctuate, particularly due to changes in team performance or the outcome of IPL seasons. A poor performance or a drop in fan engagement could result in a temporary dip in share prices.`}/>
          </li>
          <li>
          <SubContent text={`Regulatory Risks Government policies or changes in IPL regulations could potentially affect the financial landscape for IPL teams, which might impact the value of CSK shares. It's essential to stay updated on any regulatory changes.`}/>
          </li>
          <li>
          <SubContent text={`Market Demand The market for Chennai Super Kings unlisted shares is dependent on investor demand. If the demand decreases due to various factors, you may experience a slowdown in buying or selling shares.`}/>
          </li>
        </ol>
        <Heading text = "Conclusion"/>
        <SubContent text={`Chennai Super Kings unlisted shares offer a unique investment opportunity in one of the most successful and valuable IPL franchises. With strong brand value, consistent performance, and multiple revenue streams, CSK shares provide potential for high returns. Whether you're looking to buy Chennai Super Kings unlisted shares or sell CSK shares, platforms like UnlistedSharesIndia.com offer a secure and reliable trading experience.`}/>
        
        </>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 bg-white text-[#757575] border py-3 px-6 rounded-full transition hover:bg-[#34c759] w-full hover:text-[#fff]"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </section>
  );
};

export default AboutShare;
