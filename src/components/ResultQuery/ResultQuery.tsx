import React, {useState} from 'react';
import {IDataItem} from "../../pages/QueryComponents/QueryComponents.tsx";
import "./ResultQuery.css";

interface IResultQuery {
	data: IDataItem[],
}

const ResultQuery: React.FC<IResultQuery> = ({data}) => {

	const [show, setShow] = useState<boolean>(false);

	return (
		<div className={"ResultQuery"}>

			<button className={"btn"} onClick={() => setShow(prev => !prev)}>
				{show ? "Скрыть" : "Показать"} результаты <b>({data.length})</b>
			</button>

			{
				show &&
				<ul>
					{
						data.map((elem: IDataItem) => (
							<li key={elem.date} className={elem.error ? "error" : ""}>
								<p>Дата: <b>{elem.date}</b></p>
								<p>Ссылка: <b>{elem.url}</b></p>
								{elem.error && <b className={"error"}>{elem.error}</b>}
							</li>
						))
					}
				</ul>
			}
		</div>
	);
};

export default ResultQuery;
