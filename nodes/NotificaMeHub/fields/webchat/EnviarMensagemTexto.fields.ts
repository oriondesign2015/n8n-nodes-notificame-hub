import { INodeProperties } from 'n8n-workflow';

export const enviarMensagemTextoFields: INodeProperties[] = [
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
				operation: ['enviarTexto'],
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
				resource: ['webchat'],
				operation: ['enviarTexto'],
			},
		},
	},
]; 