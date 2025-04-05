"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Globe, Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  return (
    <header className="w-full bg-black h-[77px] flex items-center">
      <div className="container mx-auto flex items-center justify-between px-4 gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkNQ3M1LYTvaZdrIiKUMxg051zom4kPsLB36fy"
            alt="LushAiTech Logo"
            width={180}
            height={60}
          />
        </div>

        {/* Search Input */}
        <div className="relative" style={{ width: "540px", height: "38px" }}>
          <Input
            type="text"
            placeholder="What skill do you want to master today?"
            className="rounded-full pl-4 pr-10 py-1.5 text-sm bg-white text-black h-full w-full"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6 text-white">
          {/* Explore Courses Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:underline">
              Explore Courses <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Web Development</DropdownMenuItem>
              <DropdownMenuItem>AI & Machine Learning</DropdownMenuItem>
              <DropdownMenuItem>UI/UX Design</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Globe icon */}
          <Globe className="h-5 w-5 text-white cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
