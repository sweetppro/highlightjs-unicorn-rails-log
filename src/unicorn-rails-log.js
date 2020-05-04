/*
Language: Rails Unicorn Logging
Description: Syntax highlighting for Unicorn Rails log files.
Website: https://yhbt.net/unicorn/
Author: Russell Gray <rgray@sweetpproductions.com>
*/

export default function (hljs) {
  var UNICORN_KEYWORDS = {
    keyword: 'Rendering Rendered Completed Started POST Processing by Redirected to Delivered mail ' + 'Performed GET in text template for at as HTML JS CSS within',
    literal: 'true false nil'
  };

  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [{
        begin: /'/,
        end: /'|\n/
      },
      {
        begin: /"/,
        end: /"|\n/
      },
      {
        begin: /`/,
        end: /`|'|\n/
      }
    ]
  };

  var COMMENT = {
    className: 'comment',
    variants: [
      hljs.COMMENT('#', '$'), {

        begin: /\[/,
        end: /\]|\n/
      }
    ]
  };

  var CLASS = {
    className: 'built_in',
    begin: "\\b\\w*::\\S*",
    relevance: 9
  }

  var FILE = {
    className: 'name',
    variants: [{
        begin: "\\b\\w*(\\/)\\S*",
        relevance: 10
    },
    {
      begin: "\\S*#\\S*",
      relevance: 10
    }
    ]
  }

  var SYMBOL = {
    className: 'symbol',
    variants: [{
        begin: hljs.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
        relevance: 0
      },
      {
        begin: "(\\*).*?(?=:)",
        relevance: 0
      },
      {
        begin: ':(?!\\s)',
        contains: [STRING],
        relevance: 0
      },
      {
        begin: '^\\S*?:',
        relevance: 0
      }
    ]
  };

  return {
    name: 'Unicorn Rails log',
    keywords: UNICORN_KEYWORDS,
    illegal: /\/\*/,
    contains: [
      STRING,
      COMMENT,
      CLASS,
      FILE,
      SYMBOL
    ]
  };
}