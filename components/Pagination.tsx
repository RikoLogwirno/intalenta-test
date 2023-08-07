'use client';

import { PaginationNumberType } from "@/types";
import { useEffect, useState } from "react";

export default function PaginationNumber(props: PaginationNumberType) {
  const [shownNumber, setShownNumber] = useState<number>(5);

  const shownNumberCalc = {
    min: Math.floor(shownNumber / 2),
    max: Math.ceil(shownNumber / 2)
  };

  const countStartFrom =
    (props.currentPage - shownNumberCalc.min) <= 1 ? 1 :
      (props.currentPage + shownNumberCalc.min) > props.totalPage ? props.totalPage - (shownNumber - 1) :
        props.currentPage - shownNumberCalc.min;

  const handleOnItemClick = (page: number) => () => {
    if (page > props.totalPage || page <= 0) {
      return false;
    }
    props.onItemClick?.(page);
  };

  useEffect(() => {
    setShownNumber(props.shownPageNumber ?? 0);
  }, [props.shownPageNumber]);



  return (
    <div className='pagination'>
      <div className={ `box arrow ${ props.currentPage === 1 ? 'disabled' : '' }` } onClick={ handleOnItemClick(props.currentPage - 1) }>
        <p>{ '<' }</p>
      </div>
      <div className='numbers'>
        {
          (props.currentPage - shownNumberCalc.min) > 1 && props.totalPage !== shownNumber ?
            <>
              <div className="box" onClick={ handleOnItemClick(1) }>
                <p>1</p>
              </div>
              <div className="triple-dots">
                <p>. . .</p>
              </div>
            </> :
            null
        }
        {
          [...Array(shownNumber)].map((item, key) => (
            <div key={ key } className={ `box ${ props.currentPage === (countStartFrom + key) ? 'active' : '' }` } onClick={ handleOnItemClick(countStartFrom + key) }>
              <p>{ countStartFrom + key }</p>
            </div>
          ))
        }
        {
          (props.currentPage + shownNumberCalc.max) <= props.totalPage && props.totalPage !== shownNumber ?
            <>
              <div className="triple-dots">
                <p>. . .</p>
              </div>
              <div className="box" onClick={ handleOnItemClick(props.totalPage) }>
                <p>{ props.totalPage }</p>
              </div>
            </> :
            null
        }
      </div>
      <div className={ `box arrow ${ props.currentPage === props.totalPage ? 'disabled' : '' }` } onClick={ handleOnItemClick(props.currentPage + 1) }>
        <p>{ '>' }</p>
      </div>
    </div>
  );
};