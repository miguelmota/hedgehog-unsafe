# Hedgehog vulnerability

> Example showing how [hedgehog library](https://hedgehog.audius.co) is currenty unsafe ([issue #9](https://github.com/AudiusProject/hedgehog/issues/9))

Start example dapp (taken from the hedgehog [homepage](https://codesandbox.io/s/pp9zzv2n00?fontsize=14))

```bash
$ cd dapp/
$ npm i -g serve
$ serve
```

http://localhost:5000

Start the attacker server

```bash
$ cd attacker/
$ npm i
$ node index.js
```

The mnemonic will be displayed on the server after signing up or logging in

<img src="https://user-images.githubusercontent.com/168240/58727984-a94b5700-839a-11e9-9f99-96cb2d82da67.gif" alt="demo">

You can use [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) to run arbitrary code simulating a third party library or extension.

Prevention

- Use [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) and iframe sandboxing

## License

MIT
