import { IHttpRequestMethods } from 'n8n-workflow';

export const enviarBotaoTransport = {
	request: {
		method: 'POST' as IHttpRequestMethods,
		url: '/channels/facebook/messages',
		body: {
			from: '={{$parameter["channelId"]}}',
			to: '={{$parameter["recipientId"]}}',
			contents: [
				{
					type: 'template',
					template: {
						template_type: '={{$parameter["templateType"]}}',
						text: '={{$parameter["templateType"] === "button" ? $parameter["text"] : undefined}}',
						title: '={{$parameter["templateType"] === "coupon" ? $parameter["couponTitle"] : $parameter["templateType"] === "customer_feedback" ? $parameter["feedbackTitle"] : undefined}}',
						subtitle: '={{$parameter["templateType"] === "customer_feedback" ? $parameter["feedbackSubtitle"] : undefined}}',
						button_title: '={{$parameter["templateType"] === "customer_feedback" ? $parameter["buttonTitle"] : undefined}}',
						coupon_code: '={{$parameter["templateType"] === "coupon" ? $parameter["couponCode"] : undefined}}',
						buttons: '={{$parameter["templateType"] === "button" ? $parameter["buttons"].buttonsValues.map(button => ({type: button.type === "url" ? "web_url" : "postback", title: button.title, ...(button.type === "url" ? {url: button.value} : {payload: button.value})})) : undefined}}',
						feedback_screens: '={{$parameter["templateType"] === "customer_feedback" ? [{ questions: [{ id: "question_1", type: "csat", title: $parameter["feedbackTitle"], score_label: "neg_pos", score_option: "five_stars", follow_up: { type: "free_form", placeholder: "Deixe seu comentário adicional" } }] }] : undefined}}',
						business_privacy: '={{$parameter["templateType"] === "customer_feedback" ? { url: $parameter["privacyUrl"] } : undefined}}',
						expires_in_days: '={{$parameter["templateType"] === "customer_feedback" ? $parameter["expiresInDays"] : undefined}}',
						recipient_name: '={{$parameter["templateType"] === "receipt" ? $parameter["recipientName"] : undefined}}',
						order_number: '={{$parameter["templateType"] === "receipt" ? $parameter["orderNumber"] : undefined}}',
						currency: '={{$parameter["templateType"] === "receipt" ? $parameter["currency"] : undefined}}',
						payment_method: '={{$parameter["templateType"] === "receipt" ? $parameter["paymentMethod"] : undefined}}',
						order_url: '={{$parameter["templateType"] === "receipt" ? $parameter["orderUrl"] : undefined}}',
						timestamp: '={{$parameter["templateType"] === "receipt" ? $parameter["timestamp"] : undefined}}',
						address: '={{$parameter["templateType"] === "receipt" ? { "street_1": $parameter["address"].addressFields["street1"], "street_2": $parameter["address"].addressFields["street2"], "city": $parameter["address"].addressFields["city"], "postal_code": $parameter["address"].addressFields["postalCode"], "state": $parameter["address"].addressFields["state"], "country": $parameter["address"].addressFields["country"] } : undefined}}',
						summary: '={{$parameter["templateType"] === "receipt" ? { "subtotal": $parameter["summary"].summaryFields["subtotal"], "shipping_cost": $parameter["summary"].summaryFields["shippingCost"], "total_tax": $parameter["summary"].summaryFields["totalTax"], "total_cost": $parameter["summary"].summaryFields["totalCost"] } : undefined}}',
						adjustments: '={{$parameter["templateType"] === "receipt" ? $parameter["adjustments"].adjustmentValues.map(adj => ({ "name": adj.name, "amount": adj.amount })) : undefined}}',
						elements: '={{$parameter["templateType"] === "receipt" ? $parameter["elements"].elementValues.map(item => ({ "title": item.title, "subtitle": item.subtitle, "quantity": item.quantity, "price": item.price, "currency": item.currency, "image_url": item.imageUrl })) : undefined}}'
					}
				}
			]
		}
	}
}; 