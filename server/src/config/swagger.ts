import swaggerJSDoc from 'swagger-jsdoc'
import { SwaggerUiOptions } from 'swagger-ui-express'

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi:'3.0.2',
        tags: [
            {
                name:'Products',
                description:'API operation related to products'
            }
    ],
        info:{
            title:'REST API Node.js/ Express/ TypeScript ',
            version:'1.0.0',
            description: 'API Docs for Products'
        }
    },
    apis:['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions: SwaggerUiOptions= {
    customSiteTitle:'Documentacion REST API Express/Typescript'
}
export default swaggerSpec

export {
    swaggerUiOptions
}