export const getAppTitle = (title: string) => {
	return `Numos | ${title}`;
};

export const cssIf = (className: string | null | undefined, status?: boolean) => {
	if ((status || typeof status !== 'boolean') && !!className && typeof className === 'string')
		return className;
	return '';
};
