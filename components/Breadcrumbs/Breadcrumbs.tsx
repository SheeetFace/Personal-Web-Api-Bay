"use client"
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

// import Link from "next/link";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const BreadcrumbsMain = () => {
  const pathname = usePathname();

  const breadcrumbItems = useMemo(() => {
    if(!pathname) return [];

    const crumbs = pathname.split("/").filter(crumb=>crumb !== "");
    const items = [{ label: "HOME", path: "/" }];

    let currentPath = "";

    crumbs.forEach(crumb=>{
      currentPath += `/${crumb}`

      items.push({
        label: crumb.toUpperCase(),
        path: currentPath
      })
    })

    return items;
  },[pathname]);

  if(breadcrumbItems.length === 0) return null;

  const renderBreadcrumbItem =useMemo(()=>{
    return breadcrumbItems.map((item) => (
      <BreadcrumbItem key={item.path}>
        <Link href={item.path}>
          {item.label}
        </Link>
      </BreadcrumbItem>
    ))
  },[breadcrumbItems])

  return (
    <div className="px-6">
      <Breadcrumbs color='primary' size="lg">
        {renderBreadcrumbItem}
      </Breadcrumbs>
    </div>
  );
}