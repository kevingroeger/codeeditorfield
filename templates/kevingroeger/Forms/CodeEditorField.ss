<div
    id="{$ID}_CodeEditorField"
    class="codeeditorfield"
    style="min-height: {$Height}px;"
    data-field="{$Name}"
    data-mode="{$Mode}"
    data-theme="{$Theme}"
>
    $Value
</div>
<textarea $AttributesHTML style="display: none;">
    {$Value.RAW}
</textarea>
