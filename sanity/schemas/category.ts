export default {
    name: "category",
    type: "document",
    title: "Categories",
    fields: [
        {
            name: "name",
            title: "Name of Category",
            type: "string",
        },
        {
            name: "image",
            type: "image",
            title: "Category Image",
        },
        {
            name: "description",
            type: "text",
            title: "Description of the category",
        },
    ]
}