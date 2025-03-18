import { IHttpRequestMethods } from 'n8n-workflow';

export const responderComentarioTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/instagram/messages',
		body: {
			from: '={{$parameter["channelId"]}}',
			to: '={{$parameter["recipientId"]}}',
			contents: [
				{
					type: 'reply_text',
					messsageId: '={{$parameter["messageId"]}}',
					text: '={{$parameter["text"]}}',
				},
			],
		},
	},
}; 