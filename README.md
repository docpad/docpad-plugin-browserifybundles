# Browserify Bundles for DocPad

<!-- BADGES/ -->

[![Build Status](https://img.shields.io/travis/docpad/docpad-plugin-browserifybundles/master.svg)](http://travis-ci.org/docpad/docpad-plugin-browserifybundles "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/docpad-plugin-browserifybundles.svg)](https://npmjs.org/package/docpad-plugin-browserifybundles "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/docpad-plugin-browserifybundles.svg)](https://npmjs.org/package/docpad-plugin-browserifybundles "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/docpad/docpad-plugin-browserifybundles.svg)](https://david-dm.org/docpad/docpad-plugin-browserifybundles)
[![Dev Dependency Status](https://img.shields.io/david/dev/docpad/docpad-plugin-browserifybundles.svg)](https://david-dm.org/docpad/docpad-plugin-browserifybundles#info=devDependencies)<br/>
[![Gratipay donate button](https://img.shields.io/gratipay/docpad.svg)](https://www.gratipay.com/docpad/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


Bundle scripts into browserify packages


## Install

```
docpad install browserifybundles
```


## Usage

Add the following to your [docpad configuration file](http://docpad.org/docs/config):

``` coffee
	plugins:
		browserifybundles:
			bundles: [
				{
					arguments: ['-r', 'rtc-videoproc/filters/grayscale']
					entry: 'videoproc.js'
					out:   'videoproc-bundled.js'
				},
				{
					ignore: 'jquery'
					entry:  'miniview.js'
					out:    'miniview-bundled.js'
				}
			]
```

The `bundles` option is the list of bundles you want. Each bundle accepts the following arguments:

- `entry` a String pointing to which file should be executed right away with this bundle, it is prefixed with the project's outPath if it is a relative path
- `out` a String pointing to where the bundle should be written, it is prefixed with the project's outPath if it is a relative path
- `ignore` a String or Array of Strings for which modules should not be bundled with this bundle
- `require` a String or Array of Strings of paths that should be bundled with this bundle
- `arguments` an Array of Strings that should be sent to the browserify executable


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/docpad/docpad-plugin-browserifybundles/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/docpad/docpad-plugin-browserifybundles/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gratipay donate button](https://img.shields.io/gratipay/docpad.svg)](https://www.gratipay.com/docpad/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/docpad/docpad-plugin-browserifybundles/commits?author=balupton)

[Become a contributor!](https://github.com/docpad/docpad-plugin-browserifybundles/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Unless stated otherwise all works are:

- Copyright &copy; 2013+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

and licensed under:

- The incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT License](http://opensource.org/licenses/mit-license.php)

<!-- /LICENSE -->


