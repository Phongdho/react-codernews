import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationNews = ({ setCurrentPage }) => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 3; number++) {
        const handleClick = (e) => {
            setCurrentPage(e.target.innerText)
        }
        items.push(
            <Pagination.Item key={number} onClick={handleClick} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    console.log(items)
    const paginationBasic = () => {
        return (
            <div>
                <Pagination id="" size="lg">{items}</Pagination>
                <br />
            </div>
        )
    }

    return paginationBasic()
}

export default PaginationNews;