import { useState } from 'react';

const Refral = () => {
    const data = {
        withdrawal: [
            ['#00254582', 121233123, '21'],
            ['#00124582', 121233123, '21'],
            ['#00254582', 121233123, '21'],
            ['#00124582', 121233123, '21'],
            ['#00124582', 121233123, '21'],
            ['#00254582', 121233123, '21'],
            ['#00124582', 121233123, '21'],
            ['#00254582', 121233123, '21'],
            ['#00124582', 121233123, '21'],
            ['#00124582', 121233123, '21'],
            ['#00254582', 121233123, '21'],
            ['#00124582', 121233123, '21'],
            ['#00254582', 121233123, '21'],
            ['#00124582', 121233123, '21'],
            ['#00124582', 121233123, '21'],
            ['#00254582', 121233123, '21'],
            ['#00124582', 121233123, '21'],
            ['#00254582', 121233123, '21'],
            ['#00124582', 121233123, '21'],
            ['#00124582', 121233123, '21'],
            // more data...
        ],
        Refral: [
            ['#00124588962', 266, '21', 'pass', 'approved'],
            ['#00254588962', 25, '21', 'pass', 'approved'],
            ['#00124588962', 25, '21', 'pass', 'approved'],
            ['#00254588962', 25, '21', 'pass', 'approved'],
            ['#00124588962', 266, '21', 'pass', 'approved'],
            ['#00124588962', 267, '21', 'pass', 'approved'],
            ['#00254588962', 25, '21', 'pass', 'approved'],
            ['#00124588962', 25, '21', 'pass', 'approved'],
            ['#00254588962', 25, '21', 'pass', 'approved'],
            ['#00124588962', 266, '21', 'pass', 'approved'],
            ['#00124588962', 268, '21', 'pass', 'approved'],
            ['#00254588962', 25, '21', 'pass', 'approved'],
            ['#00124588962', 25, '21', 'pass', 'approved'],
            ['#00254588962', 25, '21', 'pass', 'approved'],
            ['#00124588962', 266, '21', 'pass', 'approved'],
            ['#00124588962', 266, '21', 'pass', 'approved'],
            ['#00124588962', 268, '21', 'pass', 'approved'],
            ['#00254588962', 25, '21', 'pass', 'approved'],
            ['#00124588962', 25, '21', 'pass', 'approved'],
            ['#00254588962', 25, '21', 'pass', 'approved'],
            ['#00124588962', 266, '21', 'pass', 'approved'],
            ['#00124588962', 266, '21', 'pass', 'approved'],
            ['#00124588962', 268, '21', 'pass', 'approved'],
            ['#00254588962', 25, '21', 'pass', 'approved'],
            ['#00124588962', 25, '21', 'pass', 'approved'],
            ['#00254588962', 25, '21', 'pass', 'approved'],
            ['#00124588962', 266, '21', 'pass', 'approved'],
            ['#00124588962', 266, '21', 'pass', 'approved'],
            ['#00124588962', 268, '21', 'pass', 'approved'],
            ['#00254588962', 25, '21', 'pass', 'approved'],
            ['#00124588962', 25, '21', 'pass', 'approved'],
            ['#00254588962', 25, '21', 'pass', 'approved'],
            ['#00124588962', 266, '21', 'pass', 'approved'],

            // more data...
        ],
    };

    const [currentData, setCurrentData] = useState('withdrawal');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(data[currentData].length / itemsPerPage);

    const getCurrentPageData = () => {
        const dataset = data[currentData];
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return dataset.slice(startIndex, endIndex);
    };

    const handleSwitchData = (type) => {
        setCurrentData(type);
        setCurrentPage(1);
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const createPagination = () => {
        const pageNumbers = [];
        const visibleRange = 3;

        pageNumbers.push(1);

        if (totalPages <= visibleRange) {
            for (let i = 2; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            let startRange = Math.max(2, currentPage - 1);
            let endRange = Math.min(totalPages - 1, currentPage + 1);

            if (startRange > 2) {
                pageNumbers.push('...');
            }

            for (let i = startRange; i <= endRange; i++) {
                pageNumbers.push(i);
            }

            if (endRange < totalPages - 1) {
                pageNumbers.push('...');
            }

            if (totalPages > 1) {
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    const currentPageData = getCurrentPageData();

    return (
        <div id="ref-main" className=" my-10 ">
            <div className="mb-4  space-x-5 px-20 tablet:px-5 tablet:space-x-2 ">
                <button
                    onClick={() => handleSwitchData('withdrawal')}
                    className={` px-3 py-1 
                     ${currentData === 'withdrawal' ? 'bg-yellow-500' : 'bg-gray-700'}
                      text-white rounded-3xl `}
                >
                    Withdrawal
                </button>
                <button
                    onClick={() => handleSwitchData('Refral')}
                    className={`px-3 py-1
                     ${currentData === 'Refral' ? 'bg-yellow-500' : 'bg-gray-700'}
                      text-white rounded-3xl`}
                >
                    Referral
                </button>
            </div>
            <div className='px-20 tablet:px-5 ' >
                <div className="relative overflow-x-auto shadow-md  rounded-lg">
                    <table className="w-full text-sm text-left text-gray-300">
                        <thead className="text-xs text-gray-200 uppercase bg-gray-800">
                            <tr className='font-bold text-sm tracking-wider' >
                                <th scope="col" className="px-6 py-3 text-nowrap ">Sr no.</th>
                                <th scope="col" className="px-6 py-3">Code</th>
                                <th scope="col" className="px-6 py-3">Value</th>
                                <th scope="col" className="px-6 py-3">days</th>
                                {currentData === 'Refral' && (
                                    <>
                                        <th scope="col" className="px-6 py-3">Status</th>
                                        <th scope="col" className="px-6 py-3">Approval</th>
                                    </>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {currentPageData.map((row, index) => (
                                <>
                                    <tr
                                        key={index}
                                        className="bg-gray-950 border-b hover:bg-gray-800"
                                    >
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="px-6 py-4">{row[0]}</td>
                                        <td className="px-6 py-4 text-yellow-500 text-nowrap ">$ {row[1]}</td>
                                        <td className="  px-4 py-4"> <span className='bg-yellow-300 text-black px-6 py-1 rounded-3xl text-nowrap  ' >{row[2]} days</span> </td>
                                        {currentData === 'Refral' && (
                                            <>
                                                <td className="px-6 py-4">{row[3]}</td>
                                                <td className="px-6 py-4">{row[4]}</td>
                                            </>
                                        )}
                                    </tr>


                                </>

                            ))}
                        </tbody>
                    </table>

                </div>

                <nav className="flex gap-2 items-center justify-end pt-4" aria-label="Table navigation">
                    <button
                        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                        className="px-3 h-8 text-yellow-500 bg-gray-700 border-gray-600 rounded hover:text-white hover:bg-gray-600"
                        disabled={currentPage <= 1}
                    >
                        {"<<"}
                    </button>

                    <div className="inline-flex space-x-2 text-sm">
                        {createPagination().map((page, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageClick(page)}
                                className={`px-3 h-8 border border-gray-600 rounded ${currentPage === page ? 'bg-gray-500 text-yellow-500' : 'bg-gray-700 text-yellow-500 hover:text-white hover:bg-gray-600'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        className="px-3 h-8 text-yellow-500 bg-gray-700 border-gray-600 rounded hover:text-white hover:bg-gray-600"
                        disabled={currentPage >= totalPages}
                    >
                        {">>"}
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Refral;
