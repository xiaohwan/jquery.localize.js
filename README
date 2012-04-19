String externalization for jQuery
  =================================
Xiaoxing Wang (<xiaohwan@gmail.com>)
# Usage
## Configure
```javascript
$.localize({
    /**
     * Location of resources file, which follows the same format of "resources" parameter;
     */
    "url": "languages.json",
    /**
     * Resources. A object in the format of {LANGUAGE: {KEY: "actual copy in the current language.", ...}, ...}.
     * LANGUAGE is a language code, like en-us, zh-cn. It doesn't have to be standard ones as long as you use the same one when specify language.
     * KEY is a string used in your code as a place holder for the actual copy, like "CANCEL", "COPY".
     * Use ${index} in the text if you need substituation. index could be string or number.
     */
    "resources":{
      "en-us": {
        "CANCEL": "Cancel",
        "CANCEL_ACTION": "Cancel ${0}",
        "COPY": "Copy"
      },
      "zh-cn": {
        "CANCEL": "取消",
        "CANCEL_ACTION": "取消${0}",
        "COPY": "复制"
      }
    },
    /** 
     * When call localize method without language specified in options, the language will be used.
     * Default language will be determined by browser locale if not specified. (Not implemented yet).
     */
    "defaultLanguage": "en-us",
    /**
     * Name of the attributes used for localization tag in HTML element.
     * For example: 
     * <a class="button" ux:localize="CANCEL" href="#cancel"></a>
     * When it isn't a standard HTML attribute, you may need add xsd reference in your HTML document.
     */
   "attribute": "ux:localize"
});
```
## Basic Example
```html
<a id="btnCancel" class="button" ux:localize="CANCEL" href="#cancel">CANCEL</a>
<button onclick="$('#btnCancel').localize();">Basic Example</button>
```
## Specify Language
```html
<a id="btnCancel" class="button" ux:localize="CANCEL" href="#cancel">CANCEL</a>
<button onclick="$('#btnCancel').localize({language: 'zh-cn'});">Localize in zh-CN</button>
```
## Use Substitutable Variables
```html
<a id="btnCancelAction" class="button" ux:localize="CANCEL_ACTION" href="#cancelAction">CANCEL_ACTION</a>
<button onclick="$('#btnCancelAction').localize({variables:['Copy']});">Localize with variables ['Copy']</button>
<button onclick="$('#btnCancelAction').localize({variables:['Delete']});">Localize with variables ['Delete']</button>
```
## Localize HTML Fragment
```javascript
$('<a id="btnCancel" class="button" ux:localize="CANCEL" href="#cancel"></a>').localize().appendTo('#btnPanel');
```
## Localize a String Variable
```javascript
'COPY'.localize();
```
