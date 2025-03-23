import { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties = {
	displayName: 'Recurso',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Email',
			value: 'email',
			description: 'Enviar emails com ou sem anexos',
		},
		{
			name: 'Instagram',
			value: 'instagram',
			description: 'Gerenciar canal do Instagram',
		},
		{
			name: 'Mercado Livre',
			value: 'mercadolivre',
			description: 'Responder perguntas de clientes no Mercado Livre',
		},
		{
			name: 'Messenger',
			value: 'messenger',
			description: 'Gerenciar canal do Messenger',
		},
		{
			name: 'Revenda',
			value: 'revenda',
			description: 'Gerenciar subcontas e revendas',
		},
		{
			name: 'Telegram',
			value: 'telegram',
			description: 'Gerenciar canal do Telegram',
		},
		{
			name: 'WebChat',
			value: 'webchat',
			description: 'Gerenciar canal de chat para websites',
		},
		{
			name: 'WhatsApp',
			value: 'whatsapp',
			description: 'Gerenciar canal do WhatsApp',
		},
	],
	default: 'whatsapp',
}; 