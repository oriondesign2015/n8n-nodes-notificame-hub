import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarMensagemCTATransport = {
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
						type: 'cta_url',
						header: {
							type: 'text',
							text: '={{$parameter["headerText"]}}',
						},
						body: {
							text: '={{$parameter["bodyText"]}}',
						},
						footer: {
							text: '={{$parameter["footerText"]}}',
						},
						action: {
							name: 'cta_url',
							parameters: {
								display_text: '={{$parameter["buttonText"]}}',
								url: '={{$parameter["buttonUrl"]}}',
							},
						},
					},
				},
			],
		},
	},
}; 