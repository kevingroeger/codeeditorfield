# Code Editor Field for SilverStripe 4

Creates an Ace Code Editor (https://ace.c9.io/)

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
$myCodeEditorField->setMode('ace/mode/html');

// set theme, eg. "monokai" or "twilight"
$myCodeEditorField->setTheme('ace/theme/monokai');
```
