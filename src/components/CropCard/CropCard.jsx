import React from 'react';
import { useState } from 'react';
import ImgModal from '../ImgModal/ImgModal';
import './CropCard.css';

const CropCard = ({ cropInfo }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			{isOpen && (
				<ImgModal
					img={cropInfo.thumbnails[0].image}
					setIsOpen={setIsOpen}
				/>
			)}
			<div
				className='card-container'
				onClick={() => setIsOpen(true)}
			>
				<img
					src={cropInfo.thumbnails[0].image}
					alt={cropInfo.thumbnails.details}
					width={200}
					height={200}
				></img>
				<h2>{cropInfo.crop_name}</h2>
			</div>
		</>
	);
};

export default CropCard;
