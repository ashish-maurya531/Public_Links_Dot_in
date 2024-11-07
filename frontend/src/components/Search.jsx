





// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Filter, X, Calendar } from 'lucide-react';

// const Search = ({ onSearch, onFilter, activeFilter, onClearFilter }) => {
//   const [messageId, setMessageId] = useState('');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [customDate, setCustomDate] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     onSearch(messageId);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       onSearch(messageId);
//     }
//   };

//   const handleFilter = (option) => {
//     if (option === 'custom') {
//       setShowDatePicker(true);
//     } else {
//       onFilter(option);
//       setShowDatePicker(false);
//     }
//   };

//   const handleCustomDateChange = (date) => {
//     setCustomDate(date);
//     onFilter('custom', date);
//     setShowDatePicker(false);
//   };

//   const clearSearch = () => {
//     setMessageId('');
//     onSearch('');
//   };

//   const filterOptions = ['1 hr ago', '6 hrs ago', '1 day', '1 week', '1 month', '1 year', 'custom'];

//   return (
//     <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md mb-4">
//       <form onSubmit={handleSearch} className="flex items-center">
//         <div className="relative flex-grow">
//           <input
//             type="text"
//             placeholder="Enter message ID"
//             className="w-full p-2 pr-8 rounded-md border-none focus:ring-0 focus:outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//             value={messageId}
//             onChange={(e) => setMessageId(e.target.value)}
//             onKeyPress={handleKeyPress}
//           />
//           {messageId && (
//             <button
//               type="button"
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               onClick={clearSearch}
//             >
//               <X size={18} />
//             </button>
//           )}
//         </div>
//         <motion.button
//           type="submit"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-purple-600 text-white px-4 py-2 rounded-md ml-2"
//         >
//           Search
//         </motion.button>
//         <div className="relative ml-2">
//           <motion.button
//             type="button"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`p-2 rounded-md ${activeFilter ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             <Filter size={20} />
//           </motion.button>
//           <AnimatePresence>
//             {isDropdownOpen && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10"
//               >
//                 {filterOptions.map((option) => (
//                   <React.Fragment key={option}>
//                     {option === 'custom' && showDatePicker ? (
//                       <div className="p-2 border-b border-gray-200 dark:border-gray-700">
//                         <DatePicker
//                           selected={customDate}
//                           onChange={handleCustomDateChange}
//                           className="w-full p-2 rounded-md border-none focus:ring-0 focus:outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                           dateFormat="MM/dd/yyyy"
//                           placeholderText="Select date..."
//                           popperClassName="react-datepicker-left"
//                         />
//                       </div>
//                     ) : (
//                       <button
//                         className={`flex items-center w-full text-left px-4 py-2 text-sm ${
//                           activeFilter === option
//                             ? 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200'
//                             : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
//                         }`}
//                         onClick={() => handleFilter(option)}
//                       >
//                         {option === 'custom' && <Calendar size={16} className="mr-2" />}
//                         {option}
//                       </button>
//                     )}
//                   </React.Fragment>
//                 ))}
//                 {activeFilter && (
//                   <button
//                     className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
//                     onClick={() => {
//                       onClearFilter();
//                       setIsDropdownOpen(false);
//                       setShowDatePicker(false);
//                     }}
//                   >
//                     Clear Filter
//                   </button>
//                 )}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Search;








// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import DatePicker from 'react-datepicker';
// // import 'react-datepicker/dist/react-datepicker.css';
// // import { Filter, X, Calendar } from 'lucide-react';

// // const Search = ({ onSearch, onFilter, activeFilter, onClearFilter }) => {
// //   const [messageId, setMessageId] = useState('');
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [customDate, setCustomDate] = useState(null);
// //   const [showDatePicker, setShowDatePicker] = useState(false);

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     onSearch(messageId);
// //   };

// //   const handleKeyPress = (e) => {
// //     if (e.key === 'Enter') {
// //       onSearch(messageId);
// //     }
// //   };

// //   const handleFilter = (option) => {
// //     if (option === 'custom') {
// //       setShowDatePicker(true);
// //     } else {
// //       onFilter(option);
// //       setIsDropdownOpen(false);
// //       setShowDatePicker(false);
// //     }
// //   };

// //   const handleCustomDateChange = (date) => {
// //     setCustomDate(date);
// //     onFilter('custom', date);
// //     setShowDatePicker(false);
// //     setIsDropdownOpen(false);
// //   };

// //   const clearSearch = () => {
// //     setMessageId('');
// //     onSearch('');
// //     onClearFilter();
// //   };

