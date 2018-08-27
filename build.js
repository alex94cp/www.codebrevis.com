const Metalsmith  = require('metalsmith'),
      collections = require('metalsmith-collections'),
      inPlace     = require('metalsmith-in-place'),
      layouts     = require('metalsmith-layouts'),
      permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
	.clean(true)
	.source('src')
	.destination('build')
	.metadata({
		siteName: 'Code Brevis',
		siteURL: 'https://www.codebrevis.com',
	})
	.use(collections({
		news: {
			pattern: 'src/news/*.md',
			sortBy: 'date', reverse: true,
		},
		articles: {
			pattern: 'src/articles/*.md',
			sortBy: 'date', reverse: true,
		},
	}))
	.use(inPlace())
	.use(layouts())
	.use(permalinks())
	.build(err => {
		if (err) throw err;
	});