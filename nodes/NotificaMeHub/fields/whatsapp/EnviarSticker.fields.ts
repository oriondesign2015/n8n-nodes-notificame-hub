import { INodeProperties } from 'n8n-workflow';

export const enviarStickerFields: INodeProperties[] = [
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
				operation: ['enviarSticker'],
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
				operation: ['enviarSticker'],
			},
		},
	},
	{
		displayName: 'URL do Sticker',
		name: 'stickerUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL pública do arquivo de sticker (WebP)',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarSticker'],
			},
		},
	},
]; 