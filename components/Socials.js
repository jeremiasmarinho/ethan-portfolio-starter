import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiPinterestLine,
  RiDribbbleLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.youtube.com/@jeremiasmarinhoo"} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={"https://www.instagram.com/_jeremiasmarinho"} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://www.facebook.com/profile.php?id=61553215179210"} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={"https://wa.me/5563992894071?text=Gostaria%20de%20tirar%20algumas%20duvidas."} className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine />
      </Link>
      
    </div>
  );
};

export default Socials;
