import { INodeProperties } from 'n8n-workflow';

export const enviarLocalizacaoFields: INodeProperties[] = [
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
				operation: ['enviarLocalizacao'],
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
				operation: ['enviarLocalizacao'],
			},
		},
	},
	{
		displayName: 'Latitude',
		name: 'latitude',
		type: 'number',
		required: true,
		default: 0,
		description: 'Latitude da localização',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarLocalizacao'],
			},
		},
	},
	{
		displayName: 'Longitude',
		name: 'longitude',
		type: 'number',
		required: true,
		default: 0,
		description: 'Longitude da localização',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarLocalizacao'],
			},
		},
	},
	{
		displayName: 'Nome Da Localização',
		name: 'locationName',
		type: 'string',
		required: true,
		default: '',

		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarLocalizacao'],
			},
		},
	},
	{
		displayName: 'Endereço Da Localização',
		name: 'locationAddress',
		type: 'string',
		required: true,
		default: '',

		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarLocalizacao'],
			},
		},
	},
]; 