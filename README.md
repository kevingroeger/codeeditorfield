# Code Editor Field for SilverStripe

Creates an Ace Code Editor (https://ace.c9.io/)

## Requirements

- Silverstripe 4+, 5+ or 6
- PHP 8+

## Installation

`composer require kevingroeger/codeeditorfield`

## Usage

```php
$codeEditor = CodeEditorField::create('Title', 'Enter Source Code Here');

// set mode to html (default is json)
$codeEditor->setMode('ace/mode/html');

// set mode to github (default is monokai)
$codeEditor->setTheme('ace/theme/github');

$fields->addFieldsToTab('Root.Main', [
    $codeEditor
]);

```

## Themes & Modes

For available modes and themes, see [resources/thirdparty/ace](resources/thirdparty/ace)

## Contribute

- [Create an Issue](https://github.com/kevingroeger/codeeditorfield/issues)
- [Or Fork and create a PR](https://github.com/kevingroeger/codeeditorfield/fork)

### Credits

- Thanks to @nathancox for creating this repository https://github.com/nathancox/silverstripe-codeeditorfield

- Thanks to @jinjie for creating this repository https://github.com/jinjie/codeeditorfield

Both have stopped development, but this package is highly inspired by the great work of these two!
