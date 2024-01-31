"use client";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui-shadcn/drawer";
import SideBar from "@components/layouts/protected/SideBar";

export default function DrawerSideBar() {
  return (
    <div>
      <Drawer>
        <div className="fixed w-screen bottom-0 right-0 text-center bg-black text-primary py-1 px2 roundedxl shadow">
          <DrawerTrigger>Navigation</DrawerTrigger>
        </div>
        <DrawerContent>
          <SideBar />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
