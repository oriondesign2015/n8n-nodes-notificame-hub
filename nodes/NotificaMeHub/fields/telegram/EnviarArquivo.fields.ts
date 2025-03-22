import { INodeProperties } from 'n8n-workflow';

export const enviarArquivoFields: INodeProperties[] = [
	{
		displayName: 'ID Do Canal',
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
		displayName: 'ID Do Destinatário',
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
		displayName: 'Tipo Do Arquivo',
		name: 'fileType',
		type: 'options',
		options: [
			{
				name: 'Documento',
				value: 'document',
				description: 'Qualquer tipo de arquivo como documento',
			},
			{
				name: 'Foto',
				value: 'photo',
				description: 'Imagem para ser enviada como foto',
			},
			{
				name: 'Vídeo',
				value: 'video',
				description: 'Arquivo de vídeo',
			},
		],
		default: 'document',
		description: 'Tipo do arquivo a ser enviado',
		displayOptions: {
			show: {
				resource: ['telegram'],
				operation: ['enviarArquivo'],
			},
		},
	},
	{
		displayName: 'URL Do Arquivo',
		name: 'fileUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL pública do arquivo a ser enviado',
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

		default: ' ',
		description: 'Legenda opcional para o arquivo',
		displayOptions: {
			show: {
				resource: ['telegram'],
				operation: ['enviarArquivo'],
			},
		},
	},
]; 