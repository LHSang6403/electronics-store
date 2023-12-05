import Image from "next/image";

export default function Warranty(): JSX.Element {
  return (
    <div>
      <p className="mt-5 text-justify">
        At [Your Company Name], our comprehensive warranty service is tailored
        to safeguard your investment and ensure that you experience worry-free
        ownership of our products. Our commitment extends beyond just delivering
        cutting-edge technology - it is about standing by our promise of quality
        and reliability. Our warranty coverage encompasses a wide range of
        scenarios, providing you with protection against manufacturing defects,
        malfunctions, and unexpected issues that may arise during the covered
        period.
      </p>
      <div className="w-full p-5">
        <Image
          alt="Product Description"
          src="https://cdn.tgdd.vn/Files/2021/12/16/1404781/cach-kiem-tra-thoi-han-bao-hanh-o-cung-ssd-cpu-in-6.png"
          layout="responsive"
          width={1000}
          height={500}
        />
      </div>
      <div className="w-full h-auto flex flex-col gap-4 text-justify">
        Our warranty service covers:
        <ul className="px-8">
          <li>
            - <strong>Manufacturing Defects:</strong> We understand that even
            with rigorous quality control, unforeseen defects can occur. Our
            warranty assures you that any manufacturing defects will be promptly
            addressed, ensuring the integrity of your purchase.
          </li>
          <li>
            - <strong>Malfunctions:</strong> In the rare instance that your
            product experiences a malfunction during the warranty period, our
            dedicated support team is ready to assist. We will work diligently
            to diagnose and resolve the issue, minimizing any disruption to your
            use.
          </li>
          <li>
            - <strong>Technical Support:</strong> Our commitment to your
            satisfaction extends beyond physical issues. Should you encounter
            any technical challenges, our support team is available to provide
            guidance, troubleshooting, and solutions to keep your product
            performing at its best.
          </li>
        </ul>
        <div className="w-full p-5">
          <Image
            alt="Product Description"
            src="https://www.x-cart.com/img/27093/best-shipping-company-for-small-business-raw.png"
            layout="responsive"
            width={1000}
            height={500}
          />
        </div>
        The warranty process is designed to be straightforward:
        <ul className="px-8">
          <li>
            - <strong>Contact our Support Team:</strong> If you encounter an
            issue covered by the warranty, simply reach out to our support team
            through the provided channels, whether it is via phone, email, or
            our online portal.
          </li>
          <li>
            - <strong>Evaluation and Authorization:</strong> Once your request
            is received, our team will guide you through any necessary
            diagnostic steps. If the issue is confirmed to be covered by the
            warranty, we will provide authorization for the next steps.
          </li>
          <li>
            - <strong>Repair or Replacement:</strong> Depending on the nature of
            the issue, we will either initiate repairs to restore your product
            to optimal condition or provide a replacement if deemed necessary.
          </li>
          <li>
            - <strong>Timely Return:</strong> We understand the importance of
            your time. Our efficient process ensures that your product is
            returned to you promptly, allowing you to resume normal use.
          </li>
        </ul>
        Our warranty service reflects our confidence in the durability and
        performance of our products. We are committed to delivering not only
        exceptional technology but also a seamless and reliable ownership
        experience. Your satisfaction is our priority, and our warranty service
        is a testament to that commitment.
      </div>
    </div>
  );
}
