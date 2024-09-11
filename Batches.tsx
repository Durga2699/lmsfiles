import React, { useState,useEffect } from 'react';
import { Search, Flame } from 'lucide-react';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const UserListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentView, setCurrentView] = useState('list');
  const [showExportOptions, setShowExportOptions] = useState(false);
   const itemsPerPage = 5;
// Sample student data
 const students = [
    { id: 1, name: 'Scarlett Johansson', dailyLogin: 3, email: 'scarlettjohansson@gmail.com', contact: '+919562358844', badges: { a: 1, b: 1, c: 1 } },
    { id: 2, name: 'Chris Hemsworth', dailyLogin: 5, email: 'chrishemsworth@gmail.com', contact: '+919562358845', badges: { a: 1, b: 1, c: 1 } },
    { id: 3, name: 'Robert Downey Jr.', dailyLogin: 4, email: 'robertdowneyjr@gmail.com', contact: '+919562358846', badges: { a: 1, b: 1, c: 1 } },
    { id: 4, name: 'Natalie Portman', dailyLogin: 2, email: 'natalieportman@gmail.com', contact: '+919562358847', badges: { a: 1, b: 1, c: 1 } },
    { id: 5, name: 'Tom Hiddleston', dailyLogin: 3, email: 'tomhiddleston@gmail.com', contact: '+919562358848', badges: { a: 1, b: 1, c: 1 } },
    { id: 6, name: 'Mark Ruffalo', dailyLogin: 6, email: 'markruffalo@gmail.com', contact: '+919562358849', badges: { a: 1, b: 1, c: 1 } },
    { id: 7, name: 'Jeremy Renner', dailyLogin: 1, email: 'jeremyrenner@gmail.com', contact: '+919562358850', badges: { a: 1, b: 1, c: 1 } },
    { id: 8, name: 'Paul Rudd', dailyLogin: 7, email: 'paulrudd@gmail.com', contact: '+919562358851', badges: { a: 1, b: 1, c: 1 } },
    { id: 9, name: 'Benedict Cumberbatch', dailyLogin: 8, email: 'benedictcumberbatch@gmail.com', contact: '+919562358852', badges: { a: 1, b: 1, c: 1 } },
    { id: 10, name: 'Elizabeth Olsen', dailyLogin: 3, email: 'elizabetholsen@gmail.com', contact: '+919562358853', badges: { a: 1, b: 1, c: 1 } },
    { id: 11, name: 'Tom Holland', dailyLogin: 2, email: 'tomholland@gmail.com', contact: '+919562358854', badges: { a: 1, b: 1, c: 1 } },
    { id: 12, name: 'Zendaya', dailyLogin: 4, email: 'zendaya@gmail.com', contact: '+919562358855', badges: { a: 1, b: 1, c: 1 } },
    { id: 13, name: 'Chadwick Boseman', dailyLogin: 5, email: 'chadwickboseman@gmail.com', contact: '+919562358856', badges: { a: 1, b: 1, c: 1 } },
    { id: 14, name: 'Michael B. Jordan', dailyLogin: 3, email: 'michaelbjordan@gmail.com', contact: '+919562358857', badges: { a: 1, b: 1, c: 1 } },
    { id: 15, name: 'Danai Gurira', dailyLogin: 2, email: 'danaigurira@gmail.com', contact: '+919562358858', badges: { a: 1, b: 1, c: 1 } },
    { id: 16, name: 'Letitia Wright', dailyLogin: 6, email: 'letitiawright@gmail.com', contact: '+919562358859', badges: { a: 1, b: 1, c: 1 } },
    { id: 17, name: 'Lupita Nyong\'o', dailyLogin: 4, email: 'lupitanyongo@gmail.com', contact: '+919562358860', badges: { a: 1, b: 1, c: 1 } },
    { id: 18, name: 'Tom Hardy', dailyLogin: 3, email: 'tomhardy@gmail.com', contact: '+919562358861', badges: { a: 1, b: 1, c: 1 } },
    { id: 19, name: 'Javier Bardem', dailyLogin: 7, email: 'javierbardem@gmail.com', contact: '+919562358862', badges: { a: 1, b: 1, c: 1 } },
    { id: 20, name: 'Charlize Theron', dailyLogin: 5, email: 'charlizetheron@gmail.com', contact: '+919562358863', badges: { a: 1, b: 1, c: 1 } },
  ];
  // Filtered students based on search query
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );
// Reset page to 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const paginatedData = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
 const handlePageChange = (page) => {
    setCurrentPage(page);
  };
