import { INodeProperties } from 'n8n-workflow';

export const listarPostagensFields: INodeProperties[] = [
	{
		displayName: 'ID do Canal',
		name: 'channelId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do canal do Instagram',
		displayOptions: {
			show: {
				resource: ['instagram'],
				operation: ['listarPostagens'],
			},
		},
	},
]; 