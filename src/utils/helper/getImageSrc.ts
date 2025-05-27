export function getImageSrc(base64: string, mimeType: string = 'image/jpeg'): string {
	if (!base64) return '';
	return `data:${mimeType};base64,${base64}`;
}
