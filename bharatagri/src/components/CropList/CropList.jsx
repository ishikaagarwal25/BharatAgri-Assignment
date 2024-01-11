import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CropCard from '../CropCard/CropCard';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import { PAGE_SIZE, API_URL } from '../../constants';
import './CropList.css';

const CropList = () => {
	const [cropsData, setCropsData] = useState([]);
	const [apiStates, setAPIStates] = useState({
		success: false,
		loading: false,
		error: false,
	});
	const [currentCrops, setCurrentCrops] = useState([]);
	const [activePage, setActivePage] = useState(1);
	const [query, setQuery] = useState();

	const updateAPIStates = (state, value) => {
		setAPIStates((prev) => ({ ...prev, [state]: value }));
	};

	useEffect(() => {
		const getCropsData = async () => {
			const res = await fetch(API_URL);
			const respData = await res.json();
			setCropsData(respData.data);
			let initialCrops = respData.data?.slice(0, PAGE_SIZE);
			setCurrentCrops(initialCrops);
		};
		try {
			updateAPIStates('loading', true);
			getCropsData();
			updateAPIStates('success', true);
		} catch (err) {
			updateAPIStates('error', true);
		} finally {
			updateAPIStates('loading', false);
		}
	}, []);

	useEffect(() => {
		const filteredData =
			query &&
			cropsData?.filter((crop) => {
				return crop.crop_name.toLowerCase().includes(query);
			});

		let resCrops = query
			? filteredData?.slice(0, PAGE_SIZE)
			: cropsData?.slice((activePage - 1) * PAGE_SIZE, activePage * PAGE_SIZE);

		setCurrentCrops(resCrops);
	}, [activePage, query]);

	if (apiStates.loading) return <div>Loading...</div>;

	return (
		<div className='page-container'>
			<SearchBar
				query={query}
				setQuery={setQuery}
			/>
			<div className='crops-container'>
				{currentCrops?.length > 0
					? currentCrops.map((crop) => {
							return (
								<CropCard
									cropInfo={crop}
									key={crop.id}
								/>
							);
					  })
					: 'No data found!'}
			</div>
			<Pagination
				cropsData={cropsData}
				updatePage={setActivePage}
				activePage={activePage}
			/>
		</div>
	);
};

export default CropList;
