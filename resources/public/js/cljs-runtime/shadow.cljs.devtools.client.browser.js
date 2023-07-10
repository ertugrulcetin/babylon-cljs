goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22349 = arguments.length;
var i__5770__auto___22350 = (0);
while(true){
if((i__5770__auto___22350 < len__5769__auto___22349)){
args__5775__auto__.push((arguments[i__5770__auto___22350]));

var G__22351 = (i__5770__auto___22350 + (1));
i__5770__auto___22350 = G__22351;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22064){
var G__22065 = cljs.core.first(seq22064);
var seq22064__$1 = cljs.core.next(seq22064);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22065,seq22064__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22067 = cljs.core.seq(sources);
var chunk__22068 = null;
var count__22069 = (0);
var i__22070 = (0);
while(true){
if((i__22070 < count__22069)){
var map__22078 = chunk__22068.cljs$core$IIndexed$_nth$arity$2(null,i__22070);
var map__22078__$1 = cljs.core.__destructure_map(map__22078);
var src = map__22078__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22078__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22078__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22078__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22078__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22080){var e_22352 = e22080;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22352);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22352.message)].join('')));
}

var G__22353 = seq__22067;
var G__22354 = chunk__22068;
var G__22355 = count__22069;
var G__22356 = (i__22070 + (1));
seq__22067 = G__22353;
chunk__22068 = G__22354;
count__22069 = G__22355;
i__22070 = G__22356;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22067);
if(temp__5804__auto__){
var seq__22067__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22067__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22067__$1);
var G__22357 = cljs.core.chunk_rest(seq__22067__$1);
var G__22358 = c__5568__auto__;
var G__22359 = cljs.core.count(c__5568__auto__);
var G__22360 = (0);
seq__22067 = G__22357;
chunk__22068 = G__22358;
count__22069 = G__22359;
i__22070 = G__22360;
continue;
} else {
var map__22081 = cljs.core.first(seq__22067__$1);
var map__22081__$1 = cljs.core.__destructure_map(map__22081);
var src = map__22081__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22081__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22081__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22081__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22081__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22082){var e_22361 = e22082;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22361);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22361.message)].join('')));
}

var G__22362 = cljs.core.next(seq__22067__$1);
var G__22363 = null;
var G__22364 = (0);
var G__22365 = (0);
seq__22067 = G__22362;
chunk__22068 = G__22363;
count__22069 = G__22364;
i__22070 = G__22365;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22083 = cljs.core.seq(js_requires);
var chunk__22084 = null;
var count__22085 = (0);
var i__22086 = (0);
while(true){
if((i__22086 < count__22085)){
var js_ns = chunk__22084.cljs$core$IIndexed$_nth$arity$2(null,i__22086);
var require_str_22366 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22366);


var G__22367 = seq__22083;
var G__22368 = chunk__22084;
var G__22369 = count__22085;
var G__22370 = (i__22086 + (1));
seq__22083 = G__22367;
chunk__22084 = G__22368;
count__22085 = G__22369;
i__22086 = G__22370;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22083);
if(temp__5804__auto__){
var seq__22083__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22083__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22083__$1);
var G__22371 = cljs.core.chunk_rest(seq__22083__$1);
var G__22372 = c__5568__auto__;
var G__22373 = cljs.core.count(c__5568__auto__);
var G__22374 = (0);
seq__22083 = G__22371;
chunk__22084 = G__22372;
count__22085 = G__22373;
i__22086 = G__22374;
continue;
} else {
var js_ns = cljs.core.first(seq__22083__$1);
var require_str_22375 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22375);


