import { INodeProperties } from 'n8n-workflow';

export const enviarMensagemTextoFields: INodeProperties[] = [
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
				operation: ['enviarTexto'],
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
				operation: ['enviarTexto'],
			},
		},
	},
	{
		displayName: 'Mensagem',
		name: 'message',
		type: 'string',
		required: true,
		default: '',
		description: 'Texto da mensagem a ser enviada',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarTexto'],
			},
		},
	},
]; 