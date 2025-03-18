import { IHttpRequestMethods } from 'n8n-workflow';

export const criarTemplateTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '={{"/templates/" + $parameter["channelToken"]}}',
		headers: {
			'X-Api-Token': '={{$credentials.token}}',
		},
		body: {
			from: '={{$parameter["channelToken"]}}',
			contents: [
				{
					template: {
						name: '={{$parameter["templateName"]}}',
						language: '={{$parameter["language"]}}',
						category: '={{$parameter["category"]}}',
						components: '={{$parameter["components"].componentValues}}',
					},
				},
			],
		},
	},
}; 