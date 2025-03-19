import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarMensagemAudioTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/whatsapp/messages',
		body: {
			from: '={{$parameter["channelToken"]}}',
			to: '={{$parameter["recipientNumber"]}}',
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