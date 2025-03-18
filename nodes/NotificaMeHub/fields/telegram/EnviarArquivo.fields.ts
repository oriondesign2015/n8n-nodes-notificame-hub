import { INodeProperties } from 'n8n-workflow';

export const enviarArquivoFields: INodeProperties[] = [
	{
		displayName: 'ID do Canal',
		name: 'channelId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do canal do Telegram',
		displayOptions: {
			show: {
				resource: ['telegram'],
				operation: ['enviarArquivo'],
			},
		},
	},
	{
		displayName: 'ID do Destinatário',
		name: 'recipientId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do destinatário no Telegram',
		displayOptions: {
			show: {
				resource: ['telegram'],
				operation: ['enviarArquivo'],
			},
		},
	},
	{
		displayName: 'Tipo do Arquivo',
		name: 'fileType',
		type: 'options',
		options: [
			{
				name: 'Imagem',
				value: 'image',
			},
			{
				name: 'Vídeo',
				value: 'video',
			},
			{
				name: 'Documento',
				value: 'document',
			},
		],
		default: 'image',
		description: 'Tipo do arquivo a ser enviado',
		displayOptions: {
			show: {
				resource: ['telegram'],
				operation: ['enviarArquivo'],
			},
		},
	},
	{
		displayName: 'URL do Arquivo',
		name: 'fileUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL pública do arquivo',
		displayOptions: {
			show: {
				resource: ['telegram'],
				operation: ['enviarArquivo'],
			},
		},
	},
	{
		displayName: 'Legenda',
		name: 'caption',
		type: 'string',
		required: false,
		default: '',
		description: 'Legenda que será exibida junto com o arquivo',
		displayOptions: {
			show: {
				resource: ['telegram'],
				operation: ['enviarArquivo'],
			},
		},
	},
]; 