import { VCoffee } from "@/shared/assets/images/logos";
import { Search } from "@/shared/assets/images/icons";
import { TextInput } from "../reusable";
import Menu from "./Menu";
import UserManagement from "./UserManagement";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-[0.3125rem]">
      <div className="flex items-center gap-4">
        <VCoffee />
        <TextInput formItem={false} className="w-56 h-9" placeholder="What do you want to drink?" prefix={<Search />} />
      </div>
      <Menu />
      <UserManagement />
    </header>
  );
};

export default Header;
