import { INodeProperties } from 'n8n-workflow';

export const enviarBotaoFields: INodeProperties[] = [
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
				operation: ['enviarBotao'],
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
				operation: ['enviarBotao'],
			},
		},
	},
	{
		displayName: 'Texto',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		description: 'Texto que aparecerá acima dos botões',
		displayOptions: {
			show: {
				resource: ['instagram'],
				operation: ['enviarBotao'],
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
			minValue: 1,
			sortable: true,
			maxValueReached: 'Limite máximo de 3 botões atingido',
		},
		default: {},
		options: [
			{
				name: 'buttonsValues',
				displayName: 'Botão',
				values: [
					{
						displayName: 'Tipo Do Botão',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Link',
								value: 'web_url',
								description: 'Redireciona para uma URL externa',
							},
							{
								name: 'Resposta Rápida',
								value: 'postback',
								description: 'Envia uma mensagem pré-definida automaticamente',
							},
						],
						default: 'web_url',

						required: true,
					},
					{
						displayName: 'Título',
						name: 'title',
						type: 'string',
						default: '',
						description: 'Texto que aparecerá no botão',
						required: true,
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						description: 'URL para onde o botão irá redirecionar',
						required: true,
						displayOptions: {
							show: {
								type: ['web_url'],
							},
						},
					},
					{
						displayName: 'Resposta',
						name: 'payload',
						type: 'string',
						default: '',
						description: 'Texto que será enviado quando o usuário clicar no botão',
						required: true,
						displayOptions: {
							show: {
								type: ['postback'],
							},
						},
					},
				],
			},
		],
		description: 'Lista de botões (máximo 3)',
		displayOptions: {
			show: {
				resource: ['instagram'],
				operation: ['enviarBotao'],
			},
		},
	},
]; 