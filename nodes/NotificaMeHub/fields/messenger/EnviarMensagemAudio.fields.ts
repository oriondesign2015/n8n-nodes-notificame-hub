import { INodeProperties } from 'n8n-workflow';

export const enviarMensagemAudioFields: INodeProperties[] = [
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
				operation: ['enviarAudio'],
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
				operation: ['enviarAudio'],
			},
		},
	},
	{
		displayName: 'URL Do Áudio',
		name: 'audioUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL pública do arquivo de áudio',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarAudio'],
			},
		},
	},
]; 