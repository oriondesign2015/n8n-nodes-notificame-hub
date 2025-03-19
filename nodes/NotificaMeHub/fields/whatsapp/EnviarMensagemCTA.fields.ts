import { INodeProperties } from 'n8n-workflow';

export const enviarMensagemCTAFields: INodeProperties[] = [
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
				operation: ['enviarCTA'],
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
				operation: ['enviarCTA'],
			},
		},
	},
	{
		displayName: 'Texto do Cabeçalho',
		name: 'headerText',
		type: 'string',
		required: true,
		default: '',
		description: 'Texto que aparecerá no cabeçalho da mensagem',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarCTA'],
			},
		},
	},
	{
		displayName: 'Texto da Mensagem',
		name: 'bodyText',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		required: true,
		default: '',
		description: 'Texto principal da mensagem',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarCTA'],
			},
		},
	},
	{
		displayName: 'Texto do Rodapé',
		name: 'footerText',
		type: 'string',
		required: false,
		default: '',
		description: 'Texto que aparecerá no rodapé da mensagem',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarCTA'],
			},
		},
	},
	{
		displayName: 'Texto do Botão',
		name: 'buttonText',
		type: 'string',
		required: true,
		default: 'Clique aqui',
		description: 'Texto que será exibido no botão',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarCTA'],
			},
		},
	},
	{
		displayName: 'URL do Botão',
		name: 'buttonUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL para onde o botão irá direcionar',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarCTA'],
			},
		},
	},
]; 