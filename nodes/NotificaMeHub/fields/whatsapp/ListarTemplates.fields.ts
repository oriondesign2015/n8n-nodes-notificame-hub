import { INodeProperties } from 'n8n-workflow';

export const listarTemplatesFields: INodeProperties[] = [
	{
		displayName: 'Token Do Canal',
		name: 'channelToken',
		type: 'string',
		typeOptions: { password: true },
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