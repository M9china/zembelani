import Link from "next/link";

export default function ContactUsPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-[7rem]">
      <h1 className="text-4xl gap-2 px-4 font-bold text-[#001A4B] mb-8">
        Contact Us
      </h1>
      <div className="px-8 space-y-4">
        <p className="text-gray-900 text-lg">
          For inquiries, please visit our offices.<br/>
          {`
           If you're unsure which address to use, feel free to contact our main office.`}
        </p>
        <Link className="bg-[#001A4B] text-white px-4 py-2 rounded font-bold" href={"tel:+27 72 367 7794"}>CALL US NOW</Link>
      </div>

       <div className="mt-8 px-4 rounded-2xl border mx-4 bg-white">
        <div className="text-gray-800 font-sans text-lg py-4">
            <p>1751 SECTION A</p>
            <p>KWAGGAFONTEIN</p>
            <p>MPUMALANGA</p>
            <p>SOUTH AFRICA</p>
            <p>0458</p>
          </div>
      </div>
      
      <div className="mt-8 px-4 rounded-2xl border mx-4 bg-white">
        <div className="text-gray-800 font-sans text-lg py-4">
            <p>1091 TITBABBLAER STREET</p>
            <p>MONTANA TUINE</p>
            <p>PRETORIA</p>
            <p>SOUTH AFRICA</p>
            <p>0182</p>
          </div>
      </div>
    </main>
  );
}
