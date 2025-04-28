export default function ClientsPartners() {
  return (
    <section className="flex flex-col items-center px-[13px] lg:px-[100px] py-8 md:py-10 lg:py-[100px] relatve">
      <h1 className="w-full text-[30px] md:text-[50px] text-[#14213D] ${volkhov.className} font-bold lg:leading-[65.5px] mb-[62px] text-center">
        Clients & Partners
      </h1>
      <div className="w-max grid md:grid-cols-2 2xl:grid-cols-4 items-center justify-center gap-8">
        <div className="bg-[#F2F2F2] w-full md:h-[110px] flex items-center justify-center text-center px-4 lg:px-[50px] py-[16px] text-[#000000] poppins-regular md:text-[23px] leading-[34.5px]">
          John Bitar & Company Limited
        </div>
        <div className="bg-[#F2F2F2] w-full md:h-[110px] flex items-center justify-center text-center px-4 lg:px-[50px] py-[16px] text-[#000000] poppins-regular md:text-[23px] leading-[34.5px]">
          Tradex Logistics Limited
        </div>
        <div className="bg-[#F2F2F2] w-full md:h-[110px] flex items-center justify-center text-center px-4 lg:px-[50px] py-[16px] text-[#000000] poppins-regular md:text-[23px] leading-[34.5px]">
          Transatlantic Company Ltd
        </div>
        <div className="bg-[#F2F2F2] w-full md:h-[110px] flex items-center justify-center text-center px-4 lg:px-[50px] py-[16px] text-[#000000] poppins-regular md:text-[23px] leading-[34.5px]">
          Symergy Ltd
        </div>
      </div>
    </section>
  );
}
