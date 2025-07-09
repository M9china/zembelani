import Link from "next/link";

export const Footer = () => {
  return (
    <footer aria-labelledby="footer" className="bg-white pt-8 border-t border-gray-500">
      <div className="container grid-cols-2 grid sm:grid-cols-3 sm:space-x-6 space-x-2">
        <div className="text-[#001A4B] px-4">
          <h1 className="font-bold text-md sm:text-xl">
            HEAD OFFICE - ADDRESS
          </h1>
          <div className="text-gray-600 font-sans text-sm py-4">
            <p>1091 TITBABBLAER STREET</p>
            <p>MONTANA TUINE</p>
            <p>PRETORIA</p>
            <p>SOUTH AFRICA</p>
            <p>0182</p>
          </div>
        </div>

        <div className="px-4">
          <h1 className="font-bold text-md sm:text-xl text-[#001A4B]">
            OTHER OFFICE - ADDRESS
          </h1>
          <div className="text-gray-600 font-sans text-sm py-4">
            <p>1751 SECTION A</p>
            <p>KWAGGAFONTEIN</p>
            <p>MPUMALANGA</p>
            <p>SOUTH AFRICA</p>
            <p>0458</p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <h1 className="font-bold text-md sm:text-xl text-[#001A4B]">
          HEAD OFFICE - CONTACT DETAILS
        </h1>
        <div className="text-gray-600 font-sans text-sm py-4">
          <Link href="tel: +27 72 367 7794">Phone: +27 72 367 7794</Link>
          <br />
          <Link
            href="mailto: jodazembel@gmail.com"
            className="overflow-ellipsis"
          >
            Email: jodazembel@gmail.com
          </Link>
          <br />
          <Link href="tel: +27 72691 9803">Alt Phone: +27 72691 9803</Link>
        </div>
      </div>
      <div className="border-t border-gray-100 py-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 Zembelani Transport & Projects, Inc. All rights reserved.
          </p>
        </div>
    </footer>
  );
};