var G__22376 = cljs.core.next(seq__22083__$1);
var G__22377 = null;
var G__22378 = (0);
var G__22379 = (0);
seq__22083 = G__22376;
chunk__22084 = G__22377;
count__22085 = G__22378;
i__22086 = G__22379;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22090){
var map__22091 = p__22090;
var map__22091__$1 = cljs.core.__destructure_map(map__22091);
var msg = map__22091__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22091__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22091__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22092(s__22093){
return (new cljs.core.LazySeq(null,(function (){
var s__22093__$1 = s__22093;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22093__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22098 = cljs.core.first(xs__6360__auto__);
var map__22098__$1 = cljs.core.__destructure_map(map__22098);
var src = map__22098__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22098__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22098__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22093__$1,map__22098,map__22098__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22091,map__22091__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22092_$_iter__22094(s__22095){
return (new cljs.core.LazySeq(null,((function (s__22093__$1,map__22098,map__22098__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22091,map__22091__$1,msg,info,reload_info){
return (function (){
var s__22095__$1 = s__22095;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22095__$1);
if(temp__5804__auto____$1){
var s__22095__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22095__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22095__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22097 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22096 = (0);
while(true){
if((i__22096 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22096);
cljs.core.chunk_append(b__22097,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22380 = (i__22096 + (1));
i__22096 = G__22380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22097),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22092_$_iter__22094(cljs.core.chunk_rest(s__22095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22097),null);
}
} else {
var warning = cljs.core.first(s__22095__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22092_$_iter__22094(cljs.core.rest(s__22095__$2)));
}
} else {
return null;
}
break;
}
});})(s__22093__$1,map__22098,map__22098__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22091,map__22091__$1,msg,info,reload_info))
,null,null));
});})(s__22093__$1,map__22098,map__22098__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22091,map__22091__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22092(cljs.core.rest(s__22093__$1)));
} else {
var G__22381 = cljs.core.rest(s__22093__$1);
s__22093__$1 = G__22381;
continue;
}
} else {
var G__22382 = cljs.core.rest(s__22093__$1);
s__22093__$1 = G__22382;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22099_22383 = cljs.core.seq(warnings);
var chunk__22100_22384 = null;
var count__22101_22385 = (0);
var i__22102_22386 = (0);
while(true){
if((i__22102_22386 < count__22101_22385)){
var map__22105_22387 = chunk__22100_22384.cljs$core$IIndexed$_nth$arity$2(null,i__22102_22386);
var map__22105_22388__$1 = cljs.core.__destructure_map(map__22105_22387);
var w_22389 = map__22105_22388__$1;
var msg_22390__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22105_22388__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22105_22388__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22105_22388__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22105_22388__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22393)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22391),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22392),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22390__$1)].join(''));


var G__22394 = seq__22099_22383;
var G__22395 = chunk__22100_22384;
var G__22396 = count__22101_22385;
var G__22397 = (i__22102_22386 + (1));
seq__22099_22383 = G__22394;
chunk__22100_22384 = G__22395;
count__22101_22385 = G__22396;
i__22102_22386 = G__22397;
continue;
} else {
var temp__5804__auto___22398 = cljs.core.seq(seq__22099_22383);
if(temp__5804__auto___22398){
var seq__22099_22399__$1 = temp__5804__auto___22398;
if(cljs.core.chunked_seq_QMARK_(seq__22099_22399__$1)){
var c__5568__auto___22400 = cljs.core.chunk_first(seq__22099_22399__$1);
var G__22401 = cljs.core.chunk_rest(seq__22099_22399__$1);
var G__22402 = c__5568__auto___22400;
var G__22403 = cljs.core.count(c__5568__auto___22400);
var G__22404 = (0);
seq__22099_22383 = G__22401;
chunk__22100_22384 = G__22402;
count__22101_22385 = G__22403;
i__22102_22386 = G__22404;
continue;
} else {
var map__22106_22405 = cljs.core.first(seq__22099_22399__$1);
var map__22106_22406__$1 = cljs.core.__destructure_map(map__22106_22405);
var w_22407 = map__22106_22406__$1;
var msg_22408__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22106_22406__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22106_22406__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22106_22406__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22106_22406__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22411)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22409),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22410),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22408__$1)].join(''));


