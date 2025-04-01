import postcss from "postcss"
import postcssMixins from "postcss-mixins"
import postcssPresetEnv from "postcss-preset-env"

import cssnanoDiscardComments from "postcss-discard-comments"
import cssnanoDiscardDuplicates from "postcss-discard-duplicates"
import cssnanoDiscardEmpty from "postcss-discard-empty"
import cssnanoDiscardOverridden from "postcss-discard-overridden"
import cssnanoNormalizeWhitespace from "postcss-normalize-whitespace"

export default postcss([
	postcssMixins({
		mixinsFiles: "./config/mixins.pcss"
	}),
	postcssPresetEnv({
		stage: false,
		features: {
			"all-property": false,
			"any-link-pseudo-class": false,
			"blank-pseudo-class": true,
			"break-properties": false,
			"cascade-layers": false,
			"case-insensitive-attributes": false,
			"clamp": false,
			"color-function": false,
			"color-functional-notation": false,
			"color-mix": false,
			"content-alt-text": false,
			"custom-media-queries": true,
			"custom-properties": false,
			"custom-selectors": true,
			"dir-pseudo-class": false,
			"display-two-values": false,
			"double-position-gradients": false,
			"exponential-functions": false,
			"float-clear-logical-values": false,
			"focus-visible-pseudo-class": false,
			"focus-within-pseudo-class": false,
			"font-format-keywords": true,
			"font-variant-property": false,
			"gamut-mapping": false,
			"gap-properties": false,
			"gradients-interpolation-method": false,
			"has-pseudo-class": false,
			"hexadecimal-alpha-notation": false,
			"hwb-function": false,
			"ic-unit": false,
			"image-set-function": true,
			"is-pseudo-class": false,
			"lab-function": false,
			"light-dark-function": false,
			"logical-overflow": true,
			"logical-overscroll-behavior": false,
			"logical-properties-and-values": false,
			"logical-resize": false,
			"logical-viewport-units": false,
			"media-queries-aspect-ratio-number-values": false,
			"media-query-ranges": false,
			"nested-calc": false,
			"nesting-rules": false,
			"not-pseudo-class": false,
			"oklab-function": false,
			"opacity-percentage": false,
			"overflow-property": false,
			"overflow-wrap-property": false,
			"place-properties": false,
			"prefers-color-scheme-query": false,
			"rebeccapurple-color": false,
			"relative-color-syntax": true,
			"scope-pseudo-class": false,
			"stepped-value-functions": false,
			"system-ui-font-family": false,
			"text-decoration-shorthand": true,
			"trigonometric-functions": false,
			"unset-value": false
		}
	}),
	... process.env.NODE_ENV !== "development" ? [
		cssnanoDiscardComments(),
		cssnanoDiscardDuplicates(),
		cssnanoDiscardEmpty(),
		cssnanoDiscardOverridden(),
		cssnanoNormalizeWhitespace()
	] : []
])
