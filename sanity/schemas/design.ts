export default {
    name: 'design',
    type: 'document',
    title: 'Design',
    fields: [
        {
            name: "images",
            type: "array",
            title: "Design Images",
            of: [{type: "image"}],
        },
        {
            name: "description",
            type: "text",
            title: "Description of the Design",
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
            name: "category",
            title: "Design Category",
            type: "reference",
            to: [{type: "category"}],
        }
    ]
}
