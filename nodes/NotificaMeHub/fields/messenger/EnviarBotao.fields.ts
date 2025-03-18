import { INodeProperties } from 'n8n-workflow';

export const enviarBotaoFields: INodeProperties[] = [
	{
		displayName: 'ID do Canal',
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
		displayName: 'ID do Destinatário',
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
		displayName: 'Tipo do Template',
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
		displayName: 'Título do Cupom',
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
		displayName: 'Código do Cupom',
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
		displayName: 'Título da Avaliação',
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
		displayName: 'Subtítulo da Avaliação',
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
		displayName: 'Texto do Botão',
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
		displayName: 'URL da Política de Privacidade',
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
		displayName: 'Dias para Expirar',
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
		displayName: 'Título da Compra',
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
		displayName: 'Subtítulo da Compra',
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
		displayName: 'Número do Pedido',
		name: 'orderNumber',
		type: 'string',
		required: true,
		default: '',
		description: 'Número do pedido',
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
		displayName: 'Método de Pagamento',
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
		displayName: 'URL do Pedido',
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
		displayName: 'Data do Pedido',
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
				displayName: 'Campos do Endereço',
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
						displayName: 'URL da Imagem',
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
		displayName: 'Nome do Cliente',
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