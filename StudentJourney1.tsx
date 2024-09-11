import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import StudentLink  from './StudentLink'
import {Link} from '@tanstack/react-router'
const ProgramName = () => {
  const [currentView, setCurrentView] = useState('list')
  if (currentView === 'add') {
    return <StudentLink />;
  }
  return (
    <div className="lg:tw-w-[969px]  tw-w-auto  lg:tw-h-[800px] tw-h-auto  tw-top-[128px] tw-left-[232px] tw-pt-[20px] tw-px-6 tw-gap-[23px] tw-rounded-[6px] tw-bg-white tw-shadow-[0px_0px_8px_0px_#00000026]">
      <div className="tw-py-2">
        <div className="tw-flex tw-items-center tw-justify-between tw-mb-3">
          <p className="lg:tw-w-[184px] tw-w-auto tw-h-[14px] tw-text-[#1D1F71] tw-text-xs tw-font-[600] tw-leading-[24px] tw-tracking-[0.17px]">
            Program ID :
            <span className="tw-font-montserrat tw-text-[#1D1F71] tw-text-xs tw-font-[400] tw-leading-[24px] tw-tracking-[0.17px]">
              PG12345
            </span>
          </p>
        </div>
      </div>
     <div className="lg:tw-w-[929px]  tw-w-auto  lg:tw-h-[700px]  tw-h-auto  tw-gap-[35px] tw-bg-white">
        <div className="lg:tw-w-[862px] tw-w-auto  lg:tw-h-[199px]  tw-h-auto tw-gap-[8px] tw-flex tw-flex-col">
          <div className="lg:tw-w-[285px] tw-w-auto lg:tw-h-[125px]  tw-h-auto tw-gap-[30px] tw-flex tw-flex-col">
            <p className=" lg:tw-w-[285px] tw-w-auto tw-h-[13px] tw-text-[#282828] tw-py-2 tw-font-montserrat tw-font-[600] tw-leading-[24px] tw-tracking-[-0.025em] tw-text-left">
              Java Full Stack
            </p>
           <img src="/full.png"  className="  tw-object-cover tw-opacity-100  "/>
          </div>
          <p className="lg:!tw-w-[862px]  tw-w-auto  lg:tw-h-[58px]  tw-h-auto tw-font-montserrat tw-text-[14px] tw-pt-6 tw-text-[#424242] tw-font-[500] tw-leading-[24px] tw-tracking-[-0.025em] tw-text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="lg:tw-w-[929px] tw-w-auto tw-h-[10px]">
            <p className="tw-font-montserrat tw-text-[14px] tw-text-[#333333] tw-py-9 tw-font-[700] tw-leading-[24px] tw-tracking-[-0.025em] tw-text-left">
              Skills Gain: C++, JAVA, HTML, Javascript, Python, Node js, etc.
            </p>
          </div>
          <div className="lg:tw-w-[929px]  tw-w-auto  tw-h-auto  tw-gap-[24px]">
            <div className="lg:tw-w-[929px] tw-w-auto tw-h-auto tw-gap-[34px]">
              <p className="tw-font-montserrat tw-text-[18px] tw-font-semibold tw-leading-[24px] tw-tracking-[-0.025em] tw-text-left tw-pt-16 tw-text-[#333333]">
                Courses
              </p>
       <Accordion
       type="single"
       collapsible
       className="lg:tw-w-[922px]  tw-w-auto lg:tw-h-auto tw-h-auto tw-gap-[8px] tw-rounded-[4px] tw-bg-[#E9FAEB] ${getBackgroundColorByIndex()}">
       <AccordionItem value="item" className="tw-border-none tw-h-full">
       <AccordionTrigger className="tw-flex tw-items-center tw-justify-between tw-h-full tw-px-4 tw-border-l-[10px] tw-border-[#39d74b] tw-rounded-[5px]">
       <button className="tw-flex tw-items-center lg:tw-w-[882px]  tw-w-auto lg:tw-h-[24px] tw-h-auto tw-gap-[641px] tw-font-montserrat tw-text-[#000000] tw-text-[14px] tw-font-[500] tw-leading-[24px]" onClick={() => setCurrentView('add')}>
        1:Programming Fundamentals
      </button>
      </AccordionTrigger>
      <AccordionContent className="tw-flex tw-items-center tw-h-full tw-px-4">
      <span className="tw-flex tw-items-center">
      <img src="/tick.png" className="tw-h-6 tw-w-6  " />
       <div className='tw-ml-4'>Module 1: Basics of HTML</div></span>
      </AccordionContent>
      <AccordionContent className="tw-flex tw-items-center tw-h-full tw-px-4">
      <span className="tw-flex tw-items-center">
      <img src="/tick.png" className="tw-h-6 tw-w-6  " />
       <div className='tw-ml-4'> Module 2: Introduction to FullStack Development, Web and HTML</div></span>
      </AccordionContent>
       <AccordionContent className="tw-flex tw-items-center tw-h-full tw-px-4">
      <span className="tw-flex tw-items-center">
      <img src="/tick.png" className="tw-h-6 tw-w-6  " />
     <div className='tw-ml-4'> Module 3: HTML Element StructureL</div></span>
      </AccordionContent>
     </AccordionItem>
   </Accordion>
  <Accordion
  type="single"
  collapsible
  className={`lg:tw-w-[922px] tw-w-auto tw-h-auto tw-gap-[8px] tw-rounded-[4px] tw-mt-4  tw-bg-[#FFEDEB] ${getBackgroundColorByIndex()}`}>
  <AccordionItem value="item" className="tw-border-none tw-h-full">
  <AccordionTrigger className="tw-flex tw-items-center  tw-justify-between tw-h-full tw-px-4 tw-border-l-[10px] tw-border-[#FF7A6B] tw-rounded-[5px]">
  <span className="tw-flex tw-items-center lg:tw-w-[882px]  tw-h-[24px] tw-gap-[641px] tw-font-montserrat tw-text-[#000000dd] tw-text-[14px] tw-font-[500] tw-leading-[24px]">
    2:Intro to SQL
  </span>
  </AccordionTrigger>
  <AccordionContent className="tw-flex tw-items-center tw-h-full tw-px-4">
    <span className="tw-flex tw-items-center">Module 1: Basics of HTML</span>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion
  type="single"
  collapsible
  className={`lg:tw-w-[922px]  tw-w-auto lg:tw-h-auto tw-h-auto tw-gap-[8px] tw-rounded-[4px] tw-mt-4  tw-bg-[#FFF8DF] ${getBackgroundColorByIndex()}`}>
  <AccordionItem value="item" className="tw-border-none tw-h-full">
  <AccordionTrigger className="tw-flex tw-items-center tw-justify-between tw-h-full tw-px-4 tw-border-l-[10px] tw-border-[#E1BE46] tw-rounded-[5px]">
  <span className="tw-flex tw-items-center lg:tw-w-[882px]  tw-w-auto lg:tw-h-[24px] tw-h-auto tw-gap-[641px] tw-font-montserrat tw-text-[#000000] tw-text-[14px] tw-font-[500] tw-leading-[24px]">
    3:Java
  </span>
  </AccordionTrigger>
  <AccordionContent className="tw-flex tw-items-center tw-h-full tw-px-4">
      <span className="tw-flex tw-items-center">Module 1: Basics of HTML</span>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion
  type="single"
  collapsible
  className={`lg:tw-w-[922px]  tw-w-auto lg:tw-h-auto tw-h-auto tw-gap-[8px] tw-rounded-[4px] tw-mt-4  tw-bg-[#EEEEFF] ${getBackgroundColorByIndex()}`}>
  <AccordionItem value="item" className="tw-border-none tw-h-full">
  <AccordionTrigger className="tw-flex tw-items-center tw-justify-between tw-h-full tw-px-4 tw-border-l-[10px] tw-border-l-[#7A7CEA] tw-rounded-[5px]">
  <span className="tw-flex tw-items-center lg:tw-w-[882px]  tw-w-auto lg:tw-h-[24px] tw-h-auto tw-gap-[641px] tw-font-montserrat tw-text-[#000000] tw-text-[14px] tw-font-[500] tw-leading-[24px]">
    4:Advanced Java Programming
  </span>
</AccordionTrigger>
 <AccordionContent className="tw-flex tw-items-center tw-h-full tw-px-4">
      <span className="tw-flex tw-items-center">Module 1: Basics of HTML</span>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion
  type="single"
  collapsible
  className={`lg:tw-w-[922px]  tw-w-auto lg:tw-h-auto tw-h-auto tw-gap-[8px] tw-rounded-[4px] tw-mt-4  tw-bg-[#F0F9FF] ${getBackgroundColorByIndex()}`}>
  <AccordionItem value="item" className="tw-border-none tw-h-full">
  <AccordionTrigger className="tw-flex tw-items-center tw-justify-between tw-h-full tw-px-4 tw-border-l-[10px] tw-border-l-[#86CDFE] tw-rounded-[5px]">
  <span className="tw-flex tw-items-center lg:tw-w-[882px]  tw-w-auto lg:tw-h-[24px] tw-h-auto tw-gap-[641px] tw-font-montserrat tw-text-[#000000] tw-text-[14px] tw-font-[500] tw-leading-[24px]">
    5:Front-end Technologies
  </span>
  </AccordionTrigger>
  <AccordionContent className="tw-flex tw-items-center tw-h-full tw-px-4">
      <span className="tw-flex tw-items-center">
        Module 1:<div> Basics of HTML</div></span>
    </AccordionContent>
 </AccordionItem>
</Accordion>
</div>
  </div>
 </div>
  </div>
 </div>
  );
};
const getBackgroundColorByIndex = () => {
  const colors = ['tw-bg-[#E9FAEC]', 'tw-bg-[#FFEDEB]', 'tw-bg-[#FFF8DF]', 'tw-bg-[#EEEEFF]', 'tw-bg-[#F0F9FF]'];
  return colors[ colors.length];
};

export default ProgramName;
