import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarArquivoTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/telegram/messages',
		body: {
			from: '={{$parameter["channelId"]}}',
			to: '={{$parameter["recipientId"]}}',
			contents: [
				{
					type: 'file',
					fileMimeType: 'document',
					fileUrl: '={{$parameter["fileUrl"]}}',
					fileCaption: '={{$parameter["caption"]}}',
				},
			],
		},
	},
}; 