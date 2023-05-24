(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{453:function(t,i,a){t.exports=a.p+"assets/img/image-20230408182714061.be3e4b1e.png"},454:function(t,i,a){t.exports=a.p+"assets/img/image-20230408165206661.9bd46619.png"},455:function(t,i,a){t.exports=a.p+"assets/img/image-20230408170332145.755e539e.png"},456:function(t,i,a){t.exports=a.p+"assets/img/image-20230408180640802.5c1165a2.png"},457:function(t,i,a){t.exports=a.p+"assets/img/image-20230408180717513.0ca78a66.png"},458:function(t,i,a){t.exports=a.p+"assets/img/image-20230408181416588.0b48e2e1.png"},459:function(t,i,a){t.exports=a.p+"assets/img/image-20230408152306517.6098ab57.png"},623:function(t,i,a){"use strict";a.r(i);var e=a(2),s=Object(e.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("总览")]),t._v(" "),i("p",[t._v("git常见命令、git提交对象和校验和、git分支和冲突处理、开源协议")])]),t._v(" "),i("h2",{attrs:{id:"bash"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bash"}},[t._v("#")]),t._v(" Bash")]),t._v(" "),i("p",[t._v("Bash，Unix的一种，Linux与Mac OS X都将它作为默认shell。")]),t._v(" "),i("ul",[i("li",[t._v("Git Bash 就是一个shell，是Windows下的命令工具，可以执行Linux命令")]),t._v(" "),i("li",[t._v("基于CMD的，在CMD的基础上增添新的命令与功能")])]),t._v(" "),i("h2",{attrs:{id:"git-cmd"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-cmd"}},[t._v("#")]),t._v(" Git CMD")]),t._v(" "),i("ul",[i("li",[t._v("命令提示行CMD，是Windows操作系统上的命令行解释程序")])]),t._v(" "),i("h2",{attrs:{id:"git命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git命令"}},[t._v("#")]),t._v(" Git命令")]),t._v(" "),i("p",[i("code",[t._v("git status")]),t._v(" 查看文件状态")]),t._v(" "),i("p",[i("code",[t._v("git reset")]),t._v(" 版本回退，git通过HEAD指针记录当前版本，总是指向最后一次提交")]),t._v(" "),i("p",[i("code",[t._v("git reset --hard HEAD^")]),t._v("回退到上一个版本")]),t._v(" "),i("p",[i("code",[t._v("git add .")]),t._v(" 将所有文件加入暂存区")]),t._v(" "),i("p",[i("code",[t._v('git commit -m ""')]),t._v(" 将暂存区内容添加到本地仓库")]),t._v(" "),i("p",[i("code",[t._v("git log")]),t._v(" 查看提交的历史")]),t._v(" "),i("p",[i("code",[t._v("git reflog")]),t._v(" 查看记录的每一次提交历史不会被回退影响")]),t._v(" "),i("p",[i("code",[t._v("git remote")]),t._v(" 查看远程仓库")]),t._v(" "),i("p",[i("code",[t._v("git remote add (name)(url)")]),t._v(" 添加远程仓库")]),t._v(" "),i("p",[i("code",[t._v("git branch --set-upstream-to=origin/master")]),t._v(" 建立关联，上游分支")]),t._v(" "),i("p",[i("code",[t._v("git push")]),t._v(" 推送")]),t._v(" "),i("p",[i("code",[t._v("git config push.default simple")]),t._v(" 默认 找远程仓库中相同名称的分支")]),t._v(" "),i("p",[i("code",[t._v("git config push.default current")]),t._v("  找远程仓库中相同名称的分支，若没找到则新建一个")]),t._v(" "),i("p",[i("code",[t._v("git tag v1.0")]),t._v(" 打标签")]),t._v(" "),i("p",[i("code",[t._v("git push origin v1.0")]),t._v(" 推送")]),t._v(" "),i("h2",{attrs:{id:"git-校验和"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-校验和"}},[t._v("#")]),t._v(" Git 校验和")]),t._v(" "),i("p",[t._v("git中所有的数据在存储前都计算校验和，然后以校验和来引用。校验和机制叫做SHA-1散列(hash哈希)由40个十六进制字符组成的字符串")]),t._v(" "),i("h2",{attrs:{id:"git提交对象"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git提交对象"}},[t._v("#")]),t._v(" Git提交对象")]),t._v(" "),i("p",[i("code",[t._v("git/object")])]),t._v(" "),i("p",[t._v("在进行提交操作时，Git会保存一个提交对象(commit object) :该提交对象会包含—个指向暂存内容快照的指针;\n该提交对象还包含了作者的姓名和邮箱、提交时输入的信息以及指向它的父对象的指针;首次提交产生的提交对象没有父对象，普通提交操作产生的提交对象有一个父对象;而由多个分支合并产生的提交对象有多个父对象;")]),t._v(" "),i("h2",{attrs:{id:"git-分支和冲突原理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-分支和冲突原理"}},[t._v("#")]),t._v(" Git 分支和冲突原理")]),t._v(" "),i("p",[i("img",{attrs:{src:a(453),alt:"image-20230408182714061"}})]),t._v(" "),i("p",[t._v("最开始HEAD指向master，新建分支后HEAD指向对应分支")]),t._v(" "),i("p",[i("img",{attrs:{src:a(454),alt:"image-20230408165206661"}})]),t._v(" "),i("p",[i("img",{attrs:{src:a(455),alt:"image-20230408170332145"}})]),t._v(" "),i("p",[t._v("删除分支原理是删除HEAD引用指针，并不是删除分支提交历史。")]),t._v(" "),i("h2",{attrs:{id:"git-创建关联远程仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-创建关联远程仓库"}},[t._v("#")]),t._v(" Git 创建关联远程仓库")]),t._v(" "),i("p",[i("strong",[t._v("1.关联远程仓库")])]),t._v(" "),i("p",[i("strong",[i("code",[t._v("git remote add origin 地址")])])]),t._v(" "),i("p",[i("strong",[t._v("2.设置上游分支")])]),t._v(" "),i("p",[i("code",[t._v("git fetch origin main")])]),t._v(" "),i("p",[i("code",[t._v("git branch --set-upstream-to=origin/main")])]),t._v(" "),i("p",[i("strong",[t._v("3.合并没有共同base的分支")])]),t._v(" "),i("p",[i("code",[t._v("git merge --allow-unrelated-histories")])]),t._v(" "),i("p",[i("strong",[t._v("4.推送")])]),t._v(" "),i("p",[i("code",[t._v("git config push.default upstream")])]),t._v(" "),i("p",[i("strong",[t._v("最简方法")])]),t._v(" "),i("p",[i("code",[t._v("git checkout main")])]),t._v(" "),i("h2",{attrs:{id:"git远程分支"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git远程分支"}},[t._v("#")]),t._v(" Git远程分支")]),t._v(" "),i("p",[i("code",[t._v("git checkout --track origin/main")])]),t._v(" "),i("p",[i("code",[t._v("git branch -d master")]),t._v("删除分支")]),t._v(" "),i("p",[t._v("推送新分支 "),i("strong",[i("code",[t._v("git push origin 分支")])])]),t._v(" "),i("p",[t._v("这样也行 "),i("code",[t._v("git branch --set-upstream-to=origin/分支")])]),t._v(" "),i("p",[t._v("如果你尝试检出的分支(a)不存在且(b)刚好只有一个名字与之匹配的远程分支，那么Git 就会为你创建一个跟踪分支")]),t._v(" "),i("p",[i("strong",[i("code",[t._v("git checkout 分支")])])]),t._v(" "),i("h2",{attrs:{id:"git-rebase"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[t._v("#")]),t._v(" Git rebase")]),t._v(" "),i("p",[t._v("git merge")]),t._v(" "),i("img",{staticStyle:{zoom:"170%"},attrs:{src:a(456),alt:"image-20230408180640802"}}),t._v(" "),i("p",[t._v("git rebase")]),t._v(" "),i("img",{staticStyle:{zoom:"150%"},attrs:{src:a(457),alt:"image-20230408180717513"}}),t._v(" "),i("ul",[i("li",[i("p",[t._v("merge用于记录git的所有历史，那么分支的历史错综复杂，也全部记录下来;")])]),t._v(" "),i("li",[i("p",[t._v("rebase用于简化历史记录，将两个分支的历史简化，整个历史更加简洁;"),i("strong",[t._v("永远不要在主分支上使用rebase")])])])]),t._v(" "),i("p",[i("img",{attrs:{src:a(458),alt:"image-20230408181416588"}})]),t._v(" "),i("p",[t._v("主分支使用rebase的情况，会污染主分支")]),t._v(" "),i("h2",{attrs:{id:"开源协议"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#开源协议"}},[t._v("#")]),t._v(" 开源协议")]),t._v(" "),i("p",[i("img",{attrs:{src:a(459),alt:"image-20230408152306517"}})])])}),[],!1,null,null,null);i.default=s.exports}}]);