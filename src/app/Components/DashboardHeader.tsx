import { IoMdMenu } from "react-icons/io";

export default function DashboardHeader() {
  return (
    <header className="h-20 fixed top-0 left-0 right-0">
      <nav className="w-full h-full px-7 py-5 border-b-[0.1rem] flex items-center">
        <IoMdMenu size={30} color="gray" className="mr-5 cursor-pointer" />
        <h1 className="m-0 text-3xl font-semibold">
          <span className="text-orange-500">Spend</span>
          <span className="text-blue-500">Smart</span>
        </h1>
      </nav>
    </header>
  );
}
