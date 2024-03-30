"use client";

import Knowledge from "./../app/knowledge/page";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Package2,
  Bell,
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
  Home,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

export default function Sidebar({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: string;
  setMenuOpen: (menu: string) => void;
}) {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span className="">Acme Inc</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <Link
            href="#"
            className={
              "flex items-center gap-3 rounded-lg  px-3 py-2 transition-all hover:bg-muted" +
              (menuOpen === "Dashboard"
                ? " text-primary"
                : " text-muted-foreground")
            }
            onClick={() => setMenuOpen("Dashboard")}
          >
            <Home className="h-4 w-4" />
            Construct
          </Link>
          <Link
            href="#"
            className={
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted" +
              (menuOpen === "Knowledge"
                ? " text-primary"
                : " text-muted-foreground")
            }
            onClick={() => setMenuOpen("Knowledge")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-database-zap"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5V19A9 3 0 0 0 15 21.84" />
              <path d="M21 5V8" />
              <path d="M21 12L18 17H22L19 22" />
              <path d="M3 12A9 3 0 0 0 14.59 14.87" />
            </svg>
            Knowledge
          </Link>
          <Link
            href="#"
            className={
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted" +
              (menuOpen === "Knowledge"
                ? " text-primary"
                : " text-muted-foreground")
            }
            onClick={() => setMenuOpen("Knowledge")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-line-chart"
            >
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
            Analytics
          </Link>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Card>
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Link href="/pricing">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
