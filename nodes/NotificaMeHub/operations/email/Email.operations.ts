import { INodeProperties } from 'n8n-workflow';
import { enviarEmailTextoTransport } from '../../transport/email/EnviarEmailTexto.transport';
import { enviarEmailArquivosTransport } from '../../transport/email/EnviarEmailArquivos.transport';

export const emailOperations: INodeProperties = {
	displayName: 'Operação',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['email'],
		},
	},
	options: [
		{
			name: 'Enviar Email (Somente Texto)',
			value: 'enviarEmailTexto',
			description: 'Envia um email somente com texto',
			routing: enviarEmailTextoTransport,
			action: 'Enviar email texto a email',
		},
		{
			name: 'Enviar Email (Com Arquivos)',
			value: 'enviarEmailArquivos',
			description: 'Envia um email com arquivos anexados',
			routing: enviarEmailArquivosTransport,
			action: 'Enviar email com arquivos a email',
		},
	],
	default: 'enviarEmailTexto',
}; 