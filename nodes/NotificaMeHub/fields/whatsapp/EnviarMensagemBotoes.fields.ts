import { INodeProperties } from 'n8n-workflow';

export const enviarMensagemBotoesFields: INodeProperties[] = [
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
				operation: ['enviarBotoes'],
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
				operation: ['enviarBotoes'],
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
				operation: ['enviarBotoes'],
			},
		},
	},
	{
		displayName: 'Botões',
		name: 'buttons',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
			maxValue: 3,
			sortable: true,
			maxValueReached: 'Limite máximo de 3 botões atingido',
			minValue: 1,
		},
		default: {},
		placeholder: 'Adicionar Botão',
		options: [
			{
				name: 'buttonValues',
				displayName: 'Botão',
				values: [
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						description: 'ID único do botão',
						required: true,
					},
					{
						displayName: 'Título',
						name: 'title',
						type: 'string',
						default: '',
						description: 'Texto que será exibido no botão',
						required: true,
					},
				],
			},
		],
		description: 'Botões que serão exibidos na mensagem (máximo 3)',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarBotoes'],
			},
		},
	},
]; 