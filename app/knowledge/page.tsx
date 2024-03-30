import Image from "next/image";
import { BellRing, Check, ChevronRight, Globe } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function Knowledge() {
  return (
    <section>
      <div className="max-w-screen-xl px-8 py-8">
        <header>
          <h2 className="text-l font-bold text-gray-900 sm:text-xl">
            Create a new knowledge source
          </h2>
        </header>

        <ul className="mt-8 flex flex-wrap gap-4 sm:grid-cols-2 ">
          <li>
            <Card className={cn("w-[380px]")}>
              <CardContent className="grid mt-6 gap-4">
                <div className=" flex items-center space-x-4 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-book-text"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    <path d="M8 7h6" />
                    <path d="M8 11h8" />
                  </svg>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none mb-2">
                      Upload your file
                    </p>
                    <p className="text-xs font-medium leading-4 text-gray-500">
                      Upload .pdf, .docx, .txt, or .md files to convert into
                      knowledge source
                    </p>
                  </div>
                  <div>
                    <ChevronRight className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </li>

          <li>
            <Card className={cn("w-[380px]")}>
              <CardContent className="grid mt-6 gap-4">
                <div className=" flex items-center space-x-4 rounded-md">
                  <Globe className="w-[30px] h-[30px]" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none mb-2">
                      Sync from URL
                    </p>
                    <p className="text-xs font-medium leading-4 text-gray-500">
                      Provide URL of the website to convert into knowledge
                      source
                    </p>
                  </div>
                  <div>
                    <ChevronRight className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </li>

          <li>
            <Card className={cn("w-[380px]")}>
              <CardContent className="grid mt-6 gap-4">
                <div className=" flex items-center space-x-4 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-upload"
                  >
                    <path d="M16 16l-4-4-4 4M12 12v9" />
                    <path d="M12 12V3" />
                    <path d="M20 20h-16" />
                  </svg>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none mb-2">
                      Vector Database
                    </p>
                    <p className="text-xs font-medium leading-4 text-gray-500">
                      Use your own vector database to create knowledge source
                    </p>
                  </div>
                  <div>
                    <ChevronRight className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </li>
        </ul>
        <div className="mt-16">
          <header>
            <h2 className="text-l font-bold text-gray-900 sm:text-xl">
              Your Existing knowledge source
            </h2>
          </header>

          <div className="overflow-x-auto mt-8">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Data Source
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Upload Time
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Data Type
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Status
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    John Doe
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Developer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $120,000
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Jane Doe
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    04/11/1980
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Designer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $100,000
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Gary Barlow
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Singer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $20,000
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
