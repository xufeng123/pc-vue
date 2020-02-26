# PC-VUE

#### author `xufeng`  `2020.02.12`

## 现有组件

### 1.按钮（v-button）
| 属性       |     作用       |      type      |  可选值 | 默认值 |
| :---:     |     :----:      |    :----:  |    :----:  |    :----:  |
| `name`      |    按钮名称      |  `String`     | —     | —     |
| `sizi`      |    按钮大小      |  `String`     | `medium(注：padding: 13px 16px) / mini(注：padding: 6px 12px) / small(注：padding: 9px 16px)` |  —     |
| `type`      |    按钮的颜色     |  `String`     | `normal （注：篮框白底）/ normal-bg（注：蓝底白字） / del（注：橙色） / sb（注：淡蓝）` |  `normal`    |
| `disabled`  |    不可点击的状态  |   `Boolean`   |  —     | —     |
#### 使用方法
```js
  import vButton from '@/vendor/button/v-button'
```
```html
  <h3>注：size可以满足</h3>
  <v-button name="按钮名称" size="normal" type="按钮的颜色" @click="getCheck" />
```
```html
  <h3>注：size不可以满足，需自定义大小,可以设置div的大小 就是按钮的大小</h3>
  <div>
    <v-button name="按钮名称" type="按钮的颜色" @click="getCheck" />
  </div>
```
### 2.弹框（v-dialog）
| 属性       |     作用       |      type      |   可选值 | 默认值 |
| :---:     |     :----:      |    :----:  |    :----:  |    :----:  |
| `titleMsg`  | 标题 |  `String`  | - | - |
| `ctxMsg`      |    内容     | `String`  | - | - |
| `isShow`  |  弹框是否显示  |   `Boolean`   | - |  `false` |
| `boxWidth` | 宽度 | `String` |  - | `400px` |
| `canText` | 取消功能按钮名称 | `String` |  - | `取消` |
| `isCanShow` | 是否显示取消按钮 | `Boolean` |  - | `true` |
| `conText` | 确定功能按钮名称 | `String` |  - | `确定` |
| `isConShow` | 是否显示确认按钮 | `Boolean` |  - | `true` |
| `isShowClose` | 关闭按钮是否显示 | `Boolean` |  - | `true` |

#### 使用方法

```js
  import vDialog from '@/vendor/dialog/v-dialog'
```
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

| 属性       |   作用     |    type   |   可选值 | 默认值 |
| :---:     |   :----:   |  :----:  |   :----:   |  :----:  |
| `ctx`     |    内容     |  `String`  | - | - |
| `title`   |    标题     | `String`   | - | - |
| `conBtn`  |    确定按钮  |  `String` | - | `确定` |
| `canBtn`  |    取消按钮  |  `String` | - | `取消` |

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
```html
  <el-input v-reg-input:num />
```

### 7.表单正则校验

#### 文件地址(regular/index)

```js
  * `checkMobile`(手机号校验)
  * `checkEmail`(email校验)
  * `checkCard`(证件号校验（只允许输入数字，字母）)
  * `checkIdCard`(身份证校验)
  import { checkMobile } from '@/regular/index'
```
