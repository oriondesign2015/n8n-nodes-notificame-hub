import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarStickerTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/whatsapp/messages',
		body: {
			from: '={{$parameter["channelToken"]}}',
			to: '={{$parameter["recipientNumber"]}}',
			contents: [
				{
					type: 'file',
					fileMimeType: 'sticker',
					fileUrl: '={{$parameter["stickerUrl"]}}',
					fileCaption: 'Sticker',
				},
			],
		},
	},
};