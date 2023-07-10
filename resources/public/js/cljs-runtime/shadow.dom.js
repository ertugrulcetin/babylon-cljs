goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20517 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20517(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20529 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20529(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19512 = coll;
var G__19513 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19512,G__19513) : shadow.dom.lazy_native_coll_seq.call(null,G__19512,G__19513));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19531 = arguments.length;
switch (G__19531) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19545 = arguments.length;
switch (G__19545) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19551 = arguments.length;
switch (G__19551) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19557 = arguments.length;
switch (G__19557) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19578 = arguments.length;
switch (G__19578) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19605 = arguments.length;
switch (G__19605) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19627){if((e19627 instanceof Object)){
var e = e19627;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19627;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19651 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19652 = null;
var count__19653 = (0);
var i__19654 = (0);
while(true){
if((i__19654 < count__19653)){
var el = chunk__19652.cljs$core$IIndexed$_nth$arity$2(null,i__19654);
var handler_20627__$1 = ((function (seq__19651,chunk__19652,count__19653,i__19654,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19651,chunk__19652,count__19653,i__19654,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20627__$1);


var G__20629 = seq__19651;
var G__20630 = chunk__19652;
var G__20631 = count__19653;
var G__20632 = (i__19654 + (1));
seq__19651 = G__20629;
chunk__19652 = G__20630;
count__19653 = G__20631;
i__19654 = G__20632;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19651);
if(temp__5804__auto__){
var seq__19651__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19651__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19651__$1);
var G__20634 = cljs.core.chunk_rest(seq__19651__$1);
var G__20635 = c__5568__auto__;
var G__20636 = cljs.core.count(c__5568__auto__);
var G__20637 = (0);
seq__19651 = G__20634;
chunk__19652 = G__20635;
count__19653 = G__20636;
i__19654 = G__20637;
continue;
} else {
var el = cljs.core.first(seq__19651__$1);
var handler_20642__$1 = ((function (seq__19651,chunk__19652,count__19653,i__19654,el,seq__19651__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19651,chunk__19652,count__19653,i__19654,el,seq__19651__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20642__$1);


var G__20647 = cljs.core.next(seq__19651__$1);
var G__20648 = null;
var G__20649 = (0);
var G__20650 = (0);
seq__19651 = G__20647;
chunk__19652 = G__20648;
count__19653 = G__20649;
i__19654 = G__20650;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19674 = arguments.length;
switch (G__19674) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__19684 = cljs.core.seq(events);
var chunk__19685 = null;
var count__19686 = (0);
var i__19687 = (0);
while(true){
if((i__19687 < count__19686)){
var vec__19703 = chunk__19685.cljs$core$IIndexed$_nth$arity$2(null,i__19687);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20668 = seq__19684;
var G__20669 = chunk__19685;
var G__20670 = count__19686;
var G__20671 = (i__19687 + (1));
seq__19684 = G__20668;
chunk__19685 = G__20669;
count__19686 = G__20670;
i__19687 = G__20671;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19684);
if(temp__5804__auto__){
var seq__19684__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19684__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19684__$1);
var G__20676 = cljs.core.chunk_rest(seq__19684__$1);
var G__20677 = c__5568__auto__;
var G__20679 = cljs.core.count(c__5568__auto__);
var G__20680 = (0);
seq__19684 = G__20676;
chunk__19685 = G__20677;
count__19686 = G__20679;
i__19687 = G__20680;
continue;
} else {
var vec__19709 = cljs.core.first(seq__19684__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19709,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19709,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20685 = cljs.core.next(seq__19684__$1);
var G__20686 = null;
var G__20687 = (0);
var G__20688 = (0);
seq__19684 = G__20685;
chunk__19685 = G__20686;
count__19686 = G__20687;
i__19687 = G__20688;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__19727 = cljs.core.seq(styles);
var chunk__19728 = null;
var count__19729 = (0);
var i__19730 = (0);
while(true){
if((i__19730 < count__19729)){
var vec__19745 = chunk__19728.cljs$core$IIndexed$_nth$arity$2(null,i__19730);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19745,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19745,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20690 = seq__19727;
var G__20691 = chunk__19728;
var G__20692 = count__19729;
var G__20693 = (i__19730 + (1));
seq__19727 = G__20690;
chunk__19728 = G__20691;
count__19729 = G__20692;
i__19730 = G__20693;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19727);
if(temp__5804__auto__){
var seq__19727__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19727__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19727__$1);
var G__20700 = cljs.core.chunk_rest(seq__19727__$1);
var G__20701 = c__5568__auto__;
var G__20702 = cljs.core.count(c__5568__auto__);
var G__20703 = (0);
seq__19727 = G__20700;
chunk__19728 = G__20701;
count__19729 = G__20702;
i__19730 = G__20703;
continue;
} else {
var vec__19751 = cljs.core.first(seq__19727__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19751,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19751,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20705 = cljs.core.next(seq__19727__$1);
var G__20706 = null;
var G__20707 = (0);
var G__20708 = (0);
seq__19727 = G__20705;
chunk__19728 = G__20706;
count__19729 = G__20707;
i__19730 = G__20708;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19757_20709 = key;
var G__19757_20710__$1 = (((G__19757_20709 instanceof cljs.core.Keyword))?G__19757_20709.fqn:null);
switch (G__19757_20710__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20713 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20713,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20713,"aria-");
}
})())){
el.setAttribute(ks_20713,value);
} else {
(el[ks_20713] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19782){
var map__19783 = p__19782;
var map__19783__$1 = cljs.core.__destructure_map(map__19783);
var props = map__19783__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19783__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19793 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19793,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19793,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19793,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19797 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19797,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19797;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19801 = arguments.length;
switch (G__19801) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19806){
var vec__19807 = p__19806;
var seq__19808 = cljs.core.seq(vec__19807);
var first__19809 = cljs.core.first(seq__19808);
var seq__19808__$1 = cljs.core.next(seq__19808);
var nn = first__19809;
var first__19809__$1 = cljs.core.first(seq__19808__$1);
var seq__19808__$2 = cljs.core.next(seq__19808__$1);
var np = first__19809__$1;
var nc = seq__19808__$2;
var node = vec__19807;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19813 = nn;
var G__19814 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19813,G__19814) : create_fn.call(null,G__19813,G__19814));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19816 = nn;
var G__19817 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19816,G__19817) : create_fn.call(null,G__19816,G__19817));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19821 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19821,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19821,(1),null);
var seq__19826_20787 = cljs.core.seq(node_children);
var chunk__19827_20789 = null;
var count__19828_20790 = (0);
var i__19829_20791 = (0);
while(true){
if((i__19829_20791 < count__19828_20790)){
var child_struct_20792 = chunk__19827_20789.cljs$core$IIndexed$_nth$arity$2(null,i__19829_20791);
var children_20793 = shadow.dom.dom_node(child_struct_20792);
if(cljs.core.seq_QMARK_(children_20793)){
var seq__19888_20794 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20793));
var chunk__19890_20795 = null;
var count__19891_20796 = (0);
var i__19892_20797 = (0);
while(true){
if((i__19892_20797 < count__19891_20796)){
var child_20798 = chunk__19890_20795.cljs$core$IIndexed$_nth$arity$2(null,i__19892_20797);
if(cljs.core.truth_(child_20798)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20798);


var G__20800 = seq__19888_20794;
var G__20801 = chunk__19890_20795;
var G__20802 = count__19891_20796;
var G__20803 = (i__19892_20797 + (1));
seq__19888_20794 = G__20800;
chunk__19890_20795 = G__20801;
count__19891_20796 = G__20802;
i__19892_20797 = G__20803;
continue;
} else {
var G__20804 = seq__19888_20794;
var G__20805 = chunk__19890_20795;
var G__20806 = count__19891_20796;
var G__20807 = (i__19892_20797 + (1));
seq__19888_20794 = G__20804;
chunk__19890_20795 = G__20805;
count__19891_20796 = G__20806;
i__19892_20797 = G__20807;
continue;
}
} else {
var temp__5804__auto___20808 = cljs.core.seq(seq__19888_20794);
if(temp__5804__auto___20808){
var seq__19888_20809__$1 = temp__5804__auto___20808;
if(cljs.core.chunked_seq_QMARK_(seq__19888_20809__$1)){
var c__5568__auto___20811 = cljs.core.chunk_first(seq__19888_20809__$1);
var G__20812 = cljs.core.chunk_rest(seq__19888_20809__$1);
var G__20813 = c__5568__auto___20811;
var G__20814 = cljs.core.count(c__5568__auto___20811);
var G__20815 = (0);
seq__19888_20794 = G__20812;
chunk__19890_20795 = G__20813;
count__19891_20796 = G__20814;
i__19892_20797 = G__20815;
continue;
} else {
var child_20817 = cljs.core.first(seq__19888_20809__$1);
if(cljs.core.truth_(child_20817)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20817);


var G__20818 = cljs.core.next(seq__19888_20809__$1);
var G__20819 = null;
var G__20820 = (0);
var G__20821 = (0);
seq__19888_20794 = G__20818;
chunk__19890_20795 = G__20819;
count__19891_20796 = G__20820;
i__19892_20797 = G__20821;
continue;
} else {
var G__20826 = cljs.core.next(seq__19888_20809__$1);
var G__20827 = null;
var G__20828 = (0);
var G__20829 = (0);
seq__19888_20794 = G__20826;
chunk__19890_20795 = G__20827;
count__19891_20796 = G__20828;
i__19892_20797 = G__20829;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20793);
}


var G__20830 = seq__19826_20787;
var G__20831 = chunk__19827_20789;
var G__20832 = count__19828_20790;
var G__20833 = (i__19829_20791 + (1));
seq__19826_20787 = G__20830;
chunk__19827_20789 = G__20831;
count__19828_20790 = G__20832;
i__19829_20791 = G__20833;
continue;
} else {
var temp__5804__auto___20838 = cljs.core.seq(seq__19826_20787);
if(temp__5804__auto___20838){
var seq__19826_20839__$1 = temp__5804__auto___20838;
if(cljs.core.chunked_seq_QMARK_(seq__19826_20839__$1)){
var c__5568__auto___20841 = cljs.core.chunk_first(seq__19826_20839__$1);
var G__20842 = cljs.core.chunk_rest(seq__19826_20839__$1);
var G__20843 = c__5568__auto___20841;
var G__20844 = cljs.core.count(c__5568__auto___20841);
var G__20845 = (0);
seq__19826_20787 = G__20842;
chunk__19827_20789 = G__20843;
count__19828_20790 = G__20844;
i__19829_20791 = G__20845;
continue;
} else {
var child_struct_20847 = cljs.core.first(seq__19826_20839__$1);
var children_20852 = shadow.dom.dom_node(child_struct_20847);
if(cljs.core.seq_QMARK_(children_20852)){
var seq__19925_20853 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20852));
var chunk__19927_20854 = null;
var count__19928_20855 = (0);
var i__19929_20856 = (0);
while(true){
if((i__19929_20856 < count__19928_20855)){
var child_20857 = chunk__19927_20854.cljs$core$IIndexed$_nth$arity$2(null,i__19929_20856);
if(cljs.core.truth_(child_20857)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20857);


var G__20858 = seq__19925_20853;
var G__20859 = chunk__19927_20854;
var G__20860 = count__19928_20855;
var G__20861 = (i__19929_20856 + (1));
seq__19925_20853 = G__20858;
chunk__19927_20854 = G__20859;
count__19928_20855 = G__20860;
i__19929_20856 = G__20861;
continue;
} else {
var G__20862 = seq__19925_20853;
var G__20863 = chunk__19927_20854;
var G__20864 = count__19928_20855;
var G__20865 = (i__19929_20856 + (1));
seq__19925_20853 = G__20862;
chunk__19927_20854 = G__20863;
count__19928_20855 = G__20864;
i__19929_20856 = G__20865;
continue;
}
} else {
var temp__5804__auto___20866__$1 = cljs.core.seq(seq__19925_20853);
if(temp__5804__auto___20866__$1){
var seq__19925_20867__$1 = temp__5804__auto___20866__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19925_20867__$1)){
var c__5568__auto___20868 = cljs.core.chunk_first(seq__19925_20867__$1);
var G__20869 = cljs.core.chunk_rest(seq__19925_20867__$1);
var G__20870 = c__5568__auto___20868;
var G__20871 = cljs.core.count(c__5568__auto___20868);
var G__20872 = (0);
seq__19925_20853 = G__20869;
chunk__19927_20854 = G__20870;
count__19928_20855 = G__20871;
i__19929_20856 = G__20872;
continue;
} else {
var child_20875 = cljs.core.first(seq__19925_20867__$1);
if(cljs.core.truth_(child_20875)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20875);


var G__20876 = cljs.core.next(seq__19925_20867__$1);
var G__20877 = null;
var G__20878 = (0);
var G__20879 = (0);
seq__19925_20853 = G__20876;
chunk__19927_20854 = G__20877;
count__19928_20855 = G__20878;
i__19929_20856 = G__20879;
continue;
} else {
var G__20880 = cljs.core.next(seq__19925_20867__$1);
var G__20881 = null;
var G__20882 = (0);
var G__20883 = (0);
seq__19925_20853 = G__20880;
chunk__19927_20854 = G__20881;
count__19928_20855 = G__20882;
i__19929_20856 = G__20883;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20852);
}


var G__20884 = cljs.core.next(seq__19826_20839__$1);
var G__20885 = null;
var G__20886 = (0);
var G__20887 = (0);
seq__19826_20787 = G__20884;
chunk__19827_20789 = G__20885;
count__19828_20790 = G__20886;
i__19829_20791 = G__20887;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__19964 = cljs.core.seq(node);
var chunk__19965 = null;
var count__19966 = (0);
var i__19967 = (0);
while(true){
if((i__19967 < count__19966)){
var n = chunk__19965.cljs$core$IIndexed$_nth$arity$2(null,i__19967);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20891 = seq__19964;
var G__20892 = chunk__19965;
var G__20893 = count__19966;
var G__20894 = (i__19967 + (1));
seq__19964 = G__20891;
chunk__19965 = G__20892;
count__19966 = G__20893;
i__19967 = G__20894;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19964);
if(temp__5804__auto__){
var seq__19964__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19964__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19964__$1);
var G__20897 = cljs.core.chunk_rest(seq__19964__$1);
var G__20898 = c__5568__auto__;
var G__20899 = cljs.core.count(c__5568__auto__);
var G__20900 = (0);
seq__19964 = G__20897;
chunk__19965 = G__20898;
count__19966 = G__20899;
i__19967 = G__20900;
continue;
} else {
var n = cljs.core.first(seq__19964__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20901 = cljs.core.next(seq__19964__$1);
var G__20902 = null;
var G__20903 = (0);
var G__20904 = (0);
seq__19964 = G__20901;
chunk__19965 = G__20902;
count__19966 = G__20903;
i__19967 = G__20904;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__19975 = arguments.length;
switch (G__19975) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__19982 = arguments.length;
switch (G__19982) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__19998 = arguments.length;
switch (G__19998) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20919 = arguments.length;
var i__5770__auto___20920 = (0);
while(true){
if((i__5770__auto___20920 < len__5769__auto___20919)){
args__5775__auto__.push((arguments[i__5770__auto___20920]));

var G__20921 = (i__5770__auto___20920 + (1));
i__5770__auto___20920 = G__20921;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20041_20922 = cljs.core.seq(nodes);
var chunk__20042_20923 = null;
var count__20043_20924 = (0);
var i__20044_20925 = (0);
while(true){
if((i__20044_20925 < count__20043_20924)){
var node_20926 = chunk__20042_20923.cljs$core$IIndexed$_nth$arity$2(null,i__20044_20925);
fragment.appendChild(shadow.dom._to_dom(node_20926));


var G__20927 = seq__20041_20922;
var G__20928 = chunk__20042_20923;
var G__20929 = count__20043_20924;
var G__20930 = (i__20044_20925 + (1));
seq__20041_20922 = G__20927;
chunk__20042_20923 = G__20928;
count__20043_20924 = G__20929;
i__20044_20925 = G__20930;
continue;
} else {
var temp__5804__auto___20931 = cljs.core.seq(seq__20041_20922);
if(temp__5804__auto___20931){
var seq__20041_20932__$1 = temp__5804__auto___20931;
if(cljs.core.chunked_seq_QMARK_(seq__20041_20932__$1)){
var c__5568__auto___20933 = cljs.core.chunk_first(seq__20041_20932__$1);
var G__20934 = cljs.core.chunk_rest(seq__20041_20932__$1);
var G__20935 = c__5568__auto___20933;
var G__20936 = cljs.core.count(c__5568__auto___20933);
var G__20937 = (0);
seq__20041_20922 = G__20934;
chunk__20042_20923 = G__20935;
count__20043_20924 = G__20936;
i__20044_20925 = G__20937;
continue;
} else {
var node_20938 = cljs.core.first(seq__20041_20932__$1);
fragment.appendChild(shadow.dom._to_dom(node_20938));


var G__20939 = cljs.core.next(seq__20041_20932__$1);
var G__20940 = null;
var G__20941 = (0);
var G__20942 = (0);
seq__20041_20922 = G__20939;
chunk__20042_20923 = G__20940;
count__20043_20924 = G__20941;
i__20044_20925 = G__20942;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20031){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20031));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20058_20943 = cljs.core.seq(scripts);
var chunk__20059_20944 = null;
var count__20060_20945 = (0);
var i__20061_20946 = (0);
while(true){
if((i__20061_20946 < count__20060_20945)){
var vec__20073_20947 = chunk__20059_20944.cljs$core$IIndexed$_nth$arity$2(null,i__20061_20946);
var script_tag_20948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20073_20947,(0),null);
var script_body_20949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20073_20947,(1),null);
eval(script_body_20949);


var G__20950 = seq__20058_20943;
var G__20951 = chunk__20059_20944;
var G__20952 = count__20060_20945;
var G__20953 = (i__20061_20946 + (1));
seq__20058_20943 = G__20950;
chunk__20059_20944 = G__20951;
count__20060_20945 = G__20952;
i__20061_20946 = G__20953;
continue;
} else {
var temp__5804__auto___20954 = cljs.core.seq(seq__20058_20943);
if(temp__5804__auto___20954){
var seq__20058_20955__$1 = temp__5804__auto___20954;
if(cljs.core.chunked_seq_QMARK_(seq__20058_20955__$1)){
var c__5568__auto___20956 = cljs.core.chunk_first(seq__20058_20955__$1);
var G__20957 = cljs.core.chunk_rest(seq__20058_20955__$1);
var G__20958 = c__5568__auto___20956;
var G__20959 = cljs.core.count(c__5568__auto___20956);
var G__20960 = (0);
seq__20058_20943 = G__20957;
chunk__20059_20944 = G__20958;
count__20060_20945 = G__20959;
i__20061_20946 = G__20960;
continue;
} else {
var vec__20082_20961 = cljs.core.first(seq__20058_20955__$1);
var script_tag_20962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082_20961,(0),null);
var script_body_20963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082_20961,(1),null);
eval(script_body_20963);


var G__20964 = cljs.core.next(seq__20058_20955__$1);
var G__20965 = null;
var G__20966 = (0);
var G__20967 = (0);
seq__20058_20943 = G__20964;
chunk__20059_20944 = G__20965;
count__20060_20945 = G__20966;
i__20061_20946 = G__20967;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20087){
var vec__20089 = p__20087;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20089,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20089,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20113 = arguments.length;
switch (G__20113) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20142 = cljs.core.seq(style_keys);
var chunk__20143 = null;
var count__20145 = (0);
var i__20146 = (0);
while(true){
if((i__20146 < count__20145)){
var it = chunk__20143.cljs$core$IIndexed$_nth$arity$2(null,i__20146);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20985 = seq__20142;
var G__20986 = chunk__20143;
var G__20987 = count__20145;
var G__20988 = (i__20146 + (1));
seq__20142 = G__20985;
chunk__20143 = G__20986;
count__20145 = G__20987;
i__20146 = G__20988;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20142);
if(temp__5804__auto__){
var seq__20142__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20142__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20142__$1);
var G__20993 = cljs.core.chunk_rest(seq__20142__$1);
var G__20994 = c__5568__auto__;
var G__20995 = cljs.core.count(c__5568__auto__);
var G__20996 = (0);
seq__20142 = G__20993;
chunk__20143 = G__20994;
count__20145 = G__20995;
i__20146 = G__20996;
continue;
} else {
var it = cljs.core.first(seq__20142__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20997 = cljs.core.next(seq__20142__$1);
var G__20998 = null;
var G__20999 = (0);
var G__21000 = (0);
seq__20142 = G__20997;
chunk__20143 = G__20998;
count__20145 = G__20999;
i__20146 = G__21000;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20152,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20164 = k20152;
var G__20164__$1 = (((G__20164 instanceof cljs.core.Keyword))?G__20164.fqn:null);
switch (G__20164__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20152,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20169){
var vec__20171 = p__20169;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20151){
var self__ = this;
var G__20151__$1 = this;
return (new cljs.core.RecordIter((0),G__20151__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20153,other20154){
var self__ = this;
var this20153__$1 = this;
return (((!((other20154 == null)))) && ((((this20153__$1.constructor === other20154.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20153__$1.x,other20154.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20153__$1.y,other20154.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20153__$1.__extmap,other20154.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20152){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20189 = k20152;
var G__20189__$1 = (((G__20189 instanceof cljs.core.Keyword))?G__20189.fqn:null);
switch (G__20189__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20152);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20151){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20193 = cljs.core.keyword_identical_QMARK_;
var expr__20194 = k__5352__auto__;
if(cljs.core.truth_((pred__20193.cljs$core$IFn$_invoke$arity$2 ? pred__20193.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20194) : pred__20193.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20194)))){
return (new shadow.dom.Coordinate(G__20151,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20193.cljs$core$IFn$_invoke$arity$2 ? pred__20193.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20194) : pred__20193.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20194)))){
return (new shadow.dom.Coordinate(self__.x,G__20151,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20151),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20151){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20151,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20158){
var extmap__5385__auto__ = (function (){var G__20212 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20158,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20158)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20212);
} else {
return G__20212;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20158),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20158),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20223,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20233 = k20223;
var G__20233__$1 = (((G__20233 instanceof cljs.core.Keyword))?G__20233.fqn:null);
switch (G__20233__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20223,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20234){
var vec__20235 = p__20234;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20222){
var self__ = this;
var G__20222__$1 = this;
return (new cljs.core.RecordIter((0),G__20222__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20225,other20226){
var self__ = this;
var this20225__$1 = this;
return (((!((other20226 == null)))) && ((((this20225__$1.constructor === other20226.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20225__$1.w,other20226.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20225__$1.h,other20226.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20225__$1.__extmap,other20226.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20223){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20254 = k20223;
var G__20254__$1 = (((G__20254 instanceof cljs.core.Keyword))?G__20254.fqn:null);
switch (G__20254__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20223);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20222){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20257 = cljs.core.keyword_identical_QMARK_;
var expr__20258 = k__5352__auto__;
if(cljs.core.truth_((pred__20257.cljs$core$IFn$_invoke$arity$2 ? pred__20257.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20258) : pred__20257.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20258)))){
return (new shadow.dom.Size(G__20222,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20257.cljs$core$IFn$_invoke$arity$2 ? pred__20257.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20258) : pred__20257.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20258)))){
return (new shadow.dom.Size(self__.w,G__20222,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20222),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20222){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20222,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20228){
var extmap__5385__auto__ = (function (){var G__20269 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20228,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20228)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20269);
} else {
return G__20269;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20228),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20228),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21066 = (i + (1));
var G__21067 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21066;
ret = G__21067;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20302){
var vec__20303 = p__20302;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20303,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20312 = arguments.length;
switch (G__20312) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21075 = ps;
var G__21076 = (i + (1));
el__$1 = G__21075;
i = G__21076;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20341 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20341,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20341,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20341,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20347_21079 = cljs.core.seq(props);
var chunk__20348_21080 = null;
var count__20349_21081 = (0);
var i__20350_21082 = (0);
while(true){
if((i__20350_21082 < count__20349_21081)){
var vec__20366_21084 = chunk__20348_21080.cljs$core$IIndexed$_nth$arity$2(null,i__20350_21082);
var k_21085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20366_21084,(0),null);
var v_21086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20366_21084,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21085);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21085),v_21086);


var G__21088 = seq__20347_21079;
var G__21089 = chunk__20348_21080;
var G__21090 = count__20349_21081;
var G__21091 = (i__20350_21082 + (1));
seq__20347_21079 = G__21088;
chunk__20348_21080 = G__21089;
count__20349_21081 = G__21090;
i__20350_21082 = G__21091;
continue;
} else {
var temp__5804__auto___21092 = cljs.core.seq(seq__20347_21079);
if(temp__5804__auto___21092){
var seq__20347_21093__$1 = temp__5804__auto___21092;
if(cljs.core.chunked_seq_QMARK_(seq__20347_21093__$1)){
var c__5568__auto___21094 = cljs.core.chunk_first(seq__20347_21093__$1);
var G__21095 = cljs.core.chunk_rest(seq__20347_21093__$1);
var G__21096 = c__5568__auto___21094;
var G__21097 = cljs.core.count(c__5568__auto___21094);
var G__21098 = (0);
seq__20347_21079 = G__21095;
chunk__20348_21080 = G__21096;
count__20349_21081 = G__21097;
i__20350_21082 = G__21098;
continue;
} else {
var vec__20373_21099 = cljs.core.first(seq__20347_21093__$1);
var k_21100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20373_21099,(0),null);
var v_21101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20373_21099,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21100);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21100),v_21101);


var G__21102 = cljs.core.next(seq__20347_21093__$1);
var G__21103 = null;
var G__21104 = (0);
var G__21105 = (0);
seq__20347_21079 = G__21102;
chunk__20348_21080 = G__21103;
count__20349_21081 = G__21104;
i__20350_21082 = G__21105;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20385 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20385,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20385,(1),null);
var seq__20389_21106 = cljs.core.seq(node_children);
var chunk__20391_21107 = null;
var count__20392_21108 = (0);
var i__20393_21109 = (0);
while(true){
if((i__20393_21109 < count__20392_21108)){
var child_struct_21111 = chunk__20391_21107.cljs$core$IIndexed$_nth$arity$2(null,i__20393_21109);
if((!((child_struct_21111 == null)))){
if(typeof child_struct_21111 === 'string'){
var text_21116 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21116),child_struct_21111].join(''));
} else {
var children_21117 = shadow.dom.svg_node(child_struct_21111);
if(cljs.core.seq_QMARK_(children_21117)){
var seq__20428_21121 = cljs.core.seq(children_21117);
var chunk__20430_21122 = null;
var count__20431_21123 = (0);
var i__20432_21124 = (0);
while(true){
if((i__20432_21124 < count__20431_21123)){
var child_21125 = chunk__20430_21122.cljs$core$IIndexed$_nth$arity$2(null,i__20432_21124);
if(cljs.core.truth_(child_21125)){
node.appendChild(child_21125);


var G__21126 = seq__20428_21121;
var G__21127 = chunk__20430_21122;
var G__21128 = count__20431_21123;
var G__21129 = (i__20432_21124 + (1));
seq__20428_21121 = G__21126;
chunk__20430_21122 = G__21127;
count__20431_21123 = G__21128;
i__20432_21124 = G__21129;
continue;
} else {
var G__21130 = seq__20428_21121;
var G__21131 = chunk__20430_21122;
var G__21132 = count__20431_21123;
var G__21133 = (i__20432_21124 + (1));
seq__20428_21121 = G__21130;
chunk__20430_21122 = G__21131;
count__20431_21123 = G__21132;
i__20432_21124 = G__21133;
continue;
}
} else {
var temp__5804__auto___21134 = cljs.core.seq(seq__20428_21121);
if(temp__5804__auto___21134){
var seq__20428_21135__$1 = temp__5804__auto___21134;
if(cljs.core.chunked_seq_QMARK_(seq__20428_21135__$1)){
var c__5568__auto___21136 = cljs.core.chunk_first(seq__20428_21135__$1);
var G__21137 = cljs.core.chunk_rest(seq__20428_21135__$1);
var G__21138 = c__5568__auto___21136;
var G__21139 = cljs.core.count(c__5568__auto___21136);
var G__21140 = (0);
seq__20428_21121 = G__21137;
chunk__20430_21122 = G__21138;
count__20431_21123 = G__21139;
i__20432_21124 = G__21140;
continue;
} else {
var child_21142 = cljs.core.first(seq__20428_21135__$1);
if(cljs.core.truth_(child_21142)){
node.appendChild(child_21142);


var G__21143 = cljs.core.next(seq__20428_21135__$1);
var G__21144 = null;
var G__21145 = (0);
var G__21146 = (0);
seq__20428_21121 = G__21143;
chunk__20430_21122 = G__21144;
count__20431_21123 = G__21145;
i__20432_21124 = G__21146;
continue;
} else {
var G__21147 = cljs.core.next(seq__20428_21135__$1);
var G__21148 = null;
var G__21149 = (0);
var G__21150 = (0);
seq__20428_21121 = G__21147;
chunk__20430_21122 = G__21148;
count__20431_21123 = G__21149;
i__20432_21124 = G__21150;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21117);
}
}


var G__21151 = seq__20389_21106;
var G__21152 = chunk__20391_21107;
var G__21153 = count__20392_21108;
var G__21154 = (i__20393_21109 + (1));
seq__20389_21106 = G__21151;
chunk__20391_21107 = G__21152;
count__20392_21108 = G__21153;
i__20393_21109 = G__21154;
continue;
} else {
var G__21155 = seq__20389_21106;
var G__21156 = chunk__20391_21107;
var G__21157 = count__20392_21108;
var G__21158 = (i__20393_21109 + (1));
seq__20389_21106 = G__21155;
chunk__20391_21107 = G__21156;
count__20392_21108 = G__21157;
i__20393_21109 = G__21158;
continue;
}
} else {
var temp__5804__auto___21159 = cljs.core.seq(seq__20389_21106);
if(temp__5804__auto___21159){
var seq__20389_21160__$1 = temp__5804__auto___21159;
if(cljs.core.chunked_seq_QMARK_(seq__20389_21160__$1)){
var c__5568__auto___21161 = cljs.core.chunk_first(seq__20389_21160__$1);
var G__21162 = cljs.core.chunk_rest(seq__20389_21160__$1);
var G__21163 = c__5568__auto___21161;
var G__21164 = cljs.core.count(c__5568__auto___21161);
var G__21165 = (0);
seq__20389_21106 = G__21162;
chunk__20391_21107 = G__21163;
count__20392_21108 = G__21164;
i__20393_21109 = G__21165;
continue;
} else {
var child_struct_21167 = cljs.core.first(seq__20389_21160__$1);
if((!((child_struct_21167 == null)))){
if(typeof child_struct_21167 === 'string'){
var text_21169 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21169),child_struct_21167].join(''));
} else {
var children_21170 = shadow.dom.svg_node(child_struct_21167);
if(cljs.core.seq_QMARK_(children_21170)){
var seq__20435_21171 = cljs.core.seq(children_21170);
var chunk__20437_21172 = null;
var count__20438_21173 = (0);
var i__20439_21174 = (0);
while(true){
if((i__20439_21174 < count__20438_21173)){
var child_21178 = chunk__20437_21172.cljs$core$IIndexed$_nth$arity$2(null,i__20439_21174);
if(cljs.core.truth_(child_21178)){
node.appendChild(child_21178);


var G__21179 = seq__20435_21171;
var G__21180 = chunk__20437_21172;
var G__21181 = count__20438_21173;
var G__21182 = (i__20439_21174 + (1));
seq__20435_21171 = G__21179;
chunk__20437_21172 = G__21180;
count__20438_21173 = G__21181;
i__20439_21174 = G__21182;
continue;
} else {
var G__21183 = seq__20435_21171;
var G__21184 = chunk__20437_21172;
var G__21185 = count__20438_21173;
var G__21186 = (i__20439_21174 + (1));
seq__20435_21171 = G__21183;
chunk__20437_21172 = G__21184;
count__20438_21173 = G__21185;
i__20439_21174 = G__21186;
continue;
}
} else {
var temp__5804__auto___21187__$1 = cljs.core.seq(seq__20435_21171);
if(temp__5804__auto___21187__$1){
var seq__20435_21188__$1 = temp__5804__auto___21187__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20435_21188__$1)){
var c__5568__auto___21189 = cljs.core.chunk_first(seq__20435_21188__$1);
var G__21190 = cljs.core.chunk_rest(seq__20435_21188__$1);
var G__21191 = c__5568__auto___21189;
var G__21192 = cljs.core.count(c__5568__auto___21189);
var G__21193 = (0);
seq__20435_21171 = G__21190;
chunk__20437_21172 = G__21191;
count__20438_21173 = G__21192;
i__20439_21174 = G__21193;
continue;
} else {
var child_21194 = cljs.core.first(seq__20435_21188__$1);
if(cljs.core.truth_(child_21194)){
node.appendChild(child_21194);


var G__21198 = cljs.core.next(seq__20435_21188__$1);
var G__21199 = null;
var G__21200 = (0);
var G__21201 = (0);
seq__20435_21171 = G__21198;
chunk__20437_21172 = G__21199;
count__20438_21173 = G__21200;
i__20439_21174 = G__21201;
continue;
} else {
var G__21205 = cljs.core.next(seq__20435_21188__$1);
var G__21206 = null;
var G__21207 = (0);
var G__21208 = (0);
seq__20435_21171 = G__21205;
chunk__20437_21172 = G__21206;
count__20438_21173 = G__21207;
i__20439_21174 = G__21208;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21170);
}
}


var G__21209 = cljs.core.next(seq__20389_21160__$1);
var G__21210 = null;
var G__21211 = (0);
var G__21212 = (0);
seq__20389_21106 = G__21209;
chunk__20391_21107 = G__21210;
count__20392_21108 = G__21211;
i__20393_21109 = G__21212;
continue;
} else {
var G__21213 = cljs.core.next(seq__20389_21160__$1);
var G__21214 = null;
var G__21215 = (0);
var G__21216 = (0);
seq__20389_21106 = G__21213;
chunk__20391_21107 = G__21214;
count__20392_21108 = G__21215;
i__20393_21109 = G__21216;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21223 = arguments.length;
var i__5770__auto___21224 = (0);
while(true){
if((i__5770__auto___21224 < len__5769__auto___21223)){
args__5775__auto__.push((arguments[i__5770__auto___21224]));

var G__21225 = (i__5770__auto___21224 + (1));
i__5770__auto___21224 = G__21225;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20457){
var G__20458 = cljs.core.first(seq20457);
var seq20457__$1 = cljs.core.next(seq20457);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20458,seq20457__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20475 = arguments.length;
switch (G__20475) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17238__auto___21242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_20485){
var state_val_20486 = (state_20485[(1)]);
if((state_val_20486 === (1))){
var state_20485__$1 = state_20485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20485__$1,(2),once_or_cleanup);
} else {
if((state_val_20486 === (2))){
var inst_20482 = (state_20485[(2)]);
var inst_20483 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20485__$1 = (function (){var statearr_20489 = state_20485;
(statearr_20489[(7)] = inst_20482);

return statearr_20489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20485__$1,inst_20483);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17100__auto__ = null;
var shadow$dom$state_machine__17100__auto____0 = (function (){
var statearr_20491 = [null,null,null,null,null,null,null,null];
(statearr_20491[(0)] = shadow$dom$state_machine__17100__auto__);

(statearr_20491[(1)] = (1));

return statearr_20491;
});
var shadow$dom$state_machine__17100__auto____1 = (function (state_20485){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_20485);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e20492){var ex__17103__auto__ = e20492;
var statearr_20493_21245 = state_20485;
(statearr_20493_21245[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_20485[(4)]))){
var statearr_20494_21246 = state_20485;
(statearr_20494_21246[(1)] = cljs.core.first((state_20485[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21248 = state_20485;
state_20485 = G__21248;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
shadow$dom$state_machine__17100__auto__ = function(state_20485){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17100__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17100__auto____1.call(this,state_20485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17100__auto____0;
shadow$dom$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17100__auto____1;
return shadow$dom$state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_20495 = f__17239__auto__();
(statearr_20495[(6)] = c__17238__auto___21242);

return statearr_20495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