var G__22412 = cljs.core.next(seq__22099_22399__$1);
var G__22413 = null;
var G__22414 = (0);
var G__22415 = (0);
seq__22099_22383 = G__22412;
chunk__22100_22384 = G__22413;
count__22101_22385 = G__22414;
i__22102_22386 = G__22415;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22089_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22089_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22107){
var map__22108 = p__22107;
var map__22108__$1 = cljs.core.__destructure_map(map__22108);
var msg = map__22108__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22109 = cljs.core.seq(updates);
var chunk__22111 = null;
var count__22112 = (0);
var i__22113 = (0);
while(true){
if((i__22113 < count__22112)){
var path = chunk__22111.cljs$core$IIndexed$_nth$arity$2(null,i__22113);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22223_22416 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22227_22417 = null;
var count__22228_22418 = (0);
var i__22229_22419 = (0);
while(true){
if((i__22229_22419 < count__22228_22418)){
var node_22420 = chunk__22227_22417.cljs$core$IIndexed$_nth$arity$2(null,i__22229_22419);
if(cljs.core.not(node_22420.shadow$old)){
var path_match_22421 = shadow.cljs.devtools.client.browser.match_paths(node_22420.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22421)){
var new_link_22422 = (function (){var G__22255 = node_22420.cloneNode(true);
G__22255.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22421),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22255;
})();
(node_22420.shadow$old = true);

(new_link_22422.onload = ((function (seq__22223_22416,chunk__22227_22417,count__22228_22418,i__22229_22419,seq__22109,chunk__22111,count__22112,i__22113,new_link_22422,path_match_22421,node_22420,path,map__22108,map__22108__$1,msg,updates,reload_info){
return (function (e){
var seq__22256_22423 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22258_22424 = null;
var count__22259_22425 = (0);
var i__22260_22426 = (0);
while(true){
if((i__22260_22426 < count__22259_22425)){
var map__22264_22427 = chunk__22258_22424.cljs$core$IIndexed$_nth$arity$2(null,i__22260_22426);
var map__22264_22428__$1 = cljs.core.__destructure_map(map__22264_22427);
var task_22429 = map__22264_22428__$1;
var fn_str_22430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22264_22428__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22264_22428__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22432 = goog.getObjectByName(fn_str_22430,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22431)].join(''));

(fn_obj_22432.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22432.cljs$core$IFn$_invoke$arity$2(path,new_link_22422) : fn_obj_22432.call(null,path,new_link_22422));


var G__22433 = seq__22256_22423;
var G__22434 = chunk__22258_22424;
var G__22435 = count__22259_22425;
var G__22436 = (i__22260_22426 + (1));
seq__22256_22423 = G__22433;
chunk__22258_22424 = G__22434;
count__22259_22425 = G__22435;
i__22260_22426 = G__22436;
continue;
} else {
var temp__5804__auto___22437 = cljs.core.seq(seq__22256_22423);
if(temp__5804__auto___22437){
var seq__22256_22438__$1 = temp__5804__auto___22437;
if(cljs.core.chunked_seq_QMARK_(seq__22256_22438__$1)){
var c__5568__auto___22439 = cljs.core.chunk_first(seq__22256_22438__$1);
var G__22440 = cljs.core.chunk_rest(seq__22256_22438__$1);
var G__22441 = c__5568__auto___22439;
var G__22442 = cljs.core.count(c__5568__auto___22439);
var G__22443 = (0);
seq__22256_22423 = G__22440;
chunk__22258_22424 = G__22441;
count__22259_22425 = G__22442;
i__22260_22426 = G__22443;
continue;
} else {
var map__22265_22444 = cljs.core.first(seq__22256_22438__$1);
var map__22265_22445__$1 = cljs.core.__destructure_map(map__22265_22444);
var task_22446 = map__22265_22445__$1;
var fn_str_22447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22265_22445__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22265_22445__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22449 = goog.getObjectByName(fn_str_22447,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22448)].join(''));

(fn_obj_22449.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22449.cljs$core$IFn$_invoke$arity$2(path,new_link_22422) : fn_obj_22449.call(null,path,new_link_22422));


var G__22450 = cljs.core.next(seq__22256_22438__$1);
var G__22451 = null;
var G__22452 = (0);
var G__22453 = (0);
seq__22256_22423 = G__22450;
chunk__22258_22424 = G__22451;
count__22259_22425 = G__22452;
i__22260_22426 = G__22453;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22420);
});})(seq__22223_22416,chunk__22227_22417,count__22228_22418,i__22229_22419,seq__22109,chunk__22111,count__22112,i__22113,new_link_22422,path_match_22421,node_22420,path,map__22108,map__22108__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22421], 0));

goog.dom.insertSiblingAfter(new_link_22422,node_22420);


var G__22454 = seq__22223_22416;
var G__22455 = chunk__22227_22417;
var G__22456 = count__22228_22418;
var G__22457 = (i__22229_22419 + (1));
seq__22223_22416 = G__22454;
chunk__22227_22417 = G__22455;
count__22228_22418 = G__22456;
i__22229_22419 = G__22457;
continue;
} else {
var G__22458 = seq__22223_22416;
var G__22459 = chunk__22227_22417;
var G__22460 = count__22228_22418;
var G__22461 = (i__22229_22419 + (1));
seq__22223_22416 = G__22458;
chunk__22227_22417 = G__22459;
count__22228_22418 = G__22460;
i__22229_22419 = G__22461;
continue;
}
} else {
var G__22462 = seq__22223_22416;
var G__22463 = chunk__22227_22417;
var G__22464 = count__22228_22418;
var G__22465 = (i__22229_22419 + (1));
seq__22223_22416 = G__22462;
chunk__22227_22417 = G__22463;
count__22228_22418 = G__22464;
i__22229_22419 = G__22465;
continue;
}
} else {
var temp__5804__auto___22466 = cljs.core.seq(seq__22223_22416);
if(temp__5804__auto___22466){
var seq__22223_22467__$1 = temp__5804__auto___22466;
if(cljs.core.chunked_seq_QMARK_(seq__22223_22467__$1)){
var c__5568__auto___22468 = cljs.core.chunk_first(seq__22223_22467__$1);
var G__22469 = cljs.core.chunk_rest(seq__22223_22467__$1);
var G__22470 = c__5568__auto___22468;
var G__22471 = cljs.core.count(c__5568__auto___22468);
var G__22472 = (0);
seq__22223_22416 = G__22469;
chunk__22227_22417 = G__22470;
count__22228_22418 = G__22471;
i__22229_22419 = G__22472;
continue;
} else {
var node_22473 = cljs.core.first(seq__22223_22467__$1);
if(cljs.core.not(node_22473.shadow$old)){
var path_match_22474 = shadow.cljs.devtools.client.browser.match_paths(node_22473.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22474)){
var new_link_22475 = (function (){var G__22266 = node_22473.cloneNode(true);
G__22266.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22474),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22266;
})();
(node_22473.shadow$old = true);

(new_link_22475.onload = ((function (seq__22223_22416,chunk__22227_22417,count__22228_22418,i__22229_22419,seq__22109,chunk__22111,count__22112,i__22113,new_link_22475,path_match_22474,node_22473,seq__22223_22467__$1,temp__5804__auto___22466,path,map__22108,map__22108__$1,msg,updates,reload_info){
return (function (e){
var seq__22267_22476 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22269_22477 = null;
var count__22270_22478 = (0);
var i__22271_22479 = (0);
while(true){
if((i__22271_22479 < count__22270_22478)){
var map__22275_22480 = chunk__22269_22477.cljs$core$IIndexed$_nth$arity$2(null,i__22271_22479);
var map__22275_22481__$1 = cljs.core.__destructure_map(map__22275_22480);
var task_22482 = map__22275_22481__$1;
var fn_str_22483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22275_22481__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22275_22481__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22485 = goog.getObjectByName(fn_str_22483,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22484)].join(''));

(fn_obj_22485.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22485.cljs$core$IFn$_invoke$arity$2(path,new_link_22475) : fn_obj_22485.call(null,path,new_link_22475));


var G__22486 = seq__22267_22476;
var G__22487 = chunk__22269_22477;
var G__22488 = count__22270_22478;
var G__22489 = (i__22271_22479 + (1));
seq__22267_22476 = G__22486;
chunk__22269_22477 = G__22487;
count__22270_22478 = G__22488;
i__22271_22479 = G__22489;
continue;
} else {
var temp__5804__auto___22490__$1 = cljs.core.seq(seq__22267_22476);
if(temp__5804__auto___22490__$1){
var seq__22267_22491__$1 = temp__5804__auto___22490__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22267_22491__$1)){
var c__5568__auto___22492 = cljs.core.chunk_first(seq__22267_22491__$1);
var G__22493 = cljs.core.chunk_rest(seq__22267_22491__$1);
var G__22494 = c__5568__auto___22492;
var G__22495 = cljs.core.count(c__5568__auto___22492);
var G__22496 = (0);
seq__22267_22476 = G__22493;
chunk__22269_22477 = G__22494;
count__22270_22478 = G__22495;
i__22271_22479 = G__22496;
continue;
} else {
var map__22276_22497 = cljs.core.first(seq__22267_22491__$1);
var map__22276_22498__$1 = cljs.core.__destructure_map(map__22276_22497);
var task_22499 = map__22276_22498__$1;
var fn_str_22500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22276_22498__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22276_22498__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22502 = goog.getObjectByName(fn_str_22500,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22501)].join(''));

(fn_obj_22502.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22502.cljs$core$IFn$_invoke$arity$2(path,new_link_22475) : fn_obj_22502.call(null,path,new_link_22475));


var G__22503 = cljs.core.next(seq__22267_22491__$1);
var G__22504 = null;
var G__22505 = (0);
var G__22506 = (0);
seq__22267_22476 = G__22503;
chunk__22269_22477 = G__22504;
count__22270_22478 = G__22505;
i__22271_22479 = G__22506;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22473);
});})(seq__22223_22416,chunk__22227_22417,count__22228_22418,i__22229_22419,seq__22109,chunk__22111,count__22112,i__22113,new_link_22475,path_match_22474,node_22473,seq__22223_22467__$1,temp__5804__auto___22466,path,map__22108,map__22108__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22474], 0));

goog.dom.insertSiblingAfter(new_link_22475,node_22473);


var G__22507 = cljs.core.next(seq__22223_22467__$1);
var G__22508 = null;
var G__22509 = (0);
var G__22510 = (0);
seq__22223_22416 = G__22507;
chunk__22227_22417 = G__22508;
count__22228_22418 = G__22509;
i__22229_22419 = G__22510;
continue;
} else {
var G__22511 = cljs.core.next(seq__22223_22467__$1);
var G__22512 = null;
var G__22513 = (0);
var G__22514 = (0);
seq__22223_22416 = G__22511;
chunk__22227_22417 = G__22512;
count__22228_22418 = G__22513;
i__22229_22419 = G__22514;
continue;
}
} else {
var G__22515 = cljs.core.next(seq__22223_22467__$1);
var G__22516 = null;
var G__22517 = (0);
var G__22518 = (0);
seq__22223_22416 = G__22515;
chunk__22227_22417 = G__22516;
count__22228_22418 = G__22517;
i__22229_22419 = G__22518;
continue;
}
}
} else {
}
}
break;
}


