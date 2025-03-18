import { INodeProperties } from 'n8n-workflow';

export const enviarMensagemAudioFields: INodeProperties[] = [
	{
		displayName: 'ID do Canal',
		name: 'channelId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do canal do Telegram',
		displayOptions: {
			show: {
				resource: ['telegram'],
				operation: ['enviarAudio'],
			},
		},
	},
	{
		displayName: 'ID do Destinatário',
		name: 'recipientId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do destinatário no Telegram',
		displayOptions: {
			show: {
				resource: ['telegram'],
				operation: ['enviarAudio'],
			},
		},
	},
	{
		displayName: 'URL do Áudio',
		name: 'audioUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL pública do arquivo de áudio',
		displayOptions: {
			show: {
				resource: ['telegram'],
				operation: ['enviarAudio'],
			},
		},
	},
]; 