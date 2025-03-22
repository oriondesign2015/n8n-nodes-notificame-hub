import { INodeProperties } from 'n8n-workflow';

export const enviarMensagemTextoFields: INodeProperties[] = [
	{
		displayName: 'Token Do Canal',
		name: 'channelToken',
		type: 'string',
		typeOptions: { password: true },
		required: true,
		default: '',
		description: 'Token do canal do WhatsApp',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarTexto'],
			},
		},
	},
	{
		displayName: 'Número Do Destinatário',
		name: 'recipientNumber',
		type: 'string',
		required: true,
		default: '',
		description: 'Número do destinatário no formato internacional (ex: 5511999999999)',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarTexto'],
			},
		},
	},
	{
		displayName: 'Mensagem',
		name: 'message',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		required: true,
		default: '',
		description: 'Texto da mensagem a ser enviada',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarTexto'],
			},
		},
	},
]; 