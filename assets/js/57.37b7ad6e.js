(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{642:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("总览")]),s._v(" "),t("p",[s._v("transition、transforms和animation的笔记总结")])]),s._v(" "),t("p",[s._v("CSS 动画 "),t("code",[s._v("transition")]),s._v(" 和 "),t("code",[s._v("transforms")]),s._v("，并不会自动使用 GPU 来处理，而是通过浏览器软件的渲染引擎来处理的")]),s._v(" "),t("h2",{attrs:{id:"transition过渡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transition过渡"}},[s._v("#")]),s._v(" transition过渡")]),s._v(" "),t("p",[s._v("过渡transition是一个复合属性")]),s._v(" "),t("p",[s._v("提供了一种在更改css属性时控制动画速度的方法。可以让css属性变化成为一个持续一段时间的过程，而不是立即生效的;"),t("strong",[s._v("只能定义开始状态和结束状态，不能定义中间状态")]),s._v("，也就是说只有两个状态，对数值类属性有效")]),s._v(" "),t("p",[s._v("在不使用"),t("code",[s._v("transition")]),s._v("时，若通过用户的交互直接改变"),t("code",[s._v("css样式属性")]),s._v("，呈现的形式是立刻转变，但有时我们希望这个变化是有过渡效果的，这时就可应用"),t("code",[s._v("transition")]),s._v("过渡动画了。")]),s._v(" "),t("p",[s._v("transition的这四个子属性之间不能用逗号隔开，只能用空格隔开 ，这四个子属性只有"),t("code",[s._v("<transition-duration>")]),s._v("是必需值且不能为0")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("transition-property: 需要过渡的属性(默认值为all)\ntransition-duration: 过渡持续时间,默认值为0s,也就是说，如果不设置该属性，默认是没有过渡效果的\ntransiton-timing-function: 过渡函数(默认值为ease函数)\ntransition-delay: 过渡延迟时间(默认值为0s)\n\n.box")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" relative"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("left")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pink"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transition")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" left 1s ease-in"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box:hover")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("left")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"transform形变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transform形变"}},[s._v("#")]),s._v(" transform形变")]),s._v(" "),t("p",[s._v("transform属性允许对某一个元素进行某些形变,包括旋转，缩放，倾斜或平移等。")]),s._v(" "),t("p",[s._v("变形可以实现2D和3D两种效果。")]),s._v(" "),t("p",[s._v("并非所有的盒子都可以进行transform的转换(通常行内级元素不能进行形变span a strong)")]),s._v(" "),t("ul",[t("li",[s._v("平移: translate(x, y)")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" orange"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("translate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("100%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("100px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 百分号参照的是元素自身, 100% 即向x轴平移200px */")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("缩放: scale(x, y)")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scale")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 大于1放大小于1缩小 */")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("旋转: rotate(deg)")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform-origin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20px 20px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 改变形变的原点位置 一个值只设置x */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("45deg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 正数顺时针，负数逆时针 */")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("倾斜:skew(deg, deg)")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("skew")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("10deg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("注意css覆盖")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("[\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("45deg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scale")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 覆盖了旋转 */")]),s._v("\n]\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("45deg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scale")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 正确写法 */")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"animation动画"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#animation动画"}},[s._v("#")]),s._v(" animation动画")]),s._v(" "),t("ol",[t("li",[s._v("使用keyframes定义动画序列(每一帧动画如何执行)")]),s._v(" "),t("li",[s._v("配置动画执行的名称、持续时间、动画曲线、延迟、执行次数、方向等等")]),s._v(" "),t("li",[s._v("0%表示动画的第一时刻，100%表示动画的最终时刻;")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" name duration timing-function delay iteration-count direction fill-mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" move 3s ease-in 1s 2 normal forwards"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-iteration-count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  表示动画执行次数，infinite表示无限执行\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-direction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" normal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   表示方向，常用值normal和reverse\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-fill-mode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" forwards"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 表示动画结束元素的最终位置， forward表示停留在动画最后一帧的位置\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);