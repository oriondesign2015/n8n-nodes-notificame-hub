import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarMensagemTextoTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/webchat/messages',
		body: {
			from: '={{$parameter["channelId"]}}',
			to: '={{$parameter["recipientId"]}}',
			contents: [
				{
					type: 'text',
					text: '={{$parameter["message"]}}',
				},
			],
		},
	},
}; 