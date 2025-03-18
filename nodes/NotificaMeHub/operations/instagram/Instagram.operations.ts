import { INodeProperties } from 'n8n-workflow';
import { enviarMensagemTextoTransport } from '../../transport/instagram/EnviarMensagemTexto.transport';
import { enviarMensagemAudioTransport } from '../../transport/instagram/EnviarMensagemAudio.transport';
import { enviarArquivoTransport } from '../../transport/instagram/EnviarArquivo.transport';
import { responderComentarioTransport } from '../../transport/instagram/ResponderComentario.transport';
import { enviarBotaoTransport } from '../../transport/instagram/EnviarBotao.transport';
import { postarTransport } from '../../transport/instagram/Postar.transport';
import { listarPostagensTransport } from '../../transport/instagram/ListarPostagens.transport';

export const instagramOperations: INodeProperties = {
	displayName: 'Operação',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['instagram'],
		},
	},
	options: [
		{
			name: 'Enviar Texto',
			value: 'enviarTexto',
			description: 'Envia uma mensagem de texto para o Instagram',
			routing: enviarMensagemTextoTransport,
		},
		{
			name: 'Enviar Audio',
			value: 'enviarAudio',
			description: 'Envia uma mensagem de áudio para o Instagram',
			routing: enviarMensagemAudioTransport,
		},
		{
			name: 'Enviar Arquivo',
			value: 'enviarArquivo',
			description: 'Envia um arquivo (imagem ou vídeo) para o Instagram',
			routing: enviarArquivoTransport,
		},
		{
			name: 'Comentário',
			value: 'comentario',
			description: 'Responde a um comentário do Instagram',
			routing: responderComentarioTransport,
		},
		{
			name: 'Enviar Botões',
			value: 'enviarBotao',
			description: 'Envia um template com botões para o Instagram',
			routing: enviarBotaoTransport,
		},
		{
			name: 'Novo Post',
			value: 'postar',
			description: 'Fazer uma publicação no Instagram (feed, stories ou reels)',
			routing: postarTransport,
		},
		{
			name: 'Listar Postagens',
			value: 'listarPostagens',
			description: 'Lista todas as publicações do Instagram',
			routing: listarPostagensTransport,
		},
	],
	default: 'enviarTexto',
}; 