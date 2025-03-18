import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarMensagemAudioTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/telegram/messages',
		body: {
			from: '={{$parameter["channelId"]}}',
			to: '={{$parameter["recipientId"]}}',
			contents: [
				{
					type: 'file',
					fileMimeType: 'audio',
					fileUrl: '={{$parameter["audioUrl"]}}',
					fileCaption: 'Áudio',
				},
			],
		},
	},
}; 