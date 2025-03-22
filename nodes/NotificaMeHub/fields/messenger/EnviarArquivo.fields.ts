import { INodeProperties } from 'n8n-workflow';

export const enviarArquivoFields: INodeProperties[] = [
	{
		displayName: 'ID Do Canal',
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
		displayName: 'ID Do Destinatário',
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
		displayName: 'Tipo Do Arquivo',
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
		displayName: 'URL Do Arquivo',
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