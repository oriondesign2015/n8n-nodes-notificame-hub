import { INodeProperties } from 'n8n-workflow';
import { listarSubcontasTransport } from '../../transport/revenda/ListSubcontas.transport';

export const revendaOperations: INodeProperties = {
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
			routing: listarSubcontasTransport,
		},
	],
	default: 'listSubaccounts',
}; 