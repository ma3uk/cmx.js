$(function() {

  CMS.init({

<<<<<<< HEAD:demo/js/config.js
		// Name of your site
		siteName: 'CMS.js',

		// Tagline for your site
		siteTagline: 'The Javascript Site Generator',
=======
    // Name of your site or location of logo file, relative to root directory (img/logo.png)
    siteName: 'My Site',

    // Tagline for your site
    siteTagline: 'Your site tagline',
>>>>>>> cdmedia/master:js/config.js

    // Email address
    siteEmail: 'your_email@example.com',

    // Name
    siteAuthor: 'Your Name',

<<<<<<< HEAD:demo/js/config.js
		// Navigation items
		siteNavItems: [
			{ name: 'Github', href: 'https://github.com/cdmedia/cms.js', newWindow: true},
			{ name: 'About'},
			{ name: 'Links'},
		],

		// Posts folder name
		postsFolder: 'demo/posts',
=======
    // Navigation items
    siteNavItems: [
      { name: 'Github', href: 'https://github.com/yourname', newWindow: false},
      { name: 'About'}
    ],

    // Posts folder name
    postsFolder: 'posts',
>>>>>>> cdmedia/master:js/config.js

    // Homepage posts snippet length
    postSnippetLength: 120,

<<<<<<< HEAD:demo/js/config.js
		// Pages folder name
		pagesFolder: 'demo/pages',
=======
    // Pages folder name
    pagesFolder: 'pages',
>>>>>>> cdmedia/master:js/config.js

    // Order of sorting (true for newest to oldest)
    sortDateOrder: true,

    // Posts on Frontpage (blog style)
    postsOnFrontpage: true,

<<<<<<< HEAD:demo/js/config.js
		// Mode 'Github' for Github Pages, 'Apache' for Apache server
		mode: 'Github',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (gh-pages)
		githubUserSettings: {
			username: 'cdmedia',
			repo: 'cms.js'
		}

	});
=======
    // Page as Frontpage (static)
    pageAsFrontpage: '',
>>>>>>> cdmedia/master:js/config.js

    // Posts/Blog on different URL
    postsOnUrl: '',

    // Site fade speed
    fadeSpeed: 300,

    // Site footer text
    footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',

    // Mode 'Github' for Github Pages, 'Server' for Self Hosted. Defaults
    // to Github
    mode: 'Github',

     // If Github mode is set, your Github username and repo name.
    githubUserSettings: {
      username: 'yourusername',
      repo: 'yourrepo'
    },

    // If Github mode is set, choose which Github branch to get files from.
    // Defaults to Github pages branch (gh-pages)
    githubSettings: {
      branch: 'gh-pages',
      host: 'https://api.github.com'
    }

  });

  // Markdown settings
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

});
