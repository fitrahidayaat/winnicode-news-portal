import ArticleImage from "../../images/article-1.png";
import Image from "next/image";

export default function articleContent() {
  return (
    <div className="bg-slate-200 px-24 rounded-2xl">
      <h1 className="text-center font-bold text-2xl py-16">
        How to Spend the Perfect Day on Croatias Most Magical Island
      </h1>
      <Image src={ArticleImage} alt="Croatia" className="w-full"></Image>
      <h2 className="font-bold text-xl mt-8 mb-2"> Don’t wait. The purpose of our lives is to be happy! </h2>
      <p>
        Upon arrival, your senses will be rewarded with the pleasant scent of
        lemongrass oil used to clean the natural wood found throughout the room,
        creating a relaxing atmosphere within the space. A wonderful serenity
        has taken possession of my entire soul, like these sweet mornings of
        spring which I enjoy with my whole heart. I am alone, and feel the charm
        of existence in this spot, which was created for the bliss of souls like
        mine. I am so happy, my dear friend, so absorbed in the exquisite.
      </p>
      <p>
        Upon arrival, your senses will be rewarded with the pleasant scent of
        lemongrass oil used to clean the natural wood found throughout the room,
        creating a relaxing atmosphere within the space. A wonderful serenity
        has taken possession of my entire soul, like these sweet mornings of
        spring which I enjoy with my whole heart. I am alone, and feel the charm
        of existence in this spot, which was created for the bliss of souls like
        mine. I am so happy, my dear friend, so absorbed in the exquisite.
      </p>
    </div>
  );
}
