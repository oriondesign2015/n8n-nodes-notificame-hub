import { INodeProperties } from 'n8n-workflow';

export const responderComentarioFields: INodeProperties[] = [
	{
		displayName: 'ID Do Canal',
		name: 'channelId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do canal do Instagram',
		displayOptions: {
			show: {
				resource: ['instagram'],
				operation: ['comentario'],
			},
		},
	},
	{
		displayName: 'ID Do Destinatário',
		name: 'recipientId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do destinatário no Instagram',
		displayOptions: {
			show: {
				resource: ['instagram'],
				operation: ['comentario'],
			},
		},
	},
	{
		displayName: 'ID Do Comentário',
		name: 'messageId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do comentário a ser respondido',
		displayOptions: {
			show: {
				resource: ['instagram'],
				operation: ['comentario'],
			},
		},
	},
	{
		displayName: 'Resposta',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		description: 'Texto da resposta ao comentário',
		displayOptions: {
			show: {
				resource: ['instagram'],
				operation: ['comentario'],
			},
		},
	},
]; 