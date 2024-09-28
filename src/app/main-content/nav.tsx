import { BsInfoSquareFill } from "react-icons/bs";
import { DiCode } from "react-icons/di";
import { MdContacts, MdOutlineWork } from "react-icons/md";
export enum NavItem {
  Home = "Home",
  Resume = "Resume",
  Project = "Project",
  Contact = "Contact",
}

const mapIcon = {
  [NavItem.Home]: <DiCode className="text-gray-600" size={40} />,
  [NavItem.Resume]: <BsInfoSquareFill className="text-gray-600" size={22} />,
  [NavItem.Project]: <MdOutlineWork className="text-gray-600" size={22} />,
  [NavItem.Contact]: <MdContacts className="text-gray-600" size={22} />,
};

function Nav({
  onChangePage,
  activePage,
}: {
  onChangePage: (page: NavItem) => void;
  activePage: NavItem;
}) {
  return (
    <div className="flex gap-4 p-2 w-fit rounded-xl border-[1px] border-[rgba(0,0,0,.1)]">
      {Object.values(NavItem).map((item, index) => (
        <button
          onClick={() => onChangePage(item)}
          key={index}
          className={`p-2 hover:bg-gray-200 rounded-xl ${
            activePage !== item ? "btn_no_active" : "btn_active"
          }`}
        >
          {mapIcon[item]}
          <span>{item}</span>
        </button>
      ))}
    </div>
  );
}

export default Nav;
