import { INodeProperties } from 'n8n-workflow';

export const resaleOperations: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['revenda'],
			},
		},
		options: [
			{
				name: 'Listar Subcontas',
				value: 'listSubaccounts',
				description: 'Retorna uma lista das subcontas criadas',
				routing: {
					request: {
						method: 'GET',
						url: '/resale',
						headers: {
							'X-Api-Token': '={{$credentials.token}}',
						},
					},
				},
			},
		],
		default: 'listSubaccounts',
	},
]; 