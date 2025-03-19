import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarMensagemBotoesTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/whatsapp/messages',
		body: {
			from: '={{$parameter["channelToken"]}}',
			to: '={{$parameter["recipientNumber"]}}',
			contents: [
				{
					type: 'interactive',
					interactive: {
						type: 'button',
						body: {
							text: '={{$parameter["bodyText"]}}',
						},
						action: {
							buttons: '={{$parameter["buttons"].buttonValues.map(function(item) { return { type: "reply", reply: { id: item.id, title: item.title } } })}}'
						},
					},
				},
			],
		},
	},
}; 