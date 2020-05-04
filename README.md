# highlightjs-unicorn-rails-log
Syntax highlighting using highlight.js for Unicorn Ruby on Rails log files

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8"
  src="/path/to/highlightjs-unicorn-rails-log/dist/unicorn-rails-log.min.js"></script>
<script type="text/javascript">
  hljs.initHighlightingOnLoad();
</script>
```

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsUniRails = require('highlightjs-unicorn-rails-log');

hljs.registerLanguage("unicorn-rails-log", hljsUniRails);
hljs.initHighlightingOnLoad();
```


## License

Highlight.js is released under the MIT License. See [LICENSE][1] file
for details.

### Author

Russell Gray <rgray@sweetpproductions.com>

### Generating the dist files 

```
node ./tools/build.js -t cdn
```

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>

[1]: https://github.com/sweetppro/highlightjs-unicorn-rails-log/blob/master/LICENSE
