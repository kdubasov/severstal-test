export const getDate = (milsec:number):string => {

	const dateNoRedact = new Date(milsec);

	const date = dateNoRedact.toLocaleDateString();
	const time = dateNoRedact.toLocaleTimeString();

	return time + ' ' + date;
}