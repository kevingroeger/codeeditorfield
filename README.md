# Code Editor Field for SilverStripe 4

Creates an [Ace Code Editor]((https://ace.c9.io/)) 

The package is still kind of experimental, if you experience any issues do let me know!

## Installation

`composer require kevingroeger/codeeditorfield`

## Usage

```php

// create the field
$myCodeEditorField = CodeEditorField::create('MyCode', 'Enter Source Code Here')

// set mode, eg. "html" or "json"
// default is html
$myCodeEditorField->setMode('html');

// set theme, eg. "monokai" or "twilight"
// default is twilight
$myCodeEditorField->setTheme('monokai');

// add it to a tab in getCMSFields()
$fields->addFieldToTab("Root.Code", $myCodeEditorField);

// or push it
$fields->push($myCodeEditorField);

```

### Thanks

This package was highly inspired by these two packages:

- [https://github.com/jinjie/codeeditorfield](https://github.com/jinjie/codeeditorfield)

- [https://github.com/nathancox/silverstripe-codeeditorfield](https://github.com/nathancox/silverstripe-codeeditorfield)


