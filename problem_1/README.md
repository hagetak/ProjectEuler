# Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

by https://projecteuler.net/problem=1


# Solve

```
$ tree .
.
├── README.md
└── javascript
    ├── 00_simple.js
    ├── 01_get_arg.js
    └── 02_easy_test.js
```

## JavaScript

### 00_simple.js

単純な回答です。`target_nums`, `below_num` を変更することで気軽に条件を変更することができる。

### 01_get_arg.js

`00_simple.js` の改良版。main() を呼ぶ際に引数を与えることで気軽に条件を変更できる。

### 02_easy_test.js

`00_simple.js` の改良版。判定を関数化することでテストが楽になる。
