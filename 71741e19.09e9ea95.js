(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"Highlight",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),c=(n(0),n(71)),s={id:"payments",title:"Payments"},o={unversionedId:"payments",id:"payments",isDocsHomePage:!1,title:"Payments",description:"You can find a list of request body parameters and possible outcomes here.",source:"@site/docs/payments.md",permalink:"/checkout-sdk-ruby/payments",sidebar:"someSidebar",previous:{title:"Environment",permalink:"/checkout-sdk-ruby/environment"},next:{title:"Sources",permalink:"/checkout-sdk-ruby/sources"}},u=[{value:'Request a card payment with a <Highlight color="#25c2a0">card token</Highlight>',id:"request-a-card-payment-with-a-card-token",children:[]},{value:'Request a card payment with a <Highlight color="#25c2a0">full card details</Highlight>',id:"request-a-card-payment-with-a-full-card-details",children:[]},{value:'Request a card payment with a <Highlight color="#25c2a0">an existing card</Highlight>',id:"request-a-card-payment-with-a-an-existing-card",children:[]},{value:'Request a <Highlight color="#25c2a0">3D Secure payment</Highlight>',id:"request-a-3d-secure-payment",children:[]},{value:"Get payment details",id:"get-payment-details",children:[]},{value:"Get payment actions",id:"get-payment-actions",children:[]},{value:"Capture a payment",id:"capture-a-payment",children:[]},{value:"Refund a payment",id:"refund-a-payment",children:[]},{value:"Void a payment",id:"void-a-payment",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(c.b)("span",{style:{color:n,padding:"0.2rem"}},t)},i={rightToc:u,Highlight:p};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"You can find a list of request body parameters and possible outcomes ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://api-reference.checkout.com/#tag/Payments"}),"here"),"."),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("h4",Object(a.a)({parentName:"div"},{id:"using-booleanfalsy-values"}),"Using boolean/falsy values"),Object(c.b)("p",{parentName:"div"},'"nil" or empty strings will be stripped from API calls'),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),'# ignored\npayment_request_source.capture = nil\npayment_request_source.capture = ""\n')),Object(c.b)("p",{parentName:"div"},'but "false" or 0 are retained and sent in the request'),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),"# sent\npayment_request_source.capture = false\npayment_request_source.capture = 0\n")),Object(c.b)("p",{parentName:"div"},"See ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/checkout/checkout-sdk-ruby/blob/master/spec/checkout_sdk/api_resource_spec.rb#L10-L24"}),"api_resource_spec")," for details."))),Object(c.b)("h2",{id:"request-a-card-payment-with-a-card-token"},"Request a card payment with a ",Object(c.b)(p,{color:"#25c2a0",mdxType:"Highlight"},"card token")),Object(c.b)("p",null,"The card token is generated by front-end integration options such as ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.checkout.com/docs/frames"}),"Frames")," or one of the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.checkout.com/docs/sdks#section-mobile-sdk-libraries"}),"Mobile SDKs"),". Keep in mind that this token expires in 15 minutes and can only be used once."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),'payment_request_source = CheckoutSdk::PaymentRequestSource.new\npayment_request_source.type = "token"\npayment_request_source.token = "tok_ubfj2q76miwundwlk72vxt2i7q"\npayment_request_source.amount = 1000\npayment_request_source.currency = "GBP"\npayment_request_source.reference = "ORD-090857"\n\n# Send API call\nresponse = api_resource.request_payment(payment_request_source)\n\n# response parsing\nputs(response.data) # => {...}\nputs(response.body) # => "..."\n')),Object(c.b)("h2",{id:"request-a-card-payment-with-a-full-card-details"},"Request a card payment with a ",Object(c.b)(p,{color:"#25c2a0",mdxType:"Highlight"},"full card details")),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"You need to have a high level of PCI Compliance (SAQ-D) to be able to send requests with full card details. Note that unless this payment option is enabled on your account by Checkout.com, the ",Object(c.b)(p,{color:"#5A522C",mdxType:"Highlight"},"request will fail"),". Contact you account manager to request access for this payment interaction."))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),'payment_request_source = CheckoutSdk::PaymentRequestSource.new\npayment_request_source.type = "card"\npayment_request_source.card_number = "4242424242424242"\npayment_request_source.card_expiry_month = 6\npayment_request_source.card_expiry_year = 2025\npayment_request_source.card_name = "Bruce Wayne"\npayment_request_source.card_cvv = "100"\npayment_request_source.amount = 1000\npayment_request_source.currency = "GBP"\n\n# Send API call\nresponse = api_resource.request_payment(payment_request_source)\n\n# response parsing\nputs(response.data) # => {...}\nputs(response.body) # => "..."\n')),Object(c.b)("h2",{id:"request-a-card-payment-with-a-an-existing-card"},"Request a card payment with a ",Object(c.b)(p,{color:"#25c2a0",mdxType:"Highlight"},"an existing card")),Object(c.b)("p",null,"After you perform at least one successful payment for a customer, Checkout.com will return a ",Object(c.b)(p,{color:"#02b48f",mdxType:"Highlight"},"source.id"),". This id does not expire, so it can be used to perform subsequent payments without needing the customer to enter the card details again."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),'payment_request_source = CheckoutSdk::PaymentRequestSource.new\npayment_request_source.type = "id"\npayment_request_source.token = "src_vg3tm54ndfbefotjlmgrrvbxli"\npayment_request_source.amount = 1000\npayment_request_source.currency = "GBP"\n\n# Send API call\nresponse = api_resource.request_payment(payment_request_source)\n\n# response parsing\nputs(response.data) # => {...}\nputs(response.body) # => "..."\n')),Object(c.b)("h2",{id:"request-a-3d-secure-payment"},"Request a ",Object(c.b)(p,{color:"#25c2a0",mdxType:"Highlight"},"3D Secure payment")),Object(c.b)("p",null,"You have the ability to authenticate with 3DS in a payment request. The request body is similar to normal card payments, but with some additional parameters. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.checkout.com/docs/3d-secure-payments"}),"Read more about 3DS")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),'payment_request_source = CheckoutSdk::PaymentRequestSource.new\npayment_request_source.type = "token"\npayment_request_source.token = "tok_ubfj2q76miwundwlk72vxt2i7q"\npayment_request_source.amount = 1000\npayment_request_source.currency = "GBP"\npayment_request_source.reference = "ORD-090857"\npayment_request_source.threeds_enabled = true\n\n# Send API call\nresponse = api_resource.request_payment(payment_request_source)\n\n# response parsing\nputs(response.data) # => {...}\nputs(response.body) # => "..."\n')),Object(c.b)("p",null,"3D Secure payments will return a redirection URL. Here is an example of a 3DS response:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "pay_hehfmlkpykeupofyxf7nbr6yyy",\n  "status": "Pending",\n  "customer": {\n    "id": "cus_u4a4zosnrw7ehhzr7jipbkdzo4"\n  },\n  "3ds": {\n    "downgraded": false,\n    "enrolled": "Y"\n  },\n  "_links": {\n    "self": {\n      "href": "https://api.sandbox.checkout.com/payments/pay_hehfmlkpykeupofyxf7nbr6yyy"\n    },\n    "redirect": {\n      "href": "https://sandbox.checkout.com/api2/v2/3ds/acs/sid_feixbit6us3utfedjulm6egnsu"\n    }\n  }\n}\n')),Object(c.b)("p",null,"You can access the redirection URL via the SDK like so:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),"redirectURL = response.data._links.redirect.href\n")),Object(c.b)("h2",{id:"get-payment-details"},"Get payment details"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),'details = api_resource.get_payment_details("pay_juevt3h5mcjulir2t5g3wfug6u") # or with session id sid_XXX\n')),Object(c.b)("h2",{id:"get-payment-actions"},"Get payment actions"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),'actions = api_resource.get_payment_actions("pay_juevt3h5mcjulir2t5g3wfug6u")\n')),Object(c.b)("h2",{id:"capture-a-payment"},"Capture a payment"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),'capture_payment = CheckoutSdk::CapturePayment.new\ncapture_payment.id = "pay_y3oqhf46pyzuxjbcn2giaqnb44"\ncapture_payment.amount = "1000"\ncapture_payment.reference = "your reference"\n\nresponse = api_resource.capture_payment(capture_payment)\n')),Object(c.b)("h2",{id:"refund-a-payment"},"Refund a payment"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),'refund_payment = CheckoutSdk::RefundPayment.new\nrefund_payment.id = "pay_y3oqhf46pyzuxjbcn2giaqnb44"\nrefund_payment.amount = "1000"\nrefund_payment.reference = "your reference"\n\nresponse = api_resource.refund_payment(refund_payment)\n')),Object(c.b)("h2",{id:"void-a-payment"},"Void a payment"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),'void_payment = CheckoutSdk::VoidPayment.new\nvoid_payment.id = "pay_y3oqhf46pyzuxjbcn2giaqnb44"\nvoid_payment.reference = "your reference"\n\nresponse = api_resource.void_payment(void_payment)\n')))}m.isMDXComponent=!0},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(n),l=a,b=m["".concat(s,".").concat(l)]||m[l]||d[l]||c;return n?r.a.createElement(b,o(o({ref:t},p),{},{components:n})):r.a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=l;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<c;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);