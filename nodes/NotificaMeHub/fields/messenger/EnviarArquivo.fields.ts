import { INodeProperties } from 'n8n-workflow';

export const enviarArquivoFields: INodeProperties[] = [
	{
		displayName: 'ID do Canal',
		name: 'channelId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do canal do Messenger',
		displayOptions: {
			show: {
				resource: ['messenger'],
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
		description: 'ID do destinatário no Messenger',
		displayOptions: {
			show: {
				resource: ['messenger'],
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
		],
		default: 'image',
		description: 'Tipo do arquivo a ser enviado',
		displayOptions: {
			show: {
				resource: ['messenger'],
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
				resource: ['messenger'],
				operation: ['enviarArquivo'],
			},
		},
	},
]; 