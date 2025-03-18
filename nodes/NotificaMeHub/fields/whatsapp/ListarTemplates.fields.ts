import { INodeProperties } from 'n8n-workflow';

export const listarTemplatesFields: INodeProperties[] = [
	{
		displayName: 'Token do Canal',
		name: 'channelToken',
		type: 'string',
		required: true,
		default: '',
		description: 'Token do canal do WhatsApp',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['listarTemplates'],
			},
		},
	},
]; 