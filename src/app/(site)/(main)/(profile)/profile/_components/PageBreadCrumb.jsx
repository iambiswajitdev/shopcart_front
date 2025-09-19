"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb";

const PageBreadCrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Optional: pretty labels for specific paths
  const labels = {
    account: "My Account",
    profile: "My Profile",
    "address-book": "Address Book",
    "payment-options": "Payment Options",
    returns: "My Returns",
    cancellations: "My Cancellations",
    wishlist: "My WishList",
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Home always */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const label = labels[segment] ?? segment.replace(/-/g, " ");

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageBreadCrumb;
