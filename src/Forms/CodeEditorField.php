<?php

namespace kevingroeger\CodeEditorField\Forms;

use SilverStripe\Forms\TextareaField;
use SilverStripe\View\Requirements;

class CodeEditorField extends TextareaField
{
    private $height = 300;
    private $mode = 'ace/mode/text';
    private $theme = 'ace/theme/monokai';

    public function Field($properties = [])
    {
        Requirements::javascript('jinjie/codeeditorfield:resources/thirdparty/ace/ace.js');
        Requirements::javascript('jinjie/codeeditorfield:resources/javascript/CodeEditorField.js');

        $this->addExtraClass('codeeditorfield');

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
     * Get editing mode of the editor. Modes can be found at
     * https://github.com/ajaxorg/ace/tree/master/lib/ace/mode
     * @return string Ace editor mode
     */
    public function getMode()
    {
        return $this->mode;
    }

    /**
     * Set the modes. Get list of modes at
     * https://github.com/ajaxorg/ace/tree/master/lib/ace/mode
     * @param string $mode Editing mode
     */
    public function setMode($mode)
    {
        $this->mode = $mode;

        return $this;
    }
    /**
     * Get theme.
     * @return string Ace editor theme
     */
    public function getTheme()
    {
        return $this->theme;
    }

    /**
     * Set theme.
     * @param string $theme Theme
     */
    public function setTheme($theme)
    {
        $this->theme = $theme;

        return $this;
    }
}
