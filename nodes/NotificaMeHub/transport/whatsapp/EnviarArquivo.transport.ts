import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarArquivoTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/whatsapp/messages',
		body: {
			from: '={{$parameter["channelToken"]}}',
			to: '={{$parameter["recipientNumber"]}}',
			contents: [
				{
					type: 'file',
					fileMimeType: '={{$parameter["fileType"]}}',
					fileUrl: '={{$parameter["fileUrl"]}}',
					fileCaption: '={{$parameter["caption"] || undefined}}',
				},
			],
		},
	},
}; 