import { IHttpRequestMethods } from 'n8n-workflow';

export const listarPostagensTransport = {
	request: {
		method: 'GET' as IHttpRequestMethods,
		url: '/channels/instagram/publish',
		qs: {
			channel_id: '={{$parameter["channelId"]}}',
		},
	},
}; 