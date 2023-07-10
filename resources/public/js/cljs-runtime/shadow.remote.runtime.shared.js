goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17326){
var map__17327 = p__17326;
var map__17327__$1 = cljs.core.__destructure_map(map__17327);
var runtime = map__17327__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17327__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_17474 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_17474)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__17328 = runtime;
var G__17329 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_17474);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__17328,G__17329) : shadow.remote.runtime.shared.process.call(null,G__17328,G__17329));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17330,res){
var map__17331 = p__17330;
var map__17331__$1 = cljs.core.__destructure_map(map__17331);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17331__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17331__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17332 = res;
var G__17332__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17332,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17332);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17332__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17332__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17337 = arguments.length;
switch (G__17337) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17342,msg,handlers,timeout_after_ms){
var map__17343 = p__17342;
var map__17343__$1 = cljs.core.__destructure_map(map__17343);
var runtime = map__17343__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17343__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17480 = arguments.length;
var i__5770__auto___17481 = (0);
while(true){
if((i__5770__auto___17481 < len__5769__auto___17480)){
args__5775__auto__.push((arguments[i__5770__auto___17481]));

var G__17482 = (i__5770__auto___17481 + (1));
i__5770__auto___17481 = G__17482;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17349,ev,args){
var map__17350 = p__17349;
var map__17350__$1 = cljs.core.__destructure_map(map__17350);
var runtime = map__17350__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17350__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17351 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17354 = null;
var count__17355 = (0);
var i__17356 = (0);
while(true){
if((i__17356 < count__17355)){
var ext = chunk__17354.cljs$core$IIndexed$_nth$arity$2(null,i__17356);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17484 = seq__17351;
var G__17485 = chunk__17354;
var G__17486 = count__17355;
var G__17487 = (i__17356 + (1));
seq__17351 = G__17484;
chunk__17354 = G__17485;
count__17355 = G__17486;
i__17356 = G__17487;
continue;
} else {
var G__17489 = seq__17351;
var G__17490 = chunk__17354;
var G__17491 = count__17355;
var G__17492 = (i__17356 + (1));
seq__17351 = G__17489;
chunk__17354 = G__17490;
count__17355 = G__17491;
i__17356 = G__17492;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17351);
if(temp__5804__auto__){
var seq__17351__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17351__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17351__$1);
var G__17497 = cljs.core.chunk_rest(seq__17351__$1);
var G__17498 = c__5568__auto__;
var G__17499 = cljs.core.count(c__5568__auto__);
var G__17500 = (0);
seq__17351 = G__17497;
chunk__17354 = G__17498;
count__17355 = G__17499;
i__17356 = G__17500;
continue;
} else {
var ext = cljs.core.first(seq__17351__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17501 = cljs.core.next(seq__17351__$1);
var G__17502 = null;
var G__17503 = (0);
var G__17504 = (0);
seq__17351 = G__17501;
chunk__17354 = G__17502;
count__17355 = G__17503;
i__17356 = G__17504;
continue;
} else {
var G__17505 = cljs.core.next(seq__17351__$1);
var G__17506 = null;
var G__17507 = (0);
var G__17508 = (0);
seq__17351 = G__17505;
chunk__17354 = G__17506;
count__17355 = G__17507;
i__17356 = G__17508;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17344){
var G__17345 = cljs.core.first(seq17344);
var seq17344__$1 = cljs.core.next(seq17344);
var G__17347 = cljs.core.first(seq17344__$1);
var seq17344__$2 = cljs.core.next(seq17344__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17345,G__17347,seq17344__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17369,p__17370){
var map__17371 = p__17369;
var map__17371__$1 = cljs.core.__destructure_map(map__17371);
var runtime = map__17371__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17371__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17372 = p__17370;
var map__17372__$1 = cljs.core.__destructure_map(map__17372);
var msg = map__17372__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17372__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17373 = cljs.core.deref(state_ref);
var map__17373__$1 = cljs.core.__destructure_map(map__17373);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17373__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17373__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17380,msg){
var map__17381 = p__17380;
var map__17381__$1 = cljs.core.__destructure_map(map__17381);
var runtime = map__17381__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17381__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17382,key,p__17383){
var map__17384 = p__17382;
var map__17384__$1 = cljs.core.__destructure_map(map__17384);
var state = map__17384__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17384__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17385 = p__17383;
var map__17385__$1 = cljs.core.__destructure_map(map__17385);
var spec = map__17385__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17385__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17386,key,spec){
var map__17387 = p__17386;
var map__17387__$1 = cljs.core.__destructure_map(map__17387);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17387__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17389_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17389_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17390_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17390_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17391_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17391_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17392_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17392_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17393_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17393_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17416,key){
var map__17417 = p__17416;
var map__17417__$1 = cljs.core.__destructure_map(map__17417);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17417__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17420,msg){
var map__17421 = p__17420;
var map__17421__$1 = cljs.core.__destructure_map(map__17421);
var runtime = map__17421__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17421__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17426,p__17427){
var map__17428 = p__17426;
var map__17428__$1 = cljs.core.__destructure_map(map__17428);
var runtime = map__17428__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17428__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17429 = p__17427;
var map__17429__$1 = cljs.core.__destructure_map(map__17429);
var msg = map__17429__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17429__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17429__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17435 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17437 = null;
var count__17438 = (0);
var i__17439 = (0);
while(true){
if((i__17439 < count__17438)){
var map__17454 = chunk__17437.cljs$core$IIndexed$_nth$arity$2(null,i__17439);
var map__17454__$1 = cljs.core.__destructure_map(map__17454);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17454__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17554 = seq__17435;
var G__17555 = chunk__17437;
var G__17556 = count__17438;
var G__17557 = (i__17439 + (1));
seq__17435 = G__17554;
chunk__17437 = G__17555;
count__17438 = G__17556;
i__17439 = G__17557;
continue;
} else {
var G__17559 = seq__17435;
var G__17560 = chunk__17437;
var G__17561 = count__17438;
var G__17562 = (i__17439 + (1));
seq__17435 = G__17559;
chunk__17437 = G__17560;
count__17438 = G__17561;
i__17439 = G__17562;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17435);
if(temp__5804__auto__){
var seq__17435__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17435__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17435__$1);
var G__17563 = cljs.core.chunk_rest(seq__17435__$1);
var G__17564 = c__5568__auto__;
var G__17565 = cljs.core.count(c__5568__auto__);
var G__17566 = (0);
seq__17435 = G__17563;
chunk__17437 = G__17564;
count__17438 = G__17565;
i__17439 = G__17566;
continue;
} else {
var map__17457 = cljs.core.first(seq__17435__$1);
var map__17457__$1 = cljs.core.__destructure_map(map__17457);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17457__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17579 = cljs.core.next(seq__17435__$1);
var G__17580 = null;
var G__17581 = (0);
var G__17582 = (0);
seq__17435 = G__17579;
chunk__17437 = G__17580;
count__17438 = G__17581;
i__17439 = G__17582;
continue;
} else {
var G__17585 = cljs.core.next(seq__17435__$1);
var G__17586 = null;
var G__17587 = (0);
var G__17588 = (0);
seq__17435 = G__17585;
chunk__17437 = G__17586;
count__17438 = G__17587;
i__17439 = G__17588;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
