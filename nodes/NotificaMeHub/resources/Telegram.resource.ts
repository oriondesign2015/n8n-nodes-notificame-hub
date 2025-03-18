import { INodeProperties } from 'n8n-workflow';

export const telegramResource: INodeProperties = {
	displayName: 'Recurso',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Telegram',
			value: 'telegram',
			description: 'Gerenciar mensagens e interações do Telegram',
		},
	],
	default: 'telegram',
}; 