// //   const filterOptions = ['1 hr ago', '6 hrs ago', '1 day', '1 week', '1 month', '1 year', 'custom'];

// //   return (
// //     <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md mb-4">
// //       <form onSubmit={handleSearch} className="flex items-center">
// //         <div className="relative flex-grow">
// //           <input
// //             type="text"
// //             placeholder="Enter message ID"
// //             className="w-full p-2 pr-8 rounded-md border-none focus:ring-0 focus:outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
// //             value={messageId}
// //             onChange={(e) => setMessageId(e.target.value)}
// //             onKeyPress={handleKeyPress}
// //           />
// //           {messageId && (
// //             <button
// //               type="button"
// //               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
// //               onClick={clearSearch}
// //             >
// //               <X size={18} />
// //             </button>
// //           )}
// //         </div>
// //         <motion.button
// //           type="submit"
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           className="bg-purple-600 text-white px-4 py-2 rounded-md ml-2"
// //         >
// //           Search
// //         </motion.button>
// //         <div className="relative ml-2">
// //           <motion.button
// //             type="button"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className={`p-2 rounded-md ${activeFilter ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
// //             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// //           >
// //             <Filter size={20} />
// //           </motion.button>
// //           <AnimatePresence>
// //             {isDropdownOpen && (
// //               <motion.div
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -10 }}
// //                 className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10"
// //               >
// //                 {filterOptions.map((option) => (
// //                   <React.Fragment key={option}>
// //                     {option === 'custom' && showDatePicker ? (
// //                       <div className="p-2 border-b border-gray-200 dark:border-gray-700">
// //                         <DatePicker
// //                           selected={customDate}
// //                           onChange={handleCustomDateChange}
// //                           className="w-full p-2 rounded-md border-none focus:ring-0 focus:outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
// //                           dateFormat="MM/dd/yyyy"
// //                           placeholderText="Select date..."
// //                           popperClassName="react-datepicker-left"
// //                           popperModifiers={[
// //                             {
// //                               name: 'offset',
// //                               options: {
// //                                 offset: [0, 8],
// //                               },
// //                             },
// //                           ]}
// //                         />
// //                       </div>
// //                     ) : (
// //                       <button
// //                         className={`flex items-center w-full text-left px-4 py-2 text-sm ${
// //                           activeFilter === option
// //                             ? 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200'
// //                             : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
// //                         }`}
// //                         onClick={() => handleFilter(option)}
// //                       >
// //                         {option === 'custom' && <Calendar size={16} className="mr-2" />}
// //                         {option}
// //                       </button>
// //                     )}
// //                   </React.Fragment>
// //                 ))}
// //                 {activeFilter && (
// //                   <button
// //                     className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
// //                     onClick={() => {
// //                       onClearFilter();
// //                       setIsDropdownOpen(false);
// //                       setShowDatePicker(false);
// //                     }}
// //                   >
// //                     Clear Filter
// //                   </button>
// //                 )}
// //               </motion.div>
// //             )}
// //           </AnimatePresence>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Search;


















// import React, { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { format } from "date-fns"
// import { Calendar as CalendarIcon, Search as SearchIcon, Filter as FilterIcon } from "lucide-react"

// const Search = ({ onSearch, onFilter, activeFilter, onClearFilter }) => {
//   const [searchId, setSearchId] = useState('')
//   const [filterType, setFilterType] = useState(activeFilter || '')
//   const [startDate, setStartDate] = useState(null)
//   const [endDate, setEndDate] = useState(null)

//   const handleSearch = (e) => {
//     e.preventDefault()
//     if (searchId.trim()) {
//       onSearch(searchId)
//     }
//   }

//   const handleFilterChange = (value) => {
//     setFilterType(value)
//     if (value === 'custom') {
//       // Wait for date selection
//       return
//     }
//     onFilter(value)
//   }

//   const handleDateSelect = () => {
//     if (startDate && endDate) {
//       onFilter('custom', { startDate, endDate })
//     }
//   }

//   const handleClear = () => {
//     setSearchId('')
//     setFilterType('')
//     setStartDate(null)
//     setEndDate(null)
//     onClearFilter()
//   }

//   return (
//     <div className="p-4 space-y-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
//       <form onSubmit={handleSearch} className="flex gap-2">
//         <Input
//           type="text"
//           placeholder="Enter message ID..."
//           value={searchId}
//           onChange={(e) => setSearchId(e.target.value)}
//           className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//         />
//         <Button type="submit" variant="secondary" className="bg-purple-600 hover:bg-purple-700 text-white">
//           <SearchIcon className="h-4 w-4 mr-2" />
//           Search
//         </Button>
//       </form>

