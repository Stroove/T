import React, { useState } from "react";
import usersClass from '../Components/users/usersClass.module.css';


const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++){
        pages.push(i);
    }
    let portionCount = Math.ceil(props.totalUsersCount / props.portionSize)
    let [currentPortionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (currentPortionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = currentPortionNumber * props.portionSize;
    // previous realization
    // let curP = props.currentPage;
    // let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ; 
    // let curPL = curP + 5;
    // let slicedPages = pages.slice( curPF, curPL);
    return (
        <div className="paginator">
            {currentPortionNumber > 1 && 
                <button onClick={() => {
                    setPortionNumber(currentPortionNumber - 1 ) 
                }}>Back</button>
            }
            {pages
            .filter(p => p>=leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
            return <span onClick={(e)=> {props.onCurrentPageChange (p)}} key={p}
            className={props.currentPage === p ? usersClass.users__selectedPage : usersClass.users__unSelectedPage}>
                {p}
            </span>
            })}
            {currentPortionNumber < portionCount && 
                <button onClick={() => {
                    setPortionNumber(currentPortionNumber + 1 ) 
                }}>Next</button>
            }
        </div>
    )
}

export default Paginator;