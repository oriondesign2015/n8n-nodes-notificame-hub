import { INodeProperties } from 'n8n-workflow';

export const responderPerguntaFields: INodeProperties[] = [
	{
		displayName: 'ID Do Canal',
		name: 'channelId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do canal do Mercado Livre',
		displayOptions: {
			show: {
				resource: ['mercadolivre'],
				operation: ['responderPergunta'],
			},
		},
	},
	{
		displayName: 'ID Da Pergunta',
		name: 'questionId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID da pergunta no Mercado Livre',
		displayOptions: {
			show: {
				resource: ['mercadolivre'],
				operation: ['responderPergunta'],
			},
		},
	},
	{
		displayName: 'Mensagem',
		name: 'message',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		required: true,
		default: '',
		description: 'Texto da resposta à pergunta',
		displayOptions: {
			show: {
				resource: ['mercadolivre'],
				operation: ['responderPergunta'],
			},
		},
	},
]; 