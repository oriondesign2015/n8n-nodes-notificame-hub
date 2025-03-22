import { INodeProperties } from 'n8n-workflow';

export const postarFields: INodeProperties[] = [
	{
		displayName: 'ID Do Canal',
		name: 'channelId',
		type: 'string',
		required: true,
		default: '',
		description: 'ID do canal do Instagram',
		displayOptions: {
			show: {
				resource: ['instagram'],
				operation: ['postar'],
			},
		},
	},
	{
		displayName: 'Tipo Da Postagem',
		name: 'postType',
		type: 'options',
		options: [
			{
				name: 'Feed',
				value: 'feed',
				description: 'Publicar no feed (apenas imagens)',
			},
			{
				name: 'Stories',
				value: 'stories',
				description: 'Publicar nos stories (imagens e vídeos)',
			},
			{
				name: 'Reels',
				value: 'reels',
				description: 'Publicar nos reels (apenas vídeos)',
			},
		],
		default: 'feed',
		description: 'Onde a mídia será publicada',
		displayOptions: {
			show: {
				resource: ['instagram'],
				operation: ['postar'],
			},
		},
	},
	{
		displayName: 'URL Do Arquivo',
		name: 'fileUrl',
		type: 'string',
		required: true,
		default: '',
		description: 'URL pública do arquivo a ser postado',
		displayOptions: {
			show: {
				resource: ['instagram'],
				operation: ['postar'],
			},
		},
	},
	{
		displayName: 'Legenda',
		name: 'caption',
		type: 'string',

		default: '',
		description: 'Legenda da postagem',
		displayOptions: {
			show: {
				resource: ['instagram'],
				operation: ['postar'],
			},
		},
	},
]; 