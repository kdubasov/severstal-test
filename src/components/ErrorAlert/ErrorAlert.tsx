import React from 'react';

interface IErrorAlert {
	error: string,
}

const ErrorAlert:React.FC<IErrorAlert> = ({error}) => {
	return (
		<div className={"ErrorAlert"}>
			<h5>{error}</h5>
		</div>
	);
};

export default ErrorAlert;
