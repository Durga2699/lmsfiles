import React, { useState, useRef ,useEffect} from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import * as pdfjsLib from 'pdfjs-dist';
import '@react-pdf-viewer/core/lib/styles/index.css';
import {ChevronLeft,ChevronRight,Download,Plus,Minus,Maximize,Paperclip,X,CircleCheck,Circle,Triangle,Bold,Italic,Underline,AlignLeft,AlignCenter,AlignRight,Images,PcCase ,} from 'lucide-react';
import mammoth from 'mammoth'; 
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
      const fileNameWithExtension = file.name; 
      if (contentEditableRef.current) {
        contentEditableRef.current.focus(); 
        const selection = window.getSelection();
        if (selection) {
          const range = selection.getRangeAt(0);
          range.insertNode(document.createTextNode(fileNameWithExtension));
        } else {
          contentEditableRef.current.innerHTML += fileNameWithExtension;
        }
      }
      setSelectedFile(file);
    }
  };
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
  const applyUnderline = () => {
    if (contentEditableRef.current) {
      contentEditableRef.current.focus();
      document.execCommand('underline', false, null);
    }
  };
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
      const words = inputText.trim().split(/\s+/).filter(Boolean);
      setWordCount(words.length);
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
    const fileName = file.name; 
    setText((prevText) => prevText + fileName + ' '); 
  };
  const handleFileChang = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileNameWithExtension = file.name;
      if (contentEditableRef.current) {
        contentEditableRef.current.focus();
        document.execCommand('insertText', false, `${fileNameWithExtension} `); 
      }
    }
  }; 
  const openFileInput = () => {
    fileInputRe.current.click();
  };

    //  this is the docs viwer
    const [fileContent, setFileContent] = useState<string | null>(null);
    useEffect(() => {
     // Automatically load the DOCX file when the component mounts
     loadDocxFile('/docs.docx');
   }, []);
 
   const loadDocxFile = (filePath: string) => {
     fetch(filePath)
       .then(response => response.arrayBuffer())
       .then(arrayBuffer => mammoth.convertToHtml({ arrayBuffer }))
       .then(result => setFileContent(result.value))
       .catch(err => console.error('Error loading DOCX file:', err));
   };
 
 return (
    <Card className='lg:tw-h-[1200px] tw-h-[1080px]    lg:tw-w-auto    tw-w-auto  '>
      <div className="tw-items-center lg:tw-flex tw-w-full tw-shadow-sm tw-p-2 tw-mb-4">
        <div>
        <div className='tw-flex'>
       <div className='tw-mt-[6px]'>
           <PcCase className="tw-w-8 tw-h-10 tw-text-white  tw-bg-green-400 tw-rounded-full" />
          </div>
        <span className="tw-text-sm tw-font-medium tw-mt-2 tw-text-black tw-ml-2">
          Program: Java Full Stack / Course: Programming Fundamentals
        </span>
        </div>
        {/* <div> <hr className="border-t-4 border-gray-500  tw-mt-[40px]   tw-ml-6  tw-w-[1000px]" /></div> */}
        <div className="tw-ml-4 tw-mt-6">
        <p>Module 1: Basics of HTML / Reading Material : Intro to HTML</p>
      </div>
      </div>
      <div >
       <Button className="tw-flex tw-items-center tw-bg-green-600  lg:tw-w-[147px] lg:tw-h-[28px] tw-px-2   lg:tw-mt-[9px]  lg:tw-ml-[550px]">
        <img src="/public/icon (2).png" alt="Icon" className="tw-h-8 tw-w-8 lg:tw-h-14 lg:tw-w-14" />
          <div className='tw-text-[10px] tw-mr-[9px]'>Launch platform</div>
        </Button>
        </div>
      </div>
      <div className={`lg:tw-h-[600px] tw-h-[424px] lg:tw-ml-[140px]  lg:tw-w-[900px]  tw-w-auto tw-mt-7 tw-border tw-border-gray-400 tw-bg-gray-400 tw-overflow-hidden ${isFullscreen ? 'tw-fixed tw-top-0 tw-left-0 tw-z-50 tw-h-screen tw-w-screen' : ''}`}>
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-2 tw-bg-[#BDBDBD] ">
          <div className="tw-flex tw-items-center tw-gap-2 tw-ml-3">
            <button
              className="tw-px-4 tw-py-2 tw-rounded-md tw-disabled:opacity-50"
              aria-label="Previous Page"
              onClick={() => setPageNumber(prevPage => Math.max(prevPage - 1, 1))}
              disabled={pageNumber <= 1}>
              <ChevronLeft />
            </button>
            <span>Page 1 of {pageNumber}</span>
            <button
              className="tw-px-4 tw-py-2 tw-rounded-md tw-disabled:opacity-50"
              aria-label="Next Page"
              onClick={() => setPageNumber(prevPage => prevPage + 1)}>
              <ChevronRight />
            </button>
          </div>
         <div className="tw-flex tw-justify-center tw-items-center tw-space-x-3 tw-mr-7">
            <button
              className="tw-text-lg tw-cursor-pointer" onClick={handleZoomIn}>
              <Plus />
            </button>
            <button
              className="tw-text-lg tw-cursor-pointer" onClick={handleZoomOut}>
              <Minus />
            </button>
            <button
              className="tw-text-lg tw-cursor-pointer" onClick={handleFullscreenToggle}>
              <Maximize />
            </button>
          </div>
           <div className="tw-flex tw-items-center tw-gap-2">
            <a  href="/awt.pdf" download="awt.pdf" className="tw-text-lg tw-cursor-pointer" aria-label="Download PDF">
              <Download /></a>
            </div>
        </div>
        <div
          className="lg:tw-h-[calc(100%-4rem)]  tw-h-[calc(100%-2rem)]  lg:tw-w-full tw-w-auto tw-bg-custom-grey tw-mt-[-8px] "
          style={{ transform: `scale(${zoom})`, transformOrigin: '0 0' }}>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`}>
            <Viewer
              fileUrl="/awt.pdf"
              onPageChange={({ currentPage }) => setPageNumber(currentPage)} />
          </Worker>
        </div>
       {/* 
        // docs viwer */}
      {/* <div className="tw-h-[calc(100%-4rem)] tw-w-full tw-bg-[#F0F0F0] tw-mt-[-8px] tw-overflow-y-auto">
          {fileContent && (
            <div className="tw-p-4" dangerouslySetInnerHTML={{ __html: fileContent || '' }} />
          )}
        </div> */}

        </div> 
       <Accordion
        type="single"
        collapsible
        className="lg:tw-w-[910px] lg:tw-h-auto tw-w-auto  tw-h-auto  tw-gap-[8px] tw-rounded-[4px] tw-bg-[#E9FAEB] lg:tw-ml-[136px] tw-ml-[10px]  tw-mt-4">
        <AccordionItem value="item" className="tw-border-none tw-h-full tw-mr-30">
          <AccordionTrigger className="tw-flex tw-items-center tw-justify-between tw-h-full tw-px-4 tw-ml-5">
            <div className="tw-flex tw-items-center">
              <Triangle className="tw-h-4 tw-w-4 tw-mr-[-3px] tw-ml-[-2] tw-bg-[#E1BE46]" />
              <span className="tw-font-montserrat tw-text-[14px] tw-font-[500] tw-leading-[24px]">
                Note: First note
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="tw-flex tw-items-center tw-h-full tw-px-4">
            <span className="tw-flex tw-items-center">
              <div className="tw-inline-flex tw-items-center tw-justify-center tw-bg-yellow-500 tw-rounded-full tw-p-1">
                <Circle className="tw-h-4 tw-w-4 tw-text-transparent" />
              </div>
              <div className="tw-ml-4">Lorem Ipsum is simply dummy text of the printing</div>
              <Circle className="tw-h-4 tw-w-4 tw-text-transparent" />
            </span>
          </AccordionContent>
          <AccordionContent className="tw-flex tw-items-center tw-h-full tw-px-4">
            <span className="tw-flex tw-items-center">
              <div className="tw-inline-flex tw-items-center tw-justify-center tw-bg-yellow-500 tw-rounded-full tw-p-1">
                <Circle className="tw-h-4 tw-w-4 tw-text-transparent" />
              </div>
              <div className="tw-ml-4">
                Lorem Ipsum is simply dummy text of the printing
              </div>
              <Circle className="tw-h-4 tw-w-4 tw-text-transparent" />
            </span>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
     <div  className='lg:tw-ml-[140px]   tw-ml-auto tw-mt-[20px]  tw-text-black' > Keep Notes</div>
      <div className="tw-mt-9 lg:tw-ml-[140px] tw-ml-2 tw-flex tw-gap-2">
        <div className="lg:tw-w-[900px]  tw-w-[900px]   tw-h-[50px] tw-border tw-border-gray-400 tw-bg-gray-100 tw-p-4">
          <div className="tw-flex tw-items-center tw-mb-2 ">
          <button className="tw-mr-2" onClick={applyBold}>
              <Bold />
            </button>
            <button className="tw-mr-2" onClick={applyItalic}>
              <Italic />
            </button>
            <button className="tw-mr-2" onClick={applyUnderline}>
              <Underline />
            </button>
            <button className="tw-mr-2" onClick={handleAlignLeft}>
              <AlignLeft />
            </button>
            <button className="tw-mr-2" onClick={handleAlignCenter}>
              <AlignCenter />
            </button>
            <button className="tw-mr-2" onClick={handleAlignRight}>
              <AlignRight />
            </button>
            <button className="tw-text-lg tw-cursor-pointer" onClick={handleButtonClick}>
      <Paperclip />
    </button>
    {/* Hidden file input */}
    <input
      type="file"
      ref={fileInputRef}
      style={{ display: 'none' }} // Hide the default file input
      onChange={handleTeChange} />
     <button className="tw-text-lg tw-cursor-pointer" onClick={openFileInput}>
      <Images />
    </button>
    {/* Hidden file input */}
    <input
      type="file"
      accept="image/*" // Only image files can be selected
      ref={fileInputRe}
      style={{ display: 'none' }} 
      onChange={handleFileChang} />
  {/* Display the selected image file name */}
    {imgaeFile && (
      <span className="tw-ml-4 tw-text-sm tw-text-gray-600   ">
        {imgaeFile.name} 
      </span>
    )}
 </div>
  <div
      className="lg:tw-w-[900px] tw-w-auto  lg:tw-ml-[-18px]  tw-ml-[-18px] lg:tw-h-[100px] tw-bg-white tw-p-2 tw-border tw-border-gray-300 tw-overflow-y-auto"
      ref={contentEditableRef}
      contentEditable
      onInput={ handleContentEditableInput}
      suppressContentEditableWarning={true}>
  {contentEditableRef.current?.textContent?.length === 0   && (
        <p>Drag and drop files here or add text</p>
      ) }    </div>
     </div>
    </div>
   <div className="flex items-center justify-between ">
      <div className="tw-flex lg:tw-ml-[140px] lg:tw-mt-5  lg:tw-flex  tw-mt-[60px]  tw-ml-auto ">
          <span className="text-gray-500 lg:tw-mt-24   lg:tw-ml-0  tw-ml-2  tw-mt-2">Word count: {wordCount}</span>
          <div className='lg:tw-ml-0 tw-ml-auto'>
          <Button
            className="tw-bg-blue-500 tw-text-white tw-px-3  lg:tw-mt-24   lg:tw-ml-[730px]   lg:tw-mr-0  tw-rounded" // tw-ml-auto
            variant="default"
            onClick={openAlertDialog}>
         Save
          </Button>
          </div>
        </div>
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogTrigger asChild>
            {/* Optional trigger component */}
          </AlertDialogTrigger>
          <AlertDialogContent className="lg:tw-w-[354px] tw-w-[362px] lg:tw-h-[228px]  tw-h-[228px] tw-box-border-none">
            <div className="tw-absolute tw-top-0 tw-right-0 tw-p-2">
              <AlertDialogCancel className='tw-border-none'>
                <X className="tw-w-[15px] tw-h-[15px] tw-border-white !tw-border-none" />
              </AlertDialogCancel>
            </div>
            <AlertDialogHeader className="tw-text-center">
              <div className="tw-text-green-500 tw-flex tw-justify-center">
                <CircleCheck className="tw-w-[66px] tw-h-[50px]" />
              </div>
              <div className="tw-flex tw-justify-center tw-mb-8">
                <AlertDialogTitle>
                  <span className="tw-font-montserrat tw-font-semibold tw-text-[14px] tw-text-center">
                    Completed
                  </span>
                </AlertDialogTitle>
              </div>
            </AlertDialogHeader>
            <AlertDialogDescription>
              <div className="tw-flex tw-flex-col tw-mt-15 tw-px-6 tw-py-2 !tw-border-primary tw-w-full tw-rounded-[10px] tw-whitespace-nowrap">
                Your assignment has been successfully submitted.
              </div>
            </AlertDialogDescription>
            <div className="tw-flex tw-justify-center tw-mb-20">
              <Button
                className="tw-bg-primary tw-w-[150px] tw-rounded tw-text-white"
                onClick={closeAlertDialog}
              >
                Continue
              </Button>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
</Card>
  );
};

export default PdfViewer;
