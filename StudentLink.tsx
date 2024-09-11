import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Link as LinkIcon, Clipboard,PcCase } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import {Link} from '@tanstack/react-router'
import ReadingText from './ReadingText';
import Assignment  from './Assignment'
const StudentJourney = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [currentView, setCurrentView] = useState('list')
    const convertToEmbedUrl = (url: string) => {
      const videoId = new URL(url).searchParams.get('v');
      return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    };
   const handleLinkClick = () => {
      setVideoUrl(convertToEmbedUrl('https://www.youtube.com/watch?v=PKzA-BRCTQ0'));
    };
  if (currentView === 'add') {
    // return <ReadingText1 />;
    return <ReadingText />
  }
  if (currentView === 'clone') {
    return <Assignment/>
  }
  return (
    <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-space-y-8 lg:tw-space-y-0 lg:tw-space-x-8 tw-p-4 lg:tw-p-8">
      <Card className='tw-w-full lg:tw-w-[790px] tw-h-auto lg:tw-h-[550px] tw-p-4 lg:tw-p-6'>
        <CardContent>
          <div className="tw-flex tw-items-center tw-text-black">
            <PcCase className="tw-w-8 tw-h-10 tw-text-white tw-bg-green-400 tw-rounded-full" />
            <span className='tw-ml-4 tw-font-bold'>
              Program: Java Full Stack / Course: Programming Fundamentals
            </span>
          </div>
          <hr className="tw-border-t-2 tw-bg-[#D1CCCC] tw-w-full tw-my-4 lg:tw-my-8" />
          <p className='tw-text-blue-950 tw-font-bold tw-text-lg'>Module 1: Basics of HTML</p>
          <p className='tw-text-[12px] tw-mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-space-y-6 lg:tw-space-y-0 lg:tw-space-x-6 tw-mt-8">
            {/* Reading Materials Section */}
            <Card className="tw-w-full lg:tw-w-[196px] tw-h-auto">
              <CardContent>
                <div className="tw-flex tw-items-center tw-mb-4">
                  <BookOpen className="tw-text-blue-900 tw-w-10 tw-h-9 tw-mr-2" />
                  <span className="tw-text-[10px] tw-text-black tw-font-bold">Reading Materials</span>
                </div>
                <div className="tw-space-y-2">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="tw-bg-[#D3ECFD] tw-p-2 tw-text-[12px] tw-font-medium tw-rounded-md">
                      <div className="tw-flex tw-items-center tw-space-x-2">
                        <div className="tw-bg-white tw-h-4 tw-w-4 tw-rounded-md tw-text-center">{num}</div>
                        <button className="tw-flex tw-items-center tw-w-full tw-font-montserrat tw-text-[#000000] tw-text-[14px] tw-font-[500] tw-leading-[24px]" onClick={() => setCurrentView('add')}>
                          <span>Intro to HTML</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          {/* Links Section */}
            <Card className="tw-w-full lg:tw-w-[196px] tw-h-auto tw-p-0">
              <CardContent>
                <div className="tw-flex tw-items-center tw-mb-4">
                  <LinkIcon className="tw-text-blue-900 tw-w-10 tw-h-10 tw-mr-2" />
                  <span className="tw-text-[10px] tw-text-black tw-font-bold">Links</span>
                </div>
                <div className="tw-space-y-2">
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      onClick={handleLinkClick}
                      className="tw-bg-[#D3ECFD] tw-p-2 tw-text-[11px] tw-font-medium tw-rounded-md tw-cursor-pointer"
                    >
                      <div className="tw-flex tw-items-center tw-space-x-2">
                        <div className="tw-bg-white tw-h-6 tw-w-4 tw-rounded-md tw-text-center">{num}</div>
                        <span>www.geeksforgeeks</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
           {/* Assignments Section */}
            <Card className="tw-w-full lg:tw-w-[196px] tw-h-auto">
              <CardContent>
                <div className="tw-flex tw-items-center tw-mb-4">
                  <Clipboard className="tw-text-blue-900 tw-w-10 tw-h-9 tw-mr-2" />
                  <span className="tw-text-[10px] tw-text-black tw-font-bold">Assignments</span>
                </div>
                <div className="tw-space-y-2">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="tw-bg-[#D3ECFD] tw-p-2 tw-text-[12px] tw-font-medium tw-rounded-md">
                      <div className="tw-flex tw-items-center tw-space-x-2">
                        <div className="tw-bg-white tw-h-4 tw-w-4 tw-rounded-md tw-text-center">{num}</div>
                        <button className="tw-flex tw-items-center tw-w-full tw-font-montserrat tw-text-[#000000] tw-text-[14px] tw-font-[500] tw-leading-[24px]" onClick={() => setCurrentView('clone')}>
                          <span>Assignment {num}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conditiona to  render the video player */}
          {videoUrl && (
            <div className="tw-flex tw-justify-center tw-items-center tw-h-auto lg:tw-h-[400px] tw-mt-8">
              <iframe
                className="tw-rounded-lg tw-shadow-lg  tw-mt-[-900px] tw-w-[100%] md:tw-w-[70%] tw-h-[200px] md:tw-h-[400px] tw-object-cover"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="tw-w-full lg:tw-w-[320px] tw-h-auto lg:tw-h-[320px] tw-p-4 lg:tw-p-2 lg:tw-ml-2">
        <CardContent>
          <p className="tw-text-[14px] tw-font-bold tw-mb-4">Modules</p>
          <hr className="tw-border-t-2 tw-bg-[#D1CCCC] tw-w-full tw-my-4 lg:tw-my-8" />
          <div className="tw-space-y-4">
            {["Basics of HTML", "Introduction to FullStack Development, Web and HTML", "HTML Element Structure"].map((module, index) => (
              <p key={index} className="tw-text-blue-800 tw-text-[12px] tw-cursor-pointer tw-flex tw-items-center tw-space-x-2">
                <MoveRight className="tw-w-6 tw-h-6 tw-text-blue-900" />
                <div className='tw-ml-2'>{module}</div>
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentJourney;
