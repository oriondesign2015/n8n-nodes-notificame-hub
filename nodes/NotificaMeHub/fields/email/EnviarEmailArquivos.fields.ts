import { INodeProperties } from 'n8n-workflow';

export const enviarEmailArquivosFields: INodeProperties[] = [
	{
		displayName: 'ID Do Canal',
		name: 'channelId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do canal de Email',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['enviarEmailArquivos'],
			},
		},
	},
	{
		displayName: 'Email Do Destinatário',
		name: 'recipientEmail',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'nome@exemplo.com',
		description: 'Endereço de email do destinatário',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['enviarEmailArquivos'],
			},
		},
	},
	{
		displayName: 'Assunto',
		name: 'subject',
		type: 'string',
		required: true,
		default: '',
		description: 'Assunto do email',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['enviarEmailArquivos'],
			},
		},
	},
	{
		displayName: 'Template HTML',
		name: 'htmlContent',
		type: 'string',
		typeOptions: {
			editor: 'htmlEditor',
		},
		default: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>Olá!</h1>\n  <p>Este é um email enviado pelo NotificaMe Hub.</p>\n</body>\n</html>',
		noDataExpression: false,
		description: 'Conteúdo HTML do email',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['enviarEmailArquivos'],
			},
		},
	},
	{
		displayName: 'Anexos',
		name: 'attachments',
		placeholder: 'Adicionar Anexo',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['enviarEmailArquivos'],
			},
		},
		options: [
			{
				name: 'attachmentValues',
				displayName: 'Anexo',
				values: [
					{
						displayName: 'URL Do Arquivo',
						name: 'fileUrl',
						type: 'string',
						default: '',
						description: 'URL pública do arquivo a ser anexado',
						required: true,
					},
					{
						displayName: 'Nome Do Arquivo',
						name: 'fileName',
						type: 'string',
						default: '',
						description: 'Nome do arquivo que será exibido no email',
						required: true,
					},
				],
			},
		],
	},
]; 