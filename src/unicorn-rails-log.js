/*
Language: Rails Unicorn Logging
Description: Syntax highlighting for Unicorn Rails log files.
Website: https://yhbt.net/unicorn/
Author: Russell Gray <rgray@sweetpproductions.com>
*/

export default function (hljs) {
  var UNICORN_KEYWORDS = {
    keyword:
      "rendering rendered completed started post processing by redirected to delivered mail performing layout filter chain halted enqueued performed get in text template for at as HTML JS CSS PNG JPG within from enqueued with redirected or",
    literal: "true false nil",
  };

  var STRING = {
    scope: "string",
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /'/,
        end: /'|\n/,
      },
      {
        begin: /"/,
        end: /"|\n/,
      },
      {
        begin: /`/,
        end: /`|'|\n/,
      },
    ],
  };

  var COMMENT = {
    scope: "comment",
    variants: [
      hljs.COMMENT("#", "$"),
      {
        begin: /\[/,
        end: /\]|\n/,
      },
    ],
  };

  var CLASS = {
    scope: "built_in",
    begin: "\\b\\w*::\\S*",
    relevance: 10,
  };

  var LINK = {
    scope: "link",
    variants: [
      {
        begin: "http(s?):",
        end: "\\S",
        relevance: 10,
      },
    ],
  };

  var FILE = {
    scope: "name",
    variants: [
      {
        begin: "\\b\\w*(\\/)\\S*",
        relevance: 10,
      },
      {
        begin: "\\S*#\\S*",
        relevance: 10,
      },
    ],
  };

  var SYMBOL = {
    scope: "symbol",
    variants: [
      {
        begin: ":\\S",
        end: "\\s",
        relevance: 0,
      },
      {
        begin: e.UNDERSCORE_IDENT_RE + "(\\!|\\?)?:",
        relevance: 0,
      },
      {
        begin: "(\\*).*?(?=:)",
        relevance: 0,
      },
      {
        begin: ":(?!\\s)",
        contains: [n],
        relevance: 0,
      },
      {
        begin: "^\\S*?:",
        relevance: 0,
      },
      {
        begin: "Job ID",
        relevance: 0,
      },
    ],
  };

  var UUID = {
    scope: "literal",
    variants: [
      {
        begin: "[a-zA-Z0-9]*?-",
        end: "\\s",
        relevance: 0,
      },
    ],
  };

  var NUMBER = {
    scope: "number",
    variants: [
      {
        begin: e.NUMBER_RE,
        end: "\\s",
        relevance: 0,
      },
    ],
  };

  return {
    name: "Unicorn Rails log",
    case_insensitive: true,
    keywords: UNICORN_KEYWORDS,
    illegal: /\/\*/,
    contains: [STRING, COMMENT, CLASS, LINK, FILE, SYMBOL, UUID, NUMBER],
  };
}
