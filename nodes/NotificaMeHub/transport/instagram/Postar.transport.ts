import { IHttpRequestMethods } from 'n8n-workflow';

export const postarTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/instagram/messages',
		body: {
			from: '={{$parameter["channelId"]}}',
			contents: [
				{
					type: '={{$parameter["postType"]}}',
					fileUrl: '={{$parameter["fileUrl"]}}',
					fileCaption: '={{$parameter["caption"]}}',
				},
			],
		},
	},
}; 