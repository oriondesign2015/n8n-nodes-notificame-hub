import { INodeProperties } from 'n8n-workflow';

export const whatsappResource: INodeProperties = {
	displayName: 'Recurso',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'WhatsApp',
			value: 'whatsapp',
			description: 'Gerenciar mensagens e templates do WhatsApp',
		},
	],
	default: 'whatsapp',
}; 