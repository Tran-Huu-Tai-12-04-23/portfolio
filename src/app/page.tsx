import HeaderComponent from "./components/Header";
import MainContent from "./main-content";
import SideBarInfo from "./side-bar-info";

export default function Home() {
  return (
    <div className="overflow-hidden h-screen w-screen flex flex-col items-center justify-items-center  font-[family-name:var(--font-geist-sans)]">
      <HeaderComponent />
      <main
        className={`flex  w-screen max-w-screen-2xl items-start gap-10 mt-10 h-full`}
      >
        <SideBarInfo />
        <MainContent />
      </main>
    </div>
  );
}
