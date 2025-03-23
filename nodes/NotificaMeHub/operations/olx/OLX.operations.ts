import { INodeProperties } from 'n8n-workflow';
import { enviarMensagemTextoTransport } from '../../transport/olx/EnviarMensagemTexto.transport';

export const olxOperations: INodeProperties = {
	displayName: 'Operação',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['olx'],
		},
	},
	options: [
		{
			name: 'Enviar Mensagem De Texto',
			value: 'enviarTexto',
			description: 'Envia uma mensagem de texto para o OLX',
			routing: enviarMensagemTextoTransport,
			action: 'Enviar mensagem de texto a olx',
		},
	],
	default: 'enviarTexto',
}; 