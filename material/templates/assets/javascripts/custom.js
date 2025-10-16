function do_print() {
}

function do_not_print() {
}

document$.subscribe(({ body }) => {
    renderMathInElement(body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
        ],
        macros: {
            // https://github.com/whk-wiki/whk-wiki/blob/main/config/macros.config.js
            "\\i": "\\mathrm{i}",
            "\\d": "\\mathrm{d}",
            "\\C": "\\mathbb{C}",
            "\\R": "\\mathbb{R}",
            "\\Q": "\\mathbb{Q}",
            "\\Z": "\\mathbb{Z}",
            "\\N": "\\mathbb{N}",
            "\\P": "\\mathbb{P}",
            "\\degree": "^\\circ",
            "\\op": "\\operatorname",
            "\\la": "\\left\\langle",
            "\\ra": "\\right\\rangle",
            "\\lc": "\\left\\lceil",
            "\\rc": "\\right\\rceil",
            "\\lf": "\\left\\lfloor",
            "\\rf": "\\right\\rfloor",
            "\\lv": "\\left\\lvert",
            "\\rv": "\\right\\rvert",
            "\\paren": "\\left({#1}\\right)",
            "\\bracket": "\\left[{#1}\\right]",
            "\\brace": "\\left\\{{#1}\\right\\}",
            "\\ceil": "\\left\\lceil{#1}\\right\\rceil",
            "\\floor": "\\left\\lfloor{#1}\\right\\rfloor",
            "\\vert": "\\left\\lvert{#1}\\right\\rvert",
			"\\vec": "\\bm",
			"\\vecc": "\\overrightarrow",
			"\\mol": "\\operatorname{mol}",
            "\\thermo": "\\ce{#1};\\quad\\Delta H=\\pu{#2}",
            "\\cat": "\\ce{催化剂}",
            "\\heat": "\\triangle",
            "\\poly": "\\ce{-\\!\\!\\![ #1 ]_n\\!\\!\\!\\!\\!-}",
            "\\el": "#1\\mathrm{#2}^{#3}",
            "’": "'",
        },
        trust: true,
    });
});
