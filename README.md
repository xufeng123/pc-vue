# PC-VUE

#### author `xufeng`  `2020.02.12`

## 现有组件

### 1.按钮（v-button）
| 属性       |     作用       |      type      |
| :---:     |     :----:      |    :----:  |
| `name`      |    按钮名称      |  `String`     |
| `type`      |    按钮的颜色     |  `String`     |
| `disabled`  |    不可点击的状态  |   `Boolean`   |
#### 使用方法
```html
  <v-button name="按钮名称" type="按钮的颜色" @click="getCheck" />
```
### 2.弹框（v-dialog）
| 属性       |     作用       |      type      |
| :---:     |     :----:      |    :----:  |
| `titleMsg`  | 标题 |  `String`  |
| `ctxMsg`      |    内容     | `String`  |
| `isShow`  |  弹框是否显示  |   `Boolean`   |
| `boxWidth` | 宽度 | `String` |
| `canText` | 取消功能按钮名称 | `String` |
| `isCanShow` | 是否显示取消按钮 | `Boolean` |
| `conText` | 确定功能按钮名称 | `String` |
| `isConShow` | 是否显示确认按钮 | `Boolean` |
| `isShowClose` | 关闭按钮是否显示 | `Boolean` |

#### 使用方法

```html
  <v-dialog
    title-msg="标题"
    ctx-msg="内容"
    :is-show="isConDialog"
    @close="closeConDialog"
    @click="checkCon"
  />
```
### 3.确认弹框（v-confirm）

| 属性       |   作用     |    type   |
| :---:     |   :----:   |  :----:  |
| `ctx`     |    内容     |  `String`  |
| `title`   |    标题     | `String`   |
| `conBtn`  |    确定按钮  |  `String` |
| `canBtn`  |    取消按钮  |  `String` |

#### 使用方法

```js
  import confirm from '@/vendor/v-confirm'

  confirm(ctx, title, {
    conBtn: '确定', // 按钮名称
    canBtn: '取消' // 按钮名称
  }).then(() => {
    console.warn('确定的方法')
  }).catch(() => {
    console.warn('取消的方法')
  })
```
### 4.loading菊花图的使用

#### 使用方法

```js
  this.$openLoading()
  this.$closeLoading()
```

### 5.print打印的使用

#### 使用方法
```html
  <div ref="print">打印内容</div>
```
```js
  this.$print(this.$refs.print)
```
### 6.input输入校验指令（v-reg-input:type）

* 目前`type`就下面几种情况
```js
  * input输入框限定输入
  * `num`: 只允许输入数字
  * `point`: 允许输入两位小数
  * `NAN`: 非数字
  * `spl`: 不允许输入特殊符号
  * `noZh`: 不允许输入特殊符号和中文
  * `minus`: 允许输入正负数
  * `minusPoint`: 允许输入两位小数的正负数
```

### 7.表单正则校验

#### 文件地址(regular/index)

```js
  * `checkMobile`(手机号校验)
  * `checkEmail`(email校验)
  * `checkCard`(证件号校验（只允许输入数字，字母）)
  * `checkIdCard`(身份证校验)
```
