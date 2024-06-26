import React, { useState, ChangeEvent, useRef, useEffect, useCallback } from 'react';
import './table.scss';
import { IoFilterSharp } from 'react-icons/io5';
import Tag from '../tag/tag';
import { HiDotsVertical } from 'react-icons/hi';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { FaEye } from 'react-icons/fa6';
import { FiUserX } from 'react-icons/fi';
import { LuUserCheck } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

interface Column {
  header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  rowsPerPage?: number;
}

const Table: React.FC<TableProps> = ({ columns, data, rowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsLimit, setRowsLimit] = useState(rowsPerPage);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [filterIndex, setFilterIndex] = useState<number | null>(null);
  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>({});
  const tableDiv = useRef<HTMLDivElement | null>(null)

  const navigate = useNavigate()

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'Inactive':
        return 'status-inactive';
      case 'Pending':
        return 'status-pending';
      case 'Blacklisted':
        return 'status-blacklisted';
      default:
        return '';
    }
  };


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsLimitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRowsLimit(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleDropdownToggle = useCallback((index: number) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  }, [dropdownIndex]);

  const handleFilterToggle = (index: number) => {
    setFilterIndex(filterIndex === index ? null : index);
  };

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>, accessor: string) => {
    setFilterValues({
      ...filterValues,
      [accessor]: event.target.value,
    });
  };


  const handleFilterSubmit = (accessor: string) => {
    console.log(`Filter value for ${accessor}: ${filterValues[accessor]}`);
    setFilterIndex(null);
  };


  useEffect(() => {
    const target = tableDiv.current;
    const holder = ['filter-btn', 'filter-form active', 'filter-input']

    if (target) {
      target.addEventListener('click', (e) => {
        if(e.target) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
           const close = holder.includes(e.target.getAttribute('class'))
          if (!close) {
              setFilterIndex(null);
              handleDropdownToggle(-1)
          }
        }
      })
    }

  
    return () => target!.removeEventListener('click', () => null)
  }, [handleDropdownToggle])

  const startIndex = (currentPage - 1) * rowsLimit;
  const endIndex = startIndex + rowsLimit;
  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / rowsLimit);

  return (
    <div ref={tableDiv} className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={col.accessor}>
                {col.header}
                <span className="filter-icon" onClick={() => handleFilterToggle(index)}>
                  <IoFilterSharp />
                </span>
                {index + 1 === columns.length && <div className={'hide'}></div>}
                {filterIndex === index && (
                  <div className="filter-form active">
                    <input
                      type="text"
                      value={filterValues[col.accessor] || ''}
                      onChange={(event) => handleFilterChange(event, col.accessor)}
                      placeholder={`Filter by ${col.header}`}
                      className='filter-input'
                    />
                    <div className='filter-btn-cont'>
                      <button className='reset-btn' onClick={() => handleFilterSubmit(col.accessor)}>Reset</button>
                      <button className='filter-btn' onClick={() => handleFilterSubmit(col.accessor)}>Filter</button>
                    </div>
                  </div>
                )}
              </th>
            ))}
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row: never, rowIndex: number) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                col.accessor === "status" ? <td onClick={() => navigate(`/dashboard/${rowIndex}`)} key={col.accessor} >
                  <Tag value={getStatusClass(row[col.accessor])} text={row[col.accessor]} />
                </td>:<td onClick={() => navigate(`/dashboard/${rowIndex}`)} key={col.accessor}>{row[col.accessor]}</td>
              ))}
              <td className="dropdown-cell">
                <HiDotsVertical size={20} onClick={() => handleDropdownToggle(rowIndex)} />
                {dropdownIndex === rowIndex && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item">
                      <span className="icon">
                        <FaEye />
                      </span>
                      <span className='text'>View Details </span>
                    </div>
                    <div className="dropdown-item">
                      <span className="icon">
                      <FiUserX />
                      </span>
                      <span className='text'>Blacklist User </span>
                    </div>
                    <div className="dropdown-item">
                      <span className="icon">
                      <LuUserCheck />
                      </span>
                      <span className='text'>Activate User </span>
                    </div>``
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='next'
          >
            <PiCaretLeftBold />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={index + 1 === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='prev'
          >
            <PiCaretRightBold />
          </button>
        </div>
          
        <div className="rows-limit">
          <label htmlFor="rowsLimit">Showing</label>
          <select
            id="rowsLimit"
            value={rowsLimit}
            onChange={handleRowsLimitChange}
          >
            {[5, 10, 20].map((limit) => (
              <option key={limit} value={limit}>
                {limit}
              </option>
            ))}
          </select>
          <label className="rowsLimit2">out of {data.length}</label>
        </div>
      </div>
    </div>
  );
};

export default Table;


