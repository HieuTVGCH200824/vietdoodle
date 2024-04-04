import { useState } from "react";
import "./App.css";
import { Slider } from "./components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { clsx } from "clsx";
import { Button } from "./components/ui/button";

const ReturnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="35"
    viewBox="0 0 45 35"
    fill="none"
  >
    <path
      d="M25.21 33.3099L41.3301 17.1799L25.21 1.05994"
      stroke="black"
      strokeWidth="3"
      strokeMiterlimit="10"
    />
    <path
      d="M41.3301 17.1799H0.530029"
      stroke="black"
      strokeWidth="3"
      strokeMiterlimit="10"
    />
    <path
      d="M42.9399 0.839966V34.15"
      stroke="black"
      strokeWidth="3"
      strokeMiterlimit="10"
    />
  </svg>
);

function App() {
  const [tab, setTab] = useState("select");
  return (
    <div className="bg-[#FAF1F0] h-screen">
      <div className="p-10 flex flex-col gap-96 h-full">
        <div className="flex items-center justify-between border-b-[3px] border-primary/30 pb-3">
          <div>
            <div className="flex items-center gap-5">
              <div className="w-[100px] h-[100px] bg-blue-200" />
              <div className="font-museo text-[50px] uppercase text-primary">
                vietdoodle gallery
              </div>
            </div>
          </div>
          <ReturnIcon />
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-6 border-b pb-6 border-primary/20">
            <div className="w-[350px] h-[120px] bg-red-400"></div>
            <div className="w-3/5 flex flex-row items-center justify-center gap-4">
              <span className="text-4xl font-bold">-</span>
              <div className="w-full">
                <Slider className="mt-2.5" />
              </div>
              <span className="text-4xl font-bold">+</span>
            </div>
            <Tabs
              defaultValue="select"
              value={tab}
              onValueChange={(value) => setTab(value)}
              className="w-full flex flex-col items-center"
            >
              <TabsList className="bg-primary w-fit rounded-md">
                <TabsTrigger
                  value="select"
                  className={clsx(
                    "!text-white !bg-primary font-normal rounded-md",
                    tab === "select" && "!text-black !bg-[#FFCACA]"
                  )}
                >
                  Doodles
                </TabsTrigger>
                <TabsTrigger
                  value="upload"
                  className={clsx(
                    "!text-white !bg-primary font-normal rounded-md",
                    tab === "upload" && "!text-black !bg-[#FFCACA]"
                  )}
                >
                  More Doodles
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="select"
                className="w-full flex flex-col gap-10"
              >
                <div className="flex flex-col gap-3">
                  <span className="font-museo uppercase text-primary">
                    upcoming event
                  </span>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border-primary border rounded-2xl h-[150px] bg-white"></div>
                    <div className="border-primary border rounded-2xl h-[150px] bg-white"></div>
                    <div className="border-primary border rounded-2xl h-[150px] bg-white"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-museo uppercase text-primary">
                    upcoming event
                  </span>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border-primary border rounded-2xl h-[150px] bg-white"></div>
                    <div className="border-primary border rounded-2xl h-[150px] bg-white"></div>
                    <div className="border-primary border rounded-2xl h-[150px] bg-white"></div>
                    <div className="border-primary border rounded-2xl h-[150px] bg-white"></div>
                    <div className="border-primary border rounded-2xl h-[150px] bg-white"></div>
                    <div className="border-primary border rounded-2xl h-[150px] bg-white"></div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="upload"
                className="w-full flex flex-col gap-6"
              >
                <div className="flex flex-col gap-3">
                  <span className="font-museo uppercase font-bold text-primary">
                    upload your doodles
                  </span>
                  <div className="w-full h-[150px] bg-white border-primary border-[1px] rounded-2xl"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-museo uppercase font-bold text-primary">
                    explore on store
                  </span>
                  <div className="w-full h-[150px] bg-white border-primary border-[1px] rounded-2xl"></div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="flex gap-2 justify-end pt-4">
            <Button className="text-black font-bold bg-[#FFCACA] font-montserrat hover:bg-primary/20">
              Discard
            </Button>
            <Button
              variant="outline"
              className="border-primary font-montserrat font-bold"
            >
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
