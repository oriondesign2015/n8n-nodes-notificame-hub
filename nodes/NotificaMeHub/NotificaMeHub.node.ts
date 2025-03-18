import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { resources } from './resources/Resources';
import { revendaOperations } from './operations/revenda/Revenda.operations';
import { instagramOperations } from './operations/instagram/Instagram.operations';
import { messengerOperations } from './operations/messenger/Messenger.operations';
import { telegramOperations } from './operations/telegram/Telegram.operations';
import { whatsappOperations } from './operations/whatsapp/WhatsApp.operations';
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
import { listarTemplatesFields } from './fields/whatsapp/ListarTemplates.fields';
import { criarTemplateFields } from './fields/whatsapp/CriarTemplate.fields';

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
			...listarTemplatesFields,
			...criarTemplateFields,
		],
	};
} 