AUI.add("liferay-portlet-journal",function(b){var a=b.DataType;var n=b.JSON;var e=b.Lang;var k=function(){var s="";var r=Liferay.Portlet.Journal.PROXY.instanceIdKey;for(var q=0;q<8;q++){var t=Math.floor(Math.random()*r.length);s+=r.substring(t,t+1)}return s};var g=function(){return(++b.Env._uidx)};var f='<div><li class="structure-field {cssClass}"><span class="journal-article-close"></span><span class="folder"><div class="field-container"><input class="journal-article-localized" type="hidden" value="false" /><div class="journal-article-move-handler"></div><label for="" class="journal-article-field-label"><span>{fieldLabel}</span></label><div class="journal-article-component-container"></div><span class="field field-choice journal-article-localized-checkbox"><span class="field-content"><span class="field-element field-label-right"><input type="hidden" value="false" name="{portletNamespace}{instanceId}localized-checkbox"><input type="checkbox" onclick="Liferay.Util.updateCheckboxValue(this); " name="{portletNamespace}{instanceId}localized-checkboxCheckbox" id="{portletNamespace}{instanceId}localized-checkboxCheckbox"> </span><label for="{portletNamespace}{instanceId}localized-checkboxCheckbox">{localizedLabelLanguage}</label></span></span><div class="alert alert-error journal-article-required-message">{requiredFieldLanguage}</div><div class="journal-article-buttons {articleButtonsRowCSSClass}"><span class="field field-inline field-text journal-article-variable-name"><span class="field-content"><label for="{portletNamespace}{instanceId}variableName">{variableNameLanguage}</label><span class="field-element "><input type="text" size="25" value="{variableName}" name="{portletNamespace}variableName" id="{portletNamespace}{instanceId}variableName"></span></span></span>{editButtonTemplateHTML}{repeatableButtonTemplateHTML}</div></div><ul class="folder-droppable"></ul></span></li></div>';var o='<div id="{0}" class="journal-article-helper not-intersecting"><div class="journal-component"></div><div class="forbidden-action"></div></div>';var d='<div class="alert alert-info journal-article-instructions-container journal-article-instructions-message"></div>';var p='<input class="lfr-input-text" type="text" value="" size="40"/>';var l='<img align="top" class="journal-article-instructions-container" src="'+themeDisplay.getPathThemeImages()+'/portlet/help.png" />';var h=new b.DataSet();var m=function(t,s){var q=this;q.articleId=s;q.timers={};q.portletNamespace=t;q._helperId=q._getNamespacedId("journalArticleHelper",q.portletNamespace,"");var r=e.sub(o,[q._helperId]);q._helper=b.Node.create(r);q._helper.appendTo(document.body);q.acceptChildren=true;q._attachDelegatedEvents();q._attachEvents()};m.prototype={canDrop:function(s){var q=this;var r=q.getComponentType(s);var t=true;if((r=="list")||(r=="multi-list")){t=false}else{if(s.hasClass("repeated-field")||s.hasClass("parent-structure-field")){t=false}}return t},displayTemplateMessage:function(){var q=this;var s='\u0042\u0069\u0074\u0074\u0065\u0020\u0066\u00fc\u0067\u0065\u006e\u0020\u0053\u0069\u0065\u0020\u0065\u0069\u006e\u0020\u0054\u0065\u006d\u0070\u006c\u0061\u0074\u0065\u0020\u0068\u0069\u006e\u007a\u0075\u002c\u0020\u0064\u0061\u006d\u0069\u0074\u0020\u0064\u0069\u0065\u0073\u0065\u0020\u0053\u0074\u0072\u0075\u006b\u0074\u0075\u0072\u0020\u0061\u006e\u0067\u0065\u007a\u0065\u0069\u0067\u0074\u0020\u0077\u0065\u0072\u0064\u0065\u006e\u0020\u006b\u0061\u006e\u006e\u002e';alert(s);q.showMessage(q.getById("selectTemplateMessage"),"info",s,30000);var r=q.getById("selectTemplateButton");if(r){r.focus()}},getById:function(s,r){var q=this;return b.one(q._getNamespacedId(s,r))},getByName:function(u,s,t){var q=this;var r=t?s:q.portletNamespace+s;return b.one(u).one("[name="+r+"]")},getComponentType:function(q){return q.attr("dataType")},getDefaultLocale:function(){var q=this;var r=q.getById("defaultLocale");if(r){r=r.val()}return r},getFieldInstance:function(r){var q=this;var s=r.get("id");return h.item(s)},getFields:function(){var q=this;var r=q._getNamespacedId("#structureTree");return b.all(r+" li")},getGroupId:function(){var q=this;var r=themeDisplay.getScopeGroupId();if(q.articleId){var s=q.getPrincipalForm();var u=q.getByName(s,"groupId");var t=u.val();if(t){r=t}}return r},getRepeatedSiblings:function(s){var r=this;var t=r._getNamespacedId("#structureTree");var q=t+" li[dataName="+s.get("variableName")+"].repeated-field";return b.all(q)},getSaveDialog:function(D){var C=this;if(!C._saveDialog){var s=C.getById("saveStructureTemplateDialog");var z=s.html();var A='\u0044\u0065\u0074\u0061\u0069\u006c\u0073\u0020\u0064\u0065\u0072\u0020\u0053\u0074\u0072\u0075\u006b\u0074\u0075\u0072\u0020\u0062\u0065\u0061\u0072\u0062\u0065\u0069\u0074\u0065\u006e';var r=C.getPrincipalForm();var w=C.getByName(r,"groupId");var B=C.getByName(r,"structureId");var y=C.getByName(r,"structureName");var v=C.getByName(r,"structureDescription");var q=C.getByName(r,"structureXSD");var t=function(){var G=C._saveDialog.fields;C.showMessage(G.messageElement,"info",'\u0057\u0061\u0072\u0074\u0065\u0020\u0061\u0075\u0066\u0020\u0041\u006e\u0074\u0077\u006f\u0072\u0074');var I=C.getPrincipalForm();var F=C.getByName(I,"structureId");var H=F.val();if(!H){var E=G.saveStructureAutogenerateIdCheckbox.get("checked");C.addStructure(w.val(),G.dialogStructureId.val(),E,G.dialogStructureName.val(),G.dialogDescription.val(),G.contentXSD,x)}else{C.updateStructure(G.dialogStructureGroupId.val(),G.dialogStructureId.val(),C.getParentStructureId(),G.dialogStructureName.val(),G.dialogDescription.val(),G.contentXSD,x)}};C._saveDialog=Liferay.Util.Window.getWindow({dialog:{bodyContent:z,toolbars:{footer:[{label:'\u0053\u0070\u0065\u0069\u0063\u0068\u0065\u0072\u006e',on:{click:t}},{label:'\u0041\u0062\u0062\u0072\u0065\u0063\u0068\u0065\u006e',on:{click:function(){C._saveDialog.hide()}}}]}},title:A});C._saveDialog.fields={autoGenerateIdMessage:'\u0049\u0044\u0020\u0061\u0075\u0074\u006f\u006d\u0061\u0074\u0069\u0073\u0063\u0068\u0020\u0067\u0065\u006e\u0065\u0072\u0069\u0065\u0072\u0065\u006e',contentXSD:"",dialogDescription:C.getById("saveStructureStructureDescription"),dialogStructureGroupId:C.getById("saveStructureStructureGroupId"),dialogStructureId:C.getById("saveStructureStructureId"),dialogStructureName:C.getById("saveStructureStructureName"),idInput:C.getById("saveStructureStructureId"),loadDefaultStructure:C.getById("loadDefaultStructure"),messageElement:C.getById("saveStructureMessage"),saveStructureAutogenerateId:C.getById("saveStructureAutogenerateId"),saveStructureAutogenerateIdCheckbox:C.getById("saveStructureAutogenerateIdCheckbox"),showStructureIdContainer:C.getById("showStructureIdContainer"),structureIdContainer:C.getById("structureIdContainer"),structureNameLabel:C.getById("structureNameLabel")};var u=C._saveDialog.fields;var x=function(G){var F=G.exception;if(!F){v.val(u.dialogDescription.val());B.val(G.structureId);y.val(u.dialogStructureName.val());q.val(u.contentXSD);u.dialogStructureGroupId.val(G.structureGroupId);u.dialogStructureId.val(G.structureId);u.structureNameLabel.html(Liferay.Util.escapeHTML(u.dialogStructureName.val()));u.saveStructureAutogenerateIdCheckbox.hide();if(u.loadDefaultStructure){u.loadDefaultStructure.show()}u.dialogStructureId.attr("disabled","disabled");C.showMessage(u.messageElement,"success",'\u0049\u0068\u0072\u0065\u0020\u0041\u006e\u0066\u0072\u0061\u0067\u0065\u0020\u0077\u0075\u0072\u0064\u0065\u0020\u0065\u0072\u0066\u006f\u006c\u0067\u0072\u0065\u0069\u0063\u0068\u0020\u0076\u0065\u0072\u0061\u0072\u0062\u0065\u0069\u0074\u0065\u0074\u002e');var H=C.getById("structureMessage");H.hide()}else{var E=C._translateErrorMessage(F);C.showMessage(u.messageElement,"error",E)}};u.saveStructureAutogenerateIdCheckbox.on("click",function(E){var G=E.target;var F=G.get("checked");u.saveStructureAutogenerateId.val(F);if(F){u.dialogStructureId.attr("disabled","disabled").val(u.autoGenerateIdMessage)}else{u.dialogStructureId.attr("disabled","").val("")}});u.showStructureIdContainer.on("click",function(E){u.structureIdContainer.toggle();E.halt()});u.dialogStructureName.focus()}else{C._saveDialog.show()}if(D){D.apply(C,[C._saveDialog])}},getSelectedField:function(){var r=this;var s=null;var q=r.getFields();if(q){s=q.filter(".selected")}return s?s.item(0):null},getSourceByNode:function(r){var q=this;return r.ancestor("li",true)},getPrincipalFieldElement:function(s){var q=this;var r=s.one("div.journal-article-component-container");return r.one("input")},getPrincipalForm:function(r){var q=this;return b.one("form[name="+q.portletNamespace+(r||"fm1")+"]")},getNodeTypeContent:function(){var q=this;return q.hasStructure()?"dynamic-content":"static-content"},hasStructure:function(){var q=this;var s=q.getPrincipalForm();var r=q.getByName(s,"structureId");return r&&r.val()},hasTemplate:function(){var q=this;var s=q.getPrincipalForm();var r=q.getByName(s,"templateId");return r&&r.val()},loadDefaultStructure:function(){var q=this;var t=q.getPrincipalForm();var s=q.getByName(t,"structureId");var r=q.getByName(t,"templateId");s.val("");r.val("");submitForm(t,null,false,false)},normalizeValue:function(r){var q=this;if(e.isUndefined(r)){r=""}return r},openPopupWindow:function(r,s,t){var q=this;Liferay.Util.openWindow({id:q.portletNamespace+t,title:s,uri:r})},openSaveStructureDialog:function(){var q=this;var v=q.getPrincipalForm();var r=q.getByName(v,"structureId");var s=q.getByName(v,"structureName");var u=q.getByName(v,"structureDescription");var t=r.val();q.getSaveDialog(function(x){var w=x.fields;w.dialogStructureName.val(s.val());w.dialogDescription.val(u.val());w.dialogStructureId.attr("disabled","disabled").val(w.autoGenerateIdMessage);if(t){w.saveStructureAutogenerateId.hide();w.dialogStructureId.val(r.val())}x.show();x._setAlignCenter(true)})},saveArticle:function(s){var A=this;var r=A.getPrincipalForm();if(A.hasStructure()&&!A.hasTemplate()&&!A.updateStructureDefaultValues()){A.displayTemplateMessage()}else{if(!s){s=A.articleId?"update":"add"}var z=A.getByName(r,"articleId");var u=A.getByName(r,"classNameId");var x=A.getByName(r,"cmd");var y=A.getByName(r,"content");var t=A.getByName(r,"newArticleId");var w=A.getByName(r,"workflowAction");var v=Liferay.Util.toNumber(u.val());var q=v||A.validateRequiredFields();if(q){if(s=="publish"){w.val(Liferay.Workflow.ACTION_PUBLISH);s=A.articleId?"update":"add"}x.val(s);if(!A.articleId){z.val(t.val())}submitForm(r)}}},showMessage:function(r,v,w,s){var q=this;var t=b.one(r);var u="save-structure-message alert alert-"+(v||"success");t.attr("className",u);t.show();if(q.editContainerContextPanel){q.editContainerContextPanel.refreshAlign()}if(w){t.html(w)}q.timers[r]=b.later(s||5000,q,function(){t.hide();if(q.editContainerContextPanel){q.editContainerContextPanel.refreshAlign()}})},translateArticle:function(){var q=this;var s=q.getPrincipalForm();var r=q.getByName(s,"cmd");r.val("translate");submitForm(s)},unselectFields:function(){var q=this;var r=q.getSelectedField();if(r){r.removeClass("selected")}},updateStructureDefaultValues:function(){var q=this;var s=q.getPrincipalForm();var r=q.getByName(s,"classNameId");return(r&&r.val()>0)},validateRequiredFields:function(){var r=this;var u=true;var w=null;var v=r._getNamespacedId("#structureTree");var q=b.all(v+" li");var t=q.filter("[dataRequired=true]");var s=b.all(v+" li .field-container");s.removeClass("required-field");b.each(t,function(A,y,C){var x=r.getFieldInstance(A);var z=x.getContent(A);if(!z){var B=A.one(".field-container");B.addClass("required-field");if(u){w=r.getPrincipalFieldElement(A)}u=false}});if(w){w.focus()}return u},_appendStructureChildren:function(v,t,s){var r=this;var q="> span.folder > ul > li";if(!s){q+=".structure-field:not(.repeated-field):not(.parent-structure-field)"}var u=v.all(q);b.each(u,function(x,w,y){r._appendStructureTypeElementAndMetaData(x,t,s)})},_appendStructureTypeElementAndMetaData:function(F,J,D){var O=this;var L=O.getFieldInstance(F);if(L){var H;var w=L.get("fieldType");var y=L.get("indexType");if(D){var N=L.get("instanceId");if(!N){N=k();L.set("instanceId",N)}H=O._createDynamicNode("dynamic-element",{"instance-id":N,name:Liferay.Util.escapeHTML(L.get("variableName")),type:Liferay.Util.escapeHTML(w),"index-type":y})}else{H=O._createDynamicNode("dynamic-element",{name:Liferay.Util.escapeHTML(L.get("variableName")),type:Liferay.Util.escapeHTML(w),"index-type":y,repeatable:L.get("repeatable")})}var r=null;if(L.get("localized")){var P=L.get("localizedValue");if(P!=="false"){r={"language-id":P}}}var G=O.getNodeTypeContent();var z=O._createDynamicNode(G,r);var C=O._createDynamicNode("meta-data");var t=O._createDynamicNode("entry",{name:"instructions"});var x=O._createDynamicNode("entry",{name:"required"});var E=O._createDynamicNode("entry",{name:"displayAsTooltip"});var A=O._createDynamicNode("entry",{name:"label"});var u=O._createDynamicNode("entry",{name:"predefinedValue"});J.push(H.openTag);if(!D){O._appendStructureFieldOptionsBuffer(F,J)}O._appendStructureChildren(F,J,D);if(!D){J.push(C.openTag);var B=O.normalizeValue(L.get("displayAsTooltip"));J.push(E.openTag,"<![CDATA["+B+"]]>",E.closeTag);var v=O.normalizeValue(L.get("required"));J.push(x.openTag,"<![CDATA["+v+"]]>",x.closeTag);var q=O.normalizeValue(L.get("instructions"));J.push(t.openTag,"<![CDATA["+q+"]]>",t.closeTag);var K=O.normalizeValue(L.get("fieldLabel"));J.push(A.openTag,"<![CDATA["+K+"]]>",A.closeTag);var s=O.normalizeValue(L.get("predefinedValue"));J.push(u.openTag,"<![CDATA["+s+"]]>",u.closeTag,C.closeTag)}else{if(D){J.push(z.openTag);var M=(w=="list")||(w=="multi-list");if(M){O._appendStructureFieldOptionsBuffer(F,J,D)}else{var I=L.getContent(F)||"";J.push("<![CDATA["+I+"]]>")}J.push(z.closeTag)}}J.push(H.closeTag)}},_appendStructureFieldOptionsBuffer:function(v,s,r){var q=this;var t=q.getFieldInstance(v);var u=t.get("fieldType");var w=v.all("> .folder > .field-container > .journal-article-component-container > .journal-list-subfield option");if(w){b.each(w,function(B,z,C){var x=B.text();var E=B.val();if(!r){var D=q._createDynamicNode("dynamic-element",{name:Liferay.Util.escapeHTML(x),type:Liferay.Util.escapeHTML(E),repeatable:t.get("repeatable")});s.push(D.openTag+D.closeTag)}else{if(B.get("selected")){var y=(u=="multi-list");var A=q._createDynamicNode("option");if(y){s.push(A.openTag)}s.push("<![CDATA["+Liferay.Util.escapeCDATA(E)+"]]>");if(y){s.push(A.closeTag)}}}})}},_attachDelegatedEvents:function(){var r=this;var t=r.getById("journalArticleContainer");var u=function(w){var A=w.currentTarget;var z=A.get("parentNode");var B=z.get("parentNode").one("select");var x=z.one("input.journal-list-key");var D=x.val();var E=z.one("input.journal-list-value");var C=E.val();if(D&&C){var F=B.all("option");F.each(function(J,I,K){var G=e.trim(D);var H=e.trim(J.text());if(H.toLowerCase()==G.toLowerCase()){J.remove()}});var y=b.Node.create(TPL_OPTION).val(C).text(D);B.append(y);y.attr("selected","selected");x.val("").focus();E.val("value")}else{x.focus()}};var s=function(x){var w=x.currentTarget.get("parentNode").one("span.journal-add-field");if(x.isKey("ENTER")){x.currentTarget=w;u.apply(x.currentTarget,arguments)}};var v=function(z){var y=z.currentTarget;var w=y.get("parentNode").one("select").focus();var x=w.all("option");x.each(function(B,A,C){if(B.attr("selected")){B.remove()}})};t.delegate("click",function(w){var y=w.currentTarget;var x=r.getSourceByNode(y);r._updateLocaleState(x,y)},".journal-article-localized-checkbox input");t.delegate("keypress",s,".journal-list-key, .journal-list-value");t.delegate("click",u,".journal-add-field");t.delegate("click",v,".journal-delete-field");t.delegate("click",function(A){var y=A.currentTarget;var w=null;var x=y.ancestor(".journal-image-preview");var z=x.one(".journal-image-wrapper");var B=r.getByName(x,"journalImageDelete");if(B.val()==""){B.val("delete");z.hide();w='\u0041\u0062\u0062\u0072\u0065\u0063\u0068\u0065\u006e'}else{B.val("");z.show();w='\u004c\u00f6\u0073\u0063\u0068\u0065\u006e'}y.val(w)},"#"+r.portletNamespace+"journalImageDeleteButton");t.delegate("click",function(A){var z=A.currentTarget;var w=z.get("parentNode").get("parentNode").one(".journal-image-preview");var x=z.one(".show-label").show();var y=z.one(".hide-label").show();var B=w.hasClass("hide");if(B){x.hide();y.show()}else{x.show();y.hide()}w.toggle()},".journal-image-link");t.delegate("click",function(z){var x=z.currentTarget;var w=x.ancestor(".journal-article-component-container").one("input");var y=x.attr("data-documentlibraryUrl");window[r.portletNamespace+"selectDocumentLibrary"]=function(A){w.val(A)};r.openPopupWindow(y,'\u0044\u006f\u006b\u0075\u006d\u0065\u006e\u0074\u0065\u0020\u0075\u006e\u0064\u0020\u004d\u0065\u0064\u0069\u0065\u006e',"selectDocumentLibrary")},".journal-documentlibrary-button");t.delegate("mouseover",function(y){var A=y.currentTarget;var z=r.getSourceByNode(A);var x=r.getFieldInstance(z);if(x){var w=x.get("instructions");Liferay.Portal.ToolTip.show(this,Liferay.Util.escapeHTML(w))}},"img.journal-article-instructions-container");var q='[name="'+r.portletNamespace+'variableName"]';t.delegate("keypress",b.bind("_onKeypressVariableName",r),q);t.delegate("keyup",b.bind("_onKeyupVariableName",r),q);r._attachDelegatedEvents=e.emptyFn},_attachEvents:function(){var q=this;var r=q.getById("changeStructureButton");var w=q.getById("editStructureLink");var t=q.getById("loadDefaultStructure");var s=q.getById("publishButton");var u=q.getById("saveButton");var v=q.getById("translateButton");if(r){r.detach("click");r.on("click",function(y){y.preventDefault();var x=y.currentTarget.attr("href");q.openPopupWindow(x,"ChangeStructure","changeStruture")})}if(w){w.detach("click");w.on("click",function(x){Liferay.set("controlPanelSidebarHidden",true);q._attachEditContainerEvents();q.enableEditMode()})}if(t){t.detach("click");t.on("click",function(){q.loadDefaultStructure()})}},_createDynamicNode:function(u,r){var q=this;var s=[];if(!u){u="dynamic-element"}var t=["<",u,(r?" ":""),,">",,"</",u,">"];b.each(r||{},function(w,v,x){if(w!==undefined){s.push([v,'="',w,'" '].join(""))}});t[3]=s.join("").replace(/[\s]+$/g,"");typeElement=t.join("").replace(/></,">><<").replace(/ +>/,">").split(/></);return{closeTag:typeElement[1],openTag:typeElement[0]}},_getNamespacedId:function(t,r,s){var q=this;if(!e.isString(r)){r=q.portletNamespace}if(!e.isString(s)){s="#"}t=t.replace(/^#/,"");return s+r+t},_updateLocaleState:function(q,u){var w=this;var r=u.get("checked");var y=w.getDefaultLocale();var s=q.one(".journal-article-localized");var v=y;var t=function(z){if(s){s.val(z)}};if(r){t(v)}else{if(!confirm('\u0044\u0061\u0073\u0020\u0044\u0065\u0061\u006b\u0074\u0069\u0076\u0069\u0065\u0072\u0065\u006e\u0020\u0064\u0069\u0065\u0073\u0065\u0073\u0020\u0046\u0065\u006c\u0064\u0065\u0073\u0020\u0062\u0065\u0077\u0069\u0072\u006b\u0074\u0020\u0064\u0061\u0073\u0020\u004c\u00f6\u0073\u0063\u0068\u0065\u006e\u0020\u0076\u006f\u006e\u0020\u006c\u006f\u006b\u0061\u006c\u0065\u006e\u0020\u0044\u0061\u0074\u0065\u006e\u002c\u0020\u0076\u006f\u006e\u0020\u0068\u0069\u0065\u0072\u0020\u006e\u0069\u0063\u0068\u0074\u0020\u0061\u006e\u0067\u0065\u007a\u0065\u0069\u0067\u0074\u0065\u006e\u0020\u0053\u0070\u0072\u0061\u0063\u0068\u0065\u006e\u002e\u0020\u004d\u00f6\u0063\u0068\u0074\u0065\u006e\u0020\u0053\u0069\u0065\u0020\u0066\u006f\u0072\u0074\u0066\u0061\u0068\u0072\u0065\u006e\u003f')){u.attr("checked",true);t(v)}else{t(false)}}var x=w.getFieldInstance(q);x.set("localized",u.get("checked"));x.setInstanceId(x.get("instanceId"))}};b.augment(m,b.EventTarget);var j=b.Component.create({ATTRS:{content:{validator:e.isString,value:""},displayAsTooltip:{setter:function(r){var q=this;return q.setAttribute("displayAsTooltip",a.Boolean.parse(r))},valueFn:function(){var q=this;return q.getAttribute("displayAsTooltip",true)}},fieldLabel:{setter:function(r){var q=this;return q.setFieldLabel(r)},valueFn:function(){var q=this;return q.getAttribute("fieldLabel","")}},fieldType:{setter:function(r){var q=this;return q.setAttribute("fieldType",r)},validator:e.isString,value:""},localized:{valueFn:function(){var q=this;var r=q.getLocalizedValue();return(String(r)=="true")}},localizedValue:{getter:function(){var q=this;return q.getLocalizedValue()}},indexType:{setter:function(r){var q=this;return q.setAttribute("IndexType",r)},valueFn:function(){var q=this;return q.getAttribute("IndexType","")}},innerHTML:{validator:e.isString,value:p},instructions:{setter:function(r){var q=this;return q.setInstructions(r)},valueFn:function(){var q=this;return q.getAttribute("instructions","")}},instanceId:{setter:function(r){var q=this;return q.setInstanceId(r)},valueFn:function(){var q=this;var r=k();return q.getAttribute("instanceId",r)}},optionsEditable:{validator:e.isBoolean,value:true},parentStructureId:{setter:function(r){var q=this;return q.setAttribute("parentStructureId",r)},valueFn:function(){var q=this;return q.getAttribute("parentStructureId","")}},predefinedValue:{setter:function(r){var q=this;return q.setAttribute("predefinedValue",r)},valueFn:function(){var q=this;return q.getAttribute("predefinedValue","")}},repeatable:{setter:function(r){var q=this;return q.setRepeatable(a.Boolean.parse(r))},valueFn:function(){var q=this;return q.getAttribute("repeatable",false)}},repeated:{getter:function(){var q=this;return q.get("source").hasClass("repeated-field")}},required:{setter:function(r){var q=this;return q.setAttribute("required",a.Boolean.parse(r))},valueFn:function(){var q=this;return q.getAttribute("required",false)}},source:{value:null},variableName:{setter:function(r){var q=this;return q.setVariableName(r)},validator:e.isString,valueFn:function(){var q=this;return q.getAttribute("name")}}},EXTENDS:b.Widget,NAME:"structurefield",constructor:function(r,s){var q=this;q._lazyAddAttrs=false;q.portletNamespace=s;j.superclass.constructor.apply(this,arguments)},UI_ATTRS:["optionsEditable"],prototype:{cloneableAttrs:["displayAsTooltip","fieldLabel","fieldType","indexType","innerHTML","instructions","localized","localizedValue","predefinedValue","repeatable","required","variableName"],initializer:function(){var r=this;var q=r.propagateAttr;b.each(r.cloneableAttrs,function(t,s,u){r.after(t+"Change",q)})},destructor:function(){var q=this;var v=q.get("source");var t=v.all(".structure-field");t.each(function(z,y,A){var x=q.getFieldInstance(z);if(x){x.destroy()}});var s=q.get("fieldType");if(s=="text_area"){var r=v.one("textarea");if(r){var w=r.attr("name");var u=window[w];if(u&&e.isFunction(u.destroy)){u.destroy()}}}},canDrop:function(){var q=this;return m.prototype.canDrop.apply(q,arguments)},clone:function(){var q=this;var r={};var s=q.portletNamespace;b.each(q.cloneableAttrs,function(u,t,v){r[u]=q.get(u)});r.source=null;return new j(r,s)},createInstructionsContainer:function(q){return b.Node.create(d).html(Liferay.Util.escapeHTML(q))},createTooltipImage:function(){return b.Node.create(l)},getAttribute:function(s,r){var q=this;var u;var t=q.get("source");if(t){u=t.attr("data"+s)}if(e.isUndefined(u)&&!e.isUndefined(r)){u=r}return u},getByName:function(){var q=this;return m.prototype.getByName.apply(q,arguments)},getComponentType:function(){var q=this;return m.prototype.getComponentType.apply(q,arguments)},getContent:function(r){var C=this;var y;var z=C.get("fieldType");var t=r.one("div.journal-article-component-container");var w=t.one("input");if(z=="boolean"){y=w.attr("checked")}else{if(z=="text_area"){var v=r.one("textarea").attr("name");var A=window[v];if(A&&e.isFunction(A.getHTML)){y=A.getHTML()}}else{if(z=="multi-list"){var s=[];var D=w.all("option");D.each(function(F,E,H){if(F.get("selected")){var G=F.val();s.push(G)}});y=s.join(",")}else{if(z=="image"){var x=C.getByName(t,"journalImageDelete");if(x&&(x.val()=="delete")){y="delete"}else{var u=t.one(".journal-image-field input");var q=u.val()||false;if(q){y=q}else{var B=t.one(".journal-image-preview input.journal-image-preview-content");if(B){y=B.val()}}}}else{if(w){y=w.val()}}}}}if((z=="list")||(z=="multi-list")||(z=="text")||(z=="text_box")){y=Liferay.Util.escapeCDATA(y)}C.set("content",y);return y},getFieldContainer:function(){var E=this;if(!E.fieldContainer){var y=[];var r='\u0046\u0065\u006c\u0064';var x='\u004c\u006f\u006b\u0061\u006c\u0069\u0073\u0069\u0065\u0072\u0062\u0061\u0072';var s='\u0044\u0069\u0065\u0073\u0065\u0073\u0020\u0046\u0065\u006c\u0064\u0020\u0069\u0073\u0074\u0020\u0065\u0072\u0066\u006f\u0072\u0064\u0065\u0072\u006c\u0069\u0063\u0068\u002e';var G='\u0056\u0061\u0072\u0069\u0061\u0062\u006c\u0065\u006e\u006e\u0061\u006d\u0065';var z=E.get("optionsEditable");var A=E.getById("editButtonTemplate");var C="";if(A){C=A.html()}var D="";if(!z){D="hide"}var F=E.getById("repeatableButtonTemplate");var w="";if(F){w=F.html()}var u=E.get("fieldType");var v=E.get("required");var B=E.get("variableName")+g();var t=k();y=e.sub(f,{articleButtonsRowCSSClass:D,cssClass:"journal-structure-"+u.replace(/_/g,"-"),editButtonTemplateHTML:C,fieldLabel:r,localizedLabelLanguage:x,instanceId:t,portletNamespace:E.portletNamespace,repeatableButtonTemplateHTML:w,requiredFieldLanguage:s,variableName:B,variableNameLanguage:G});E.fieldContainer=b.Node.create(y);var q=E.fieldContainer.one("li");q.setAttribute("dataName",B);q.setAttribute("dataRequired",v);q.setAttribute("dataType",u);q.setAttribute("dataInstanceId",t);if(!E.canDrop(q)){E.fieldContainer.one(".folder-droppable").remove()}}return E.fieldContainer},getFieldInstance:function(){var q=this;return m.prototype.getFieldInstance.apply(q,arguments)},getFieldLabelElement:function(){var q=this;var r=q.get("source");if(!r){r=q.getFieldContainer().one("li")}return r.one("> .folder > .field-container .journal-article-field-label")},getLocalizedValue:function(){var q=this;var s=q.get("source");var r;if(s){r=s.one(".journal-article-localized")}return r?r.val():"false"},getRepeatedSiblings:function(){var q=this;return m.prototype.getRepeatedSiblings.apply(q,[q])},propagateAttr:function(r){var q=this;var s=q.getRepeatedSiblings();if(s){s.each(function(v,u,w){var t=q.getFieldInstance(v);if(t){t.set(r.attrName,r.newVal)}})}},setFieldLabel:function(s){var q=this;var r=q.getFieldLabelElement();if(!s){s=q.get("variableName")}if(r){r.one("span").html(Liferay.Util.escapeHTML(s));q.setAttribute("fieldLabel",s)}return s},setInstanceId:function(v){var q=this;q.setAttribute("instanceId",v);var s=q.get("fieldType");var u=q.get("source");if((s=="image")&&u){var t=q.get("localized");var w=q.portletNamespace+"structure_image_"+v+"_"+q.get("variableName");var r=u.one(".journal-article-component-container [type=file]");if(t){w+="_"+q.get("localizedValue")}r.attr("name",w)}return v},setInstructions:function(y){var z=this;var q=z.get("source");if(q){var A=z.getFieldInstance(q);z.setAttribute("instructions",y);if(A){var s=q.one("> .folder > .field-container");var w=A.getFieldLabelElement();var r=w.one(".journal-article-instructions-container");var t=s.one(".journal-article-instructions-message");var x=A.get("displayAsTooltip");if(r){r.remove()}if(t){t.remove()}if(y){if(!x){var u=A.createInstructionsContainer(y);var v=s.one(".journal-article-required-message");v.placeAfter(u)}else{if(w){w.append(A.createTooltipImage())}}}}}return y},setRepeatable:function(v){var q=this;var u=q.get("source");q.setAttribute("repeatable",v);if(u){var s=q.getFieldInstance(u);var x=u.one("> .folder > .field-container");var t=x.one(".repeatable-field-image");var r=u.one(".journal-article-buttons .repeatable-button");if(t){t.remove()}if(v){var w=b.Node.create(b.one("#repeatable-field-image-model").html());x.append(w);if(r){r.show()}}else{if(r){r.hide()}}}return v},setVariableName:function(t){var q=this;var s=q.getFieldLabelElement();if(s){var r=s.get("parentNode").one(".journal-article-component-container input");if(r){r.attr("id",t);s.setAttribute("for",t)}q.setAttribute("name",t)}return t},setAttribute:function(r,t){var q=this;var s=q.get("source");if(e.isArray(t)){t=t[0]}if(s){s.setAttribute("data"+r,t)}return t},_getNamespacedId:m.prototype._getNamespacedId,getById:m.prototype.getById}});m.StructureField=j;m.FieldModel={};var i=m.FieldModel;var c=function(u,t,v,s){var r=this;var q=b.one('#journalFieldModelContainer div[dataType="'+t+'"]');var w;if(q){w=q.html()}i[u]={fieldLabel:v,fieldType:t,innerHTML:w,optionsEditable:s,variableName:v}};c("Text","text","TextField",true);c("TextArea","text_area","TextAreaField",true);c("TextBox","text_box","TextBoxField",true);c("Image","image","ImageField",true);c("DocumentLibrary","document_library","DocumentLibraryField",true);c("Boolean","boolean","BooleanField",true);c("List","list","ListField",true);c("MultiList","multi-list","MultiListField",true);c("LinkToPage","link_to_layout","LinkToPageField",true);c("SelectionBreak","selection_break","SelectionBreakField",false);Liferay.Portlet.Journal=m},"",{requires:["aui-base","aui-data-set-deprecated","aui-datatype","aui-dialog-iframe-deprecated","aui-io-request","aui-nested-list","aui-overlay-context-panel-deprecated","json","liferay-util-window"]});