return (
    <div>
      {/* Search and Filter Section */}
      <div className="tw-flex tw-items-center tw-space-x-4 tw-mb-6">
      <div>
          <Select>
            <SelectTrigger className="tw-w-[120px] tw-h-[30px] tw-rounded-[6px] tw-text-blue-930 tw-border tw-border-blue-950 tw-bg-white ">
              <SelectValue placeholder="Status" className='tw-text-[#1D1F71]' />
            </SelectTrigger>
            <SelectContent >
            <SelectItem value="active">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='tw-w-[304px] tw-h-[30px] tw-rounded-[6px]  tw-flex tw-items-center tw-relative '>
          <Search size={18} className='tw-absolute tw-left-2 tw-text-[#1D1F71] tw-pointer-events-none' />
          <Input
            type="text"
            placeholder="Search Students"
            className="tw-h-[30px] tw-w-full tw-pl-8 tw-text-[#1d1f71] tw-border tw-border-blue-950  tw-bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
{/* Table Section */}
      <Card className="tw-mt-6 tw-w-[1150px] tw-h-[454px]">
        <Table>
          <TableHeader className='tw-text-bold tw-text-black'>
            <TableRow className='tw-bg-[#FFDF9B] tw-border-b-0  tw-text-black tw-text-semibold"> '>
              <TableHead className="tw-border-b-0 tw-text-[#000000] tw-font-semibold tw-w-[9%]">S.No</TableHead>
              <TableHead className="tw-border-b-0 tw-text-[#000000] tw-font-semibold tw-w-[24%]">Student Name</TableHead>
              <TableHead className="tw-border-b-0 tw-text-[#000000] tw-font-semibold tw-w-[20%]">Daily Login</TableHead>
              <TableHead className="tw-border-b-0 tw-text-[#000000]  tw-font-semibold tw-w-[31%]">Email Address</TableHead>
              <TableHead className="tw-border-b-0 tw-text-[#000000]  tw-font-semibold tw-w-[20%]">Contact</TableHead>
              <TableHead className="tw-border-b-0 tw-text-[#000000] tw-font-semibold tw-w-[20%]">Badges Gained</TableHead>
            </TableRow>
          </TableHeader>
     <TableBody>
            {paginatedData.map((student, index) => (
              <TableRow key={student.id} className="tw-border-t-0">
                <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[5%] tw-h-[70px]">
              {index + 1 + (currentPage - 1) * itemsPerPage}
             </TableCell>
                <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[20%] tw-h-[80px] tw-text-[#1D1F71]">{student.name}</TableCell>
                <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[10%]">
                  <div className="tw-flex tw-items-center">
                    <Flame className="tw-w-[15px] tw-h-[29px] tw-text-orange-500" />
                    {student.dailyLogin}
                    <span role="img" aria-label="clap" className="tw-ml-2">👏</span>
                  </div>
                </TableCell>
                <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[25%] tw-text-[#1D1F71]">{student.email}</TableCell>
                <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[20%]">{student.contact}</TableCell>
                <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[20%]">
                  <div className="tw-flex tw-space-x-2">
                    {student.badges.a === 1 && (
                      <div className="tw-flex tw-items-center tw-bg-[#FFF2DA] tw-w-[63px] tw-h-[17px] tw-rounded-[6px] tw-justify-center  tw-text-blue-950">
                        <img src="/public/1.png" alt="Badge A" className="tw-w-6 tw-h-5 tw-mr-1" />
                        <span className="tw-text-xs tw-text-black">01</span>
                      </div>
                    )}
                    {student.badges.b === 1 && (
                      <div className="tw-flex tw-items-center tw-bg-[#FFF2DA] tw-w-[63px] tw-h-[17px] tw-rounded-[6px] tw-justify-center tw-text-blue-900">
                        <img src="/public/2.png" alt="Badge B" className="tw-w-6 tw-h-5 tw-mr-1" />
                        <span className="tw-text-xs tw-text-black">01</span>
                      </div>
                    )}
                    {student.badges.c === 1 && (
                      <div className="tw-flex tw-items-center tw-bg-[#FFF2DA] tw-w-[63px] tw-h-[17px] tw-rounded-[6px] tw-justify-center tw-text-blue-900">
                        <img src="/public/3.png" alt="Badge C" className="tw-w-6 tw-h-5 tw-mr-1" />
                        <span className="tw-text-xs tw-text-black">01</span>
                      </div>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
{/* Pagination Section */}
      <div className="tw-flex tw-justify-between tw-items-center tw-w-[1157px] tw-h-[45px] tw-top-[409px] tw-left-[2px]  tw-gap-[711px] tw-opacity-100">
      <div className="tw-text-gray-700 tw-w-[61px] tw-h-[30px] tw-gap-[25px]">
    <span className="tw-mr-4">Page</span>
    {currentPage}
  </div>
  <div className="tw-flex tw-items-center tw-space-x-2">
    <Pagination className="tw-flex tw-items-center tw-space-x-2">
      <PaginationContent className="tw-flex tw-items-center tw-space-x-1">
        <PaginationItem>
          <PaginationPrevious
            className="tw-px-3 tw-py-1"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}> &lt; Previous</PaginationPrevious>
        </PaginationItem>
       <PaginationItem>
          <PaginationNext
            className="tw-px-3 tw-py-1"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
            Next &gt;
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </div>
</div>
</div>
  );
}

export default UserListPage;