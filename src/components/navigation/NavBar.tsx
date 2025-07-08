"use client";
import { RxMagnifyingGlass } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavStatic } from "./NavStatic";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);

  const handleSearchToggle = () => {
    setSearch((prev) => !prev);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() !== "") {
      window.location.href = `/search?query=${encodeURIComponent(query)}`;
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-[10rem] w-full z-40 bg-white shadow-md transition-transform duration-300 ease-in-out ${
          search ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 pt-4">
          <h2 className="text-sm font-semibold text-gray-700">SEARCH</h2>
          <button aria-label="Close search" onClick={handleSearchToggle}>
            <XMarkIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <form onSubmit={handleSearch} className="mt-6 px-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            autoFocus
            className="w-full border-b-2 border-blue-900 outline-none py-2 px-2 text-gray-800 placeholder:text-gray-400"
          />
        </form>
      </div>

      {/* Mobile Menu Dialog */}
      <header className="sm:py-2 bg-white fixed border-b z-30 top-0 sm:w-full w-screen">
        <Dialog
          open={open}
          onClose={setOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative flex w-1/2 max-w-xs transform flex-col overflow-y-auto bg-[#001A4B] pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <div className="flex px-4 pb-2 pt-5">
                <button
                  aria-label="Close menu"
                  type="button"
                  onClick={() => setOpen(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-white"
                >
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-6 border-t border-white px-4 py-6">
                {NavStatic.map((item, name) => (
                  <Link
                    key={name}
                    href={item.href}
                    className="-m-2 block p-2 font-semibold text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Nav */}
        <nav
          aria-label="Top"
          className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-16 items-center">
            {/* Logo */}
            <div className="flex space-x-4 items-center lg:ml-0">
              <Link href="/">
                <Image
                  alt="zembelani logo"
                  height={1500}
                  width={1500}
                  src="/logo/zembelanilogo.PNG"
                  className="h-[2.5rem] w-auto"
                />
              </Link>
              <h1 className="text-red-500 sm:block hidden text-2xl">
                zembelani_logo
              </h1>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                <Link
                  href="/profile"
                  className="text-md font-semibold text-black"
                >
                  Profile
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <RxMagnifyingGlass
                  onClick={handleSearchToggle}
                  className=" text-blue-900 size-7 cursor-pointer"
                />
                <button
                  aria-label="Open menu"
                  type="button"
                  onClick={() => setOpen(true)}
                  className="relative block sm:hidden rounded-md bg-white font-semibold text-blue-900 lg:hidden"
                >
                  <Bars3Icon className="h-7 w-7" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
