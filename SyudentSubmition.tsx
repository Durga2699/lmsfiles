import React, { useState, useRef } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import * as pdfjsLib from 'pdfjs-dist';
import '@react-pdf-viewer/core/lib/styles/index.css';
import {
  ChevronLeft,
  ChevronRight,
  Download,

  Maximize,
  Paperclip,
  X,
  CircleCheck,
  Circle,
  Triangle,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Images,
  Hand,
  RectangleVertical,
  FilePen,
  Search ,
  Undo2,
  CornerDownRight,
  ZoomOut,
  ZoomIn,
  MessageSquare,
  ChevronDown,
  PcCase,
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";

// Set the worker path to pdfjs-dist
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

const PdfViewer: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const fileInputRef = useRef(null);
  const [text, setText] = useState<string>(''); // Text area content
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [wordCount, setWordCount] = useState<number>(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const fileInputRe = useRef(null);
  const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('left');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgaeFile ,setImageFile] = useState<File | null>(null);

  const handleTeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileNameWithExtension = file.name; // Get the file name with extension
  
      // Insert the file name into the contentEditable area
      if (contentEditableRef.current) {
        contentEditableRef.current.focus(); // Focus on the editable area
        const selection = window.getSelection();
        if (selection) {
          const range = selection.getRangeAt(0);
          range.insertNode(document.createTextNode(fileNameWithExtension));
        } else {
          // If no selection, just append text
          contentEditableRef.current.innerHTML += fileNameWithExtension;
        }
      }
  
      // Update the selected file state
      setSelectedFile(file);
    }
  };
  
  // Handle button click to open file input
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleZoomIn = () => {
    setZoom(prevZoom => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom(prevZoom => Math.max(0.1, prevZoom - 0.1));
  };

  const handleFullscreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const openAlertDialog = () => setIsDialogOpen(true);
  const closeAlertDialog = () => setIsDialogOpen(false);



 

  // Underline function
  const applyUnderline = () => {
    if (contentEditableRef.current) {
      contentEditableRef.current.focus();
      document.execCommand('underline', false, null);
    }
  };

 

  // File change handler
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name;
      setText(`${fileName} `);
    }
  };
  const handleContentEditableInput = () => {
    if (contentEditableRef.current) {
      const inputText = contentEditableRef.current.innerText;
      
      // Calculate word count
      const words = inputText.trim().split(/\s+/).filter(Boolean);
      setWordCount(words.length);

      // Update the text state
      setText(inputText);
    }
  };
  const handleAlignLeft = () => setAlignment('left');
  const handleAlignCenter = () => setAlignment('center');
  const handleAlignRight = () => setAlignment('right');


  const applyItalic = () => {
    if (contentEditableRef.current) {
      document.execCommand('italic', false, null);
    }
  };
  const applyBold = () => {
    if (contentEditableRef.current) {
      document.execCommand('bold', false, null);
    }
  };
  const handleImageFile = (file) => {
    const fileName = file.name; // Get the file name
    setText((prevText) => prevText + fileName + ' '); // Append the file name to the text
  };
  
  const handleFileChang = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file
    if (file) {
      const fileNameWithExtension = file.name; // Get the file name with extension
    // Get the extension (optional)
  
      // Insert the file name and extension into the contentEditable area
      if (contentEditableRef.current) {
        contentEditableRef.current.focus(); // Focus on the editable area
        document.execCommand('insertText', false, `${fileNameWithExtension} `); // Insert file name and extension
      }
    }
  };
  
  
  // Function to open file input
  const openFileInput = () => {
    fileInputRe.current.click(); // Programmatically click the hidden file input
  };

  return (
    <Card className='lg:tw-h-[1200px] tw-h-[1080px]     lg:tw-w-auto    tw-w-auto  '>
      <div className="tw-flex tw-items-center tw-w-full tw-shadow-sm tw-p-2 tw-mb-4 tw-ml-10">
      <div className='tw-mt-[6px]'>
           <PcCase className="tw-w-8 tw-h-10 tw-text-white tw-mr-5 tw-bg-green-400 tw-rounded-full" />
          </div>
        <span className="tw-text-sm tw-font-medium tw-text-black">
          Program: Java Full Stack / Course: Programming Fundamentals
        </span>
       
      </div>
       <div>
       <hr className="border-t-4 border-gray-500  tw-mt-[-16px]   tw-ml-6  tw-w-[1000px]" />

       </div>

      <div className="tw-ml-8  tw-mt-4">
        <p>Module 1: Basics of HTML / Reading Material : Intro to HTML</p>
      </div>

      <div className="tw-flex tw-justify-between tw-mb-[0px] tw-bg-[#BDBDBD] lg:tw-h-auto lg:tw-ml-[140px] md:tw-ml-0 tw-ml-0 lg:tw-w-[900px]  tw-w-auto tw-mt-5 ">
          <div className="tw-flex tw-gap-2 tw-ml-3 tw-text-[12px] tw-mt-2">
          Rahul kumar<br/>
          ID : AB12456
          </div>

          <div className="tw-flex tw-justify-center tw-items-center tw-space-x-3 tw-mr-4">
            <button
              className="tw-text-[11px] tw-cursor-pointer lg:tw-ml-80">
            SUBMITTED <br/>
            Submission Receipt: REPT45782 
            </button>
            <button
              className="tw-text-lg tw-bg-[#FFDF9B] tw-rounded-[20px] lg:tw-ml-20">
             70 / 100
            </button>
            <button
              className="tw-text-[12px]  tw-mr-[520px]  tw-text-primary "
             
            >
           View Feedback
            </button>
          </div>
          <img src="/sub.png"  className='tw-w-5 tw-mt-3  tw-h-4' />
          <div className="tw-flex  tw-text-[12px]  tw-items-center tw-gap-2 tw-text-primary  tw-mr-2">
          

             Auto Analysis
         
            
          </div>
        </div>

      <div className={`lg:tw-h-[600px] tw-h-auto lg:tw-ml-[140px] md:tw-ml-0 tw-ml-0  lg:tw-w-[900px]  tw-w-auto tw-mb-[-140px] tw-border tw-border-gray-400 tw-bg-black tw-overflow-hidden ${isFullscreen ? 'tw-fixed tw-top-0 tw-left-0 tw-z-50 tw-h-screen tw-w-screen' : ''}`}>
        <div className="tw-flex tw-justify-between tw-items-center  tw-mb-2 tw-bg-black   tw-text-white ">
          <div className="tw-flex tw-items-center tw-gap-2 tw-ml-3">
          <ChevronDown size={20}   className='tw-ml-16' />

          <RectangleVertical size={24}  className='tw-ml-[5px]' />
            <button
              className="tw-px-4 tw-py-2 tw-rounded-md tw-disabled:opacity-50"
              aria-label="Previous Page"
              onClick={() => setPageNumber(prevPage => Math.max(prevPage - 1, 1))}
              disabled={pageNumber <= 1}
            >
              <ChevronLeft  className='tw-ml-[-18px]'/>
            </button>
            <span>Page 1 of {pageNumber}</span>
            <button
              className="tw-px-4 tw-py-2 tw-rounded-md tw-disabled:opacity-50"
              aria-label="Next Page"
              onClick={() => setPageNumber(prevPage => prevPage + 1)}
            >
              <ChevronRight />
            </button>
            <div >
          <Hand className='tw-ml-[-20px]'  /></div>
          <button
              className="tw-text-lg tw-cursor-pointer  "
              onClick={handleZoomIn}
            >
              <  ZoomIn />
            </button>
            <button
              className="tw-text-lg tw-cursor-pointer"
              onClick={handleZoomOut}
            >
              <ZoomOut />
            </button>
            <button
              className="tw-text-lg tw-cursor-pointer"
              onClick={handleFullscreenToggle}
            >
              <Maximize />
             
            </button>
            <ChevronDown size={20}   />
            <div>
            <FilePen size={24}  className='tw-ml-20' />
            </div>
            <MessageSquare size={24}  />
            <Undo2 size={24} />
            <CornerDownRight size={24}  />
            <div className="tw-flex tw-items-center tw-gap-2">
            <a
              href="/awt.pdf"
              download="awt.pdf"
              className="tw-text-lg tw-cursor-pointer"
              aria-label="Download PDF"
            >
              <Download />
            </a>
            
          </div>
          <Search size={24} />
         </div>
         </div>

        <div
          className="lg:tw-h-[calc(100%-4rem)]  tw-h-[calc(100%-2rem)]  lg:tw-w-full tw-w-auto  tw-bg-custom-grey tw-mt-[-8px]"
          style={{ transform: `scale(${zoom})`, transformOrigin: '0 0' }}
        >
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`}>
            <Viewer
              fileUrl="/awt.pdf"
              onPageChange={({ currentPage }) => setPageNumber(currentPage)}
            />
          </Worker>
        </div>
    </div> 


    </Card>
  );
};

export default PdfViewer;
