AUI.add("liferay-scheduler",function(u){var G=u.Array;var x=u.Object;var c=u.DataType.DateMath;var g=u.Lang;var q=Liferay.RecurrenceUtil;var p=Liferay.Workflow;var m=g.isBoolean;var H=g.isDate;var a=g.isFunction;var n=g.isObject;var z=g.isValue;var F=u.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1)});var o=function(A){return g.toInt(A,10,0)};var t="";var h=", ";var E="-";var b=" ";var I="{inviteesURL}&{portletNamespace}parentCalendarBookingId={calendarBookingId}";var D="{renderingRulesURL}&{portletNamespace}calendarIds={calendarIds}&{portletNamespace}startTime={startTime}&{portletNamespace}endTime={endTime}&{portletNamespace}ruleName={ruleName}";var l="controlsNode";var k="iconAddEventNode";var C='<div class="btn-group"><button type="button" class="btn btn-primary calendar-add-event-btn">'+'\u0041\u0064\u0064\u0020\u0045\u0076\u0065\u006e\u0074'+"</div></button>";var f='<p class="calendar-portlet-confirmation-text">'+'\u0079\u006f\u0075\u0072\u002d\u0063\u0068\u0061\u006e\u0067\u0065\u0073\u002d\u0077\u0069\u006c\u006c\u002d\u0061\u0066\u0066\u0065\u0063\u0074\u002d\u0065\u0076\u0065\u006e\u0074\u0073\u002d\u006f\u0066\u002d\u0061\u006c\u006c\u002d\u0069\u006e\u0076\u0069\u0074\u0065\u0064\u002d\u0072\u0065\u0073\u006f\u0075\u0072\u0063\u0065\u0073'+'</p><p class="calendar-portlet-confirmation-text">'+'\u0069\u006e\u0076\u0069\u0074\u0065\u0064\u002d\u0072\u0065\u0073\u006f\u0075\u0072\u0063\u0065\u0073\u002d\u0077\u0069\u006c\u006c\u002d\u0062\u0065\u002d\u006e\u006f\u0074\u0069\u0066\u0069\u0065\u0064'+"</p>";var B=o(themeDisplay.getCompanyId());var y=o(themeDisplay.getUserId());var r={DAY:86400000,HOUR:3600000,MINUTE:60000,SECOND:1000,WEEK:604800000,TIME_DESC:["weeks","days","hours","minutes"],getDescription:function(J){var A=this;var L="minutes";var K=0;if(J>0){G.some([r.WEEK,r.DAY,r.HOUR,r.MINUTE],function(N,M,O){K=J/N;L=r.TIME_DESC[M];return(J%N===0)})}return{desc:L,value:K}}};Liferay.Time=r;var v={INVITEES_URL:null,INVOKER_URL:themeDisplay.getPathContext()+"/api/jsonws/invoke",NOTIFICATION_DEFAULT_TYPE:"email",PORTLET_NAMESPACE:t,RENDERING_RULES_URL:null,USER_TIMEZONE_OFFSET:0,availableCalendars:{},visibleCalendars:{},addEvent:function(K){var J=this;var L=K.get("allDay");var A=K.get("startDate");var M=K.get("endDate");if(L){A=J.toUTCWithoutUserTimeZone(A);M=J.toUTCWithoutUserTimeZone(M)}else{A=J.toUTC(A);M=J.toUTC(M)}J.invokeService({"/calendar-portlet.calendarbooking/add-calendar-booking":{allDay:L,calendarId:K.get("calendarId"),childCalendarIds:t,descriptionMap:J.getLocalizationMap(K.get("description")),endTime:M.getTime(),firstReminder:K.get("firstReminder"),firstReminderType:K.get("firstReminderType"),location:K.get("location"),parentCalendarBookingId:K.get("parentCalendarBookingId"),recurrence:K.get("recurrence"),secondReminder:K.get("secondReminder"),secondReminderType:K.get("secondReminderType"),startTime:A.getTime(),titleMap:J.getLocalizationMap(Liferay.Util.unescapeHTML(K.get("content")))}},{failure:function(){J.destroyEvent(K)},start:function(){K.set("loading",true,{silent:true})},success:function(N){K.set("loading",false,{silent:true});if(N){if(N.exception){J.destroyEvent(K)}else{J.setEventAttrs(K,N)}}}})},countChildrenCalendarBookings:function(K,N){var J=this;var M=J.toUTC(K.get("endDate"));var A=J.toUTC(K.get("startDate"));var L=[e.STATUS_APPROVED,e.STATUS_MAYBE,e.STATUS_PENDING];J.invokeService({"/calendar-portlet.calendarbooking/search-count":{calendarIds:t,calendarResourceIds:t,companyId:B,endTime:M.getTime(),groupIds:t,keywords:t,parentCalendarBookingId:K.get("calendarBookingId"),recurring:K.isRecurring(),startTime:A.getTime(),statuses:L.join(",")}},{success:function(){N(this.get("responseData"))}})},createCalendarsAutoComplete:function(L,K,J){var A=this;K.plug(u.Plugin.AutoComplete,{activateFirstItem:true,after:{select:J},maxResults:20,requestTemplate:"&"+A.PORTLET_NAMESPACE+"keywords={query}",resultFilters:function(N,M){return G.filter(M,function(P,O,Q){return !A.availableCalendars[P.raw.calendarId]})},resultFormatter:function(N,M){return G.map(M,function(O){var R=O.raw;var P=R.name;var Q=R.calendarResourceName;if(P!==Q){P=[Q,E,P].join(b)}return u.Highlight.words(P,N)})},resultHighlighter:"wordMatch",resultTextLocator:"calendarResourceName",source:L})},deleteEvent:function(K){var A=this;var J=K.get("scheduler");var L=J.get("eventRecorder");L.hidePopover();A.invokeService({"/calendar-portlet.calendarbooking/move-calendar-booking-to-trash":{calendarBookingId:K.get("calendarBookingId")}},{success:function(){J.load()}})},deleteEventInstance:function(L,K){var A=this;var J=L.get("scheduler");var M=J.get("eventRecorder");M.hidePopover();A.invokeService({"/calendar-portlet.calendarbooking/delete-calendar-booking-instance":{allFollowing:K,calendarBookingId:L.get("calendarBookingId"),startTime:v.toUTC(L.get("startDate")).getTime()}},{success:function(){J.load()}})},destroyEvent:function(K){var A=this;var J=K.get("scheduler");J.removeEvents(K);J.syncEventsUI()},filterJSONArray:function(M,L,K){var A=this;var J=[];G.each(M,function(O,N,P){if(K===O[L]){J.push(A.toSchedulerEvent(O))}});return J},getCalendarBookingInvitees:function(J,L){var A=this;var K=g.sub(I,{calendarBookingId:J,inviteesURL:A.INVITEES_URL,portletNamespace:A.PORTLET_NAMESPACE});u.io.request(K,{dataType:"json",on:{success:function(){L(this.get("responseData"))}}})},getCalendarName:function(J,K){var A=this;if(J!==K){J=[K,E,J].join(b)}return J},getCalendarRenderingRules:function(K,J,N,M,O){var A=this;var L=g.sub(D,{calendarIds:K.join(),endTime:N.getTime(),portletNamespace:A.PORTLET_NAMESPACE,renderingRulesURL:A.RENDERING_RULES_URL,ruleName:M,startTime:J.getTime()});u.io.request(L,{dataType:"json",on:{success:function(){O(this.get("responseData"))}}})},getDatesList:function(J,N){var A=this;var M=u.Date;var K=[];if(M.isValidDate(J)){for(var L=0;L<N;L++){K.push(M.addDays(J,L))}}return K},getDefaultUserCalendar:function(){var A=this;return A.availableCalendars[v.DEFAULT_USER_CALENDAR_ID]},getEvent:function(J,L,K){var A=this;A.invokeService({"/calendar-portlet.calendarbooking/get-calendar-booking":{calendarBookingId:J}},{failure:K,success:L})},getEvents:function(J,N,K,O,M){var A=this;var L=x.keys(A.availableCalendars);A.invokeService({"/calendar-portlet.calendarbooking/search":{calendarIds:L.join(","),calendarResourceIds:t,companyId:B,end:-1,endTime:N.getTime(),groupIds:[],keywords:null,orderByComparator:null,parentCalendarBookingId:-1,recurring:true,start:-1,startTime:J.getTime(),statuses:K.join(",")}},{failure:M,success:O})},getLocalizationMap:function(J){var A=this;var K={};K[themeDisplay.getLanguageId()]=J;return u.JSON.stringify(K)},invokeService:function(J,K){var A=this;K=K||{};u.io.request(A.INVOKER_URL,{cache:false,data:{cmd:u.JSON.stringify(J),p_auth:Liferay.authToken},dataType:"json",on:{failure:K.failure,start:K.start,success:function(L){if(K.success){var M=this.get("responseData");K.success.apply(this,[M,L])}}}})},invokeTransition:function(L,J){var A=this;var K=L.get("scheduler");A.invokeService({"/calendar-portlet.calendarbooking/invoke-transition":{calendarBookingId:L.get("calendarBookingId"),status:J,userId:y}},{start:function(){L.set("loading",true,{silent:true})},success:function(M){L.set("loading",false,{silent:true});if(M&&!M.exception&&K){var N=K.get("eventRecorder");N.hidePopover();K.load()}}})},message:function(J){var A=this;u.oneNS(A.PORTLET_NAMESPACE,"#message").html(J)},setEventAttrs:function(N,P){var A=this;var M=N.get("scheduler");var J=P.calendarId;var O=N.get("calendarId");if(M){var L=A.availableCalendars[O];var K=A.availableCalendars[J];if(L!==K){L.remove(N)}if(K){K.add(N)}N.setAttrs({calendarBookingId:P.calendarBookingId,calendarId:J,calendarResourceId:P.calendarResourceId,parentCalendarBookingId:P.parentCalendarBookingId,recurrence:P.recurrence,status:P.status},{silent:true});M.syncEventsUI()}},syncCalendarsMap:function(J){var A=this;var L=A.visibleCalendars={};var K=A.availableCalendars={};G.each(J,function(N){var M=N.get("calendars");u.each(M,function(Q,O,R){var P=Q.get("calendarId");K[P]=Q;if(Q.get("visible")){L[P]=Q}})});return K},toSchedulerEvent:function(M){var J=this;var K=M.allDay;var A=M.startTime;var L=M.endTime;if(K){A=J.toLocalTimeWithoutUserTimeZone(A);L=J.toLocalTimeWithoutUserTimeZone(L)}else{A=J.toLocalTime(A);L=J.toLocalTime(L)}return new Liferay.SchedulerEvent({allDay:K,calendarBookingId:M.calendarBookingId,calendarId:M.calendarId,content:M.titleCurrentValue,description:M.descriptionCurrentValue,endDate:L,firstReminder:M.firstReminder,firstReminderType:M.firstReminderType,location:M.location,parentCalendarBookingId:M.parentCalendarBookingId,recurrence:M.recurrence,secondReminder:M.secondReminder,secondReminderType:M.secondReminderType,startDate:A,status:M.status})},toLocalTime:function(K){var A=this;var J=A.toLocalTimeWithoutUserTimeZone(K);return c.add(J,c.MINUTES,A.USER_TIMEZONE_OFFSET/c.ONE_MINUTE_MS)},toLocalTimeWithoutUserTimeZone:function(J){var A=this;if(!H(J)){J=new Date(J)}return c.add(J,c.MINUTES,J.getTimezoneOffset())},toUTC:function(J){var A=this;var K=A.toUTCWithoutUserTimeZone(J);return c.subtract(K,c.MINUTES,A.USER_TIMEZONE_OFFSET/c.ONE_MINUTE_MS)},toUTCWithoutUserTimeZone:function(J){var A=this;if(!H(J)){J=new Date(J)}return c.subtract(J,c.MINUTES,J.getTimezoneOffset())},updateEvent:function(K,N){var J=this;var L=K.get("allDay");var A=K.get("startDate");var M=K.get("endDate");if(L){A=J.toUTCWithoutUserTimeZone(A);M=J.toUTCWithoutUserTimeZone(M)}else{A=J.toUTC(A);M=J.toUTC(M)}J.invokeService({"/calendar-portlet.calendarbooking/update-calendar-booking":{allDay:L,calendarBookingId:K.get("calendarBookingId"),calendarId:K.get("calendarId"),descriptionMap:J.getLocalizationMap(K.get("description")),endTime:M.getTime(),firstReminder:K.get("firstReminder"),firstReminderType:K.get("firstReminderType"),location:K.get("location"),recurrence:K.get("recurrence"),secondReminder:K.get("secondReminder"),secondReminderType:K.get("secondReminderType"),startTime:A.getTime(),status:K.get("status"),titleMap:J.getLocalizationMap(Liferay.Util.unescapeHTML(K.get("content"))),userId:y}},{start:function(){K.set("loading",true,{silent:true})},success:function(O){K.set("loading",false,{silent:true});if(O){if(O.exception){return}else{J.setEventAttrs(K,O)}}if(N){N.call(this,O)}}})},updateEventInstance:function(K,J,L){var A=this;A.invokeService({"/calendar-portlet.calendarbooking/update-calendar-booking-instance":{allDay:K.get("allDay"),allFollowing:J,calendarBookingId:K.get("calendarBookingId"),calendarId:K.get("calendarId"),descriptionMap:A.getLocalizationMap(K.get("description")),endTime:A.toUTC(K.get("endDate")).getTime(),firstReminder:K.get("firstReminder"),firstReminderType:K.get("firstReminderType"),location:K.get("location"),recurrence:K.get("recurrence"),secondReminder:K.get("secondReminder"),secondReminderType:K.get("secondReminderType"),startTime:A.toUTC(K.get("startDate")).getTime(),status:K.get("status"),titleMap:A.getLocalizationMap(Liferay.Util.unescapeHTML(K.get("content"))),userId:y}},{start:function(){K.set("loading",true,{silent:true})},success:function(N){var M=K.get("scheduler");K.set("loading",false,{silent:true});if(N){if(N.exception){return}else{A.setEventAttrs(K,N)}}if(L){L.call(this,N)}M.load()}})}};Liferay.CalendarUtil=v;var e={STATUS_MAYBE:9};u.mix(e,p);Liferay.CalendarWorkflow=e;var d=function(A){};d.prototype={sync:function(L,J,M){var A=this;var K=A["_do"+F(L)];if(a(K)){K.apply(A,[J,M])}},_doRead:function(){var A=this;var J=arguments;var K=J[J.length-1];if(a(K)){K()}}};Liferay.SchedulerModelSync=d;var w=u.Component.create({ATTRS:{calendarBookingId:{setter:o,value:0},calendarId:{setter:o,value:0},content:{getter:function(A){if(A){A=Liferay.Util.escapeHTML(A)}return A}},description:{setter:String,validator:z,value:t},editingEvent:{validator:m,value:false},firstReminder:{setter:o,value:0},firstReminderType:{setter:String,validator:z,value:v.NOTIFICATION_DEFAULT_TYPE},loading:{validator:m,value:false},location:{setter:String,validator:z,value:t},parentCalendarBookingId:{setter:o,value:0},recurrence:{setter:String,validator:z,value:t},reminder:{getter:function(){var A=this;return(A.get("firstReminder")>0)||(A.get("secondReminder")>0)}},repeated:{getter:"isRecurring"},secondReminder:{setter:o,value:0},secondReminderType:{setter:String,validator:z,value:v.NOTIFICATION_DEFAULT_TYPE},status:{setter:o,value:0}},EXTENDS:u.SchedulerEvent,NAME:"scheduler-event",PROPAGATE_ATTRS:u.SchedulerEvent.PROPAGATE_ATTRS.concat(["calendarBookingId","calendarId","calendarResourceId","parentCalendarBookingId","recurrence","status"]),prototype:{eventModel:Liferay.SchedulerEvent,initializer:function(){var A=this;A._uiSetLoading(A.get("loading"));A._uiSetStartDate(A.get("startDate"));A._uiSetStatus(A.get("status"));A.on("loadingChange",A._onLoadingChange);A.on("startDateChange",A._onStartDateChange);A.on("statusChange",A._onStatusChange)},isMasterBooking:function(){var A=this;return(A.get("parentCalendarBookingId")===A.get("calendarBookingId"))},isRecurring:function(){var A=this;return(A.get("recurrence")!==t)},syncNodeColorUI:function(){var J=this;Liferay.SchedulerEvent.superclass.syncNodeColorUI.apply(J,arguments);var L=J.get("node");var K=J.get("scheduler");if(K&&!J.get("editingEvent")){var A=K.get("activeView").get("name");if((A==="month")&&!J.get("allDay")){L.setStyles({backgroundColor:J.get("color"),border:"none",color:"#111",padding:"0 2px"})}}},_onLoadingChange:function(J){var A=this;A._uiSetLoading(J.newVal)},_onStartDateChange:function(J){var A=this;A._uiSetStartDate(J.newVal)},_onStatusChange:function(J){var A=this;A._uiSetStatus(J.newVal)},_uiSetEndDate:function(K){var A=this;Liferay.SchedulerEvent.superclass._uiSetEndDate.apply(A,arguments);var J=A.get("node");J.attr("data-endDate",A._formatDate(K,"%m/%d/%Y %I:%M %p"))},_uiSetLoading:function(J){var A=this;A.get("node").toggleClass("calendar-portlet-event-loading",J)},_uiSetStartDate:function(K){var A=this;var J=A.get("node");J.attr("data-startDate",A._formatDate(K,"%m/%d/%Y %I:%M %p"))},_uiSetStatus:function(K){var A=this;var J=A.get("node");J.toggleClass("calendar-portlet-event-approved",(K===e.STATUS_APPROVED));J.toggleClass("calendar-portlet-event-maybe",(K===e.STATUS_MAYBE));J.toggleClass("calendar-portlet-event-pending",(K===e.STATUS_PENDING))}}});Liferay.SchedulerEvent=w;var s=u.Component.create({ATTRS:{calendarId:{value:0,setter:o},calendarResourceId:{value:0,setter:o},calendarResourceName:{setter:String,validator:z,value:t},classNameId:{value:0,setter:o},classPK:{value:0,setter:o},defaultCalendar:{setter:u.DataType.Boolean.parse,value:false},groupId:{value:0,setter:o},permissions:{lazyAdd:false,setter:function(J){var A=this;A.set("disabled",!J.MANAGE_BOOKINGS);return J},value:{},validator:n}},EXTENDS:u.SchedulerCalendar,NAME:"scheduler-calendar",prototype:{getDisplayName:function(){var A=this;var K=A.get("calendarResourceName");var J=A.get("name");return v.getCalendarName(J,K)},_afterColorChange:function(L){var A=this;s.superclass._afterColorChange.apply(A,arguments);var K=A.get("calendarId");var J=L.newVal;if(A.get("permissions.UPDATE")){v.invokeService({"/calendar-portlet.calendar/update-color":{calendarId:K,color:parseInt(J.substr(1),16)}})}else{Liferay.Store("calendar-portlet-calendar-"+K+"-color",J)}},_afterVisibleChange:function(K){var A=this;s.superclass._afterVisibleChange.apply(A,arguments);var J=A.get("scheduler");J.syncEventsUI()}}});Liferay.SchedulerCalendar=s;Liferay.SchedulerEvents=u.Base.create("scheduler-events",u.SchedulerEvents,[Liferay.SchedulerModelSync],{getLoadEndDate:function(K){var A=this;var J=K.getNextDate();var L=K.get("name");if(L==="agenda"){J=c.add(J,c.MONTH,1)}else{if(L==="month"){J=c.add(J,c.WEEK,1)}}return v.toUTC(J)},getLoadStartDate:function(L){var A=this;var K=L.get("scheduler");var M=L.get("name");var J=K.get("viewDate");if(M==="month"){J=c.subtract(J,c.WEEK,1)}return v.toUTC(J)},_doRead:function(J,N){var A=this;var L=A.get("scheduler");var K=L.get("activeView");var M=L.get("filterCalendarBookings");v.message('\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u002e\u002e\u002e');v.getEvents(A.getLoadStartDate(K),A.getLoadEndDate(K),[e.STATUS_APPROVED,e.STATUS_MAYBE,e.STATUS_PENDING],function(O){if(M){O=G.filter(O,M)}N(null,O)})}},{});var j=u.Component.create({ATTRS:{filterCalendarBookings:{validator:a},iconAddEventNode:{valueFn:function(){return u.Node.create(C)}},portletNamespace:{setter:String,validator:z,value:t},preventPersistence:{validator:m,value:false},showAddEventBtn:{validator:m,value:true}},EXTENDS:u.Scheduler,NAME:"scheduler-base",prototype:{calendarModel:Liferay.SchedulerCalendar,eventModel:Liferay.SchedulerEvent,eventsModel:Liferay.SchedulerEvents,renderUI:function(){var A=this;j.superclass.renderUI.apply(this,arguments);var J=A.get("showAddEventBtn");if(J){A[k]=A.get(k);A[l].prepend(A[k]);A[k].on("click",A._onClickAddEvent,A)}},bindUI:function(){var A=this;A.after({"scheduler-base:dateChange":A._afterDateChange,"scheduler-event:change":A._afterSchedulerEventChange});A.on({"*:load":A._onLoadSchedulerEvents,"scheduler-event-recorder:delete":A._onDeleteEvent,"scheduler-event-recorder:save":A._onSaveEvent});j.superclass.bindUI.apply(this,arguments)},load:function(){var A=this;var J=A._events;return J.load.apply(J,arguments)},plotCalendarBookings:function(J){var A=this;var L=[];var K={};G.each(J,function(P,M,Q){var O=P.calendarId;if(!K[O]){K[O]=[]}var N=v.toSchedulerEvent(P);N.set("scheduler",A,{silent:true});L.push(N);K[O].push(N)});A.resetEvents(L);u.each(Liferay.CalendarUtil.availableCalendars,function(N,M,O){N.reset(K[M])});if(A.get("rendered")){A.syncEventsUI()}v.message(t)},sync:function(){var A=this;var J=A._events;return J.sync.apply(J,arguments)},_afterActiveViewChange:function(J){var A=this;j.superclass._afterActiveViewChange.apply(this,arguments);Liferay.Store("calendar-portlet-default-view",J.newVal.get("name"));A.load()},_afterDateChange:function(J){var A=this;A.load()},_afterSchedulerEventChange:function(A){var Q=this;if(!Q.get("preventPersistence")){var M=A.changed;var K={calendarId:1,color:1,content:1,endDate:1,endTime:1,startDate:1,startTime:1};var O=true;u.each(M,function(S,R,T){O=x.owns(K,R)});if(O){var L=A.target;var J=L.get("calendarBookingId");if(L.isRecurring()){Liferay.RecurrenceUtil.openConfirmationPanel("update",L.isMasterBooking(),function(){v.countChildrenCalendarBookings(L,function(R){if(R>1){Liferay.CalendarMessageUtil.confirm(f,'\u0043\u006f\u006e\u0074\u0069\u006e\u0075\u0065','\u0044\u006f\u006e\u0027\u0074\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0020\u0074\u0068\u0065\u0020\u0065\u0076\u0065\u006e\u0074',function(){v.updateEventInstance(L,false);this.hide()},function(){Q.load();this.hide()})}});this.hide()},function(){v.countChildrenCalendarBookings(L,function(R){if(R>1){Liferay.CalendarMessageUtil.confirm(f,'\u0043\u006f\u006e\u0074\u0069\u006e\u0075\u0065','\u0044\u006f\u006e\u0027\u0074\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0020\u0074\u0068\u0065\u0020\u0065\u0076\u0065\u006e\u0074',function(){v.updateEventInstance(L,true,function(){Q.load()});this.hide()},function(){Q.load();this.hide()})}});this.hide()},function(){v.getEvent(J,function(R){v.countChildrenCalendarBookings(L,function(S){if(S>1){Liferay.CalendarMessageUtil.confirm(f,'\u0043\u006f\u006e\u0074\u0069\u006e\u0075\u0065','\u0044\u006f\u006e\u0027\u0074\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0020\u0074\u0068\u0065\u0020\u0065\u0076\u0065\u006e\u0074',function(){var aa=v.toSchedulerEvent(R);aa.copyPropagateAttrValues(L,null,{silent:true});var V=L.getSecondsDuration()*1000;var T=R.startTime+V;var X=R.startTime;var W=M.startDate;if(W){var Y=0;var U=W.newVal;var Z=W.prevVal;if(H(U)&&H(Z)){Y=U.getTime()-Z.getTime()}X=X+Y;T=X+V}aa.setAttrs({endDate:v.toLocalTime(T),startDate:v.toLocalTime(X)});v.updateEvent(aa,function(){Q.load()});this.hide()})}})});this.hide()},function(){Q.load();this.hide()})}else{if(L.isMasterBooking()){v.countChildrenCalendarBookings(L,function(R){if(R>1){Liferay.CalendarMessageUtil.confirm(f,'\u0043\u006f\u006e\u0074\u0069\u006e\u0075\u0065','\u0044\u006f\u006e\u0027\u0074\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0020\u0074\u0068\u0065\u0020\u0065\u0076\u0065\u006e\u0074',function(){v.updateEvent(L);this.hide()},function(){Q.load();this.hide()})}})}else{var N=Liferay.CalendarUtil.availableCalendars[L.get("calendarId")];var P=['<p class="calendar-portlet-confirmation-text">',g.sub('\u0059\u006f\u0075\u0020\u0061\u0072\u0065\u0020\u0061\u0062\u006f\u0075\u0074\u0020\u0074\u006f\u0020\u006d\u0061\u006b\u0065\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0073\u0020\u0074\u0068\u0061\u0074\u0020\u0077\u0069\u006c\u006c\u0020\u006f\u006e\u006c\u0079\u0020\u0065\u0066\u0066\u0065\u0063\u0074\u0020\u0079\u006f\u0075\u0072\u0020\u0063\u0061\u006c\u0065\u006e\u0064\u0061\u0072\u0020\u0028\u007b\u0030\u007d\u0029\u002e',[Liferay.Util.escapeHTML(N.get("name"))]),"</p>"].join(t);Liferay.CalendarMessageUtil.confirm(P,'\u0043\u006f\u006e\u0074\u0069\u006e\u0075\u0065','\u0044\u006f\u006e\u0027\u0074\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0020\u0074\u0068\u0065\u0020\u0065\u0076\u0065\u006e\u0074',function(){v.updateEvent(L);this.hide()},function(){Q.load();this.hide()})}}}}},_onClickAddEvent:function(N){var J=this;var K=J.get("eventRecorder");var A=J.get("activeView").get("name");var O=v.getDefaultUserCalendar();var M=O.get("calendarId");var L=decodeURIComponent(K.get("editCalendarBookingURL"));Liferay.Util.openWindow({dialog:{after:{destroy:function(P){J.load()}},destroyOnHide:true,modal:true},title:'\u004e\u0065\u0077\u0020\u0045\u0076\u0065\u006e\u0074',uri:g.sub(L,{activeView:A,calendarId:M,titleCurrentValue:""})})},_onDeleteEvent:function(K){var A=this;var J=K.schedulerEvent;if(J.isRecurring()){q.openConfirmationPanel("delete",J.isMasterBooking(),function(){v.deleteEventInstance(J,false);q.closeConfirmationPanel()},function(){v.deleteEventInstance(J,true);q.closeConfirmationPanel()},function(){v.deleteEvent(J);q.closeConfirmationPanel()})}else{if(J.isMasterBooking()&&confirm('\u0044\u0065\u006c\u0065\u0074\u0069\u006e\u0067\u0020\u0074\u0068\u0069\u0073\u0020\u0065\u0076\u0065\u006e\u0074\u0020\u0077\u0069\u006c\u006c\u0020\u0063\u0061\u006e\u0063\u0065\u006c\u0020\u0074\u0068\u0065\u0020\u006d\u0065\u0065\u0074\u0069\u006e\u0067\u0020\u0077\u0069\u0074\u0068\u0020\u0079\u006f\u0075\u0072\u0020\u0067\u0075\u0065\u0073\u0074\u0073\u002e\u0020\u0057\u006f\u0075\u006c\u0064\u0020\u0079\u006f\u0075\u0020\u006c\u0069\u006b\u0065\u0020\u0074\u006f\u0020\u0064\u0065\u006c\u0065\u0074\u0065\u003f')){v.deleteEvent(J)}}K.preventDefault()},_onLoadSchedulerEvents:function(J){var A=this;A.plotCalendarBookings(J.parsed)},_onSaveEvent:function(J){var A=this;v.addEvent(J.newSchedulerEvent)}}});Liferay.Scheduler=j;var i=u.Component.create({ATTRS:{calendarId:{setter:o,value:0},editCalendarBookingURL:{setter:String,validator:z,value:t},permissionsCalendarBookingURL:{setter:String,validator:z,value:t},portletNamespace:{setter:String,validator:z,value:t},status:{setter:o,value:e.STATUS_DRAFT},toolbar:{value:{children:[]}},viewCalendarBookingURL:{setter:String,validator:z,value:t}},EXTENDS:u.SchedulerEventRecorder,NAME:"scheduler-event-recorder",prototype:{initializer:function(){var A=this;var J=A.popover.get("boundingBox");J.delegate("click",A._handleEventAnswer,".calendar-event-answer",A)},getTemplateData:function(){var A=this;var J=true;var M=A.get("event");if(!M){J=false;M=A}var O=v.availableCalendars;var N=O[M.get("calendarId")];var L=N.get("permissions");var K=i.superclass.getTemplateData.apply(this,arguments);return u.merge(K,{acceptLinkEnabled:A._hasWorkflowStatusPermission(M,e.STATUS_APPROVED),allDay:M.get("allDay"),availableCalendars:O,calendar:N,calendarIds:x.keys(O),declineLinkEnabled:A._hasWorkflowStatusPermission(M,e.STATUS_DENIED),editing:J,endTime:K.endDate,maybeLinkEnabled:A._hasWorkflowStatusPermission(M,e.STATUS_MAYBE),permissions:L,startTime:K.startDate,status:M.get("status"),workflowStatus:e})},getUpdatedSchedulerEvent:function(K){var A=this;var J={color:A.get("color")};return i.superclass.getUpdatedSchedulerEvent.call(A,u.merge(J,K))},isMasterBooking:g.emptyFnFalse,populateForm:function(){var A=this;var K=A.get("bodyTemplate");var L=A.get("headerTemplate");var J=A.getTemplateData();if(u.instanceOf(K,u.Template)&&u.instanceOf(L,u.Template)){A.popover.setStdModContent("body",K.parse(J));A.popover.setStdModContent("header",L.parse(J));A.popover.addToolbar(A._getFooterToolbar(),"footer")}else{i.superclass.populateForm.apply(A,arguments)}A.popover.addToolbar([{cssClass:"close",label:"\u00D7",on:{click:u.bind(A._handleCancelEvent,A)},render:true}],"header");A.popover.headerNode.toggleClass("hide",!J.permissions.VIEW_BOOKING_DETAILS)},_afterPopoverVisibleChange:function(A){var Q=this;var L=Q.get("event");var O=Q.popover.get("boundingBox");O.toggleClass("calendar-portlet-event-recorder-editing",!!L);var S=v.getDefaultUserCalendar();var R=S.get("calendarId");var M=S.get("color");var P=Q;if(L){R=L.get("calendarId");var N=v.availableCalendars[R];if(N){M=N.get("color");P=L}}P.set("color",M,{silent:true});i.superclass._afterPopoverVisibleChange.apply(this,arguments);var J=Q.get("portletNamespace");var K=u.one("#"+J+"eventRecorderCalendar");if(K){K.val(R.toString())}if(A.newVal){Q._syncInvitees()}},_handleEventAnswer:function(M){var J=this;var N=M.currentTarget;var K=J.get("event");var A=u.DataType.Boolean.parse(N.hasClass("calendar-event-answer-true"));var L=g.toInt(N.getData("status"));if(K&&A){v.invokeTransition(K,L)}},_handleEditEvent:function(O){var J=this;var L=J.get("scheduler");var A=L.get("activeView").get("name");var K=L.get("date");var N=J.get("event");var M=decodeURIComponent(J.get("editCalendarBookingURL"));var P=J.serializeForm();P.activeView=A;P.date=K.getTime();P.endTime=v.toUTC(P.endTime).getTime();P.startTime=v.toUTC(P.startTime).getTime();P.titleCurrentValue=encodeURIComponent(P.content);if(N){P.allDay=N.get("allDay");P.calendarBookingId=N.get("calendarBookingId")}Liferay.Util.openWindow({dialog:{after:{destroy:function(Q){L.load()}},destroyOnHide:true,modal:true},refreshWindow:window,title:'\u0045\u0064\u0069\u0074\u0020\u0045\u0076\u0065\u006e\u0074',uri:g.sub(M,P)});J.hidePopover()},_handleViewEvent:function(M){var A=this;var K=A.get("scheduler");var J=decodeURIComponent(A.get("viewCalendarBookingURL"));var N=A.serializeForm();var L=A.get("event");N.calendarBookingId=L.get("calendarBookingId");Liferay.Util.openWindow({dialog:{after:{destroy:function(O){K.load()}},destroyOnHide:true,modal:true},refreshWindow:window,title:'\u0056\u0069\u0065\u0077\u0020\u0045\u0076\u0065\u006e\u0074\u0020\u0044\u0065\u0074\u0061\u0069\u006c\u0073',uri:g.sub(J,N)});M.domEvent.preventDefault()},_hasDeleteButton:function(J,K,A){return J.MANAGE_BOOKINGS&&K},_hasEditButton:function(J,K,A){return J.MANAGE_BOOKINGS},_hasSaveButton:function(J,K,A){return J.MANAGE_BOOKINGS},_hasWorkflowStatusPermission:function(N,K){var A=this;var M=false;if(N){var O=N.get("calendarId");var P=v.availableCalendars[O];var L=P.get("permissions");var J=N.get("status");M=L.MANAGE_BOOKINGS&&(J!==K)&&(J!==e.STATUS_DRAFT)}return M},_renderPopOver:function(){var A=this;var J=A.popover.get("boundingBox");i.superclass._renderPopOver.apply(this,arguments);J.delegate(["change","keypress"],function(N){var L=A.get("event")||A;var M=o(N.currentTarget.val());var K=v.availableCalendars[M];if(K){L.set("color",K.get("color"),{silent:true})}},"#"+A.get("portletNamespace")+"eventRecorderCalendar")},_syncInvitees:function(){var A=this;var K=A.get("event");if(K){var M=v.availableCalendars[K.get("calendarId")];if(M){var J=M.get("permissions");if(J.VIEW_BOOKING_DETAILS){var L=K.get("parentCalendarBookingId");var N=A.get("portletNamespace");v.getCalendarBookingInvitees(L,function(P){var O=G.partition(P,function(Q){return Q.classNameId===v.USER_CLASS_NAME_ID});A._syncInviteesContent("#"+N+"eventRecorderUsers",O.matches);A._syncInviteesContent("#"+N+"eventRecorderResources",O.rejects)})}}}},_syncInviteesContent:function(K,N){var J=this;var L=G.map(N,function(O){return O.name});K=u.one(K);var M=K.one(".calendar-portlet-invitees");var A="&mdash;";if(L.length>0){K.show();A=L.join(h)}M.html(A)},_getFooterToolbar:function(){var Q=this;var M=Q.get("event");var K=false;if(M){K=true}else{M=Q}var J=[];var A=[];var L=[];var N=M.get("status");var O=v.availableCalendars[M.get("calendarId")];if(O){var P=O.get("permissions");if(Q._hasSaveButton(P,O,N)){A.push({on:{click:u.bind(Q._handleSaveEvent,Q)},icon:"icon-hdd",id:"saveBtn",label:'\u0053\u0061\u0076\u0065',primary:true})}if(Q._hasEditButton(P,O,N)){A.push({on:{click:u.bind(Q._handleEditEvent,Q)},icon:"icon-edit",id:"editBtn",label:'\u0045\u0064\u0069\u0074'})}if((K===true)&&P.VIEW_BOOKING_DETAILS){A.push({on:{click:u.bind(Q._handleViewEvent,Q)},icon:"icon-eye-open",id:"viewBtn",label:'\u0056\u0069\u0065\u0077\u0020\u0044\u0065\u0074\u0061\u0069\u006c\u0073'})}if(M.isMasterBooking()&&Q._hasDeleteButton(P,O,N)){A.push({on:{click:u.bind(Q._handleDeleteEvent,Q)},icon:"icon-trash",id:"deleteBtn",label:'\u0044\u0065\u006c\u0065\u0074\u0065'})}if(A.length){J.push(A)}if(L.length){J.push(L)}}return J}}});Liferay.SchedulerEventRecorder=i},"",{requires:["aui-datatype","aui-io","aui-scheduler","aui-toolbar","autocomplete","autocomplete-highlighters","dd-plugin","liferay-calendar-message-util","liferay-calendar-recurrence-util","liferay-node","liferay-portlet-url","liferay-store","resize-plugin"]});