import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarEmailTextoTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/email/messages',
		body: {
			from: '={{$parameter["channelId"]}}',
			to: '={{$parameter["recipientEmail"]}}',
			contents: [
				{
					type: 'email',
					subject: '={{$parameter["subject"]}}',
					html: '={{$parameter["htmlContent"]}}',
				},
			],
		},
	},
}; 