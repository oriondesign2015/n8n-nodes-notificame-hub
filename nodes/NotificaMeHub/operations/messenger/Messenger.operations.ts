import { INodeProperties } from 'n8n-workflow';
import { enviarMensagemTextoTransport } from '../../transport/messenger/EnviarMensagemTexto.transport';
import { enviarMensagemAudioTransport } from '../../transport/messenger/EnviarMensagemAudio.transport';
import { enviarArquivoTransport } from '../../transport/messenger/EnviarArquivo.transport';
import { enviarBotaoTransport } from '../../transport/messenger/EnviarBotao.transport';

export const messengerOperations: INodeProperties = {
	displayName: 'Operação',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['messenger'],
		},
	},
	options: [
		{
			name: 'Enviar Texto',
			value: 'enviarTexto',
			description: 'Envia uma mensagem de texto para o Messenger',
			routing: enviarMensagemTextoTransport,
			action: 'Enviar texto a messenger',
		},
		{
			name: 'Enviar Audio',
			value: 'enviarAudio',
			description: 'Envia uma mensagem de áudio para o Messenger',
			routing: enviarMensagemAudioTransport,
			action: 'Enviar audio a messenger',
		},
		{
			name: 'Enviar Arquivo',
			value: 'enviarArquivo',
			description: 'Envia um arquivo (imagem ou vídeo) para o Messenger',
			routing: enviarArquivoTransport,
			action: 'Enviar arquivo a messenger',
		},
		{
			name: 'Enviar Template',
			value: 'enviarBotao',
			description: 'Envia um template (botões, cupom, avaliação, etc) para o Messenger',
			routing: enviarBotaoTransport,
			action: 'Enviar template a messenger',
		},
	],
	default: 'enviarTexto',
}; 