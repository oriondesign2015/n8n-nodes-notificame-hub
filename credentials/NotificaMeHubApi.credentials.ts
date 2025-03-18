import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class NotificaMeHubApi implements ICredentialType {
	name = 'notificamehubApi';
	displayName = 'NotificaMe Hub API';
	documentationUrl = 'https://api.notificame.com.br/docs';
	properties: INodeProperties[] = [
		{
			displayName: 'Token da API',
			name: 'token',
			type: 'string',
			default: '',
			required: true,
			typeOptions: {
				password: true,
			},
		},
	];

	// This allows the credential to be used by other parts of n8n
	// stating how this credential is injected as part of the request
	// An example is the Http Request node that can make generic calls
	// reusing this credential
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-Api-Token': '={{$credentials.token}}',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.notificame.com.br/v1',
			url: '/resale',
		},
	};
}
