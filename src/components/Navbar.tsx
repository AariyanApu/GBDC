"use client";

import { navigation } from "@/utils/data";
import { staggerContainer, textContainer, textVariant2 } from "@/utils/motion";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-sky-400  text-white shadow-md">
      {({ open }) => (
        <>
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={"mx-auto max-w-7xl"}
          >
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-sky-300 hover:text-sky-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Laptop Screen Start */}

              <div className="flex flex-1 items-center justify-center sm:items-stretch lg:justify-between">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <Image
                    className=" h-6 w-auto lg:hidden"
                    src="/assets/logo.png"
                    alt="Logo of GBDC"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src="/assets/logo.png"
                    alt="Logo of GBDC"
                    width={80}
                    height={80}
                  />
                  <div className="ml-1 text-4xl font-semibold">GBDC</div>
                </Link>

                {/* Here Nav LINK */}

                <motion.div
                  variants={textContainer}
                  className="hidden sm:ml-6 lg:block"
                >
                  <div className="flex items-center justify-center space-x-4">
                    {navigation.map((item) => (
                      <motion.div
                        variants={textVariant2}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.5, ease: "easeOut" },
                        }}
                        key={item.name}
                        aria-current={item.current ? "page" : undefined}
                        className="my-4"
                      >
                        <Link
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#85D7FC] text-white"
                              : "text-white  hover:bg-sky-300 hover:text-sky-950",
                            "rounded-md px-2 py-1 text-lg font-medium",
                          )}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.nav>

          {/* NavLink for Mobile */}

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-sky-300 text-gray-50"
                      : "text-white hover:bg-sky-300 hover:text-sky-950",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