var G__22519 = seq__22109;
var G__22520 = chunk__22111;
var G__22521 = count__22112;
var G__22522 = (i__22113 + (1));
seq__22109 = G__22519;
chunk__22111 = G__22520;
count__22112 = G__22521;
i__22113 = G__22522;
continue;
} else {
var G__22523 = seq__22109;
var G__22524 = chunk__22111;
var G__22525 = count__22112;
var G__22526 = (i__22113 + (1));
seq__22109 = G__22523;
chunk__22111 = G__22524;
count__22112 = G__22525;
i__22113 = G__22526;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22109);
if(temp__5804__auto__){
var seq__22109__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22109__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22109__$1);
var G__22527 = cljs.core.chunk_rest(seq__22109__$1);
var G__22528 = c__5568__auto__;
var G__22529 = cljs.core.count(c__5568__auto__);
var G__22530 = (0);
seq__22109 = G__22527;
chunk__22111 = G__22528;
count__22112 = G__22529;
i__22113 = G__22530;
continue;
} else {
var path = cljs.core.first(seq__22109__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22277_22531 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22281_22532 = null;
var count__22282_22533 = (0);
var i__22283_22534 = (0);
while(true){
if((i__22283_22534 < count__22282_22533)){
var node_22535 = chunk__22281_22532.cljs$core$IIndexed$_nth$arity$2(null,i__22283_22534);
if(cljs.core.not(node_22535.shadow$old)){
var path_match_22536 = shadow.cljs.devtools.client.browser.match_paths(node_22535.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22536)){
var new_link_22537 = (function (){var G__22309 = node_22535.cloneNode(true);
G__22309.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22536),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22309;
})();
(node_22535.shadow$old = true);

(new_link_22537.onload = ((function (seq__22277_22531,chunk__22281_22532,count__22282_22533,i__22283_22534,seq__22109,chunk__22111,count__22112,i__22113,new_link_22537,path_match_22536,node_22535,path,seq__22109__$1,temp__5804__auto__,map__22108,map__22108__$1,msg,updates,reload_info){
return (function (e){
var seq__22310_22538 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22312_22539 = null;
var count__22313_22540 = (0);
var i__22314_22541 = (0);
while(true){
if((i__22314_22541 < count__22313_22540)){
var map__22318_22542 = chunk__22312_22539.cljs$core$IIndexed$_nth$arity$2(null,i__22314_22541);
var map__22318_22543__$1 = cljs.core.__destructure_map(map__22318_22542);
var task_22544 = map__22318_22543__$1;
var fn_str_22545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22318_22543__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22318_22543__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22547 = goog.getObjectByName(fn_str_22545,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22546)].join(''));

(fn_obj_22547.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22547.cljs$core$IFn$_invoke$arity$2(path,new_link_22537) : fn_obj_22547.call(null,path,new_link_22537));


var G__22548 = seq__22310_22538;
var G__22549 = chunk__22312_22539;
var G__22550 = count__22313_22540;
var G__22551 = (i__22314_22541 + (1));
seq__22310_22538 = G__22548;
chunk__22312_22539 = G__22549;
count__22313_22540 = G__22550;
i__22314_22541 = G__22551;
continue;
} else {
var temp__5804__auto___22552__$1 = cljs.core.seq(seq__22310_22538);
if(temp__5804__auto___22552__$1){
var seq__22310_22553__$1 = temp__5804__auto___22552__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22310_22553__$1)){
var c__5568__auto___22554 = cljs.core.chunk_first(seq__22310_22553__$1);
var G__22555 = cljs.core.chunk_rest(seq__22310_22553__$1);
var G__22556 = c__5568__auto___22554;
var G__22557 = cljs.core.count(c__5568__auto___22554);
var G__22558 = (0);
seq__22310_22538 = G__22555;
chunk__22312_22539 = G__22556;
count__22313_22540 = G__22557;
i__22314_22541 = G__22558;
continue;
} else {
var map__22319_22559 = cljs.core.first(seq__22310_22553__$1);
var map__22319_22560__$1 = cljs.core.__destructure_map(map__22319_22559);
var task_22561 = map__22319_22560__$1;
var fn_str_22562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22319_22560__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22319_22560__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22564 = goog.getObjectByName(fn_str_22562,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22563)].join(''));

(fn_obj_22564.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22564.cljs$core$IFn$_invoke$arity$2(path,new_link_22537) : fn_obj_22564.call(null,path,new_link_22537));


var G__22565 = cljs.core.next(seq__22310_22553__$1);
var G__22566 = null;
var G__22567 = (0);
var G__22568 = (0);
seq__22310_22538 = G__22565;
chunk__22312_22539 = G__22566;
count__22313_22540 = G__22567;
i__22314_22541 = G__22568;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22535);
});})(seq__22277_22531,chunk__22281_22532,count__22282_22533,i__22283_22534,seq__22109,chunk__22111,count__22112,i__22113,new_link_22537,path_match_22536,node_22535,path,seq__22109__$1,temp__5804__auto__,map__22108,map__22108__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22536], 0));

goog.dom.insertSiblingAfter(new_link_22537,node_22535);


var G__22569 = seq__22277_22531;
var G__22570 = chunk__22281_22532;
var G__22571 = count__22282_22533;
var G__22572 = (i__22283_22534 + (1));
seq__22277_22531 = G__22569;
chunk__22281_22532 = G__22570;
count__22282_22533 = G__22571;
i__22283_22534 = G__22572;
continue;
} else {
var G__22573 = seq__22277_22531;
var G__22574 = chunk__22281_22532;
var G__22575 = count__22282_22533;
var G__22576 = (i__22283_22534 + (1));
seq__22277_22531 = G__22573;
chunk__22281_22532 = G__22574;
count__22282_22533 = G__22575;
i__22283_22534 = G__22576;
continue;
}
} else {
var G__22577 = seq__22277_22531;
var G__22578 = chunk__22281_22532;
var G__22579 = count__22282_22533;
var G__22580 = (i__22283_22534 + (1));
seq__22277_22531 = G__22577;
chunk__22281_22532 = G__22578;
count__22282_22533 = G__22579;
i__22283_22534 = G__22580;
continue;
}
} else {
var temp__5804__auto___22581__$1 = cljs.core.seq(seq__22277_22531);
if(temp__5804__auto___22581__$1){
var seq__22277_22582__$1 = temp__5804__auto___22581__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22277_22582__$1)){
var c__5568__auto___22583 = cljs.core.chunk_first(seq__22277_22582__$1);
var G__22584 = cljs.core.chunk_rest(seq__22277_22582__$1);
var G__22585 = c__5568__auto___22583;
var G__22586 = cljs.core.count(c__5568__auto___22583);
var G__22587 = (0);
seq__22277_22531 = G__22584;
chunk__22281_22532 = G__22585;
count__22282_22533 = G__22586;
i__22283_22534 = G__22587;
continue;
} else {
var node_22588 = cljs.core.first(seq__22277_22582__$1);
if(cljs.core.not(node_22588.shadow$old)){
var path_match_22589 = shadow.cljs.devtools.client.browser.match_paths(node_22588.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22589)){
var new_link_22590 = (function (){var G__22320 = node_22588.cloneNode(true);
G__22320.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22589),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22320;
})();
(node_22588.shadow$old = true);

(new_link_22590.onload = ((function (seq__22277_22531,chunk__22281_22532,count__22282_22533,i__22283_22534,seq__22109,chunk__22111,count__22112,i__22113,new_link_22590,path_match_22589,node_22588,seq__22277_22582__$1,temp__5804__auto___22581__$1,path,seq__22109__$1,temp__5804__auto__,map__22108,map__22108__$1,msg,updates,reload_info){
return (function (e){
var seq__22321_22591 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22323_22592 = null;
var count__22324_22593 = (0);
var i__22325_22594 = (0);
while(true){
if((i__22325_22594 < count__22324_22593)){
var map__22329_22595 = chunk__22323_22592.cljs$core$IIndexed$_nth$arity$2(null,i__22325_22594);
var map__22329_22596__$1 = cljs.core.__destructure_map(map__22329_22595);
var task_22597 = map__22329_22596__$1;
var fn_str_22598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22329_22596__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22329_22596__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22600 = goog.getObjectByName(fn_str_22598,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22599)].join(''));

(fn_obj_22600.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22600.cljs$core$IFn$_invoke$arity$2(path,new_link_22590) : fn_obj_22600.call(null,path,new_link_22590));


var G__22601 = seq__22321_22591;
var G__22602 = chunk__22323_22592;
var G__22603 = count__22324_22593;
var G__22604 = (i__22325_22594 + (1));
seq__22321_22591 = G__22601;
chunk__22323_22592 = G__22602;
count__22324_22593 = G__22603;
i__22325_22594 = G__22604;
continue;
} else {
var temp__5804__auto___22605__$2 = cljs.core.seq(seq__22321_22591);
if(temp__5804__auto___22605__$2){
var seq__22321_22606__$1 = temp__5804__auto___22605__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22321_22606__$1)){
var c__5568__auto___22607 = cljs.core.chunk_first(seq__22321_22606__$1);
var G__22608 = cljs.core.chunk_rest(seq__22321_22606__$1);
var G__22609 = c__5568__auto___22607;
var G__22610 = cljs.core.count(c__5568__auto___22607);
var G__22611 = (0);
seq__22321_22591 = G__22608;
chunk__22323_22592 = G__22609;
count__22324_22593 = G__22610;
i__22325_22594 = G__22611;
continue;
} else {
var map__22330_22612 = cljs.core.first(seq__22321_22606__$1);
var map__22330_22613__$1 = cljs.core.__destructure_map(map__22330_22612);
var task_22614 = map__22330_22613__$1;
var fn_str_22615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22330_22613__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22330_22613__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22617 = goog.getObjectByName(fn_str_22615,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22616)].join(''));

(fn_obj_22617.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22617.cljs$core$IFn$_invoke$arity$2(path,new_link_22590) : fn_obj_22617.call(null,path,new_link_22590));


var G__22618 = cljs.core.next(seq__22321_22606__$1);
var G__22619 = null;
var G__22620 = (0);
var G__22621 = (0);
seq__22321_22591 = G__22618;
chunk__22323_22592 = G__22619;
count__22324_22593 = G__22620;
i__22325_22594 = G__22621;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22588);
});})(seq__22277_22531,chunk__22281_22532,count__22282_22533,i__22283_22534,seq__22109,chunk__22111,count__22112,i__22113,new_link_22590,path_match_22589,node_22588,seq__22277_22582__$1,temp__5804__auto___22581__$1,path,seq__22109__$1,temp__5804__auto__,map__22108,map__22108__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22589], 0));

