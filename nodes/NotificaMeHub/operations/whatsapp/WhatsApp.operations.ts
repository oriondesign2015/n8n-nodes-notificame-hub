import { INodeProperties } from 'n8n-workflow';
import { listarTemplatesTransport } from '../../transport/whatsapp/ListarTemplates.transport';
import { criarTemplateTransport } from '../../transport/whatsapp/CriarTemplate.transport';

export const whatsappOperations: INodeProperties = {
	displayName: 'Operação',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['whatsapp'],
		},
	},
	options: [
		{
			name: 'Listar Templates',
			value: 'listarTemplates',
			description: 'Lista todos os templates disponíveis',
			routing: listarTemplatesTransport,
		},
		{
			name: 'Criar Template',
			value: 'criarTemplate',
			description: 'Cria um novo template para WhatsApp',
			routing: criarTemplateTransport,
		},
	],
	default: 'listarTemplates',
}; 