import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarMensagemListasTransport = {
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
						type: 'list',
						header: {
							type: 'text',
							text: '={{$parameter["headerText"]}}',
						},
						body: {
							text: '={{$parameter["bodyText"]}}',
						},
						action: {
							button: '={{$parameter["buttonText"]}}',
							sections: '={{$parameter["sections"].sectionValues.map(function(section) { return { title: section.title, rows: section.rows.rowValues.map(function(row) { return { id: row.id, title: row.title, description: row.description } }) } })}}',
						},
					},
				},
			],
		},
	},
}; 