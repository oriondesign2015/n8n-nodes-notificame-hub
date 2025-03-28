import { INodeProperties } from 'n8n-workflow';

export const enviarTemplateFields: INodeProperties[] = [
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
				operation: ['enviarTemplate'],
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
				operation: ['enviarTemplate'],
			},
		},
	},
	{
		displayName: 'Nome Do Template',
		name: 'templateName',
		type: 'string',
		required: true,
		default: '',
		description: 'Nome do template a ser enviado',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarTemplate'],
			},
		},
	},
	{
		displayName: 'Idioma',
		name: 'language',
		type: 'options',
		options: [
			{
				name: 'Português (Brasil)',
				value: 'pt_BR',
			},
			{
				name: 'Inglês (EUA)',
				value: 'en_US',
			},
			{
				name: 'Espanhol',
				value: 'es',
			},
		],
		default: 'pt_BR',
		description: 'Idioma do template',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarTemplate'],
			},
		},
	},
	{
		displayName: 'Componentes',
		name: 'components',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		options: [
			{
				name: 'componentValues',
				displayName: 'Componente',
				values: [
					{
						displayName: 'Tipo',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Cabeçalho',
								value: 'HEADER',
							},
							{
								name: 'Corpo',
								value: 'BODY',
							},
							{
								name: 'Rodapé',
								value: 'FOOTER',
							},
							{
								name: 'Botões',
								value: 'BUTTONS',
							},
						],
						default: 'BODY',
					},
					{
						displayName: 'Parâmetros',
						name: 'parameters',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						options: [
							{
								name: 'parameterValues',
								displayName: 'Parâmetro',
								values: [
									{
										displayName: 'Usar Nome Do Parâmetro',
										name: 'useParameterName',
										type: 'boolean',
										default: false,
										description: 'Whether to use the parameter name instead of position',
									},
									{
										displayName: 'Nome Do Parâmetro',
										name: 'parameterName',
										type: 'string',
										default: '',
										description: 'Nome do parâmetro (ex: nome, valor, data)',
										displayOptions: {
											show: {
												useParameterName: [true],
											},
										},
									},
									{
										displayName: 'Texto',
										name: 'text',
										type: 'string',
										default: '',
										description: 'Valor do parâmetro',
									},
								],
							},
						],
					},
				],
			},
		],
		description: 'Componentes do template com seus parâmetros',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['enviarTemplate'],
			},
		},
	},
]; 