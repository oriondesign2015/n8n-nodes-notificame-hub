import { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties = {
	displayName: 'Recurso',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Instagram',
			value: 'instagram',
			description: 'Gerenciar canal do Instagram',
		},
		{
			name: 'Messenger',
			value: 'messenger',
			description: 'Gerenciar canal do Messenger',
		},
		{
			name: 'Revenda',
			value: 'revenda',
			description: 'Gerenciar subcontas e revendas',
		},
		{
			name: 'Telegram',
			value: 'telegram',
			description: 'Gerenciar canal do Telegram',
		},
		{
			name: 'WhatsApp',
			value: 'whatsapp',
			description: 'Gerenciar canal do WhatsApp',
		},
	],
	default: 'instagram',
}; 