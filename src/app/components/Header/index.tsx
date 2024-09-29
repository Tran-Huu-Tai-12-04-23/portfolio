import Image from "next/image";
import HeaderIcon from "../../../public/assets/imgs/header-icon.png";
import ThemeToggleBtn from "../ToogleThem";

export const HEIGHT_HEADER = "4rem";
function HeaderComponent() {
  return (
    <header className={`min-h-[${HEIGHT_HEADER}]`}>
      <div className="pt-5 w-screen max-w-screen-xl flex justify-between items-center">
        <Image
          src={HeaderIcon}
          alt={"Tran Huu Tai "}
          width={200}
          height={40}
          className="object-contain"
        />
        <ThemeToggleBtn />
      </div>
    </header>
  );
}

export default HeaderComponent;
