# HTML 学习笔记

* 元素
<p>这一行就是一个元素</p>
<img src="" alt="这一行也是元素，这个有头无尾的元素成为空元素">
块元素， 和内联元素

一个块元素，占一行
内联元素， 一个矮一个
* 属性

常见属性， 
href: 这个是声明超链接的WEB 地址， 
title: 这个属性为超链接声明额外的信息， 当鼠标悬停元素之上，这部分信息将以工具提示的形式显示。
target： 目标target 属性用于指定链接如何呈现出来， 例如， target="_blank" 将在新标签页中显示链接。 如果你希望在当前标签页显示链接，忽略这个属性即可。
alert： 图片元素, 当图片不能正常显示时， 将出现alert内容， 代替图片


* 实体引用： 在HTML 中 包含特殊字符


* Head HTML 文件的头部信息， 可以把你想加入到这个文档但不想在文档中显示的信息
title： HTML 文档的标题
- meta : 
	元数据， 描述数据的数据, 指定文档中字符的编码
	添加作者和描述： name和content, name 指定了meta 元素类型； 说明该元素包含了什么类型的信息。
	content 指定了实际的元数据内容。


页面添加图标：
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

	将其保存在与网站的索引页面相同的目录中，以.ico格式保存（大多数浏览器将支持更通用的格式，如.gif或.png，但使用ICO格式将确保它能在如Internet Explorer 6一样久远的浏览器显示


为文档设置主语言， <html lang="zh-CN">


## HTML文档的语义
&lt;h1&gt; 表示主标题； head<br>
&lt;p&gt; 表示段落， paragraph <br> 
&lt;em&gt; 重点强调， emphasis  <br> 
&lt;strong&gt; 非常重要， strong importance <br> 
&lt;dt&gt; description term 描述主体词

&lt;dd&gt; description description 描述的描述语

&lt;blockquote&gt; 块引用， 内有属性 cite，引用地址， 它不在页面显示，但会通过CSS和JavaScript作用。也可以使用&lt;cite&gt;元素来体现

## 还有一些是表象元素， 即它们没有任何语义，但是可以改变内容的形式
&lt;i&gt; <i>被用来传达传统上用斜体表达的意义：外国文字，分类名称，技术术语，一种思想……<br></i>
&lt;b&gt; <b>被用来传达传统上用粗体表达的意义：关键字，产品名称，引导句……<br></b>
&lt;u&gt; <u>被用来传达传统上用下划线表达的意义：专有名词，拼写错误……<br></u>
&lt;dl&gt; description list 描述列表





## 链接与路径

scr:  本级目录、 子目录、 上级目录(../)


href: 绝对路径、 相对路径， 当链接与当前文档为统一网站时采用相对路径

本文档的位置跳转、 通过id 与 # 号来实现


