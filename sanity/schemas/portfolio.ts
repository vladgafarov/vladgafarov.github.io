import { defineField, defineType } from "sanity";

export default defineType({
	name: 'portfolio',
	title: 'Portfolio',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'stack',
			title: 'Stack',
			type: 'array',
			of: [{type: 'string'}],
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'github',
			title: 'Github',
			type: 'url'
		}),
		defineField({
			name: 'website',
			title: 'Website',
			type: 'url'
		}),
		defineField({
			name: 'image',
			title: "Image",
			type: 'image',
			options: {
				hotspot: true
			}
		})
	]
})
