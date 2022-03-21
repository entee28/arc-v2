export default {
    name: 'pet',
    title: 'Pet',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'gender',
            title: 'Gender',
            type: 'string',
            options: {
                list: [
                    {
                        value: 'Male',
                        title: 'Male',
                    },
                    {
                        value: 'Female',
                        title: 'Female',
                    }
                ]
            }
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    {
                        value: 'cat',
                        title: 'Cat',
                    },
                    {
                        value: 'dog',
                        title: 'Dog',
                    }
                ]
            }
        },
        {
            name: 'age',
            title: 'Age',
            type: 'number',
            description: 'By months'
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'blockContent',
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            })
        },
    },
}
