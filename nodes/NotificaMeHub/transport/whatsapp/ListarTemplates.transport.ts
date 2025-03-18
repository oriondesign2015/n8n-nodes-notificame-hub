import { IHttpRequestMethods } from 'n8n-workflow';

export const listarTemplatesTransport = {
	request: {
		method: 'GET' as IHttpRequestMethods,
		url: '={{"/templates/" + $parameter["channelToken"]}}',
		headers: {
			'X-Api-Token': '={{$credentials.token}}',
		},
	},
}; 