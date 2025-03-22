import { INodeProperties } from 'n8n-workflow';

export const criarTemplateFields: INodeProperties[] = [
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
				operation: ['criarTemplate'],
			},
		},
	},
	{
		displayName: 'Nome Do Template',
		name: 'templateName',
		type: 'string',
		required: true,
		default: '',
		description: 'Nome do template a ser criado',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['criarTemplate'],
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
				operation: ['criarTemplate'],
			},
		},
	},
	{
		displayName: 'Categoria',
		name: 'category',
		type: 'options',
		options: [
			{
				name: 'Marketing',
				value: 'MARKETING',
			},
			{
				name: 'Utilitário',
				value: 'UTILITY',
			},
			{
				name: 'Autenticação',
				value: 'AUTHENTICATION',
			},
		],
		default: 'MARKETING',
		description: 'Categoria do template',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['criarTemplate'],
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
						displayName: 'Formato',
						name: 'format',
						type: 'options',
						options: [
							{
								name: 'Texto',
								value: 'TEXT',
							},
							{
								name: 'Imagem',
								value: 'IMAGE',
							},
							{
								name: 'Vídeo',
								value: 'VIDEO',
							},
							{
								name: 'Documento',
								value: 'DOCUMENT',
							},
						],
						default: 'TEXT',
						displayOptions: {
							show: {
								type: ['HEADER'],
							},
						},
					},
					{
						displayName: 'Texto',
						name: 'text',
						type: 'string',
						default: '',
						description: 'Texto do componente (use {{1}}, {{2}}, etc. para parâmetros).',
						displayOptions: {
							show: {
								type: ['HEADER', 'BODY', 'FOOTER'],
							},
						},
					},
					{
						displayName: 'Exemplos',
						name: 'example',
						type: 'json',
						default: '{}',
						description: 'Exemplos para os parâmetros em formato JSON',
						displayOptions: {
							show: {
								type: ['HEADER', 'BODY'],
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
						},
						default: {},
						options: [
							{
								name: 'buttonValues',
								displayName: 'Botão',
								values: [
									{
										displayName: 'Tipo',
										name: 'type',
										type: 'options',
										options: [
											{
												name: 'Resposta Rápida',
												value: 'QUICK_REPLY',
											},
											{
												name: 'URL',
												value: 'URL',
											},
											{
												name: 'Telefone',
												value: 'PHONE_NUMBER',
											},
										],
										default: 'QUICK_REPLY',
									},
									{
										displayName: 'Texto',
										name: 'text',
										type: 'string',
										default: '',
										description: 'Texto do botão',
									},
									{
										displayName: 'URL',
										name: 'url',
										type: 'string',
										default: '',
										description: 'URL para redirecionamento',
										displayOptions: {
											show: {
												type: ['URL'],
											},
										},
									},
									{
										displayName: 'Telefone',
										name: 'phone_number',
										type: 'string',
										default: '',
										description: 'Número de telefone para contato',
										displayOptions: {
											show: {
												type: ['PHONE_NUMBER'],
											},
										},
									},
								],
							},
						],
						displayOptions: {
							show: {
								type: ['BUTTONS'],
							},
						},
					},
				],
			},
		],
		description: 'Componentes do template (cabeçalho, corpo, rodapé, botões)',
		displayOptions: {
			show: {
				resource: ['whatsapp'],
				operation: ['criarTemplate'],
			},
		},
	},
]; 