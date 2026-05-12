function Frame() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] items-start relative shrink-0 w-[504.984px]">
      <div className="flex-[1_0_0] min-w-px relative">
        <div aria-hidden="true" className="absolute border border-[#abb2bf] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#abb2bf] text-[16px] whitespace-nowrap">Name</p>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative">
        <div aria-hidden="true" className="absolute border border-[#abb2bf] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#abb2bf] text-[16px] whitespace-nowrap">Email</p>
        </div>
      </div>
    </div>
  );
}

export default function Contacts() {
  return (
    <div className="bg-[#282c33] content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full" data-name="Contacts">
      <Frame />
      <div className="content-stretch cursor-pointer flex items-start p-[8px] relative shrink-0 w-[505px]">
        <div aria-hidden="true" className="absolute border border-[#abb2bf] border-solid inset-0 pointer-events-none" />
        <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#abb2bf] text-[16px] whitespace-nowrap">Title</p>
      </div>
      <div className="content-stretch cursor-pointer flex h-[119px] items-start p-[8px] relative shrink-0 w-[505px]">
        <div aria-hidden="true" className="absolute border border-[#abb2bf] border-solid inset-0 pointer-events-none" />
        <p className="font-['Fira_Code:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#abb2bf] text-[16px] whitespace-nowrap">Message</p>
      </div>
      <div className="content-stretch flex items-start px-[16px] py-[8px] relative shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#c778dd] border-solid inset-0 pointer-events-none" />
        <p className="font-['Fira_Code:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">Send</p>
      </div>
    </div>
  );
}