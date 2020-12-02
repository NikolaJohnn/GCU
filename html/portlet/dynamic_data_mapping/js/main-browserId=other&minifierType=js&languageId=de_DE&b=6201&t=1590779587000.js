AUI.add("liferay-portlet-dynamic-data-mapping",function(k){var q=k.Array;var d=k.Lang;var n=k.FormBuilderField;var o=k.instanceOf;var h=d.isObject;var m=k.config.FormValidator;var s=["label","predefinedValue","tip"];var i={checkbox:["readOnly","required"],DEFAULT:["readOnly"]};var j="";var r={attributeList:j,nodeName:j};var e="]]>";var a="<![CDATA[";var b=" ";var f="<{nodeName}{attributeList}></{nodeName}>";var g={dataType:1,indexType:1,multiple:1,name:1,options:1,readOnly:1,repeatable:1,required:1,showLabel:1,type:1,width:1};m.STRINGS.structureFieldName='\u0042\u0069\u0074\u0074\u0065\u0020\u0067\u0065\u0062\u0065\u006e\u0020\u0053\u0069\u0065\u0020\u006e\u0075\u0072\u0020\u0061\u006c\u0070\u0068\u0061\u006e\u0075\u006d\u0065\u0072\u0069\u0073\u0063\u0068\u0065\u0020\u005a\u0065\u0069\u0063\u0068\u0065\u006e\u0020\u0061\u006e\u002e';m.RULES.structureFieldName=function(t){return(/^[\w\-]+$/).test(t)};var c=k.Component.create({ATTRS:{localizationMap:{validator:h,value:{}}},NAME:"availableField",EXTENDS:k.FormBuilderAvailableField});k.LiferayAvailableField=c;var l=k.Component.create({ATTRS:{availableFields:{validator:h,valueFn:function(){return l.AVAILABLE_FIELDS.DEFAULT}},portletNamespace:{value:j},portletResourceNamespace:{value:j},translationManager:{validator:h,value:{}},validator:{setter:function(v){var t=this;var u=k.merge({rules:{name:{required:true,structureFieldName:true}},fieldStrings:{name:{required:'\u0044\u0069\u0065\u0073\u0065\u0073\u0020\u0046\u0065\u006c\u0064\u0020\u0069\u0073\u0074\u0020\u0065\u0072\u0066\u006f\u0072\u0064\u0065\u0072\u006c\u0069\u0063\u0068\u002e'}}},v);return u},value:{}},strings:{value:{addNode:'\u0046\u0065\u006c\u0064\u0020\u0068\u0069\u006e\u007a\u0075\u0066\u00fc\u0067\u0065\u006e',button:'\u0053\u0063\u0068\u0061\u006c\u0074\u0066\u006c\u00e4\u0063\u0068\u0065',buttonType:'\u0053\u0063\u0068\u0061\u006c\u0074\u0066\u006c\u00e4\u0063\u0068\u0065\u006e\u0074\u0079\u0070',close:'\u0053\u0063\u0068\u006c\u0069\u0065\u00df\u0065\u006e',deleteFieldsMessage:'\u0053\u0069\u006e\u0064\u0020\u0053\u0069\u0065\u0020\u0073\u0069\u0063\u0068\u0065\u0072\u002c\u0020\u0064\u0061\u0073\u0073\u0020\u0053\u0069\u0065\u0020\u0064\u0069\u0065\u0020\u0061\u0075\u0073\u0067\u0065\u0077\u00e4\u0068\u006c\u0074\u0065\u006e\u0020\u0045\u0069\u006e\u0074\u0072\u00e4\u0067\u0065\u0020\u006c\u00f6\u0073\u0063\u0068\u0065\u006e\u0020\u006d\u00f6\u0063\u0068\u0074\u0065\u006e\u003f',duplicateMessage:'\u0044\u0075\u0062\u006c\u0065\u0074\u0074\u0065',editMessage:'\u0042\u0065\u0061\u0072\u0062\u0065\u0069\u0074\u0065\u006e',label:'\u0046\u0065\u006c\u0064\u0062\u0065\u0073\u0063\u0068\u0072\u0069\u0066\u0074\u0075\u006e\u0067',large:'\u0047\u0072\u006f\u00df',medium:'\u004d\u0069\u0074\u0074\u0065\u006c',multiple:'\u004d\u0065\u0068\u0072\u0065\u0072\u0065',name:'\u004e\u0061\u006d\u0065',no:'\u004e\u0065\u0069\u006e',options:'\u004f\u0070\u0074\u0069\u006f\u006e\u0065\u006e',predefinedValue:'\u0056\u006f\u0072\u0064\u0065\u0066\u0069\u006e\u0069\u0065\u0072\u0074\u0065\u0072\u0020\u0057\u0065\u0072\u0074',propertyName:'\u0045\u0069\u0067\u0065\u006e\u0073\u0063\u0068\u0061\u0066\u0074\u0073\u006e\u0061\u006d\u0065',required:'\u0045\u0072\u0066\u006f\u0072\u0064\u0065\u0072\u006c\u0069\u0063\u0068',reset:'\u005a\u0075\u0072\u00fc\u0063\u006b\u0073\u0065\u0074\u007a\u0065\u006e',save:'\u0053\u0070\u0065\u0069\u0063\u0068\u0065\u0072\u006e',settings:'\u0045\u0069\u006e\u0073\u0074\u0065\u006c\u006c\u0075\u006e\u0067\u0065\u006e',showLabel:'\u004c\u0061\u0062\u0065\u006c\u0020\u0061\u006e\u007a\u0065\u0069\u0067\u0065\u006e',small:'\u004b\u006c\u0065\u0069\u006e',submit:'\u0041\u0062\u0073\u0065\u006e\u0064\u0065\u006e',tip:'\u0054\u0069\u0070\u0070',type:'\u0054\u0079\u0070',value:'\u0057\u0065\u0072\u0074',width:'\u0042\u0072\u0065\u0069\u0074\u0065',yes:'\u004a\u0061'}}},EXTENDS:k.FormBuilder,NAME:"liferayformbuilder",prototype:{initializer:function(){var t=this;t.LOCALIZABLE_FIELD_ATTRS=k.Array(s);t.MAP_HIDDEN_FIELD_ATTRS=k.clone(i);var u=t.translationManager=new Liferay.TranslationManager(t.get("translationManager"));t.after("render",function(v){u.render()});t.addTarget(Liferay.Util.getOpener().Liferay)},bindUI:function(){var t=this;l.superclass.bindUI.apply(t,arguments);t.translationManager.after("editingLocaleChange",t._afterEditingLocaleChange,t)},createField:function(){var t=this;var u=l.superclass.createField.apply(t,arguments);u.set("readOnlyAttributes",t._getReadOnlyFieldAttributes(u));u.set("strings",t.get("strings"));return u},getContentXSD:function(){var t=this;return window[t.get("portletNamespace")+"getContentXSD"]()},getFieldLocalizedValue:function(y,v,u){var t=this;var x=y.get("localizationMap");var w=k.Object.getValue(x,[u,v])||y.get(v);return t.normalizeValue(w)},getXSD:function(){var t=this;var w=[];var v=t.translationManager;var x=v.get("editingLocale");t._updateFieldsLocalizationMap(x);var u=t._createDynamicNode("root",{"available-locales":v.get("availableLocales").join(),"default-locale":v.get("defaultLocale")});w.push(u.openTag);t.get("fields").each(function(z,y,A){t._appendStructureTypeElementAndMetaData(z,w)});w.push(u.closeTag);return w.join(j)},normalizeValue:function(u){var t=this;if(d.isUndefined(u)){u=j}return u},_afterEditingLocaleChange:function(v){var t=this;var u=t.editingField;if(u){u.set("readOnlyAttributes",t._getReadOnlyFieldAttributes(u))}t._updateFieldsLocalizationMap(v.prevVal);t._syncFieldsLocaleUI(v.newVal)},_appendStructureChildren:function(v,u){var t=this;v.get("fields").each(function(x,w,y){t._appendStructureTypeElementAndMetaData(x,u)})},_appendStructureFieldOptionsBuffer:function(w,u){var t=this;var v=w.get("options");if(v){q.each(v,function(z,y,A){var x=z.name;if(!x){x=k.FormBuilderField.buildFieldName("option")}var B=t._createDynamicNode("dynamic-element",{name:x,type:"option",value:Liferay.Util.escapeHTML(z.value)});u.push(B.openTag);t._appendStructureOptionMetaData(z,u);u.push(B.closeTag)})}},_appendStructureOptionMetaData:function(v,u){var t=this;var w=v.localizationMap;var x=t._createDynamicNode("entry",{name:"label"});k.each(w,function(A,y,C){if(h(A)){var z=t._createDynamicNode("meta-data",{locale:y});var B=t.normalizeValue(A.label);u.push(z.openTag,x.openTag,a+B+e,x.closeTag,z.closeTag)}})},_appendStructureTypeElementAndMetaData:function(x,v){var u=this;var w=u._createDynamicNode("dynamic-element",{dataType:x.get("dataType"),fieldNamespace:x.get("fieldNamespace"),indexType:x.get("indexType"),multiple:x.get("multiple"),name:x.get("name"),readOnly:x.get("readOnly"),repeatable:x.get("repeatable"),required:x.get("required"),showLabel:x.get("showLabel"),type:x.get("type"),width:x.get("width")});v.push(w.openTag);u._appendStructureFieldOptionsBuffer(x,v);u._appendStructureChildren(x,v);var t=u.translationManager.get("availableLocales");q.each(t,function(y,B,A){var z=u._createDynamicNode("meta-data",{locale:y});v.push(z.openTag);q.each(x.getProperties(),function(C,H,G){var D=C.attributeName;if(!g[D]){var F=u._createDynamicNode("entry",{name:D});var E=u.getFieldLocalizedValue(x,D,y);if((D==="predefinedValue")&&o(x,k.FormBuilderMultipleChoiceField)){E=k.JSON.stringify(q(E))}v.push(F.openTag,a+E+e,F.closeTag)}});v.push(z.closeTag)});v.push(w.closeTag)},_createDynamicNode:function(x,u){var t=this;var v=[];var w=[];if(!x){x="dynamic-element"}r.attributeList=j;r.nodeName=x;if(u){k.each(u,function(z,y,A){if(z!==undefined){v.push([y,'="',z,'" '].join(j))}});r.attributeList=b+v.join(j)}w=d.sub(f,r);w=w.replace(/\s?(>)(<)/,"$1$1$2$2").split(/></);return{closeTag:w[1],openTag:w[0]}},_getReadOnlyFieldAttributes:function(x){var t=this;var v=t.translationManager;var w=v.get("editingLocale");var u=x.get("readOnlyAttributes");if(w===v.get("defaultLocale")){q.removeItem(u,"name")}else{if(q.indexOf(u,"name")===-1){u.push("name")}}return u},_onPropertyModelChange:function(t){var C=this;var w=t.changed;var A=t.target.get("attributeName");var y=C.editingField;var z=y.get("readOnlyAttributes");if(w.hasOwnProperty("value")&&(k.Array.indexOf(z,"name")===-1)){if(A==="name"){y.set("autoGeneratedName",t.autoGeneratedName===true)}else{if((A==="label")&&y.get("autoGeneratedName")){var v=C.translationManager;if(v.get("editingLocale")===v.get("defaultLocale")){var B=w.value.newVal;y.set("name",B);var u=C.propertyList.get("data");var x=u.filter(function(E,D,F){return(E.get("attributeName")==="name")});if(x.length){x[0].set("value",y.get("name"),{autoGeneratedName:true})}}}}}},_renderSettings:function(){var t=this;l.superclass._renderSettings.apply(t,arguments);t.propertyList.on("model:change",t._onPropertyModelChange,t)},_setAvailableFields:function(v){var u=this;var t=q.map(v,function(x,w,y){return k.instanceOf(x,k.AvailableField)?x:new k.LiferayAvailableField(x)});t.sort(function(x,w){return k.ArraySort.compare(x.get("label"),w.get("label"))});return t},_syncFieldOptionsLocaleUI:function(w,u){var t=this;var v=w.get("options");q.each(v,function(z,y,B){var A=z.localizationMap;if(h(A)){var x=A[u];if(h(x)){z.label=x.label}}});w.set("options",v)},_syncFieldsLocaleUI:function(v,u){var t=this;u=u||t.get("fields");u.each(function(A,y,x){if(o(A,k.FormBuilderMultipleChoiceField)){t._syncFieldOptionsLocaleUI(A,v)}var z=A.get("localizationMap");var w=z[v];if(h(z)&&h(w)){q.each(t.LOCALIZABLE_FIELD_ATTRS,function(C,B,D){A.set(C,w[C])});t._syncUniqueField(A)}if(t.editingField===A){t.propertyList.set("data",A.getProperties())}t._syncFieldsLocaleUI(v,A.get("fields"))})},_updateFieldOptionsLocalizationMap:function(w,u){var t=this;var v=w.get("options");q.each(v,function(y,x,A){var z=y.localizationMap;if(!h(z)){z={}}z[u]={label:y.label};y.localizationMap=z});w.set("options",v)},_updateFieldsLocalizationMap:function(v,u){var t=this;u=u||t.get("fields");u.each(function(x,w,z){var y={};y[v]=x.getAttrs(t.LOCALIZABLE_FIELD_ATTRS);x.set("localizationMap",k.mix(y,x.get("localizationMap")));if(o(x,k.FormBuilderMultipleChoiceField)){t._updateFieldOptionsLocalizationMap(x,v)}t._updateFieldsLocalizationMap(v,x.get("fields"))})}},normalizeKey:function(t){k.each(t,function(v,u,w){if(!k.Text.Unicode.test(v,"L")&&!k.Text.Unicode.test(v,"N")&&!k.Text.Unicode.test(v,"Pd")){t=t.replace(v,b)}});return t.replace(/\s/g,"_")}});l.DEFAULT_ICON_CLASS="icon-fb-custom-field";var p={DEFAULT:[{fieldLabel:'\u0053\u0063\u0068\u0061\u006c\u0074\u0066\u006c\u00e4\u0063\u0068\u0065',iconClass:"form-builder-field-icon form-builder-field-icon-button",label:'\u0053\u0063\u0068\u0061\u006c\u0074\u0066\u006c\u00e4\u0063\u0068\u0065',type:"button"},{fieldLabel:'\u004b\u006f\u006e\u0074\u0072\u006f\u006c\u006c\u006b\u00e4\u0073\u0074\u0063\u0068\u0065\u006e',iconClass:"icon-fb-boolean",label:'\u004b\u006f\u006e\u0074\u0072\u006f\u006c\u006c\u006b\u00e4\u0073\u0074\u0063\u0068\u0065\u006e',type:"checkbox"},{fieldLabel:'\u0046\u0065\u006c\u0064\u0065\u0072\u006d\u0065\u006e\u0067\u0065',iconClass:"form-builder-field-icon form-builder-field-icon-fieldset",label:'\u0046\u0065\u006c\u0064\u0065\u0072\u006d\u0065\u006e\u0067\u0065',type:"fieldset"},{fieldLabel:'\u0054\u0065\u0078\u0074\u0062\u0065\u0072\u0065\u0069\u0063\u0068',iconClass:"icon-fb-text",label:'\u0054\u0065\u0078\u0074\u0062\u0065\u0072\u0065\u0069\u0063\u0068',type:"text"},{fieldLabel:'\u0054\u0065\u0078\u0074\u0062\u0065\u0072\u0065\u0069\u0063\u0068\u0020\u0028\u0048\u0054\u004d\u004c\u0029',iconClass:"icon-fb-text-box",label:'\u0054\u0065\u0078\u0074\u0062\u0065\u0072\u0065\u0069\u0063\u0068\u0020\u0028\u0048\u0054\u004d\u004c\u0029',type:"textarea"},{fieldLabel:'\u004f\u0070\u0074\u0069\u006f\u006e\u0073\u0066\u0065\u006c\u0064',iconClass:"icon-fb-radio",label:'\u004f\u0070\u0074\u0069\u006f\u006e\u0073\u0066\u0065\u006c\u0064',type:"radio"},{fieldLabel:'\u004f\u0070\u0074\u0069\u006f\u006e\u0020\u0061\u0075\u0073\u0077\u00e4\u0068\u006c\u0065\u006e',iconClass:"icon-fb-select",label:'\u004f\u0070\u0074\u0069\u006f\u006e\u0020\u0061\u0075\u0073\u0077\u00e4\u0068\u006c\u0065\u006e',type:"select"}],DDM_STRUCTURE:[{hiddenAttributes:i.checkbox,iconClass:"icon-fb-boolean",label:'\u0042\u006f\u006f\u006c\u0065\u0073\u0063\u0068\u0065\u0072\u0020\u0057\u0065\u0072\u0074',type:"checkbox"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-calendar",label:'\u0044\u0061\u0074\u0075\u006d',type:"ddm-date"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-decimal",label:'\u0044\u0065\u007a\u0069\u006d\u0061\u006c',type:"ddm-decimal"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-file-text",label:'\u0044\u006f\u006b\u0075\u006d\u0065\u006e\u0074\u0065\u0020\u0075\u006e\u0064\u0020\u004d\u0065\u0064\u0069\u0065\u006e',type:"ddm-documentlibrary"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-edit-sign",label:'\u0048\u0054\u004d\u004c',type:"ddm-text-html"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-integer",label:'\u0047\u0061\u006e\u007a\u007a\u0061\u0068\u006c',type:"ddm-integer"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-link",label:'\u004d\u0069\u0074\u0020\u0053\u0065\u0069\u0074\u0065\u0020\u0076\u0065\u0072\u006b\u006e\u00fc\u0070\u0066\u0065\u006e',type:"ddm-link-to-page"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-number",label:'\u005a\u0061\u0068\u006c',type:"ddm-number"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-radio",label:'\u0052\u0061\u0064\u0069\u006f',type:"radio"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-select",label:'\u0041\u0075\u0073\u0077\u0061\u0068\u006c',type:"select"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-text",label:'\u0054\u0065\u0078\u0074',type:"text"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-text-box",label:'\u0054\u0065\u0078\u0074\u0062\u0065\u0072\u0065\u0069\u0063\u0068',type:"textarea"}],DDM_TEMPLATE:[{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-paragraph",label:'\u0050\u0061\u0072\u0061\u0067\u0072\u0061\u0070\u0068',type:"ddm-paragraph"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-separator",label:'\u0054\u0072\u0065\u006e\u006e\u007a\u0065\u0069\u0063\u0068\u0065\u006e',type:"ddm-separator"},{hiddenAttributes:i.DEFAULT,iconClass:"icon-fb-fieldset",label:'\u0046\u0065\u006c\u0064\u0065\u0072\u006d\u0065\u006e\u0067\u0065',type:"fieldset"}],WCM_STRUCTURE:[{hiddenAttributes:i.DEFAULT,iconClass:"icon-picture",label:'\u0042\u0069\u006c\u0064',type:"wcm-image"}]};p.WCM_STRUCTURE=p.WCM_STRUCTURE.concat(p.DDM_STRUCTURE);l.AVAILABLE_FIELDS=p;Liferay.FormBuilder=l},"",{requires:["aui-form-builder","aui-form-validator","aui-text-unicode","json","liferay-menu","liferay-translation-manager","text"]});