//       <div className="flex gap-2 items-center">
//         <Select value={filterType} onValueChange={handleFilterChange}>
//           <SelectTrigger className="w-[200px] bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
//             <FilterIcon className="h-4 w-4 mr-2" />
//             <SelectValue placeholder="Filter" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="1hour">Last hour</SelectItem>
//             <SelectItem value="6hours">Last 6 hours</SelectItem>
//             <SelectItem value="1day">Last 24 hours</SelectItem>
//             <SelectItem value="1week">Last week</SelectItem>
//             <SelectItem value="1month">Last month</SelectItem>
//             <SelectItem value="1year">Last year</SelectItem>
//             <SelectItem value="custom">Custom range</SelectItem>
//           </SelectContent>
//         </Select>

//         {filterType === 'custom' && (
//           <div className="flex gap-2">
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button variant="outline" className="w-[200px] justify-start text-left font-normal bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
//                   <CalendarIcon className="mr-2 h-4 w-4" />
//                   {startDate ? format(startDate, "PPP") : "Start date"}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0 bg-white dark:bg-gray-800">
//                 <Calendar
//                   mode="single"
//                   selected={startDate}
//                   onSelect={setStartDate}
//                   initialFocus
//                   className="bg-white dark:bg-gray-800"
//                 />
//               </PopoverContent>
//             </Popover>

//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button variant="outline" className="w-[200px] justify-start text-left font-normal bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
//                   <CalendarIcon className="mr-2 h-4 w-4" />
//                   {endDate ? format(endDate, "PPP") : "End date"}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0 bg-white dark:bg-gray-800">
//                 <Calendar
//                   mode="single"
//                   selected={endDate}
//                   onSelect={setEndDate}
//                   initialFocus
//                   className="bg-white dark:bg-gray-800"
//                 />
//               </PopoverContent>
//             </Popover>

//             <Button 
//               onClick={handleDateSelect} 
//               disabled={!startDate || !endDate}
//               className="bg-purple-600 hover:bg-purple-700 text-white"
//             >
//               Apply
//             </Button>
//           </div>
//         )}

//         {(filterType || searchId) && (
//           <Button variant="ghost" onClick={handleClear} className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
//             Clear
//           </Button>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Search












// import React, { useState } from 'react'
// import {
//   Calendar as CalendarIcon, Search as SearchIcon, Filter as FilterIcon
// } from "lucide-react"
// import { format } from "date-fns"

// const Search = ({ onSearch, onFilter, activeFilter, onClearFilter }) => {
//   const [searchId, setSearchId] = useState('')
//   const [filterType, setFilterType] = useState(activeFilter || '')
//   const [startDate, setStartDate] = useState(null)
//   const [endDate, setEndDate] = useState(null)
//   const [showStartDatePicker, setShowStartDatePicker] = useState(false);
//   const [showEndDatePicker, setShowEndDatePicker] = useState(false);

//   const handleSearch = (e) => {
//     e.preventDefault()
//     if (searchId.trim()) {
//       onSearch(searchId)
//     }
//   }

//   const handleFilterChange = (value) => {
//     setFilterType(value)
//     if (value === 'custom') {
//       // Wait for date selection
//       return
//     }
//     onFilter(value)
//   }

//   const handleDateSelect = () => {
//     if (startDate && endDate) {
//       onFilter('custom', { startDate, endDate })
//     }
//   }

//   const handleClear = () => {
//     setSearchId('')
//     setFilterType('')
//     setStartDate(null)
//     setEndDate(null)
//     onClearFilter()
//   }

//   return (
//     <div className="p-4 space-y-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
//       <form onSubmit={handleSearch} className="flex gap-2">
//         <input
//           type="text"
//           placeholder="Enter message ID..."
//           value={searchId}
//           onChange={(e) => setSearchId(e.target.value)}
//           className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
//         >
//           <SearchIcon className="h-4 w-4 mr-2 inline" />
//           Search
//         </button>
//       </form>

//       <div className="flex gap-2 items-center">
//         <select
//           value={filterType}
//           onChange={(e) => handleFilterChange(e.target.value)}
//           className="w-[200px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//         >
//           <option value="">Filter</option>
//           <option value="1hour">Last hour</option>
//           <option value="6hours">Last 6 hours</option>
//           <option value="1day">Last 24 hours</option>
//           <option value="1week">Last week</option>
//           <option value="1month">Last month</option>
//           <option value="1year">Last year</option>
//           <option value="custom">Custom range</option>
//         </select>

