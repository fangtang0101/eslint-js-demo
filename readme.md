// eslint 报警信息
```
/Users/chungaofang/Desktop/eslint_demo/index.js
   2:2   error  Mixed spaces and tabs  no-mixed-spaces-and-tabs	
   6:3   error  Empty block statement  no-empty
   8:2   error  Mixed spaces and tabs  no-mixed-spaces-and-tabs
  10:20  error  Unnecessary semicolon  no-extra-semi

✖ 4 problems (4 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.

// ---------------------
2：2
发生错误的定位信息
error：
错误等级
Mixed spaces and tabs ：
错误信息提示
no-mixed-spaces-and-tabs：
错误项的 项目名 （可在 http://eslint.cn/docs/rules/ 直接查询到对应的错误项）
4 problems (4 errors, 0 warnings)：
总结具体几个报警 几个报错
1 error and 0 warnings potentially fixable with the `--fix` option.
操作提示信息（--fix 可以修复）
- 注意：仅可修复 rules 中带有 修理 符号的 项目


？？？
默认等级 貌似就是 error

```

// 配置说明
```
"extends": "eslint:recommended":
使用官方推荐的 规则（打绿色的勾的项目）
```

### 操作步骤 验证效果
npm run reset    初始化index.js 文件（将index-origin.js 原始的错误 复制过去）
npm run eslint   检查错误
npm run fix      修复能修复的错误


1. "extends": "eslint:recommended"  
启用 推荐的 eslint 的规则

2. "extends": "./rule-free.js",
启用自定义的  rule-free.js 中的 规则
