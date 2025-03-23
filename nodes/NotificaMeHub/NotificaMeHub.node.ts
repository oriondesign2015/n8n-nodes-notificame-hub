import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { resources } from './resources/Resources';
import { revendaOperations } from './operations/revenda/Revenda.operations';
import { instagramOperations } from './operations/instagram/Instagram.operations';
import { messengerOperations } from './operations/messenger/Messenger.operations';
import { telegramOperations } from './operations/telegram/Telegram.operations';
import { whatsappOperations } from './operations/whatsapp/Whatsapp.operations';
import { webchatOperations } from './operations/webchat/WebChat.operations';
import { emailOperations } from './operations/email/Email.operations';
import { enviarMensagemTextoFields } from './fields/instagram/EnviarMensagemTexto.fields';
import { enviarMensagemAudioFields } from './fields/instagram/EnviarMensagemAudio.fields';
import { enviarArquivoFields } from './fields/instagram/EnviarArquivo.fields';
import { responderComentarioFields } from './fields/instagram/ResponderComentario.fields';
import { enviarBotaoFields } from './fields/instagram/EnviarBotao.fields';
import { postarFields } from './fields/instagram/Postar.fields';
import { listarPostagensFields } from './fields/instagram/ListarPostagens.fields';
import { enviarMensagemTextoFields as messengerEnviarMensagemTextoFields } from './fields/messenger/EnviarMensagemTexto.fields';
import { enviarMensagemAudioFields as messengerEnviarMensagemAudioFields } from './fields/messenger/EnviarMensagemAudio.fields';
import { enviarArquivoFields as messengerEnviarArquivoFields } from './fields/messenger/EnviarArquivo.fields';
import { enviarBotaoFields as messengerEnviarBotaoFields } from './fields/messenger/EnviarBotao.fields';
import { enviarMensagemTextoFields as telegramEnviarMensagemTextoFields } from './fields/telegram/EnviarMensagemTexto.fields';
import { enviarMensagemAudioFields as telegramEnviarMensagemAudioFields } from './fields/telegram/EnviarMensagemAudio.fields';
import { enviarArquivoFields as telegramEnviarArquivoFields } from './fields/telegram/EnviarArquivo.fields';
import { enviarMensagemTextoFields as webchatEnviarMensagemTextoFields } from './fields/webchat/EnviarMensagemTexto.fields';
import { enviarArquivoFields as webchatEnviarArquivoFields } from './fields/webchat/EnviarArquivo.fields';
import { enviarEmailTextoFields } from './fields/email/EnviarEmailTexto.fields';
import { enviarEmailArquivosFields } from './fields/email/EnviarEmailArquivos.fields';
import { listarTemplatesFields } from './fields/whatsapp/ListarTemplates.fields';
import { criarTemplateFields } from './fields/whatsapp/CriarTemplate.fields';
import { enviarTemplateFields } from './fields/whatsapp/EnviarTemplate.fields';
import { enviarMensagemTextoFields as whatsappEnviarMensagemTextoFields } from './fields/whatsapp/EnviarMensagemTexto.fields';
import { enviarMensagemAudioFields as whatsappEnviarMensagemAudioFields } from './fields/whatsapp/EnviarMensagemAudio.fields';
import { enviarStickerFields as whatsappEnviarStickerFields } from './fields/whatsapp/EnviarSticker.fields';
import { enviarArquivoFields as whatsappEnviarArquivoFields } from './fields/whatsapp/EnviarArquivo.fields';
import { enviarLocalizacaoFields as whatsappEnviarLocalizacaoFields } from './fields/whatsapp/EnviarLocalizacao.fields';
import { enviarMensagemBotoesFields as whatsappEnviarMensagemBotoesFields } from './fields/whatsapp/EnviarMensagemBotoes.fields';
import { enviarMensagemListasFields as whatsappEnviarMensagemListasFields } from './fields/whatsapp/EnviarMensagemListas.fields';
import { enviarMensagemCTAFields as whatsappEnviarMensagemCTAFields } from './fields/whatsapp/EnviarMensagemCTA.fields';

export class NotificaMeHub implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'NotificaMe Hub',
		name: 'notificaMeHub',
		icon: 'file:icons/notificamehub.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["resource"] === "revenda" ? "Revenda: " + ($parameter["operation"] === "listSubaccounts" ? "Listar Subcontas" : $parameter["operation"]) : $parameter["resource"] + ": " + $parameter["operation"]}}',
		description: 'Integração com NotificaMe Hub API',
		defaults: {
			name: 'NotificaMe Hub',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'notificamehubApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://hub.notificame.com.br/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			resources,
			revendaOperations,
			instagramOperations,
			messengerOperations,
			telegramOperations,
			whatsappOperations,
			webchatOperations,
			emailOperations,
			...enviarMensagemTextoFields,
			...enviarMensagemAudioFields,
			...enviarArquivoFields,
			...responderComentarioFields,
			...enviarBotaoFields,
			...postarFields,
			...listarPostagensFields,
			...messengerEnviarMensagemTextoFields,
			...messengerEnviarMensagemAudioFields,
			...messengerEnviarArquivoFields,
			...messengerEnviarBotaoFields,
			...telegramEnviarMensagemTextoFields,
			...telegramEnviarMensagemAudioFields,
			...telegramEnviarArquivoFields,
			...webchatEnviarMensagemTextoFields,
			...webchatEnviarArquivoFields,
			...enviarEmailTextoFields,
			...enviarEmailArquivosFields,
			...listarTemplatesFields,
			...criarTemplateFields,
			...enviarTemplateFields,
			...whatsappEnviarMensagemTextoFields,
			...whatsappEnviarMensagemAudioFields,
			...whatsappEnviarStickerFields,
			...whatsappEnviarArquivoFields,
			...whatsappEnviarLocalizacaoFields,
			...whatsappEnviarMensagemBotoesFields,
			...whatsappEnviarMensagemListasFields,
			...whatsappEnviarMensagemCTAFields,
		],
	};
} 