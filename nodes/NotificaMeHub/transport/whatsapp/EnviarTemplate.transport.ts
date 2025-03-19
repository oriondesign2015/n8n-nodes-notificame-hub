import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarTemplateTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/whatsapp/messages',
		body: {
			from: '={{$parameter["channelToken"]}}',
			to: '={{$parameter["recipientNumber"]}}',
			contents: [
				{
					type: 'template',
					template: {
						name: '={{$parameter["templateName"]}}',
						components: '={{$parameter["components"].componentValues.map(component => ({type: component.type, parameters: component.parameters.parameterValues.map(param => param.useParameterName ? {type: "text", parameter_name: param.parameterName, text: param.text} : {type: "text", text: param.text})}))}}',
						language: {
							code: '={{$parameter["language"]}}'
						}
					}
				}
			]
		}
	}
}; 