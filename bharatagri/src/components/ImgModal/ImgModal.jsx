import React from 'react';
import './ImgModal.css';
import crossIcon from '../../assets/cross_icon.svg';

const ImgModal = ({ img, setIsOpen }) => {
	return (
		<div className='modal'>
			<div className='modal-content'>
				<div className='cross-icon-container'>
					<img
						src={crossIcon}
						width={32}
						height={32}
						onClick={() => setIsOpen(false)}
					></img>
				</div>
				<div className='modal-img-container'>
					<img
						src={img}
						width={200}
						height={200}
					></img>
				</div>
			</div>
		</div>
	);
};

export default ImgModal;
