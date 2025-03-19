import { INodeProperties } from 'n8n-workflow';

export const enviarArquivoFields: INodeProperties[] = [
	{
		displayName: 'Token do Canal',
		name: 'channelToken',
		type: 'string',
		required: true,
		default: '',
		description: 'Token do canal do WhatsApp',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarArquivo'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'recipientNumber',
		type: 'string',
		required: true,
		default: '',
		description: 'Número do destinatário no formato internacional (ex: 5511999999999)',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarArquivo'],
			},
		},
	},
	{
		displayName: 'Tipo de Arquivo',
		name: 'fileType',
		type: 'options',
		options: [
			{
				name: 'Documento',
				value: 'document',
			},
			{
				name: 'Imagem',
				value: 'image',
			},
			{
				name: 'Vídeo',
				value: 'video',
			},
		],
		default: 'document',
		description: 'Tipo de arquivo a ser enviado',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
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
		description: 'URL pública do arquivo a ser enviado',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarArquivo'],
			},
		},
	},
	{
		displayName: 'Legenda',
		name: 'caption',
		type: 'string',
		required: false,
		default: ' ',
		description: 'Legenda opcional para o arquivo',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarArquivo'],
			},
		},
	},
]; 