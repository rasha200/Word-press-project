import{h}from"@stencil/core";import Fuse from"fuse.js";import{FormSubmitController}from"../../../functions/form-data";import{__}from"@wordpress/i18n";import{isValidURL}from"../../../functions/util";let id=0,itemIndex=0,arrowFlag="";export class ScSelectDropdown{constructor(){this.inputId="select-"+ ++id,this.helpId=`select-help-text-${id}`,this.labelId=`select-label-${id}`,this.autocomplete=void 0,this.placeholder="",this.searchPlaceholder="",this.value="",this.choices=[],this.unselect=!0,this.required=void 0,this.loading=void 0,this.search=void 0,this.closeOnSelect=!0,this.name=void 0,this.help=void 0,this.label=void 0,this.size="medium",this.position="bottom-right",this.placement="bottom-start",this.invalid=!1,this.open=void 0,this.disabled=void 0,this.showParentLabel=!0,this.hoist=!1,this.squared=void 0,this.squaredBottom=void 0,this.squaredTop=void 0,this.squaredLeft=void 0,this.squaredRight=void 0,this.hasFocus=!1,this.searchTerm="",this.filteredChoices=[]}handleShow(){this.open=!0,setTimeout((()=>{this.searchInput&&this.searchInput.triggerFocus()}),50)}handleHide(){this.open=!1,itemIndex=0,this.scClose.emit()}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleFocus(){this.hasFocus=!0,this.el.focus(),this.scFocus.emit()}displayValue(){var e;if(!this.value)return!1;let t=this.choices.find((e=>e.value==this.value)),s="";return t||(this.showParentLabel&&(s=null===(e=this.choices.find((e=>{var t,s;return null===(s=null===(t=null==e?void 0:e.choices)||void 0===t?void 0:t.some)||void 0===s?void 0:s.call(t,(e=>e.value===this.value))})))||void 0===e?void 0:e.label),t=(this.choices||[]).map((e=>e.choices)).flat().find((e=>(null==e?void 0:e.value)==this.value))),!!t&&`${s?s+" — ":""}${null==t?void 0:t.label}`}isChecked({value:e,checked:t=!1}){return!!t||!!e&&this.value===e}async setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}async reportValidity(){return this.input.reportValidity()}handleQuery(e){this.searchTerm=e.target.value,this.scSearch.emit(this.searchTerm)}handleSelect(e){const{value:t}=e;this.value===t&&this.unselect?this.value="":this.value=t,this.closeOnSelect&&(this.searchTerm=""),this.scChange.emit(e)}handleSearchChange(){const e=new Fuse(this.choices,{keys:["value","label"]});if(this.searchTerm){const t=e.search(this.searchTerm);this.filteredChoices=t.map((e=>e.item))}else this.filteredChoices=this.choices}handleValueChange(){this.input&&(this.invalid=!this.input.checkValidity())}handleOpenChange(){this.open?(this.scOpen.emit(),this.searchInput&&this.searchInput.triggerFocus()):this.scClose.emit()}handleMenuScroll(e){const t=e.target.scrollTop;e.target.scrollHeight-e.target.offsetHeight-t<5&&this.scScrollEnd.emit()}componentWillLoad(){this.handleSearchChange()}componentDidLoad(){this.formController=new FormSubmitController(this.el).addFormData(),this.open&&this.searchInput&&this.searchInput.triggerFocus()}getItems(){return[...this.el.shadowRoot.querySelectorAll("sc-menu-item")]}handleKeyDown(e){var t,s;const o=e.target,i=this.getItems();if("sc-tag"!==o.tagName.toLowerCase())if("Tab"!==e.key){if(["ArrowDown","ArrowUp"].includes(e.key)){if(e.preventDefault(),this.open||this.handleShow(),"ArrowDown"===e.key)return"up"==arrowFlag&&(itemIndex+=2),itemIndex>i.length-1&&(itemIndex=0),i[itemIndex].setFocus(),arrowFlag="down",void itemIndex++;if("ArrowUp"===e.key)return"down"==arrowFlag&&(itemIndex-=2),itemIndex<0&&(itemIndex=i.length-1),i[itemIndex].setFocus(),arrowFlag="up",void itemIndex--}"Escape"!==e.key?("Enter"===e.key&&(this.open?(null===(s=null===(t=i[itemIndex-1])||void 0===t?void 0:t.click)||void 0===s||s.call(t),this.handleHide(),this.input.focus()):this.handleShow()),e.ctrlKey||e.metaKey||!this.open&&this.hasFocus&&1===e.key.length&&this.handleShow()):this.open&&(this.input.focus(),this.handleHide())}else this.open&&this.handleHide()}disconnectedCallback(){var e;null===(e=this.formController)||void 0===e||e.removeFormData()}renderIcon(e){return isValidURL(e)?h("img",{src:e,alt:"icon",slot:"prefix",class:"choice__icon--image"}):h("sc-icon",{name:e,slot:"prefix",class:"choice__icon"})}renderItem(e,t){var s;return(null===(s=null==e?void 0:e.choices)||void 0===s?void 0:s.length)?h("sc-menu-label",{key:t},e.label):h("sc-menu-item",{class:{"is-unavailable":null==e?void 0:e.unavailable},key:t,checked:this.isChecked(e),value:null==e?void 0:e.value,onClick:()=>!e.disabled&&this.handleSelect(e),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||e.disabled||(t.preventDefault(),t.stopImmediatePropagation(),this.handleSelect(e))},disabled:e.disabled,"aria-label":e.label,"aria-selected":this.isChecked(e)?"true":"false",role:"option"},e.label,!!(null==e?void 0:e.description)&&h("div",{class:"select__description"},null==e?void 0:e.description),h("div",{slot:"suffix"},null==e?void 0:e.suffix," ",!!(null==e?void 0:e.suffixDescription)&&h("div",{class:"select__suffix-description"},null==e?void 0:e.suffixDescription)),!!(null==e?void 0:e.icon)&&this.renderIcon(e.icon))}render(){var e;return h("div",{part:"base",class:{select:!0,"select--placeholder":!this.value,"select--focused":this.hasFocus,"select--is-open":!!this.open,"select--disabled":this.disabled,"select--has-choices":!!(null===(e=null==this?void 0:this.choices)||void 0===e?void 0:e.length),"select--squared":this.squared,"select--squared-bottom":this.squaredBottom,"select--squared-top":this.squaredTop,"select--squared-left":this.squaredLeft,"select--squared-right":this.squaredRight}},h("sc-form-control",{exportparts:"label, help-text, form-control",size:this.size,required:this.required,label:this.label,help:this.help,inputId:this.inputId,helpId:this.helpId,labelId:this.labelId,name:this.name},h("input",{class:"select__hidden-input",name:this.name,ref:e=>this.input=e,value:this.value,required:this.required,disabled:this.disabled,"aria-hidden":"true","aria-label":this.displayValue()||this.label||this.placeholder,onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus()}),h("sc-dropdown",{exportparts:"trigger, panel",disabled:this.disabled,open:this.open,closeOnSelect:this.closeOnSelect,position:this.position,placement:this.placement,hoist:this.hoist,style:{"--panel-width":"100%"},onScShow:()=>this.handleShow(),onScHide:()=>this.handleHide(),role:"select","aria-open":this.open?"true":"false"},h("slot",{name:"trigger",slot:"trigger"},h("div",{class:"trigger",role:"button",tabIndex:-1,onFocus:()=>this.handleFocus(),onBlur:()=>this.handleBlur()},h("div",{class:"select__value"},h("slot",null,this.displayValue()||this.placeholder||__("Select...","surecart"))),h("sc-icon",{exportparts:"base:caret",class:"select__caret",name:"chevron-down"}))),this.search&&h("sc-input",{exportparts:"base:search__base, input:search__input, form-control:search__form-control",placeholder:this.searchPlaceholder||__("Search...","surecart"),onScInput:e=>this.handleQuery(e),class:"search",clearable:!0,part:"search",value:this.searchTerm,ref:e=>this.searchInput=e,"aria-label":__("Type to search","surecart"),onKeyDown:e=>e.stopPropagation()},this.loading&&h("sc-spinner",{exportparts:"base:spinner__base",style:{"--spinner-size":"0.5em"},slot:"suffix"})),h("sc-menu",{style:{maxHeight:"210px",overflow:"auto"},exportparts:"base:menu__base",onScroll:e=>this.handleMenuScroll(e),"aria-multiselectable":"false"},h("slot",{name:"prefix"}),(this.filteredChoices||[]).map(((e,t)=>[this.renderItem(e,t),(e.choices||[]).map((e=>this.renderItem(e,t)))])),this.loading&&h("div",{class:"loading"},h("sc-spinner",{exportparts:"base:spinner__base"})),!this.loading&&!this.filteredChoices.length&&h("div",{class:"select__empty",part:"empty"},__("Nothing Found","surecart")),h("slot",{name:"suffix"})))))}static get is(){return"sc-select"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-select.scss"]}}static get styleUrls(){return{$:["sc-select.css"]}}static get properties(){return{autocomplete:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's autocomplete attribute."},attribute:"autocomplete",reflect:!1},placeholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Placeholder for no value"},attribute:"placeholder",reflect:!1,defaultValue:"''"},searchPlaceholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Placeholder for search"},attribute:"search-placeholder",reflect:!1,defaultValue:"''"},value:{type:"string",mutable:!0,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's value attribute."},attribute:"value",reflect:!0,defaultValue:"''"},choices:{type:"unknown",mutable:!0,complexType:{original:"Array<ChoiceItem>",resolved:"ChoiceItem[]",references:{Array:{location:"global"},ChoiceItem:{location:"import",path:"../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"The input's value attribute."},defaultValue:"[]"},unselect:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Can we unselect items."},attribute:"unselect",reflect:!1,defaultValue:"true"},required:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"required",reflect:!0},loading:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"loading",reflect:!1},search:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is search enabled?"},attribute:"search",reflect:!1},closeOnSelect:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"close-on-select",reflect:!1,defaultValue:"true"},name:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's name attribute."},attribute:"name",reflect:!0},help:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Some help text for the input."},attribute:"help",reflect:!1},label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's label."},attribute:"label",reflect:!1},size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's size."},attribute:"size",reflect:!0,defaultValue:"'medium'"},position:{type:"string",mutable:!1,complexType:{original:"'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'",resolved:'"bottom-left" | "bottom-right" | "top-left" | "top-right"',references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"position",reflect:!1,defaultValue:"'bottom-right'"},placement:{type:"string",mutable:!1,complexType:{original:"| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",resolved:'"bottom" | "bottom-end" | "bottom-start" | "left" | "left-end" | "left-start" | "right" | "right-end" | "right-start" | "top" | "top-end" | "top-start"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The placement of the dropdown."},attribute:"placement",reflect:!0,defaultValue:"'bottom-start'"},invalid:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"This will be true when the control is in an invalid state. Validity is determined by props such as `type`,\n`required`, `minlength`, `maxlength`, and `pattern` using the browser's constraint validation API."},attribute:"invalid",reflect:!0,defaultValue:"false"},open:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this open"},attribute:"open",reflect:!1},disabled:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"disabled",reflect:!1},showParentLabel:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"show-parent-label",reflect:!1,defaultValue:"true"},hoist:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"hoist",reflect:!1,defaultValue:"false"},squared:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"squared",reflect:!1},squaredBottom:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"squared-bottom",reflect:!1},squaredTop:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"squared-top",reflect:!1},squaredLeft:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"squared-left",reflect:!1},squaredRight:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"squared-right",reflect:!1}}}static get states(){return{hasFocus:{},searchTerm:{},filteredChoices:{}}}static get events(){return[{method:"scSearch",name:"scSearch",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted whent the components search query changes"},complexType:{original:"string",resolved:"string",references:{}}},{method:"scOpen",name:"scOpen",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted whent the components search query changes"},complexType:{original:"string",resolved:"string",references:{}}},{method:"scClose",name:"scClose",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted whent the components search query changes"},complexType:{original:"string",resolved:"string",references:{}}},{method:"scBlur",name:"scBlur",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control loses focus."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scFocus",name:"scFocus",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control gains focus."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scChange",name:"scChange",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control's value changes."},complexType:{original:"ChoiceItem",resolved:"ChoiceItem",references:{ChoiceItem:{location:"import",path:"../../../types"}}}},{method:"scScrollEnd",name:"scScrollEnd",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the list scrolls to the end."},complexType:{original:"void",resolved:"void",references:{}}}]}static get methods(){return{setCustomValidity:{complexType:{signature:"(message: string) => Promise<void>",parameters:[{tags:[],text:""}],references:{Promise:{location:"global"}},return:"Promise<void>"},docs:{text:"Sets a custom validation message. If `message` is not empty, the field will be considered invalid.",tags:[]}},reportValidity:{complexType:{signature:"() => Promise<boolean>",parameters:[],references:{Promise:{location:"global"}},return:"Promise<boolean>"},docs:{text:"",tags:[]}}}}static get elementRef(){return"el"}static get watchers(){return[{propName:"searchTerm",methodName:"handleSearchChange"},{propName:"choices",methodName:"handleSearchChange"},{propName:"value",methodName:"handleValueChange"},{propName:"open",methodName:"handleOpenChange"}]}static get listeners(){return[{name:"keydown",method:"handleKeyDown",target:void 0,capture:!1,passive:!1}]}}