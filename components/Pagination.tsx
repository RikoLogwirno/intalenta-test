'use client';

type PaginationNumberType = {
  totalPage: number;
  currentPage: number;
  onItemClick?: (page: number) => any;
};

export default function PaginationNumber(props: PaginationNumberType) {
  let shownNumber = window.innerWidth <= 768 ? 3 : 5;
  shownNumber = shownNumber > props.totalPage ? props.totalPage : shownNumber;
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

  return (
    <div className='pagination'>
      <div className={ `box arrow ${ props.currentPage === 1 ? 'disabled' : '' }` } onClick={ handleOnItemClick(props.currentPage - 1) }>
        <p>{ '<' }</p>
      </div>
      <div className='numbers'>
        {
          (props.currentPage - shownNumberCalc.min) > 1 ?
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
          (props.currentPage + shownNumberCalc.max) <= props.totalPage ?
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