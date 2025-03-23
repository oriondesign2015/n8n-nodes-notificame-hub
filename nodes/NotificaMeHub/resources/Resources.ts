import { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties = {
	displayName: 'Recurso',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Revenda',
			value: 'revenda',
			description: 'Gerenciar subcontas e revendas',
		},
		{
			name: 'Instagram',
			value: 'instagram',
			description: 'Gerenciar canal do Instagram',
		},
		{
			name: 'Messenger',
			value: 'messenger',
			description: 'Gerenciar canal do Messenger',
		},
		{
			name: 'WhatsApp',
			value: 'whatsapp',
			description: 'Gerenciar canal do WhatsApp',
		},
		{
			name: 'Telegram',
			value: 'telegram',
			description: 'Gerenciar canal do Telegram',
		},
		{
			name: 'Mercado Livre',
			value: 'mercadolivre',
			description: 'Responder perguntas de clientes no Mercado Livre',
		},
		{
			name: 'OLX',
			value: 'olx',
			description: 'Enviar mensagens para clientes na OLX',
		},
		{
			name: 'WebChat',
			value: 'webchat',
			description: 'Gerenciar canal de chat para websites',
		},
		{
			name: 'Email',
			value: 'email',
			description: 'Enviar emails com ou sem anexos',
		},
	],
	default: 'revenda',
}; 