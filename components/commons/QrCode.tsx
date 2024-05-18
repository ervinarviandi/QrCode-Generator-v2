"use client";

import React from "react";
// import { useCallback, useEffect, useState, ChangeEvent } from "react";
import { useState, ChangeEvent, useEffect, useCallback } from "react";
import { QRCode } from "react-qrcode-logo";
import * as htmlToImage from "html-to-image";
// import { ChromePicker } from "react-color";
import { Input } from "@/components/ui/input";

// import { toast } from "../ui/use-toast";
import { toast } from "sonner";

const QR_Content = "Content";
const QR_Style = "QR Style";
const QR_BgColor = "QR Color Mode";

const Qrcode = () => {
  const [text, setText] = useState("");
  const [QRValue, setQRValue] = useState<string>(
    "https://ervinarviandi.vercel.app"
  );
  const [QRStyle, setQRStyle] = useState<"squares" | "dots">("squares");
  const [imageURL, setImageURL] = useState<string>("");
  const [logoWidth, setLogoWidth] = useState<number>(30);
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [color, setColor] = useState("#054080");
  const handleChangeColor = (color: any) => setColor(color.hex);

  // const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleDownload = () => {
    htmlToImage
      .toJpeg(document.getElementById("qr-code-wrapper")!)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "QrCode.jpg";
        link.href = dataUrl;
        link.click();
        toast("Event has been created.");
      });
  };

  const handleQRValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQRValue(e.target.value);
    },
    []
  );

  const handleColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQRValue(e.target.value);
  }, []);

  const handleQRStyleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setQRStyle(e.target.value as "squares" | "dots");
    },
    []
  );

  const handleImageURLChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageURL(e.target.value);
    },
    []
  );

  const handleBgColorChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setBgColor(e.target.value);
    },
    []
  );

  return (
    <>
      <div className="w-full qrcode pt-32 ">
        <div className="lg:max-w-3xl mx-auto px-5 py-10">
          <div className="grid md:grid-cols-2 gap-3 ">
            <div className="flex flex-col mx-auto py-14">
              <div id="qr-code-wrapper">
                <QRCode
                  id="qr-code"
                  size={220}
                  logoImage={imageURL}
                  bgColor={bgColor}
                  value={QRValue}
                  qrStyle={QRStyle}
                  logoWidth={logoWidth}
                />
                <p className="w-60 break-words bg-black dark:bg-gray-200 text-white dark:text-gray-950 text-center  font-sora">
                  {QRValue}
                </p>
              </div>
              <button
                onClick={handleDownload}
                // onClick={() => {
                //   handleDownload(

                //   );
                // }}
                className=" w-full my-4 py-2  bg-teal-500 hover:bg-teal-400  rounded-lg text-white font-sora font-bold"
              >
                Save QR
              </button>
            </div>
            <div className="flex flex-col w-9/12 mx-auto">
              <div className="">
                <label
                  htmlFor=""
                  className=" text-black dark:text-white flex text-left text-lg "
                >
                  {QR_Content} <span className="text-rose-400 ml-2">*</span>
                </label>
                <div className="mt-2">
                  <Input
                    className=" py-3 px-2 w-full flex mx-auto p-3 rounded-lg focus:outline-none focus:ring-primary focus:ring-2 focus:border-primary caret-primary bg-gray-200 dark:bg-[#121212] border-gray-200 text-lg dark:border dark:border-white"
                    placeholder="masukan url "
                    value={QRValue}
                    size={25}
                    type="text"
                    onChange={handleQRValueChange}
                  />
                </div>
              </div>
              <div className="mt-7">
                <label
                  htmlFor=""
                  className="text-lg flex  text-left text-black dark:text-white font-sora "
                >
                  {QR_Style}
                </label>
              </div>
              <div className="mt-2">
                <select
                  typeof=""
                  id="qr-style"
                  value={QRStyle}
                  onChange={handleQRStyleChange}
                  className="w-full py-1.5 px-2  focus:ring-primary hover:border-primary dark:text-white text-black rounded-lg focus:ouline-none border-primary   bg-gray-200 dark:bg-[#121212] dark:border dark:border-white  text-lg  relative "
                >
                  <option
                    className="text-base font-sora absolute rounded-full "
                    value="squares"
                  >
                    Squares
                  </option>
                  <option
                    className="text-base font-sora rounded-lg"
                    value="dots"
                  >
                    Dots
                  </option>
                </select>
              </div>
              <div className="mt-7">
                <label
                  htmlFor=""
                  className="flex text-left text-black dark:text-white font-sora text-lg "
                >
                  Logo Image URL
                </label>
              </div>
              <div className="mt-2">
                <Input
                  className="font-sora  py-1.5 px-2 w-full flex mx-auto dark:text-white text-black p-3 focus:outline-none focus:ring-primary focus:ring-2 focus:border-primary caret-primary   bg-gray-200 dark:bg-[#121212] border-gray-200 text-lg placeholder:dark:text-white placeholder:text-black rounded-lg "
                  placeholder="Put the QR Logo Image URL here (Optional)"
                  size={25}
                  type="text"
                  onChange={handleImageURLChange}
                />
              </div>

              <div className="mt-7">
                <label
                  htmlFor=""
                  className="flex text-left text-black dark:text-white font-sora text-lg rounded-lg"
                >
                  {QR_BgColor}
                </label>
              </div>
              <div className="mt-2">
                <select
                  typeof=""
                  id="qr-style"
                  value={bgColor}
                  onChange={handleBgColorChange}
                  className="w-full py-1.5 px-2 font-sora text-lg focus:ring-primary hover:border-primary text-black dark:text-white rounded-md focus:ouline-none border-primary mx-auto  bg-gray-200 dark:bg-[#121212] border-gray-200 dark:border dark:border-white  "
                >
                  <option className="text-base font-sora " value="#ffffff">
                    Default Color
                  </option>
                  <option className="text-base font-sora" value="#d1d5db">
                    Dark Gray
                  </option>
                  <option className="text-base font-sora" value="#e0e7ff">
                    Indigo
                  </option>
                  <option className="text-base font-sora" value="#bfdbfe">
                    Blue
                  </option>
                  <option className="text-base font-sora" value="#86efac">
                    Green
                  </option>
                  <option className="text-base font-sora" value="#ddd6fe">
                    Violet
                  </option>
                  <option className="text-base font-sora" value="#fecdd3">
                    Rose
                  </option>
                  <option className="text-base font-sora" value="#fef9c3">
                    Yellow
                  </option>
                  <option className="text-base font-sora" value="#d1fae5">
                    Emerald
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qrcode;
