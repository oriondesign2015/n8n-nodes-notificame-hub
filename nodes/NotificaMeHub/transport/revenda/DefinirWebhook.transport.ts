import { IHttpRequestMethods } from 'n8n-workflow';

export const definirWebhookTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/subscriptions',
		body: {
			criteria: {
				channel: '={{$parameter["channelToken"]}}',
			},
			webhook: {
				url: '={{$parameter["webhookUrl"]}}',
				url2: '={{$parameter["webhookUrl2"] || undefined}}',
			},
		},
	},
}; 