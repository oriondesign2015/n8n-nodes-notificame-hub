import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarLocalizacaoTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/whatsapp/messages',
		body: {
			from: '={{$parameter["channelToken"]}}',
			to: '={{$parameter["recipientNumber"]}}',
			contents: [
				{
					type: 'location',
					longitude: '={{$parameter["longitude"]}}',
					latitude: '={{$parameter["latitude"]}}',
					name: '={{$parameter["locationName"]}}',
					address: '={{$parameter["locationAddress"]}}',
				},
			],
		},
	},
}; 