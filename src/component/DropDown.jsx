import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function CustomTrigger({ user }) {
 

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("log out successful");
  };
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full flex items-center space-x-5">
        <Avatar>
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback delayMs={600}>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <h2 className="font-bold">{`${user?.name}`.split(" ")[0] + ""}</h2>
        <RiArrowDropDownLine />
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback delayMs={600}>{user?.name[0]}</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{user?.name}</p>
              <p className="text-xs leading-none text-muted">{user?.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="dashboard" textValue="Dashboard">
            <Link href={"/dashboard/request"}>
              <Label>Dashboard</Label>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item id="profile" textValue="Profile">
            <Label>Profile</Label>
          </Dropdown.Item>

          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
            <div
              onClick={handleSignOut}
              className="flex w-full items-center justify-between gap-2"
            >
              <Label>Log Out</Label>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
