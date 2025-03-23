import { INodeProperties } from 'n8n-workflow';
import { responderPerguntaTransport } from '../../transport/mercadolivre/ResponderPergunta.transport';

export const mercadoLivreOperations: INodeProperties = {
	displayName: 'Operação',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['mercadolivre'],
		},
	},
	options: [
		{
			name: 'Responder Pergunta',
			value: 'responderPergunta',
			description: 'Responder uma pergunta do Mercado Livre',
			routing: responderPerguntaTransport,
			action: 'Responder pergunta a mercado livre',
		},
	],
	default: 'responderPergunta',
}; 