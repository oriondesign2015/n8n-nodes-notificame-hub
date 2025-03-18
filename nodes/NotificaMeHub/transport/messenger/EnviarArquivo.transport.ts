import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarArquivoTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/facebook/messages',
		body: {
			from: '={{$parameter["channelId"]}}',
			to: '={{$parameter["recipientId"]}}',
			contents: [
				{
					type: 'file',
					fileMimeType: '={{$parameter["fileType"]}}',
					fileUrl: '={{$parameter["fileUrl"]}}',
					fileCaption: '={{$parameter["fileType"] === "image" ? "Imagem" : "Vídeo"}}',
				},
			],
		},
	},
}; 