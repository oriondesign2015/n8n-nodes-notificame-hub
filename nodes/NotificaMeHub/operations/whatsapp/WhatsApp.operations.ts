import { INodeProperties } from 'n8n-workflow';
import { listarTemplatesTransport } from '../../transport/whatsapp/ListarTemplates.transport';
import { enviarTemplateTransport } from '../../transport/whatsapp/EnviarTemplate.transport';
import { enviarMensagemTextoTransport } from '../../transport/whatsapp/EnviarMensagemTexto.transport';
import { enviarMensagemAudioTransport } from '../../transport/whatsapp/EnviarMensagemAudio.transport';
import { enviarStickerTransport } from '../../transport/whatsapp/EnviarSticker.transport';
import { enviarArquivoTransport } from '../../transport/whatsapp/EnviarArquivo.transport';
import { enviarLocalizacaoTransport } from '../../transport/whatsapp/EnviarLocalizacao.transport';
import { enviarMensagemBotoesTransport } from '../../transport/whatsapp/EnviarMensagemBotoes.transport';
import { enviarMensagemListasTransport } from '../../transport/whatsapp/EnviarMensagemListas.transport';
import { enviarMensagemCTATransport } from '../../transport/whatsapp/EnviarMensagemCTA.transport';

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
			action: 'Listar templates a whatsapp',
		},
		{
			name: 'Enviar Template',
			value: 'enviarTemplate',
			description: 'Envia um template para iniciar uma conversa no WhatsApp',
			routing: enviarTemplateTransport,
			action: 'Enviar template a whatsapp',
		},
		{
			name: 'Enviar Texto',
			value: 'enviarTexto',
			description: 'Envia uma mensagem de texto para o WhatsApp',
			routing: enviarMensagemTextoTransport,
			action: 'Enviar texto a whatsapp',
		},
		{
			name: 'Enviar Áudio',
			value: 'enviarAudio',
			description: 'Envia uma mensagem de áudio para o WhatsApp',
			routing: enviarMensagemAudioTransport,
			action: 'Enviar udio a whatsapp',
		},
		{
			name: 'Enviar Sticker',
			value: 'enviarSticker',
			description: 'Envia um sticker para o WhatsApp',
			routing: enviarStickerTransport,
			action: 'Enviar sticker a whatsapp',
		},
		{
			name: 'Enviar Arquivo',
			value: 'enviarArquivo',
			description: 'Envia um arquivo (documento, imagem ou vídeo) para o WhatsApp',
			routing: enviarArquivoTransport,
			action: 'Enviar arquivo a whatsapp',
		},
		{
			name: 'Enviar Localização',
			value: 'enviarLocalizacao',
			description: 'Envia uma localização para o WhatsApp',
			routing: enviarLocalizacaoTransport,
			action: 'Enviar localiza o a whatsapp',
		},
		{
			name: 'Enviar Botões',
			value: 'enviarBotoes',
			description: 'Envia uma mensagem interativa com botões para o WhatsApp',
			routing: enviarMensagemBotoesTransport,
			action: 'Enviar bot es a whatsapp',
		},
		{
			name: 'Enviar Listas',
			value: 'enviarListas',
			description: 'Envia uma mensagem interativa com listas para o WhatsApp',
			routing: enviarMensagemListasTransport,
			action: 'Enviar listas a whatsapp',
		},
		{
			name: 'Enviar Link Interativo (CTA)',
			value: 'enviarCTA',
			description: 'Envia uma mensagem interativa com link para o WhatsApp',
			routing: enviarMensagemCTATransport,
			action: 'Enviar link interativo cta a whatsapp',
		},
	],
	default: 'listarTemplates',
}; 