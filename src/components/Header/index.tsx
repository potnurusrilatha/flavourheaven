import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-amber-100 shadow-md border-b border-amber-900 w-full">
      <div className="flex items-center justify-center px-8 py-4">
     
        <div className="flex items-center gap-4 ">
          <Image
            src="/sree-logo.png" 
            alt="Sree Logo"
            width={80}
            height={80}
            className="rounded-full shadow"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-black tracking-wide">
            Sree's Food House
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
