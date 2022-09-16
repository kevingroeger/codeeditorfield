# Code Editor Field for SilverStripe 4

Creates an [Ace Code Editor]((https://ace.c9.io/)) 

## Installation

`composer require kevingroeger/codeeditorfield`

## Usage

```php
$fields->push(CodeEditorField::create('MyCode', 'Enter Source Code Here'));
```

## Setting the Programming Language Mode

```php
$fields->push($myCodeEditorField = CodeEditorField::create('MyCode', 'Enter Source Code Here'));

// set mode, eg. "html" or "json"
// default is html
$myCodeEditorField->setMode('html');

// set theme, eg. "monokai" or "twilight"
// default is twilight
$myCodeEditorField->setTheme('monokai');
```

### Thanks

This package was highly inspired by these two packages:

- [https://github.com/jinjie/codeeditorfield](https://github.com/jinjie/codeeditorfield)

- [https://github.com/nathancox/silverstripe-codeeditorfield](https://github.com/jinjie/codeeditorfield)


