import React from 'react';
import { PAGE_SIZE } from '../../constants';
import './Pagination.css';

const Pagination = ({ cropsData, updatePage, activePage }) => {
	let totalPages = Math.ceil(cropsData?.length / PAGE_SIZE);
	const pagesArr = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className='pagination-container'>
			{activePage !== 1 && (
				<div onClick={() => updatePage(activePage - 1)}>Prev</div>
			)}
			{pagesArr?.map((p) => {
				return (
					<div
						onClick={() => {
							updatePage(p);
						}}
						className={`page-num ${p === activePage && 'active'}`}
						key={p}
					>
						{p}
					</div>
				);
			})}
			{activePage !== totalPages && (
				<div onClick={() => updatePage(activePage + 1)}>Next</div>
			)}
		</div>
	);
};

export default Pagination;
