import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarMensagemTextoTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/whatsapp/messages',
		body: {
			from: '={{$parameter["channelToken"]}}',
			to: '={{$parameter["recipientNumber"]}}',
			contents: [
				{
					type: 'text',
					text: '={{$parameter["message"]}}',
				},
			],
		},
	},
}; 