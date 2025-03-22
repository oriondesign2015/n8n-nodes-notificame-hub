import { INodeProperties } from 'n8n-workflow';
import { enviarMensagemTextoTransport } from '../../transport/telegram/EnviarMensagemTexto.transport';
import { enviarMensagemAudioTransport } from '../../transport/telegram/EnviarMensagemAudio.transport';
import { enviarArquivoTransport } from '../../transport/telegram/EnviarArquivo.transport';

export const telegramOperations: INodeProperties = {
	displayName: 'Operação',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['telegram'],
		},
	},
	options: [
		{
			name: 'Enviar Texto',
			value: 'enviarTexto',
			description: 'Envia uma mensagem de texto para o Telegram',
			routing: enviarMensagemTextoTransport,
			action: 'Enviar texto a telegram',
		},
		{
			name: 'Enviar Audio',
			value: 'enviarAudio',
			description: 'Envia uma mensagem de áudio para o Telegram',
			routing: enviarMensagemAudioTransport,
			action: 'Enviar audio a telegram',
		},
		{
			name: 'Enviar Arquivo',
			value: 'enviarArquivo',
			description: 'Envia um arquivo (documento, foto ou vídeo) para o Telegram',
			routing: enviarArquivoTransport,
			action: 'Enviar arquivo a telegram',
		},
	],
	default: 'enviarTexto',
}; 