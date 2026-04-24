import Image from "next/image";
import Banner from "../../Component/Banner";
import FriendsPage from "../../Component/FriendsPage";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <FriendsPage />
    </div>
  );
}
