import { INodeProperties } from 'n8n-workflow';

export const enviarArquivoFields: INodeProperties[] = [
	{
		displayName: 'ID Do Canal',
		name: 'channelId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do canal do WebChat',
		displayOptions: {
			show: {
				resource: ['webchat'],
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
		description: 'ID do destinatário no WebChat',
		displayOptions: {
			show: {
				resource: ['webchat'],
				operation: ['enviarArquivo'],
			},
		},
	},
	{
		displayName: 'Tipo De Arquivo',
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
				resource: ['webchat'],
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
				resource: ['webchat'],
				operation: ['enviarArquivo'],
			},
		},
	},
	{
		displayName: 'Nome Do Arquivo',
		name: 'fileName',
		type: 'string',
		default: '',
		description: 'Nome do arquivo (opcional)',
		displayOptions: {
			show: {
				resource: ['webchat'],
				operation: ['enviarArquivo'],
			},
		},
	},
]; 