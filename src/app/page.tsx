import { SideBar } from "../components/sidebar";
import { CalendarDateRangePicker } from "../components/ui/datepicker";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CountryTable } from "@/components/country";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Overview } from "@/components/overview";
export default function Home() {
  return (
    <>
      
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <SideBar className="hidden lg:block" />
              <div className="col-span-9 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <div className="hidden flex-col md:flex">
                    <div className="border-b">
                      <div className="flex h-16 items-center px-4">
                        <h2 className="text-3xl font-bold tracking-tight">
                          Potato Dashboard
                        </h2>
                        <div className="ml-auto flex items-center space-x-4">
                          

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Button variant="outline" size="icon">
                                  <svg
                                    className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                                    viewBox="0 0 20 20"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000000"
                                  >
                                    <g
                                      id="SVGRepo_bgCarrier"
                                      stroke-width="0"
                                    ></g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      {" "}
                                      <title>github [#142]</title>{" "}
                                      <desc>Created with Sketch.</desc>{" "}
                                      <defs> </defs>{" "}
                                      <g
                                        id="Page-1"
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                      >
                                        {" "}
                                        <g
                                          id="Dribbble-Light-Preview"
                                          transform="translate(-140.000000, -7559.000000)"
                                          fill="#000000"
                                        >
                                          {" "}
                                          <g
                                            id="icons"
                                            transform="translate(56.000000, 160.000000)"
                                          >
                                            {" "}
                                            <path
                                              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                              id="github-[#142]"
                                            >
                                              {" "}
                                            </path>{" "}
                                          </g>{" "}
                                        </g>{" "}
                                      </g>{" "}
                                    </g>
                                  </svg>
                                  <svg
                                    className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                                    viewBox="0 0 20 20"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#ffffff"
                                    stroke="#ffffff"
                                  >
                                    <g
                                      id="SVGRepo_bgCarrier"
                                      stroke-width="0"
                                    ></g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      {" "}
                                      <title>github [#142]</title>{" "}
                                      <desc>Created with Sketch.</desc>{" "}
                                      <defs> </defs>{" "}
                                      <g
                                        id="Page-1"
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                      >
                                        {" "}
                                        <g
                                          id="Dribbble-Light-Preview"
                                          transform="translate(-140.000000, -7559.000000)"
                                          fill="#ffffff"
                                        >
                                          {" "}
                                          <g
                                            id="icons"
                                            transform="translate(56.000000, 160.000000)"
                                          >
                                            {" "}
                                            <path
                                              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                              id="github-[#142]"
                                            >
                                              {" "}
                                            </path>{" "}
                                          </g>{" "}
                                        </g>{" "}
                                      </g>{" "}
                                    </g>
                                  </svg>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Star on Github</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                              <Button variant="outline" size="icon">
                            <svg
                              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 512 512"
                              aria-hidden="true"
                              focusable="false"
                              height="1.1em"
                              width="1.1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                            </svg>
                            <svg
                              className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 512 512"
                              aria-hidden="true"
                              focusable="false"
                              height="1.1em"
                              width="1.1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                            </svg>
                          </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Share on Twitter</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <ModeToggle />
                          
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-4 p-8 pt-6">
                      <div className="flex items-center justify-between space-y-2">
                        <div className="flex items-center space-x-2">
                          <CalendarDateRangePicker />
                        </div>
                      </div>
                      <Tabs defaultValue="overview" className="space-y-4">
                        <TabsContent value="overview" className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                  Revenue
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className=" text-2xl font-bold">
                                  €43.400{" "}
                                  <span className=" text-xs font-semibold text-green-600 bg-green-200 px-2 rounded-md ml-2">
                                    +23%
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  vs. €33.418 last period
                                </p>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                  New customers
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="text-2xl font-bold">
                                  130{" "}
                                  <span className=" text-xs font-semibold text-green-600 bg-green-200 px-2 rounded-md ml-2">
                                    +29%
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  vs. 92 last period
                                </p>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                  Churned customers
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="text-2xl font-bold">
                                  5{" "}
                                  <span className=" text-xs font-semibold text-red-600 bg-red-200 px-2 rounded-md ml-2">
                                    +2%
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  vs. 3 last period
                                </p>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                  Active users
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="text-2xl font-bold">
                                  1337
                                  <span className=" text-xs font-semibold text-green-600 bg-green-200 px-2 rounded-md ml-2">
                                    +10%
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  vs. 1199 last period
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-7">
                              <CardHeader>
                                <CardTitle>Overview</CardTitle>
                              </CardHeader>
                              <CardContent className="pl-2">
                                <Overview />
                              </CardContent>
                            </Card>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                            <Card className="col-span-4">
                              <CardHeader>
                                <CardDescription>By country</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <CountryTable />
                              </CardContent>
                            </Card>
                            <Card className="col-span-4">
                              <CardHeader>
                                <CardDescription>Activity</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-3">
                                  <li className="flex items-start space-x-3">
                                    <span className="h-3 w-3 border-2 border-black-500 rounded-full mt-1"></span>
                                    <div>
                                      <p className="text-sm font-medium">
                                        <strong>Helmut Magomedov</strong> signed
                                        up. 11 hr. ago
                                      </p>
                                    </div>
                                  </li>
                                  <li className="flex items-start space-x-3">
                                    <span className="h-3 w-3 border-2 border-black-500 rounded-full mt-1"></span>
                                    <div>
                                      <p className="text-sm font-medium">
                                        <strong>Dariusz Thomas</strong> signed
                                        up. yesterday
                                      </p>
                                    </div>
                                  </li>
                                  <li className="flex items-start space-x-3">
                                    <span className="h-3 w-3 border-2 border-black-500 rounded-full mt-1"></span>
                                    <div>
                                      <p className="text-sm font-medium">
                                        <strong>Christian Amadi</strong> signed
                                        up. yesterday
                                      </p>
                                    </div>
                                  </li>
                                  <li className="flex items-start space-x-3">
                                    <span className="h-3 w-3 border-2 border-black-500 rounded-full mt-1"></span>
                                    <div>
                                      <p className="text-sm font-medium">
                                        <strong>Kanchana Nowak </strong> signed
                                        up. yesterday
                                      </p>
                                    </div>
                                  </li>
                                  <li className="flex items-start space-x-3">
                                    <span className="h-3 w-3 border-2 border-black-500 rounded-full mt-1"></span>
                                    <div>
                                      <p className="text-sm font-medium">
                                        <strong>Aisha Njuguna</strong> signed
                                        up. 5 days ago
                                      </p>
                                    </div>
                                  </li>
                                  <li className="flex items-start space-x-3">
                                    <span className="h-3 w-3 border-2 border-black-500 rounded-full mt-1"></span>
                                    <div>
                                      <p className="text-sm font-medium">
                                        <strong>John Does</strong> upgraded to
                                        Pro. 7 days ago
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
