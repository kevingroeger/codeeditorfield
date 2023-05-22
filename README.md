# Code Editor Field for SilverStripe

Creates an Ace Code Editor (https://ace.c9.io/)

## Requirements

- Silverstripe 4+ or 5+
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