goog.dom.insertSiblingAfter(new_link_22590,node_22588);


var G__22622 = cljs.core.next(seq__22277_22582__$1);
var G__22623 = null;
var G__22624 = (0);
var G__22625 = (0);
seq__22277_22531 = G__22622;
chunk__22281_22532 = G__22623;
count__22282_22533 = G__22624;
i__22283_22534 = G__22625;
continue;
} else {
var G__22626 = cljs.core.next(seq__22277_22582__$1);
var G__22627 = null;
var G__22628 = (0);
var G__22629 = (0);
seq__22277_22531 = G__22626;
chunk__22281_22532 = G__22627;
count__22282_22533 = G__22628;
i__22283_22534 = G__22629;
continue;
}
} else {
var G__22630 = cljs.core.next(seq__22277_22582__$1);
var G__22631 = null;
var G__22632 = (0);
var G__22633 = (0);
seq__22277_22531 = G__22630;
chunk__22281_22532 = G__22631;
count__22282_22533 = G__22632;
i__22283_22534 = G__22633;
continue;
}
}
} else {
}
}
break;
}


var G__22634 = cljs.core.next(seq__22109__$1);
var G__22635 = null;
var G__22636 = (0);
var G__22637 = (0);
seq__22109 = G__22634;
chunk__22111 = G__22635;
count__22112 = G__22636;
i__22113 = G__22637;
continue;
} else {
var G__22638 = cljs.core.next(seq__22109__$1);
var G__22639 = null;
var G__22640 = (0);
var G__22641 = (0);
seq__22109 = G__22638;
chunk__22111 = G__22639;
count__22112 = G__22640;
i__22113 = G__22641;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__22331){
var map__22332 = p__22331;
var map__22332__$1 = cljs.core.__destructure_map(map__22332);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22332__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22333,done,error){
var map__22334 = p__22333;
var map__22334__$1 = cljs.core.__destructure_map(map__22334);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22334__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22335,done,error){
var map__22336 = p__22335;
var map__22336__$1 = cljs.core.__destructure_map(map__22336);
var msg = map__22336__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22336__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22336__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22336__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22337){
var map__22338 = p__22337;
var map__22338__$1 = cljs.core.__destructure_map(map__22338);
var src = map__22338__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22338__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22339 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22339) : done.call(null,G__22339));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22340){
var map__22341 = p__22340;
var map__22341__$1 = cljs.core.__destructure_map(map__22341);
var msg__$1 = map__22341__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22341__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22342){var ex = e22342;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22343){
var map__22344 = p__22343;
var map__22344__$1 = cljs.core.__destructure_map(map__22344);
var env = map__22344__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22344__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22345){
var map__22346 = p__22345;
var map__22346__$1 = cljs.core.__destructure_map(map__22346);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22346__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22346__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22347){
var map__22348 = p__22347;
var map__22348__$1 = cljs.core.__destructure_map(map__22348);
var svc = map__22348__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22348__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
