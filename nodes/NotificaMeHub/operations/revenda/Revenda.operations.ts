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
			action: 'Listar subcontas a revenda',
		},
		{
			name: 'Definir Webhook',
			value: 'definirWebhook',
			description: 'Define o webhook para receber eventos de um canal',
			action: 'Definir webhook para receber eventos',
		},
	],
	default: 'listSubaccounts',
}; 