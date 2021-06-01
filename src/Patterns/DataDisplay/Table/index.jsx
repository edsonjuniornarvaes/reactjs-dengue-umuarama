/* SECTION: Standard for simple paged table. 
-  ---------------------------------------*/

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
} from "react-table";

import TableBootstrap from "react-bootstrap/Table";

import {
  StyleTable,
  StyledInputSearch,
} from "../../../theme/layouts/Pagination/Styles";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Table({ data = [], columns, customLimitDefault }) {
  const [buttonPagination, setButtonPagination] = useState([]);

  const memoColumns = useMemo(() => columns, []);
  const memoData = useMemo(() => data, [data]);

  const {
    headerGroups,
    setGlobalFilter,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    getTableProps,
    getTableBodyProps,
    prepareRow,
  } = useTable(
    {
      columns: memoColumns,
      data: memoData,
      autoResetPage: true,
      initialState: {
        pageIndex: 0,
        pageSize: customLimitDefault ? customLimitDefault : 10,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const handlePagination = useCallback(
    (page, size) => {
      const nbPages = size ? Math.round(rows?.length / size) : pageCount;

      let maxLeft = page - Math.floor(5 / 2) + 1;
      let maxRight = page + Math.floor(5 / 2) + 1;

      if (maxLeft < 1) {
        maxLeft = 1;
        maxRight = 5;
      }

      if (maxRight > nbPages) {
        maxLeft = maxLeft <= 1 ? 1 : nbPages - (5 - 1);
        maxRight = nbPages;
      }

      let btnsArray = [];
      for (let i = maxLeft; i <= maxRight; i++) {
        btnsArray = [...btnsArray, i];
      }

      setButtonPagination(btnsArray);
    },
    [pageCount, rows]
  );

  const handleButtonPagination = useCallback(
    (type) => {
      const page = type === "next" ? pageIndex + 1 : pageIndex - 1;

      handlePagination(page);

      if (type === "prev") return previousPage();

      if (type === "next") return nextPage();
    },
    [pageIndex, previousPage, nextPage, handlePagination]
  );

  useEffect(() => {
    if (rows.length > 0) handlePagination(0);
  }, [rows, handlePagination]);

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  function handleGoPage(page, size = null) {
    gotoPage(page);
    handlePagination(page, size);
  }

  const HandleInfo = () => {
    const currentPage = pageIndex + 1;
    const currentPages = pageSize * currentPage;
    const rowsLength = rows.length;
    const pageLength = page.length;

    return `Mostrando ${
      currentPage === 1
        ? 1
        : currentPage === pageCount
        ? rowsLength - pageLength + 1
        : currentPages - pageLength + 1
    } a ${
      currentPage === pageCount ? rowsLength : currentPage * pageSize
    } de ${rowsLength} ${rowsLength === 1 ? "registro" : "registros"}`;
  };

  const currentPage = pageIndex + 1;

  return (
    <StyleTable>
      <div className="body-table">
        <StyledInputSearch>
          <label htmlFor="">
            <input
              type="text"
              placeholder="Pesquisar..."
              onChange={(e) => onChange(e.target.value)}
              name=""
              id=""
            />
          </label>
        </StyledInputSearch>
        <TableBootstrap striped responsive {...getTableProps()}>
          <>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <FaArrowUp size={10} />
                          ) : (
                            <FaArrowDown size={10} />
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {page.length > 0 ? (
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan="20">Nenhum registro foi encontrado.</td>
                </tr>
              </tbody>
            )}
          </>
        </TableBootstrap>
        {page.length > 0 && (
          <div className="filter-options">
            <div className="option-left">
              <ul>
                <li className="pagination-default-style">
                  <button
                    onClick={() => handleGoPage(0)}
                    className={`option-first ${
                      !canPreviousPage ? "disabled" : ""
                    }`}
                  >
                    <a>{"<<"}</a>
                  </button>
                </li>
                <li className="pagination-default-style">
                  <button
                    onClick={() => handleButtonPagination("prev")}
                    className={`option-prev ${
                      !canPreviousPage ? "disabled" : ""
                    }`}
                  >
                    <a> {"<"}</a>
                  </button>
                </li>
                {buttonPagination?.map((item) => (
                  <li key={item}>
                    <button
                      className={`option-pager ${
                        currentPage === item ? "active" : ""
                      }`}
                      onClick={() => handleGoPage(item - 1)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
                <li className="pagination-default-style">
                  <button
                    onClick={() => handleButtonPagination("next")}
                    className={`option-next ${!canNextPage ? "disabled" : ""}`}
                  >
                    <a>{">"}</a>
                  </button>
                </li>
                <li className="pagination-default-style">
                  <button
                    onClick={() => handleGoPage(pageCount - 1)}
                    className={`option-last ${!canNextPage ? "disabled" : ""}`}
                  >
                    <a>{">>"}</a>
                  </button>
                </li>
              </ul>
            </div>
            <div className="option-right">
              <DropdownButton id="dropdown-basic-button" title={pageSize}>
                {[5, 10, 20, 30, 40, 50].map((size, key) => (
                  <Dropdown.Item
                    eventKey={key}
                    key={key}
                    onClick={() => {
                      setPageSize(size);
                      handleGoPage(0, size);
                    }}
                    className={pageSize === size ? "active" : ""}
                  >
                    {size}
                  </Dropdown.Item>
                ))}
                {customLimitDefault && (
                  <Dropdown.Item
                    eventKey="00"
                    onClick={() => {
                      setPageSize(customLimitDefault);
                      handleGoPage(0, customLimitDefault);
                    }}
                    className={pageSize === customLimitDefault ? "active" : ""}
                  >
                    Padrão
                  </Dropdown.Item>
                )}
                <Dropdown.Item
                  eventKey="01"
                  onClick={() => {
                    setPageSize(rows.length);
                    handleGoPage(0, rows.length);
                  }}
                  className={pageSize === rows.length ? "active" : ""}
                >
                  Todos
                </Dropdown.Item>
              </DropdownButton>
              <div className="info">
                <span>
                  <HandleInfo />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </StyleTable>
  );
}

export default React.memo(Table);
