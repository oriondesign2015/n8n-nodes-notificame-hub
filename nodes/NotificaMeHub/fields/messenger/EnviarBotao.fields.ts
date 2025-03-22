import { INodeProperties } from 'n8n-workflow';

export const enviarBotaoFields: INodeProperties[] = [
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
		description: 'ID do destinatário no Messenger',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
			},
		},
	},
	{
		displayName: 'Tipo Do Template',
		name: 'templateType',
		type: 'options',
		options: [
			{
				name: 'Botões',
				value: 'button',
				description: 'Template com botões simples',
			},
			{
				name: 'Cupom',
				value: 'coupon',
				description: 'Template de cupom de desconto',
			},
			{
				name: 'Avaliação',
				value: 'customer_feedback',
				description: 'Template de pesquisa de satisfação',
			},
			{
				name: 'Recibo',
				value: 'receipt',
				description: 'Template de recibo de compra',
			}
		],
		default: 'button',
		description: 'Tipo do template a ser enviado',
		displayOptions: {
			show: {
				resource: ['messenger'],
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
		description: 'Texto que será exibido junto com os botões',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['button'],
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
		},
		default: {},
		options: [
			{
				name: 'buttonsValues',
				displayName: 'Botões',
				values: [
					{
						displayName: 'Tipo',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'URL',
								value: 'url',
							},
							{
								name: 'Resposta',
								value: 'postback',
							},
						],
						default: 'url',
					},
					{
						displayName: 'Título',
						name: 'title',
						type: 'string',
						default: '',
						description: 'Texto que será exibido no botão',
					},
					{
						displayName: 'Valor',
						name: 'value',
						type: 'string',
						default: '',
						description: 'URL ou texto de resposta do botão',
					},
				],
			},
		],
		description: 'Lista de botões que serão exibidos (máximo 3)',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['button'],
			},
		},
	},
	{
		displayName: 'Título Do Cupom',
		name: 'couponTitle',
		type: 'string',
		required: true,
		default: '',
		description: 'Título que será exibido no cupom',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['coupon'],
			},
		},
	},
	{
		displayName: 'Código Do Cupom',
		name: 'couponCode',
		type: 'string',
		required: true,
		default: '',
		description: 'Código do cupom de desconto',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['coupon'],
			},
		},
	},
	{
		displayName: 'Título Da Avaliação',
		name: 'feedbackTitle',
		type: 'string',
		required: true,
		default: '',
		description: 'Título principal da avaliação',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['customer_feedback'],
			},
		},
	},
	{
		displayName: 'Subtítulo Da Avaliação',
		name: 'feedbackSubtitle',
		type: 'string',
		required: true,
		default: '',
		description: 'Texto explicativo da avaliação',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['customer_feedback'],
			},
		},
	},
	{
		displayName: 'Texto Do Botão',
		name: 'buttonTitle',
		type: 'string',
		required: true,
		default: 'Avaliar',
		description: 'Texto que será exibido no botão de avaliação',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['customer_feedback'],
			},
		},
	},
	{
		displayName: 'URL Da Política De Privacidade',
		name: 'privacyUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL da política de privacidade do negócio',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['customer_feedback'],
			},
		},
	},
	{
		displayName: 'Dias Para Expirar',
		name: 'expiresInDays',
		type: 'number',
		required: true,
		default: 3,
		description: 'Número de dias até a avaliação expirar',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['customer_feedback'],
			},
		},
	},
	{
		displayName: 'Título Da Compra',
		name: 'orderTitle',
		type: 'string',
		required: true,
		default: '',
		description: 'Título da confirmação de compra',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['order_confirmed'],
			},
		},
	},
	{
		displayName: 'Subtítulo Da Compra',
		name: 'orderSubtitle',
		type: 'string',
		required: true,
		default: '',
		description: 'Texto explicativo da compra',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['order_confirmed'],
			},
		},
	},
	{
		displayName: 'Número Do Pedido',
		name: 'orderNumber',
		type: 'string',
		required: true,
		default: '',

		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['receipt'],
			},
		},
	},
	{
		displayName: 'Moeda',
		name: 'currency',
		type: 'string',
		required: true,
		default: 'BRL',
		description: 'Código da moeda (ex: BRL, USD)',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['receipt'],
			},
		},
	},
	{
		displayName: 'Método De Pagamento',
		name: 'paymentMethod',
		type: 'string',
		required: true,
		default: '',
		description: 'Método de pagamento utilizado',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['receipt'],
			},
		},
	},
	{
		displayName: 'URL Do Pedido',
		name: 'orderUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL para acompanhamento do pedido',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['receipt'],
			},
		},
	},
	{
		displayName: 'Data Do Pedido',
		name: 'timestamp',
		type: 'string',
		required: true,
		default: '',
		description: 'Data do pedido em timestamp',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['receipt'],
			},
		},
	},
	{
		displayName: 'Endereço',
		name: 'address',
		type: 'fixedCollection',
		default: {},
		options: [
			{
				name: 'addressFields',
				displayName: 'Campos Do Endereço',
				values: [
					{
						displayName: 'Rua',
						name: 'street1',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Complemento',
						name: 'street2',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Cidade',
						name: 'city',
						type: 'string',
						default: '',
					},
					{
						displayName: 'CEP',
						name: 'postalCode',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Estado',
						name: 'state',
						type: 'string',
						default: '',
					},
					{
						displayName: 'País',
						name: 'country',
						type: 'string',
						default: 'BR',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['receipt'],
			},
		},
	},
	{
		displayName: 'Resumo',
		name: 'summary',
		type: 'fixedCollection',
		default: {},
		options: [
			{
				name: 'summaryFields',
				displayName: 'Valores',
				values: [
					{
						displayName: 'Subtotal',
						name: 'subtotal',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'Frete',
						name: 'shippingCost',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'Impostos',
						name: 'totalTax',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'Total',
						name: 'totalCost',
						type: 'number',
						default: 0,
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['receipt'],
			},
		},
	},
	{
		displayName: 'Ajustes',
		name: 'adjustments',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		options: [
			{
				name: 'adjustmentValues',
				displayName: 'Ajuste',
				values: [
					{
						displayName: 'Nome',
						name: 'name',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Valor',
						name: 'amount',
						type: 'number',
						default: 0,
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['receipt'],
			},
		},
	},
	{
		displayName: 'Produtos',
		name: 'elements',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		options: [
			{
				name: 'elementValues',
				displayName: 'Produto',
				values: [
					{
						displayName: 'Título',
						name: 'title',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Subtítulo',
						name: 'subtitle',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Quantidade',
						name: 'quantity',
						type: 'number',
						default: 1,
					},
					{
						displayName: 'Preço',
						name: 'price',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'Moeda',
						name: 'currency',
						type: 'string',
						default: 'BRL',
					},
					{
						displayName: 'URL Da Imagem',
						name: 'imageUrl',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['receipt'],
			},
		},
	},
	{
		displayName: 'Nome Do Cliente',
		name: 'recipientName',
		type: 'string',
		required: true,
		default: '',
		description: 'Nome do cliente que realizou a compra',
		displayOptions: {
			show: {
				resource: ['messenger'],
				operation: ['enviarBotao'],
				templateType: ['receipt'],
			},
		},
	}
]; 