//         {filterType === 'custom' && (
//           <div className="flex gap-2">
//             <div onClick={() => setShowStartDatePicker(!showStartDatePicker)}>
//               <button
//                 className="w-[200px] justify-start text-left font-normal bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//               >
//                 <CalendarIcon className="mr-2 h-4 w-4" />
//                 {startDate ? format(startDate, "PPP") : "Start date"}
//               </button>
//               {showStartDatePicker && (
//                 <div className="absolute mt-2 py-2 px-4 bg-white rounded-md shadow-lg">
//                   {/* Replace with your custom date picker or library */}
//                   <p>Custom Date Picker for Start Date</p>
//                 </div>
//               )}
//             </div>

//             <div onClick={() => setShowEndDatePicker(!showEndDatePicker)}>
//               <button
//                 className="w-[200px] justify-start text-left font-normal bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//               >
//                 <CalendarIcon className="mr-2 h-4 w-4" />
//                 {endDate ? format(endDate, "PPP") : "End date"}
//               </button>
//               {showEndDatePicker && (
//                 <div className="absolute mt-2 py-2 px-4 bg-white rounded-md shadow-lg">
//                   {/* Replace with your custom date picker or library */}
//                   <p>Custom Date Picker for End Date</p>
//                 </div>
//               )}
//             </div>

//             <button
//               onClick={handleDateSelect}
//               disabled={!startDate || !endDate}
//               className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
//             >
//               Apply
//             </button>
//           </div>
//         )}

//         {(filterType || searchId) && (
//           <button
//             onClick={handleClear}
//             className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//           >
//             Clear
//           </button>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Search;











// import React, { useState } from 'react'
// import { Search as SearchIcon } from "lucide-react"

// const Search = ({ onSearch, onClearSearch, isSearchActive }) => {
//   const [searchId, setSearchId] = useState('')

//   const handleSearch = (e) => {
//     e.preventDefault()
//     if (searchId.trim()) {
//       onSearch(searchId)
//     }
//   }

//   const handleClear = () => {
//     setSearchId('')
//     onClearSearch()
//   }

//   return (
//     <div className="p-4 space-y-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
//       <form onSubmit={handleSearch} className="flex gap-2">
//         <input
//           type="text"
//           placeholder="Enter message ID..."
//           value={searchId}
//           onChange={(e) => setSearchId(e.target.value)}
//           className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
//         >
//           <SearchIcon className="h-4 w-4 mr-2 inline" />
//           Search
//         </button>
//       </form>

//       {isSearchActive && (
//         <button
//           onClick={handleClear}
//           className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//         >
//           Clear Search
//         </button>
//       )}
//     </div>
//   )
// }

// export default Search;













// import React, { useState } from 'react'
// import { Search as SearchIcon, X as XIcon } from "lucide-react"

// const Search = ({ onSearch, onClearSearch, isSearchActive }) => {
//   const [searchId, setSearchId] = useState('')

//   const handleSearch = (e) => {
//     e.preventDefault()
//     if (searchId.trim()) {
//       onSearch(searchId.trim())
//     }
//   }

//   const handleClear = () => {
//     setSearchId('')
//     onClearSearch()
//   }

//   return (
//     <div className="p-4 space-y-4 bg-gray-800 shadow-md rounded-lg">
//       <form onSubmit={handleSearch} className="flex gap-2">
//         <div className="relative flex-1">
//           <input
//             type="text"
//             placeholder="Enter message ID..."
//             value={searchId}
//             onChange={(e) => setSearchId(e.target.value)}
//             className="w-full px-3 py-2 pr-10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-gray-200 placeholder-gray-400"
//           />
//           {searchId && (
//             <button
//               type="button"
//               onClick={handleClear}
//               className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 p-1"
//             >
//               <XIcon className="h-4 w-4" />
//             </button>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2"
//         >
//           <SearchIcon className="h-4 w-4" />
//           Search
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Search









import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, X as CloseIcon } from 'lucide-react';

const Search = ({ onSearch, onClearSearch, isSearchActive }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onClearSearch();
  };

  return (
    <div className="bg-purple-100 dark:bg-gray-900 px-0 py-2 flex items-center justify-evenly w-full">
      <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-4 py-2 w-full ml-3 mr-3 max-w-md shadow-md">
        <SearchIcon className="text-gray-500 dark:text-gray-400 mr-2" />
        <input
          type="text"
          className="flex-grow bg-transparent text-gray-800 dark:text-gray-200 focus:ring-0 focus:outline-none"
          placeholder="Search by link ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        {isSearchActive && (
          <motion.button
            onClick={handleClear}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <CloseIcon className="w-5 h-5" />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Search;