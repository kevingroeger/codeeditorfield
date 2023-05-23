<?php

namespace KevinGroeger\CodeEditorField\Forms;

use SilverStripe\Forms\TextareaField;
use SilverStripe\View\Requirements;

class CodeEditorField extends TextareaField
{
    private $height = 300;
    private $mode = 'ace/mode/json';
    private $theme = 'ace/theme/monokai';

    public function Field($properties = [])
    {
        Requirements::javascript('kevingroeger/codeeditorfield:resources/thirdparty/ace/ace.js');
        Requirements::javascript('kevingroeger/codeeditorfield:resources/javascript/CodeEditorField.js');

        $this->addExtraClass('codeeditorfield stacked');
        return parent::Field($properties);
    }

    /**
     * Set height of editor in pixels
     * @param int $height Height of editor
     */
    public function setHeight(int $height)
    {
        $this->height = $height;

        return $this;
    }

    /**
     * Height of field
     * @return int Height
     */
    public function getHeight()
    {
        return $this->height;
    }

    public function getInputType()
    {
        return 'text';
    }

    /**
     * @return string
     */
    public function getMode(): string
    {
        return $this->mode;
    }

    /**
     * @param $mode
     * @return $this
     */
    public function setMode($mode): static
    {
        $this->mode = $mode;
        return $this;
    }

    /**
     * @return string
     */
    public function getTheme(): string
    {
        return $this->theme;
    }

    /**
     * @param $theme
     * @return $this
     */
    public function setTheme($theme): static
    {
        $this->theme = $theme;
        return $this;
    }
}
