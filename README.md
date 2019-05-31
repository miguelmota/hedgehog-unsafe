Hedgehog vulnerability

> Example of why the hedgehog app is currenty unsafe

Start example dapp (taken from the hedgehog homepage)

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

## Prevention

- Use CSP and iframe sandboxing

## License

MIT
