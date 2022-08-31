# husky4

> Git hooks made easy

[Husky](https://github.com/typicode/husky/tree/v4.3.8) can prevent bad `git commit`, `git push` and more 🐶 _woof!_

**Not all huskies are suitable for house-sitting. I think the #4 is better than #5-8.**

![](https://images.dog.ceo/breeds/husky/husky.jpeg)

## Install

This will install husky v4.

```sh
npm i -D husky4
```

```js
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test",
      "...": "..."
    }
  }
}
```

```sh
git commit -m 'Keep calm and commit'
```

_Existing hooks are kept. Requires Node `>= 10` and Git `>= 2.13.0`._

## Uninstall

```sh
npm uninstall husky4
```

_Git hooks installed by husky will be removed._
