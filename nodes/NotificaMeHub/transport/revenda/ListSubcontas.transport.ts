import { IHttpRequestMethods } from 'n8n-workflow';

export const listarSubcontasTransport = {
	request: {
		method: 'GET' as IHttpRequestMethods,
		url: '/resale',
		headers: {
			'X-Api-Token': '={{$credentials.token}}',
		},
	},
}; 