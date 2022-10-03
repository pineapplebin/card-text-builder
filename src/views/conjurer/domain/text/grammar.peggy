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
Char = EngChar / HansChar / [\[\]] / " "

Symbol "symbol"
  = "{" _ s:([0-9a-zA-Z]+) _ "}" {
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
  = (Num / "/" / "\u2022")+ {
    return {
        type: 'number',
        text: text()
      }
  }

FormatTag = "ib" / "i" / "b"

Formatted "Fomatted"
  = "<" start:FormatTag ">" _ body:(PureNum / Symbol / Modifier / Char)* _ "</" end:FormatTag ">" {
    if (start != end) {
      error('tag start not matching end')
    }

    return {
      type: 'formatted',
      italic: start.indexOf('i') > -1,
      bookFont: start.indexOf('b') > -1,
      body: body || []
    }
  }

Flavor "flavor"
  = "<f>" {
    return {
      type: 'flavor'
    }
  }

Line = _ body:(Modifier / PureNum / Symbol / Flavor / Formatted / Char)* _ {
	return body || []
}
