"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "antd";
import { usePathname } from "next/navigation";

export default function AppSideMenu() {
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState([""]);

  useEffect(() => {
    if (pathname.startsWith("/bookmarks")) {
      setSelectedKey("2");
    } else if (pathname.startsWith("/courses")) {
      setSelectedKey("3");
    } else if (pathname.startsWith("/tutorials")) {
      setSelectedKey("4");
    } else if (pathname.startsWith("/best-pratices")) {
      setSelectedKey("5");
    } else if (pathname.startsWith("/certifications")) {
      setSelectedKey("6");
    } else if (pathname.startsWith("/resources")) {
      setSelectedKey("7");
    } else if (pathname.startsWith("/events")) {
      setSelectedKey("8");
    } else if (pathname.startsWith("/community")) {
      setSelectedKey("9");
    } else if (pathname === "/") {
      setSelectedKey("1");
    }
  }, [pathname]);

  const menuItems = [
    { label: <Link href="/">Home</Link>, key: 1 },
    { label: <Link href="/bookmarks">Bookmarks</Link>, key: 2 },
    { type: "divider" },
    { label: <Link href="/courses">Courses</Link>, key: 3 },
    { label: <Link href="/tutorials">tutorials</Link>, key: 4 },
    { label: <Link href="/best-pratices">Best pratices</Link>, key: 5 },
    { label: <Link href="/certifications">certifications</Link>, key: 6 },
    { type: "divider" },
    { label: <Link href="/resources">resources</Link>, key: 7 },
    { label: <Link href="/events">events</Link>, key: 8 },
    { label: <Link href="/community">community</Link>, key: 9 },
  ];
  return (
    <Menu mode="inline" items={menuItems} selectedKeys={selectedKey}></Menu>
  );
}
