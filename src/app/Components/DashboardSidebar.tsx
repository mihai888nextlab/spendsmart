"use user";

import { usePathname, useRouter } from "next/navigation";
import path from "path";
import { MdDashboard } from "react-icons/md";
import { MdAddModerator } from "react-icons/md";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const pages = [
    {
      name: "Main",
      path: "/dashboard",
      icon: <MdDashboard size={30} color="gray" />,
    },
    {
      name: "Income",
      path: "/dashboard/income",
      icon: <MdAddModerator size={30} color="gray" />,
    },
  ];

  return (
    <aside className="p-5 border-r-[0.1rem]">
      <ul>
        {pages.map((page) => (
          <li
            key={page.name}
            className={
              "flex items-center rounded-lg p-2 cursor-pointer my-2 " +
              (pathname === page.path ? "bg-gray-100" : "")
            }
            onClick={() => router.push(page.path)}
          >
            {page.icon}
            <p className="text-lg font-semibold mx-3">{page.name}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
