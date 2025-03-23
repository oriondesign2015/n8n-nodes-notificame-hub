import { IHttpRequestMethods } from 'n8n-workflow';

export const responderPerguntaTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/mercadolivre/messages',
		body: {
			from: '={{$parameter["channelId"]}}',
			to: '={{$parameter["questionId"]}}',
			contents: [
				{
					type: 'text',
					text: '={{$parameter["message"]}}',
				},
			],
		},
	},
}; 