"use client";
import { ACCOUNT_MENU } from "@/utilit/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <div className="p-4 w-64">
      {ACCOUNT_MENU.map((block, i) => (
        <div key={i} className="mb-6">
          <h3 className="font-semibold text-black mb-2">{block.section}</h3>
          <ul className="space-y-2 pl-4">
            {block.items.map((item, j) => (
              <li key={j}>
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-primary"
                      : "text-gray-500 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
