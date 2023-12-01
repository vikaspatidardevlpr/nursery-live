import Image from "next/image";
import { Button } from "@chakra-ui/react";
const Pramotation = () => {
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="flex flex-col items-center px-6">
          <button className="text-red-400 font-semibold py-8">
            {"Read now >"}
          </button>
          <iframe
            className="w-full lg:h-[700px] h-80"
            src="https://www.youtube.com/embed/N-gjXi2yZ5I?si=IvWOyC5H-M_OcuhP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <h1 className="text-[20px] py-8 px-4 font-semibold">We are in News</h1>
        <div className="flex gap-4 px-4">
          <Image
            src="/images/s-1.png"
            width={80}
            height={150}
            alt="social media"
          />
          <Image
            src="/images/s-2.png"
            width={150}
            height={150}
            alt="social media"
          />
          <Image
            src="/images/s-3.jpg"
            width={80}
            height={150}
            alt="social media"
          />
          <Image
            src="/images/s-4.png"
            width={70}
            height={80}
            alt="social media"
          />
          <Image
            src="/images/s-5.jpg"
            width={80}
            height={150}
            alt="social media"
          />
        </div>

        <div className="px-4 text-[#484848] text-justify">
          <h1 className="text-[24px] pt-12 pb-6 font-semibold ">Nurserylive</h1>
          <p className="py-2">
            Nurserylive is an Indian online platform that sells plants,
            gardening supplies, and related products.
          </p>
          <p className="py-2">
            It was founded in 2014 with the aim of making gardening accessible
            to everyone. Nurserylive offers a variety of plants, tools,
            fertilizers, and other gardening accessories.
          </p>
          <p className="py-2">
            The platform also provides resources such as articles, videos, and a
            gardening community for enthusiasts to share their knowledge and
            experiences.
          </p>
        </div>

        <div className="px-4 text-[#484848]">
          <h1 className="text-[24px] pt-12 pb-6 font-semibold ">Plants</h1>
          <p className="py-2 text-justifypx-4">
            Plants are important for several reasons, especially in modern times
            when people spend more time indoors due to work and lifestyle
            changes.
          </p>
          <ul className="list-disc lg:pl-8 px-4">
            <li className="py-1 text-justify">
              Aesthetic appeal: Plants can add beauty and life to any space,
              whether it's an office, home, or outdoor garden. They come in
              various shapes, sizes, and colors, making them versatile and
              appealing.
            </li>
            <li className="py-1 text-justify">
              Health benefits: Plants can improve air quality by absorbing
              pollutants and releasing oxygen. They can also reduce stress
              levels, boost mood, and improve mental health.
            </li>
            <li className="py-1 text-justify">
              Sustainability: Keeping plants can be an eco-friendly option, as
              they can help reduce carbon emissions, reduce waste, and support
              biodiversity.
            </li>
            <li className="py-1 text-justify">
              Food production: Growing plants like vegetables and fruits can
              provide a source of fresh, healthy produce that is free from
              harmful pesticides and chemicals.
            </li>
            <li className="py-1 text-justify">
              Education: Keeping plants can provide a great opportunity for
              learning about biology, botany, and the natural world.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Pramotation;
