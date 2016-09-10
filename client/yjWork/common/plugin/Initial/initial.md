# 1、整体框架变更

## 1.1无左边列表栏页面盒子模型

```html
<div class="full-box">
	<div class="content pd10">
	</div>
</div>
```
## 1.2有左侧栏页面盒子模型
```html
<div class="nav-box">
	<div class="content"></div>
</div>
```

# 2、主题内容的左右大块布局
在content内容下进行
```html
<div class="left_list">
	<!-- list_header为左右布局的独有类，背景色为淡蓝色模块 -->
	<div class="list_header"></div>
</div>
<div class="right_list">
	<div class="list_header"></div>
</div>
```

# 3、其他小模块介绍

## 3.1按钮类
按钮目前就一种，也是默认的按钮，可以随意定义标签类。class类名为`btn-def`
```html
<div class="btn-def">test</div>
<a class="btn-def" href="javascript:;">test</a>
<button class="btn-def">test</button>
```

## 3.2表单类
所谓表单类既是form表单下面的输入框，下拉框或者单选框的类，外面一层dom节点可以为`form`也可以为`div`，看个人代码喜好以及逻辑来定义，
其中`search-block`为其中的字和输入框各一行的定义，而`search-inb`则是都为一行，随意拼凑的布局。
```html
<div>
	<div class="form-group">
		<select>
			<option>1</option>
			<option>1</option>
			<option>1</option>
		</select>
		<input type="text" name="" >
	</div>
	<div class="search-block">
		<label>test1:</label>
		<input type="text" name="">
	</div>
	<div class="search-inb">
		<label>供应商名称:</label>
		<input type="text" name="">
	</div>
	<div class="search-inb">
		<label>test2:</label>
		<input type="text" name="">
	</div>
</div>
```
表单字段前面必填项样式为`must-point`,dom节点必须为`<em>`在`label`标签内填写,一定要回车!
书写形式请严格按照这种标准来执行,可以在`search-block`和`search-inb`内的label写,单独抽出来没有效果
```html
<div class="search-block">
    <label>
        <em class="must-point">*</em>供应商名称:
    </label>
    <input type="text" name="">
</div>
<div class="search-inb">
    <label>
        <em class="must-point">*</em>
        供应商名称:
    </label>
    <input type="text" name="">
</div>
```

提示文字的类名为`error`,如果不需要的情况上再加上类名`none`即可,显示则remove掉这个类名即可

```html
<div class="search-block">
    <label>
        <em class="must-point">*</em>供应商名称:
    </label>
    <input type="text" name="">
    <div class="error">请输入活动名称</div>
</div>
<div class="search-inb">
    <label>
        <em class="must-point">*</em>
        供应商名称:
    </label>
    <input type="text" name="">
    <div class="error">请输入活动名称</div>
</div>
```
对于有搜索框和去除内容的搜索框,需带上icon的,demo如下,需改变一下dom结构,按需来进行,在input[type=text]的外面需要包一层div,类名为`s-input`,内部
类名,搜索按钮对应的`search-icon`,去除按钮对应的`close-icon`,然后以最右边为基准线,第一个则是`r1`,第二个则是`r2`,顺序自行调整。
请注意!`r1`或者`r2`是必须填写的。

```html
<div class="search-inb">
    <label>
        <em class="must-point">*</em>
        供应商名称:
    </label>
    <div class="s-input">
        <input type="text">
        <i class="search-icon r1"></i>
        <i class="close-icon r2"></i>
    </div>
    <div class="none error">请输入活动名称</div>
</div>
```

## 3.3、表格类
表格类型也就一个，在`table`的标签上面加上一个类名为`table-list`即可，但是有一点定义，表格的表头必须为`thead`和旗下的`tr`和`th`，否则不生效。
主题内容为`tbody`下面的`tr`和`td`。

```html
<table class="table-list">
	<thead>
		<tr>
			<th>1</th>
			<th>1</th>
			<th>1</th>
			<th>1</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
		</tr>
		<tr>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
		</tr>
		<tr>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
		</tr>
	</tbody>
</table>
```
## 3.4其余小类
根据具体页面来定，有些页面不需要则可以不加，有些页面模块需要的话就加
`pd10`这个类为内边距10px，
`flex`布局为flex。
···
诸如此类的不做赘述。