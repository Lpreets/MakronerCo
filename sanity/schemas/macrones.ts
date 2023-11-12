export default {
    name: 'macron',
    type: 'document',
    title: 'Makron',
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name of the Macron"
        },
        {
            name: "images",
            type: "array",
            title: "Macron Images",
            of: [{type: "image"}],
        },
        {
            name: "description",
            type: "text",
            title: "Description of the Macron",
        },
        {
            name: "slug",
            type: "slug",
            title: "Product Slug",
            options: {
                source: "name",
                maxLength: 100,
            },
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        },
        {
            name: "price_id",
            title: "Stripe Price ID",
            type: "string",
        },
        {
            name: "category",
            title: "Macron Category",
            type: "reference",
            to: [{type: "category"}],
        }
    ]
}
