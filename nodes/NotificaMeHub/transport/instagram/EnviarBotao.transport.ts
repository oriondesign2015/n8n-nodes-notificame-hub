import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarBotaoTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/instagram/messages',
		body: {
			from: '={{$parameter["channelId"]}}',
			to: '={{$parameter["recipientId"]}}',
			contents: [
				{
					type: 'template',
					template: {
						template_type: 'button',
						text: '={{$parameter["text"]}}',
						buttons: '={{$parameter["buttons"].buttonsValues.map(button => button.type === "web_url" ? { type: "web_url", url: button.url, title: button.title } : { type: "postback", title: button.title, payload: button.payload })}}',
					},
				},
			],
		},
	},
}; 