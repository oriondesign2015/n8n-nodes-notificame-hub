import { INodeProperties } from 'n8n-workflow';

export const enviarMensagemListasFields: INodeProperties[] = [
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
				operation: ['enviarListas'],
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
				operation: ['enviarListas'],
			},
		},
	},
	{
		displayName: 'Texto do Cabeçalho',
		name: 'headerText',
		type: 'string',
		required: true,
		default: '',
		description: 'Texto que aparecerá no cabeçalho da mensagem (máximo 60 caracteres)',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarListas'],
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
		description: 'Texto principal da mensagem (máximo 1024 caracteres)',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarListas'],
			},
		},
	},
	{
		displayName: 'Texto do Botão',
		name: 'buttonText',
		type: 'string',
		required: true,
		default: 'Ver opções',
		description: 'Texto que será exibido no botão que abre a lista (máximo 20 caracteres)',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarListas'],
			},
		},
	},
	{
		displayName: 'Seções',
		name: 'sections',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
			maxValue: 10,
			sortable: true,
			minValue: 1,
		},
		default: {},
		placeholder: 'Adicionar Seção',
		options: [
			{
				name: 'sectionValues',
				displayName: 'Seção',
				values: [
					{
						displayName: 'Título da Seção',
						name: 'title',
						type: 'string',
						default: '',
						description: 'Título da seção de itens',
						required: true,
					},
					{
						displayName: 'Itens da Lista',
						name: 'rows',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
							maxValue: 10,
							sortable: true,
							minValue: 1,
						},
						default: {},
						placeholder: 'Adicionar Item',
						options: [
							{
								name: 'rowValues',
								displayName: 'Item',
								values: [
									{
										displayName: 'ID',
										name: 'id',
										type: 'string',
										default: '',
										description: 'ID único do item',
										required: true,
									},
									{
										displayName: 'Título',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Título do item (máximo 24 caracteres)',
										required: true,
									},
									{
										displayName: 'Descrição',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Descrição do item (máximo 72 caracteres)',
										required: false,
									},
								],
							},
						],
						description: 'Itens que serão exibidos na seção',
					},
				],
			},
		],
		description: 'Seções de itens que serão exibidas na lista',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarListas'],
			},
		},
	},
]; 