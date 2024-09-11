import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas'; 
import { X, Download } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

const UserListPage = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownloadClick = () => {
    setAlertOpen(true);
  };

  const handleDownloadImage = async () => {
    if (certificateRef.current) {
      try {
        const canvas = await html2canvas(certificateRef.current, {
          useCORS: true, // Allows loading images from other domains.
        });
        const dataURL = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'certificate.jpg';
        link.click();
      } catch (error) {
        console.error('Error capturing the certificate:', error);
      }
    }
    setAlertOpen(false);
  };

  return (
    <div className="">
      <Card className="tw-w-auto tw-h-auto lg:tw-w-[800px] lg:tw-h-[660px]">
        <CardContent>
          <div className="tw-flex sm:tw-flex-nowrap tw-justify-between tw-items-center tw-p-4">
            <div>
              <CardTitle>Data Science Courses completed</CardTitle>
            </div>
            <div className="tw-flex-shrink-0">
              <Button className="tw-mt-4 tw-bg-blue-700 tw-h-[31px] tw-w-[120px]" variant="outline" onClick={handleDownloadClick}>
                Download <Download className="tw-w-3 tw-h-6 tw-ml-1" />
              </Button>
            </div>
          </div>
          <Card className='tw-w-full lg:tw-w-[750px] lg:tw-h-[550px] tw-h-auto tw-mt-4 '>
            <CardContent className=" tw-justify-center tw-items-center !tw-p-0" ref={certificateRef}>
              <div className="tw-w-full md:tw-w-4/5 tw-text-center">
                {/* Certificate content */}
                <img src="/certi.png" className='tw-mx-auto lg:tw-ml-[580px] tw-mr-[-5px] tw-mt-4 ' />
                <div className="tw-flex tw-justify-between tw-mt-4">
                  <img src="/123456.png" className="tw-h-[150px] tw-w-[220px]" />
                  <div className="tw-flex tw-flex-col tw-items-center lg:tw-mr-[120px]  tw-mr-[120px]  tw-mt-5">
                    <span className="tw-text-black tw-text-4xl   tw-font-bold  ">CERTIFICATE</span>
                    <br />
                    <span className='lg:tw-ml-[-99px] lg:tw-mt-[-9px]  tw-ml-[-99px]  '>OF COMPLETION</span>
                  </div>
                </div>
                </div>
                <div  className=' lg:tw-ml-[240px] tw-ml-[160px]'> 
                <div className='tw-mt-2 tw-text-xs tw-font-bold'>
                  THIS IS TO CERTIFY THAT 
                </div>
                <div className='tw-mt-2 tw-text-blue-900 tw-text-3xl tw-font-bold'>
                  Jone Don
                </div>
                <hr className="tw-my-4 tw-border-t-3 tw-border-yellow-600 lg:tw-w-[300px] :tw-w-1/5 mx-auto" />


                <div className='lg:tw-text-sm tw-text-xs  tw-font-bold tw-text-justifytw-mr-4'>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.

                  </p>
                </div>
                <div className='tw-text-blue-900 tw-text-xl tw-font-bold tw-mt-5'>
                  Alex Samuel
                </div>
                {/* <div className='tw-text-xs tw-font-bold'> */}
                  <div className='tw-text-xs tw-font-bold'>Chief Executive Officer</div>
                  <div className='tw-text-xs tw-font-bold'>Company Name</div>
                  <div className="tw-mt-[7px]   tw-font-bold  lg:tw-ml-[290px]  tw-ml-auto  ">
                    Date DD Month 20xx
                  </div>
                {/* </div> */}
                <div className='tw-flex tw-justify-between '>
                  <img src="/dots.jpg" className="lg:tw-h-[150px] lg:tw-w-[200px]  tw-h-[200px] tw-w-[100px] lg:tw-ml-[-240px]  tw-ml-[-150px] tw-mt-[-150px]   lg:tw-mt-[-160px]" />
                  <img src="/logoedu1.png" className="tw-h-[100px] tw-w-[50px]  lg:tw-h-[225px] lg:tw-w-[300px] tw-opacity-10  tw-mt-[-59px] lg:tw-mt-[-230px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent className="tw-w-4/5 lg:tw-w-[350px] lg:tw-h-[151px] tw-flex tw-flex-col tw-justify-center tw-items-center">
          <div className="tw-absolute tw-top-0 tw-right-0 tw-p-2">
            <AlertDialogCancel className="!tw-ring-[-2] hover:!tw-bg-none">
              <X className="tw-w-[15px] tw-h-[15px]  tw-box-border-none" />
            </AlertDialogCancel>
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle className="tw-text-center tw-mb-[-2]">
              Click on the button below to <br />
              download the certificate
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter className="tw-flex tw-justify-center tw-items-center tw-w-40 tw-h-[40px]">
            <AlertDialogAction onClick={handleDownloadImage} className="tw-mt-auto">
              Get JPG
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default UserListPage;