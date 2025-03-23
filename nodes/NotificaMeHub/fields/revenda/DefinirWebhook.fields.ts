import { INodeProperties } from 'n8n-workflow';

export const definirWebhookFields: INodeProperties[] = [
	{
		displayName: 'Token Do Canal',
		name: 'channelToken',
		type: 'string',
		typeOptions: { password: true },
		required: true,
		default: '',
		description: 'Token do canal para o qual deseja receber eventos',
		displayOptions: {
			show: {
				resource: ['revenda'],
				operation: ['definirWebhook'],
			},
		},
	},
	{
		displayName: 'URL Do Webhook',
		name: 'webhookUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL para onde os eventos serão enviados',
		displayOptions: {
			show: {
				resource: ['revenda'],
				operation: ['definirWebhook'],
			},
		},
	},
	{
		displayName: 'URL Do Webhook Secundário',
		name: 'webhookUrl2',
		type: 'string',

		default: '',
		description: 'URL secundária para onde os eventos também serão enviados (opcional)',
		displayOptions: {
			show: {
				resource: ['revenda'],
				operation: ['definirWebhook'],
			},
		},
	},
]; 