import { INodeProperties } from 'n8n-workflow';
import { enviarMensagemTextoTransport } from '../../transport/webchat/EnviarMensagemTexto.transport';
import { enviarArquivoTransport } from '../../transport/webchat/EnviarArquivo.transport';

export const webchatOperations: INodeProperties = {
	displayName: 'Operação',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['webchat'],
		},
	},
	options: [
		{
			name: 'Enviar Texto',
			value: 'enviarTexto',
			description: 'Envia uma mensagem de texto para o WebChat',
			routing: enviarMensagemTextoTransport,
			action: 'Enviar texto a webchat',
		},
		{
			name: 'Enviar Arquivo',
			value: 'enviarArquivo',
			description: 'Envia um arquivo (documento, imagem ou vídeo) para o WebChat',
			routing: enviarArquivoTransport,
			action: 'Enviar arquivo a webchat',
		},
	],
	default: 'enviarTexto',
}; 