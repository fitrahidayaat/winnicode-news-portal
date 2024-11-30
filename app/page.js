import Image from "next/image";
import Nav from "./components/nav";
import PostSlide from "./components/postSlide";
import CARDS_DATA from "./data/cardsData";
export default function Home() {
  return (
    <div className="xl:px-48 md:px-16 sm:px-4">
      <Nav></Nav>
      <PostSlide title="Popular Posts" cards={CARDS_DATA}></PostSlide>
      <PostSlide title="Latest Posts" cards={CARDS_DATA}></PostSlide>
      <PostSlide title="Trendy Posts" cards={CARDS_DATA}></PostSlide>
    </div>
  );
}
