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
Punctuation = [\(\)\+\\\-\*\.]
HansChar = [\u3000-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uff9f]
Char = EngChar / HansChar / Num / Punctuation

Symbol = "{" key:(Num / EngChar)+ "}" {
	return {
    	type: 'symbol',
        key: key.join('')
    }
}

Chars = (Char / WhiteSpace)+ {
	return text()
}

Content = (FStrong / FItalic / Symbol / Chars)+

FBook = '`' c:(Content) '`' {
	return {
    	type: 'book',
        content: c
    }
}

FStrong = "#" c:(Content) "#" {
	return {
    	type: 'strong',
        content: c
    }
}

FItalic = '%' c:(Content) '%' {
	return {
    	type: 'italic',
        content: c
    }
}

Flavor = "<f>" {
	return {
    	type: 'flavor'
    }
}

Line = _ body:(FBook / Flavor / FStrong / FItalic / Symbol / Chars)* _ {
	return body || []
}
