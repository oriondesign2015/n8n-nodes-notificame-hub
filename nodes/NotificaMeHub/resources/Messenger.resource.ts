import { INodeProperties } from 'n8n-workflow';

export const messengerResource: INodeProperties = {
	displayName: 'Recurso',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Messenger',
			value: 'messenger',
			description: 'Gerenciar mensagens e interações do Messenger',
		},
	],
	default: 'messenger',
}; 