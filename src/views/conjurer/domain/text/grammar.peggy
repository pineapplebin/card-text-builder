Top = Line

Zs = [\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]

WhiteSpace "whitespace"
  = "\t"
  / "\v"
  / "\f"
  / " "
  / "\u00A0"
  / "\uFEFF"
  / Zs

_ = (WhiteSpace)*

Num = [0-9]

EngChar = [_a-zA-Z]
HansChar "hans-char" = [\u3000-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uff9f]
Char = EngChar / HansChar / [\[\]]

Symbol "symbol"
  = "{" _ s:([0-9a-z]+) _ "}" {
  	return {
      type: "symbol",
      text: s.join('')
    }
  }

ModifierPart = ("+" / "-") Num+

Modifier "modifier"
  = ModifierPart "/" ModifierPart {
  	return {
    	type: "modifier",
      text: text()
    }
  }


PureNum "pure-number"
  = (Num / "/")+ {
    return {
        type: 'number',
        text: text()
      }
  }

Italic "italic"
  = "<i>" _ body:(PureNum / Symbol / Modifier / Char)* _ "</i>" {
    return {
      type: 'italic',
      body: body || []
    }
  }

Line = _ body:(Modifier / PureNum / Symbol / Italic / Char)* _ {
	return body || []
}
