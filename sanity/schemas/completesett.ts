export default {
    name: 'completesett',
    type: 'document',
    title: 'Sett',
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name of the Sett"
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
            title: "Description of the Sett",
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
            name: "category",
            title: "Sett Category",
            type: "reference",
            to: [{type: "category"}],
        }
    ]
}
