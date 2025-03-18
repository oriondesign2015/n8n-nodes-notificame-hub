import { INodeProperties } from 'n8n-workflow';

export const revendaResource: INodeProperties = {
	displayName: 'Recurso',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Revenda',
			value: 'revenda',
			description: 'Gerenciar subcontas e revendas',
		},
	],
	default: 'revenda',
}; 