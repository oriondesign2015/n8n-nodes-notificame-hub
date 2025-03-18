import { INodeProperties } from 'n8n-workflow';

export const instagramResource: INodeProperties = {
	displayName: 'Recurso',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Instagram',
			value: 'instagram',
			description: 'Gerenciar mensagens e interações do Instagram',
		},
	],
	default: 'instagram',
}; 