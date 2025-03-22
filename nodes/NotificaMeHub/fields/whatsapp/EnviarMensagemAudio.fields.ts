import { INodeProperties } from 'n8n-workflow';

export const enviarMensagemAudioFields: INodeProperties[] = [
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
				operation: ['enviarAudio'],
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
		description: 'URL pública do arquivo de áudio (MP3, OGG)',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarAudio'],
			},
		},
	},
]; 