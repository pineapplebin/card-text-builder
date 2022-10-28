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

EngChar = [_a-zA-Z\(\):,]
HansChar "hans-char" = [\u3000-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uff9f]
Char = EngChar / HansChar / [\[\]] / " "

Symbol "symbol"
  = "{" _ s:((EngChar / Num)+) _ "}" {
  	return {
      type: "symbol",
      text: s.join('').toLowerCase()
    }
  }

ModifierPart = ("+" / "-") (Num / "X")+

Modifier "modifier"
  = ModifierPart "/" ModifierPart {
  	return {
    	type: "modifier",
      text: text()
    }
  }

PowNum "pow-num"
  = Num+ "/" Num+ {
    return text()
  }

PureNum "pure-number"
  = (PowNum / Num / "\u2022" / "X")+ {
    // \u2022 是 点号
    return {
        type: 'number',
        text: text()
      }
  }

FormatTag = "i" / "b"

ItalicFormat "italic-format"
  = "<i>" _ body:(PureNum / Symbol / Modifier / Char)* _ "</i>" {
    return {
      type: 'formatted',
      italic: true,
      bookFont: false,
      body: body || []
    }
  }

BookFormat "book-format"
  = "<b>" _ body:(Num / Symbol / Modifier / Char)* _ "</b>" {
    return {
      type: 'formatted',
      italic: false,
      bookFont: true,
      body: body || []
    }
  }


Flavor "flavor"
  = "<f>" {
    return {
      type: 'flavor'
    }
  }

Line = _ body:(Modifier / PureNum / Symbol / Flavor / ItalicFormat / BookFormat / Char)* _ {
	return body || []
}
