export const randomString = (length: number) => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

export const extractStringInsideSymbol = (
	str: string,
	start: string,
	end: string
) => {
	const urlRegex = `\\${start}(.*)\\${end}`;
	return str.match(urlRegex)?.[1] || null;
};
