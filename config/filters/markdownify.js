import MarkdownIt from "markdown-it"

const md = new MarkdownIt({
	html: true,
	breaks: true,
	linkify: true,
	typographer: true
})

export default markdown => md.render(markdown)
