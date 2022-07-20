import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

function Pagination({ onChangePage, currentPage }) {
  return (
    <ReactPaginate
      className = {styles.root}
      breaklabel = "..."
      nextLabel = ">"
      previousLabel = "<"
      onPageChange={event => onChangePage(event.selected + 1)}
      pageRangeDisplayed = {4}
      pageCount = {3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount = {null}
    />
  )
}

export default Pagination