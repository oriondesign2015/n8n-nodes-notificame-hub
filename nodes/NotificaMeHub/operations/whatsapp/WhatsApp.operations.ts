import { INodeProperties } from 'n8n-workflow';
import { listarTemplatesTransport } from '../../transport/whatsapp/ListarTemplates.transport';
import { enviarTemplateTransport } from '../../transport/whatsapp/EnviarTemplate.transport';
import { enviarMensagemTextoTransport } from '../../transport/whatsapp/EnviarMensagemTexto.transport';
import { enviarMensagemAudioTransport } from '../../transport/whatsapp/EnviarMensagemAudio.transport';
import { enviarStickerTransport } from '../../transport/whatsapp/EnviarSticker.transport';
import { enviarArquivoTransport } from '../../transport/whatsapp/EnviarArquivo.transport';
import { enviarLocalizacaoTransport } from '../../transport/whatsapp/EnviarLocalizacao.transport';
import { enviarMensagemBotoesTransport } from '../../transport/whatsapp/EnviarMensagemBotoes.transport';

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
			name: 'Enviar Template',
			value: 'enviarTemplate',
			description: 'Envia um template para iniciar uma conversa no WhatsApp',
			routing: enviarTemplateTransport,
		},
		{
			name: 'Enviar Texto',
			value: 'enviarTexto',
			description: 'Envia uma mensagem de texto para o WhatsApp',
			routing: enviarMensagemTextoTransport,
		},
		{
			name: 'Enviar Áudio',
			value: 'enviarAudio',
			description: 'Envia uma mensagem de áudio para o WhatsApp',
			routing: enviarMensagemAudioTransport,
		},
		{
			name: 'Enviar Sticker',
			value: 'enviarSticker',
			description: 'Envia um sticker para o WhatsApp',
			routing: enviarStickerTransport,
		},
		{
			name: 'Enviar Arquivo',
			value: 'enviarArquivo',
			description: 'Envia um arquivo (documento, imagem ou vídeo) para o WhatsApp',
			routing: enviarArquivoTransport,
		},
		{
			name: 'Enviar Localização',
			value: 'enviarLocalizacao',
			description: 'Envia uma localização para o WhatsApp',
			routing: enviarLocalizacaoTransport,
		},
		{
			name: 'Enviar Botões',
			value: 'enviarBotoes',
			description: 'Envia uma mensagem interativa com botões para o WhatsApp',
			routing: enviarMensagemBotoesTransport,
		},
	],
	default: 'listarTemplates',
}; 