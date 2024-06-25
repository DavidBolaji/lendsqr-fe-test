import React, {
  useState,
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import './table.scss';
import { IoFilterSharp } from 'react-icons/io5';
import Tag from '../tag/tag';
import { HiDotsVertical } from 'react-icons/hi';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { FaEye } from 'react-icons/fa6';
import { FiUserX } from 'react-icons/fi';
import { LuUserCheck } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../api/fetch-users';
import moment from 'moment';

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

const Table: React.FC<TableProps> = ({ columns, data, rowsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsLimit, setRowsLimit] = useState(rowsPerPage);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [filterIndex, setFilterIndex] = useState<number | null>(null);
  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>({});
  const [filteredData, setFilteredData] = useState<IUser[]>([]);
  const tableDiv = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // Memoized currentData and totalPages
  const startIndex = (currentPage - 1) * rowsLimit;
  const endIndex = startIndex + rowsLimit;
  const currentData = useMemo(() => {
    const dataToUse = filteredData.length > 0 ? filteredData : data;
    return dataToUse.slice(startIndex, endIndex);
  }, [data, filteredData, startIndex, endIndex]);

  const totalPages = useMemo(
    () =>
      Math.ceil(
        (filteredData.length > 0 ? filteredData.length : data.length) /
          rowsLimit,
      ),
    [data.length, filteredData, rowsLimit],
  );

  // Handle page change
  const handlePageChange = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  // Handle rows limit change
  const handleRowsLimitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRowsLimit(Number(event.target.value));
    setCurrentPage(1);
  };

  // Toggle dropdown
  const handleDropdownToggle = useCallback((index: number) => {
    setDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  // Toggle filter form
  const handleFilterToggle = useCallback((index: number) => {
    setFilterIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  // Handle filter change
  const handleFilterChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    accessor: string,
  ) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [accessor]: event.target.value,
    }));
  };

  // Handle filter submit
  const handleFilterSubmit = useCallback((accessor: string) => {
    const filterText = filterValues[accessor].toLowerCase();
    const filteredResult = data.filter((item: IUser) =>
      item[accessor as unknown as 'id'].toLowerCase().includes(filterText),
    );

    // Accumulate filters
    setFilteredData((prevFilteredData) => {
      // Check if there are already filters applied
      if (prevFilteredData.length > 0) {
        return prevFilteredData.filter((item) =>
          filteredResult.some((filteredItem: IUser) => item === filteredItem),
        );
      } else {
        return filteredResult;
      }
    });

    setCurrentPage(1); // Reset to the first page when applying a filter
  }, [data, filterValues]);

  // Handle reset filter
  const handleResetFilter = (accessor: string) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [accessor]: '',
    }));
    setFilteredData([]);
    setCurrentPage(1); // Reset to the first page when resetting a filter
  };

  // Handle outside click to close filter
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (tableDiv.current && !tableDiv.current.contains(e.target as Node)) {
        setFilterIndex(null);
        setDropdownIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  // Get page numbers for pagination
  const getPageNumbers = useCallback(() => {
    const pageNumbers = [];
    const totalNumbers = 3; // Display 5 page numbers at a time

    if (totalPages <= totalNumbers) {
      pageNumbers.push(
        ...Array(totalPages)
          .fill(null)
          .map((_, idx) => idx + 1),
      );
    } else {
      let startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(totalPages, startPage + totalNumbers - 1);

      // Adjust startPage when near the end
      if (endPage - startPage < totalNumbers - 1) {
        startPage = Math.max(1, endPage - totalNumbers + 1);
      }

      // Add ellipses if necessary
      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push('...');
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push('...');
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  }, [currentPage, totalPages]);

  return (
    <div ref={tableDiv} className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={col.accessor}>
                {col.header}
                <span
                  className="filter-icon"
                  onClick={() => handleFilterToggle(index)}
                >
                  <IoFilterSharp />
                </span>
                {filterIndex === index && (
                  <div className="filter-form active">
                    {col.accessor === 'status' ? (
                      <select
                        onChange={(event) =>
                          handleFilterChange(event, col.accessor)
                        }
                        className='table-select'
                      >
                        {['Inactive', 'Pending', 'Active', 'Blacklisted'].map(e => (
                          <option key={e} value={e}>{e}</option>
                        ))}
                      </select>
                    ) : col.accessor === 'dateJoined' ? (
                      <input
                        type="date"
                        value={filterValues[col.accessor] || ''}
                        onChange={(event) =>
                          handleFilterChange(event, col.accessor)
                        }
                        placeholder={`Filter by ${col.header}`}
                        className="filter-input"
                      />
                    ) : (
                      <input
                        type="text"
                        value={filterValues[col.accessor] || ''}
                        onChange={(event) =>
                          handleFilterChange(event, col.accessor)
                        }
                        placeholder={`Filter by ${col.header}`}
                        className="filter-input"
                      />
                    )}
                    <div className="filter-btn-cont">
                      <button
                        className="reset-btn"
                        onClick={() => handleResetFilter(col.accessor)}
                      >
                        Reset
                      </button>
                      <button
                        className="filter-btn"
                        onClick={() => handleFilterSubmit(col.accessor)}
                      >
                        Filter
                      </button>
                    </div>
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row: IUser, rowIndex: number) => (
            <tr key={rowIndex}>
              {columns.map((col) =>
                col.accessor === 'status' ? (
                  <td
                    onClick={() => navigate(`/dashboard/${row.id}`)}
                    key={col.accessor}
                  >
                    <Tag
                      value={getStatusClass(row[col.accessor])}
                      text={row[col.accessor]}
                    />
                  </td>
                ) : col.accessor === 'dateJoined' ? (
                  <td
                    onClick={() => navigate(`/dashboard/${row.id}`)}
                    key={col.accessor}
                  >
                    {moment(row[col.accessor]).format('MMM D, YYYY h:mm A')}
                  </td>
                ) : (
                  <td
                    onClick={() => navigate(`/dashboard/${row.id}`)}
                    key={col.accessor}
                  >
                    {row[col.accessor as unknown as 'id']}
                  </td>
                ),
              )}
              <td className="dropdown-cell">
                <HiDotsVertical
                  size={20}
                  onClick={() => handleDropdownToggle(rowIndex)}
                />
                {dropdownIndex === rowIndex && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item">
                      <span className="icon">
                        <FaEye />
                      </span>
                      <span className="text">View Details </span>
                    </div>
                    <div className="dropdown-item">
                      <span className="icon">
                        <FiUserX />
                      </span>
                      <span className="text">Blacklist User </span>
                    </div>
                    <div className="dropdown-item">
                      <span className="icon">
                        <LuUserCheck />
                      </span>
                      <span className="text">Activate User </span>
                    </div>
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
            className="prev"
          >
            <PiCaretLeftBold />
          </button>
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={page === currentPage ? 'active' : ''}
              onClick={() =>
                typeof page === 'number' ? handlePageChange(page) : null
              }
              disabled={page === '...'}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="next"
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
            {[5, 10, 20, 50].map((limit) => (
              <option key={limit} value={limit}>
                {limit}
              </option>
            ))}
          </select>
          <span className="rowsLimit2">out of {data.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Table;
