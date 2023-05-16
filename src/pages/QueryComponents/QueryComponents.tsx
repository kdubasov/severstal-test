import React, {useState} from 'react';
import {handleFetch} from "../../functions/handleFetch.ts";
import {getDate} from "../../functions/gerDate.ts";
import {useParams} from "react-router-dom";
import ResultQuery from "../../components/ResultQuery/ResultQuery.tsx";
import "./QueryComponents.css";

export interface IDataItem {
	date: string,
	url: string,
	error?: string,
}

const QueryComponents: React.FC = () => {

	const params = useParams();

	const [load, setLoad] = useState<boolean>(false);
	const [data, setData] = useState<IDataItem[]>([]);

	const handleGet = async () => {
		setLoad(true);
		const data = await handleFetch(`/${params.id}`);

		//@ts-ignore
		if (data?.error) {
			setData(prev => [...prev, {
				date: getDate(Date.now()),
				url:`/${params.id}`,
				error: "Ошибка запроса"
			}])
		}else{
			setData(prev => [...prev, {
				date: getDate(Date.now()),
				url:`/${params.id}`
			}])
		}

		setLoad(false)
	}

	return (
		<div className={"QueryComponents"}>
			<h1>{params.id?.toUpperCase()}</h1>
			<button className={"btn"} onClick={handleGet} disabled={load}>
				{load ? "Load..." : "Запросить данные"}
			</button>

			{!!data.length && <ResultQuery data={data} />}
		</div>
	);
};

export default QueryComponents;
