goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17297 = (function (f,blockable,meta17298){
this.f = f;
this.blockable = blockable;
this.meta17298 = meta17298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17299,meta17298__$1){
var self__ = this;
var _17299__$1 = this;
return (new cljs.core.async.t_cljs$core$async17297(self__.f,self__.blockable,meta17298__$1));
}));

(cljs.core.async.t_cljs$core$async17297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17299){
var self__ = this;
var _17299__$1 = this;
return self__.meta17298;
}));

(cljs.core.async.t_cljs$core$async17297.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17297.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17298","meta17298",-478562971,null)], null);
}));

(cljs.core.async.t_cljs$core$async17297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17297");

(cljs.core.async.t_cljs$core$async17297.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17297.
 */
cljs.core.async.__GT_t_cljs$core$async17297 = (function cljs$core$async$__GT_t_cljs$core$async17297(f,blockable,meta17298){
return (new cljs.core.async.t_cljs$core$async17297(f,blockable,meta17298));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17296 = arguments.length;
switch (G__17296) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async17297(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17302 = arguments.length;
switch (G__17302) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17308 = arguments.length;
switch (G__17308) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17310 = arguments.length;
switch (G__17310) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19507 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19507) : fn1.call(null,val_19507));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19507) : fn1.call(null,val_19507));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17315 = arguments.length;
switch (G__17315) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19509 = n;
var x_19510 = (0);
while(true){
if((x_19510 < n__5636__auto___19509)){
(a[x_19510] = x_19510);

var G__19511 = (x_19510 + (1));
x_19510 = G__19511;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17323 = (function (flag,meta17324){
this.flag = flag;
this.meta17324 = meta17324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17325,meta17324__$1){
var self__ = this;
var _17325__$1 = this;
return (new cljs.core.async.t_cljs$core$async17323(self__.flag,meta17324__$1));
}));

(cljs.core.async.t_cljs$core$async17323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17325){
var self__ = this;
var _17325__$1 = this;
return self__.meta17324;
}));

(cljs.core.async.t_cljs$core$async17323.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17323.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17324","meta17324",-868733504,null)], null);
}));

(cljs.core.async.t_cljs$core$async17323.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17323");

(cljs.core.async.t_cljs$core$async17323.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17323");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17323.
 */
cljs.core.async.__GT_t_cljs$core$async17323 = (function cljs$core$async$__GT_t_cljs$core$async17323(flag,meta17324){
return (new cljs.core.async.t_cljs$core$async17323(flag,meta17324));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17323(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17333 = (function (flag,cb,meta17334){
this.flag = flag;
this.cb = cb;
this.meta17334 = meta17334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17335,meta17334__$1){
var self__ = this;
var _17335__$1 = this;
return (new cljs.core.async.t_cljs$core$async17333(self__.flag,self__.cb,meta17334__$1));
}));

(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17335){
var self__ = this;
var _17335__$1 = this;
return self__.meta17334;
}));

(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17334","meta17334",-503596792,null)], null);
}));

(cljs.core.async.t_cljs$core$async17333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17333");

(cljs.core.async.t_cljs$core$async17333.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17333.
 */
cljs.core.async.__GT_t_cljs$core$async17333 = (function cljs$core$async$__GT_t_cljs$core$async17333(flag,cb,meta17334){
return (new cljs.core.async.t_cljs$core$async17333(flag,cb,meta17334));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17333(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17346_SHARP_){
var G__17359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17346_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17359) : fret.call(null,G__17359));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17348_SHARP_){
var G__17360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17348_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17360) : fret.call(null,G__17360));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19514 = (i + (1));
i = G__19514;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19515 = arguments.length;
var i__5770__auto___19516 = (0);
while(true){
if((i__5770__auto___19516 < len__5769__auto___19515)){
args__5775__auto__.push((arguments[i__5770__auto___19516]));

var G__19517 = (i__5770__auto___19516 + (1));
i__5770__auto___19516 = G__19517;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17367){
var map__17368 = p__17367;
var map__17368__$1 = cljs.core.__destructure_map(map__17368);
var opts = map__17368__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17365){
var G__17366 = cljs.core.first(seq17365);
var seq17365__$1 = cljs.core.next(seq17365);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17366,seq17365__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17375 = arguments.length;
switch (G__17375) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17238__auto___19522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_17418){
var state_val_17419 = (state_17418[(1)]);
if((state_val_17419 === (7))){
var inst_17412 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17424_19524 = state_17418__$1;
(statearr_17424_19524[(2)] = inst_17412);

(statearr_17424_19524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (1))){
var state_17418__$1 = state_17418;
var statearr_17430_19526 = state_17418__$1;
(statearr_17430_19526[(2)] = null);

(statearr_17430_19526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (4))){
var inst_17395 = (state_17418[(7)]);
var inst_17395__$1 = (state_17418[(2)]);
var inst_17396 = (inst_17395__$1 == null);
var state_17418__$1 = (function (){var statearr_17431 = state_17418;
(statearr_17431[(7)] = inst_17395__$1);

return statearr_17431;
})();
if(cljs.core.truth_(inst_17396)){
var statearr_17433_19528 = state_17418__$1;
(statearr_17433_19528[(1)] = (5));

} else {
var statearr_17434_19529 = state_17418__$1;
(statearr_17434_19529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (13))){
var state_17418__$1 = state_17418;
var statearr_17441_19532 = state_17418__$1;
(statearr_17441_19532[(2)] = null);

(statearr_17441_19532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (6))){
var inst_17395 = (state_17418[(7)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17418__$1,(11),to,inst_17395);
} else {
if((state_val_17419 === (3))){
var inst_17414 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17418__$1,inst_17414);
} else {
if((state_val_17419 === (12))){
var state_17418__$1 = state_17418;
var statearr_17450_19534 = state_17418__$1;
(statearr_17450_19534[(2)] = null);

(statearr_17450_19534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (2))){
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17418__$1,(4),from);
} else {
if((state_val_17419 === (11))){
var inst_17405 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
if(cljs.core.truth_(inst_17405)){
var statearr_17455_19535 = state_17418__$1;
(statearr_17455_19535[(1)] = (12));

} else {
var statearr_17456_19536 = state_17418__$1;
(statearr_17456_19536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (9))){
var state_17418__$1 = state_17418;
var statearr_17461_19537 = state_17418__$1;
(statearr_17461_19537[(2)] = null);

(statearr_17461_19537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (5))){
var state_17418__$1 = state_17418;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17462_19538 = state_17418__$1;
(statearr_17462_19538[(1)] = (8));

} else {
var statearr_17463_19540 = state_17418__$1;
(statearr_17463_19540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (14))){
var inst_17410 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17467_19543 = state_17418__$1;
(statearr_17467_19543[(2)] = inst_17410);

(statearr_17467_19543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (10))){
var inst_17402 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17468_19544 = state_17418__$1;
(statearr_17468_19544[(2)] = inst_17402);

(statearr_17468_19544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (8))){
var inst_17399 = cljs.core.async.close_BANG_(to);
var state_17418__$1 = state_17418;
var statearr_17469_19546 = state_17418__$1;
(statearr_17469_19546[(2)] = inst_17399);

(statearr_17469_19546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_17473 = [null,null,null,null,null,null,null,null];
(statearr_17473[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_17473[(1)] = (1));

return statearr_17473;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_17418){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17418);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17475){var ex__17103__auto__ = e17475;
var statearr_17476_19547 = state_17418;
(statearr_17476_19547[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17418[(4)]))){
var statearr_17477_19548 = state_17418;
(statearr_17477_19548[(1)] = cljs.core.first((state_17418[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19549 = state_17418;
state_17418 = G__19549;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_17418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_17418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_17479 = f__17239__auto__();
(statearr_17479[(6)] = c__17238__auto___19522);

return statearr_17479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17493){
var vec__17494 = p__17493;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17494,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17494,(1),null);
var job = vec__17494;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17238__auto___19552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_17513){
var state_val_17514 = (state_17513[(1)]);
if((state_val_17514 === (1))){
var state_17513__$1 = state_17513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17513__$1,(2),res,v);
} else {
if((state_val_17514 === (2))){
var inst_17510 = (state_17513[(2)]);
var inst_17511 = cljs.core.async.close_BANG_(res);
var state_17513__$1 = (function (){var statearr_17515 = state_17513;
(statearr_17515[(7)] = inst_17510);

return statearr_17515;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17513__$1,inst_17511);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17519 = [null,null,null,null,null,null,null,null];
(statearr_17519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17519[(1)] = (1));

return statearr_17519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17513){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17513);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17520){var ex__17103__auto__ = e17520;
var statearr_17521_19553 = state_17513;
(statearr_17521_19553[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17513[(4)]))){
var statearr_17522_19554 = state_17513;
(statearr_17522_19554[(1)] = cljs.core.first((state_17513[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19555 = state_17513;
state_17513 = G__19555;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17513){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_17523 = f__17239__auto__();
(statearr_17523[(6)] = c__17238__auto___19552);

return statearr_17523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17524){
var vec__17525 = p__17524;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17525,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17525,(1),null);
var job = vec__17525;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19558 = n;
var __19559 = (0);
while(true){
if((__19559 < n__5636__auto___19558)){
var G__17528_19560 = type;
var G__17528_19561__$1 = (((G__17528_19560 instanceof cljs.core.Keyword))?G__17528_19560.fqn:null);
switch (G__17528_19561__$1) {
case "compute":
var c__17238__auto___19563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19559,c__17238__auto___19563,G__17528_19560,G__17528_19561__$1,n__5636__auto___19558,jobs,results,process__$1,async){
return (function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = ((function (__19559,c__17238__auto___19563,G__17528_19560,G__17528_19561__$1,n__5636__auto___19558,jobs,results,process__$1,async){
return (function (state_17541){
var state_val_17542 = (state_17541[(1)]);
if((state_val_17542 === (1))){
var state_17541__$1 = state_17541;
var statearr_17543_19564 = state_17541__$1;
(statearr_17543_19564[(2)] = null);

(statearr_17543_19564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (2))){
var state_17541__$1 = state_17541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17541__$1,(4),jobs);
} else {
if((state_val_17542 === (3))){
var inst_17539 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17541__$1,inst_17539);
} else {
if((state_val_17542 === (4))){
var inst_17531 = (state_17541[(2)]);
var inst_17532 = process__$1(inst_17531);
var state_17541__$1 = state_17541;
if(cljs.core.truth_(inst_17532)){
var statearr_17544_19565 = state_17541__$1;
(statearr_17544_19565[(1)] = (5));

} else {
var statearr_17545_19566 = state_17541__$1;
(statearr_17545_19566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (5))){
var state_17541__$1 = state_17541;
var statearr_17546_19567 = state_17541__$1;
(statearr_17546_19567[(2)] = null);

(statearr_17546_19567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (6))){
var state_17541__$1 = state_17541;
var statearr_17547_19568 = state_17541__$1;
(statearr_17547_19568[(2)] = null);

(statearr_17547_19568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (7))){
var inst_17537 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
var statearr_17548_19572 = state_17541__$1;
(statearr_17548_19572[(2)] = inst_17537);

(statearr_17548_19572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19559,c__17238__auto___19563,G__17528_19560,G__17528_19561__$1,n__5636__auto___19558,jobs,results,process__$1,async))
;
return ((function (__19559,switch__17099__auto__,c__17238__auto___19563,G__17528_19560,G__17528_19561__$1,n__5636__auto___19558,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17549 = [null,null,null,null,null,null,null];
(statearr_17549[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17549[(1)] = (1));

return statearr_17549;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17541){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17541);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17550){var ex__17103__auto__ = e17550;
var statearr_17551_19573 = state_17541;
(statearr_17551_19573[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17541[(4)]))){
var statearr_17553_19574 = state_17541;
(statearr_17553_19574[(1)] = cljs.core.first((state_17541[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19575 = state_17541;
state_17541 = G__19575;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
;})(__19559,switch__17099__auto__,c__17238__auto___19563,G__17528_19560,G__17528_19561__$1,n__5636__auto___19558,jobs,results,process__$1,async))
})();
var state__17240__auto__ = (function (){var statearr_17558 = f__17239__auto__();
(statearr_17558[(6)] = c__17238__auto___19563);

return statearr_17558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
});})(__19559,c__17238__auto___19563,G__17528_19560,G__17528_19561__$1,n__5636__auto___19558,jobs,results,process__$1,async))
);


break;
case "async":
var c__17238__auto___19577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19559,c__17238__auto___19577,G__17528_19560,G__17528_19561__$1,n__5636__auto___19558,jobs,results,process__$1,async){
return (function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = ((function (__19559,c__17238__auto___19577,G__17528_19560,G__17528_19561__$1,n__5636__auto___19558,jobs,results,process__$1,async){
return (function (state_17583){
var state_val_17584 = (state_17583[(1)]);
if((state_val_17584 === (1))){
var state_17583__$1 = state_17583;
var statearr_17589_19579 = state_17583__$1;
(statearr_17589_19579[(2)] = null);

(statearr_17589_19579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17584 === (2))){
var state_17583__$1 = state_17583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17583__$1,(4),jobs);
} else {
if((state_val_17584 === (3))){
var inst_17577 = (state_17583[(2)]);
var state_17583__$1 = state_17583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17583__$1,inst_17577);
} else {
if((state_val_17584 === (4))){
var inst_17569 = (state_17583[(2)]);
var inst_17570 = async(inst_17569);
var state_17583__$1 = state_17583;
if(cljs.core.truth_(inst_17570)){
var statearr_17590_19580 = state_17583__$1;
(statearr_17590_19580[(1)] = (5));

} else {
var statearr_17591_19581 = state_17583__$1;
(statearr_17591_19581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17584 === (5))){
var state_17583__$1 = state_17583;
var statearr_17592_19582 = state_17583__$1;
(statearr_17592_19582[(2)] = null);

(statearr_17592_19582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17584 === (6))){
var state_17583__$1 = state_17583;
var statearr_17593_19583 = state_17583__$1;
(statearr_17593_19583[(2)] = null);

(statearr_17593_19583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17584 === (7))){
var inst_17575 = (state_17583[(2)]);
var state_17583__$1 = state_17583;
var statearr_17594_19587 = state_17583__$1;
(statearr_17594_19587[(2)] = inst_17575);

(statearr_17594_19587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19559,c__17238__auto___19577,G__17528_19560,G__17528_19561__$1,n__5636__auto___19558,jobs,results,process__$1,async))
;
return ((function (__19559,switch__17099__auto__,c__17238__auto___19577,G__17528_19560,G__17528_19561__$1,n__5636__auto___19558,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17595 = [null,null,null,null,null,null,null];
(statearr_17595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17595[(1)] = (1));

return statearr_17595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17583){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17583);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17596){var ex__17103__auto__ = e17596;
var statearr_17597_19595 = state_17583;
(statearr_17597_19595[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17583[(4)]))){
var statearr_17598_19599 = state_17583;
(statearr_17598_19599[(1)] = cljs.core.first((state_17583[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19600 = state_17583;
state_17583 = G__19600;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17583){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
;})(__19559,switch__17099__auto__,c__17238__auto___19577,G__17528_19560,G__17528_19561__$1,n__5636__auto___19558,jobs,results,process__$1,async))
})();
var state__17240__auto__ = (function (){var statearr_17599 = f__17239__auto__();
(statearr_17599[(6)] = c__17238__auto___19577);

return statearr_17599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
});})(__19559,c__17238__auto___19577,G__17528_19560,G__17528_19561__$1,n__5636__auto___19558,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17528_19561__$1)].join('')));

}

var G__19601 = (__19559 + (1));
__19559 = G__19601;
continue;
} else {
}
break;
}

var c__17238__auto___19602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_17622){
var state_val_17623 = (state_17622[(1)]);
if((state_val_17623 === (7))){
var inst_17618 = (state_17622[(2)]);
var state_17622__$1 = state_17622;
var statearr_17624_19604 = state_17622__$1;
(statearr_17624_19604[(2)] = inst_17618);

(statearr_17624_19604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (1))){
var state_17622__$1 = state_17622;
var statearr_17625_19606 = state_17622__$1;
(statearr_17625_19606[(2)] = null);

(statearr_17625_19606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (4))){
var inst_17602 = (state_17622[(7)]);
var inst_17602__$1 = (state_17622[(2)]);
var inst_17603 = (inst_17602__$1 == null);
var state_17622__$1 = (function (){var statearr_17626 = state_17622;
(statearr_17626[(7)] = inst_17602__$1);

return statearr_17626;
})();
if(cljs.core.truth_(inst_17603)){
var statearr_17627_19607 = state_17622__$1;
(statearr_17627_19607[(1)] = (5));

} else {
var statearr_17628_19611 = state_17622__$1;
(statearr_17628_19611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (6))){
var inst_17602 = (state_17622[(7)]);
var inst_17607 = (state_17622[(8)]);
var inst_17607__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17609 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17610 = [inst_17602,inst_17607__$1];
var inst_17611 = (new cljs.core.PersistentVector(null,2,(5),inst_17609,inst_17610,null));
var state_17622__$1 = (function (){var statearr_17629 = state_17622;
(statearr_17629[(8)] = inst_17607__$1);

return statearr_17629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17622__$1,(8),jobs,inst_17611);
} else {
if((state_val_17623 === (3))){
var inst_17620 = (state_17622[(2)]);
var state_17622__$1 = state_17622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17622__$1,inst_17620);
} else {
if((state_val_17623 === (2))){
var state_17622__$1 = state_17622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17622__$1,(4),from);
} else {
if((state_val_17623 === (9))){
var inst_17615 = (state_17622[(2)]);
var state_17622__$1 = (function (){var statearr_17630 = state_17622;
(statearr_17630[(9)] = inst_17615);

return statearr_17630;
})();
var statearr_17635_19619 = state_17622__$1;
(statearr_17635_19619[(2)] = null);

(statearr_17635_19619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (5))){
var inst_17605 = cljs.core.async.close_BANG_(jobs);
var state_17622__$1 = state_17622;
var statearr_17643_19620 = state_17622__$1;
(statearr_17643_19620[(2)] = inst_17605);

(statearr_17643_19620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (8))){
var inst_17607 = (state_17622[(8)]);
var inst_17613 = (state_17622[(2)]);
var state_17622__$1 = (function (){var statearr_17652 = state_17622;
(statearr_17652[(10)] = inst_17613);

return statearr_17652;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17622__$1,(9),results,inst_17607);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17657[(1)] = (1));

return statearr_17657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17622){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17622);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17658){var ex__17103__auto__ = e17658;
var statearr_17659_19621 = state_17622;
(statearr_17659_19621[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17622[(4)]))){
var statearr_17660_19622 = state_17622;
(statearr_17660_19622[(1)] = cljs.core.first((state_17622[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19626 = state_17622;
state_17622 = G__19626;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_17661 = f__17239__auto__();
(statearr_17661[(6)] = c__17238__auto___19602);

return statearr_17661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


var c__17238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_17703){
var state_val_17704 = (state_17703[(1)]);
if((state_val_17704 === (7))){
var inst_17699 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
var statearr_17721_19635 = state_17703__$1;
(statearr_17721_19635[(2)] = inst_17699);

(statearr_17721_19635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (20))){
var state_17703__$1 = state_17703;
var statearr_17727_19636 = state_17703__$1;
(statearr_17727_19636[(2)] = null);

(statearr_17727_19636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (1))){
var state_17703__$1 = state_17703;
var statearr_17728_19640 = state_17703__$1;
(statearr_17728_19640[(2)] = null);

(statearr_17728_19640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (4))){
var inst_17665 = (state_17703[(7)]);
var inst_17665__$1 = (state_17703[(2)]);
var inst_17667 = (inst_17665__$1 == null);
var state_17703__$1 = (function (){var statearr_17733 = state_17703;
(statearr_17733[(7)] = inst_17665__$1);

return statearr_17733;
})();
if(cljs.core.truth_(inst_17667)){
var statearr_17739_19645 = state_17703__$1;
(statearr_17739_19645[(1)] = (5));

} else {
var statearr_17742_19646 = state_17703__$1;
(statearr_17742_19646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (15))){
var inst_17681 = (state_17703[(8)]);
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17703__$1,(18),to,inst_17681);
} else {
if((state_val_17704 === (21))){
var inst_17694 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
var statearr_17753_19647 = state_17703__$1;
(statearr_17753_19647[(2)] = inst_17694);

(statearr_17753_19647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (13))){
var inst_17696 = (state_17703[(2)]);
var state_17703__$1 = (function (){var statearr_17758 = state_17703;
(statearr_17758[(9)] = inst_17696);

return statearr_17758;
})();
var statearr_17760_19648 = state_17703__$1;
(statearr_17760_19648[(2)] = null);

(statearr_17760_19648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (6))){
var inst_17665 = (state_17703[(7)]);
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17703__$1,(11),inst_17665);
} else {
if((state_val_17704 === (17))){
var inst_17689 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
if(cljs.core.truth_(inst_17689)){
var statearr_17777_19655 = state_17703__$1;
(statearr_17777_19655[(1)] = (19));

} else {
var statearr_17778_19656 = state_17703__$1;
(statearr_17778_19656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (3))){
var inst_17701 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17703__$1,inst_17701);
} else {
if((state_val_17704 === (12))){
var inst_17678 = (state_17703[(10)]);
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17703__$1,(14),inst_17678);
} else {
if((state_val_17704 === (2))){
var state_17703__$1 = state_17703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17703__$1,(4),results);
} else {
if((state_val_17704 === (19))){
var state_17703__$1 = state_17703;
var statearr_17779_19657 = state_17703__$1;
(statearr_17779_19657[(2)] = null);

(statearr_17779_19657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (11))){
var inst_17678 = (state_17703[(2)]);
var state_17703__$1 = (function (){var statearr_17780 = state_17703;
(statearr_17780[(10)] = inst_17678);

return statearr_17780;
})();
var statearr_17781_19658 = state_17703__$1;
(statearr_17781_19658[(2)] = null);

(statearr_17781_19658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (9))){
var state_17703__$1 = state_17703;
var statearr_17783_19659 = state_17703__$1;
(statearr_17783_19659[(2)] = null);

(statearr_17783_19659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (5))){
var state_17703__$1 = state_17703;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17784_19660 = state_17703__$1;
(statearr_17784_19660[(1)] = (8));

} else {
var statearr_17785_19661 = state_17703__$1;
(statearr_17785_19661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (14))){
var inst_17681 = (state_17703[(8)]);
var inst_17683 = (state_17703[(11)]);
var inst_17681__$1 = (state_17703[(2)]);
var inst_17682 = (inst_17681__$1 == null);
var inst_17683__$1 = cljs.core.not(inst_17682);
var state_17703__$1 = (function (){var statearr_17786 = state_17703;
(statearr_17786[(8)] = inst_17681__$1);

(statearr_17786[(11)] = inst_17683__$1);

return statearr_17786;
})();
if(inst_17683__$1){
var statearr_17787_19662 = state_17703__$1;
(statearr_17787_19662[(1)] = (15));

} else {
var statearr_17788_19663 = state_17703__$1;
(statearr_17788_19663[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (16))){
var inst_17683 = (state_17703[(11)]);
var state_17703__$1 = state_17703;
var statearr_17789_19664 = state_17703__$1;
(statearr_17789_19664[(2)] = inst_17683);

(statearr_17789_19664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (10))){
var inst_17673 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
var statearr_17790_19665 = state_17703__$1;
(statearr_17790_19665[(2)] = inst_17673);

(statearr_17790_19665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (18))){
var inst_17686 = (state_17703[(2)]);
var state_17703__$1 = state_17703;
var statearr_17791_19666 = state_17703__$1;
(statearr_17791_19666[(2)] = inst_17686);

(statearr_17791_19666[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17704 === (8))){
var inst_17670 = cljs.core.async.close_BANG_(to);
var state_17703__$1 = state_17703;
var statearr_17792_19667 = state_17703__$1;
(statearr_17792_19667[(2)] = inst_17670);

(statearr_17792_19667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_17797 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17797[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__);

(statearr_17797[(1)] = (1));

return statearr_17797;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1 = (function (state_17703){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17703);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17802){var ex__17103__auto__ = e17802;
var statearr_17803_19668 = state_17703;
(statearr_17803_19668[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17703[(4)]))){
var statearr_17804_19669 = state_17703;
(statearr_17804_19669[(1)] = cljs.core.first((state_17703[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19670 = state_17703;
state_17703 = G__19670;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__ = function(state_17703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1.call(this,state_17703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_17809 = f__17239__auto__();
(statearr_17809[(6)] = c__17238__auto__);

return statearr_17809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));

return c__17238__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17812 = arguments.length;
switch (G__17812) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17814 = arguments.length;
switch (G__17814) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17817 = arguments.length;
switch (G__17817) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17238__auto___19676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_17844){
var state_val_17845 = (state_17844[(1)]);
if((state_val_17845 === (7))){
var inst_17840 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
var statearr_17846_19677 = state_17844__$1;
(statearr_17846_19677[(2)] = inst_17840);

(statearr_17846_19677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (1))){
var state_17844__$1 = state_17844;
var statearr_17847_19678 = state_17844__$1;
(statearr_17847_19678[(2)] = null);

(statearr_17847_19678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (4))){
var inst_17821 = (state_17844[(7)]);
var inst_17821__$1 = (state_17844[(2)]);
var inst_17822 = (inst_17821__$1 == null);
var state_17844__$1 = (function (){var statearr_17848 = state_17844;
(statearr_17848[(7)] = inst_17821__$1);

return statearr_17848;
})();
if(cljs.core.truth_(inst_17822)){
var statearr_17849_19679 = state_17844__$1;
(statearr_17849_19679[(1)] = (5));

} else {
var statearr_17850_19680 = state_17844__$1;
(statearr_17850_19680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (13))){
var state_17844__$1 = state_17844;
var statearr_17851_19681 = state_17844__$1;
(statearr_17851_19681[(2)] = null);

(statearr_17851_19681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (6))){
var inst_17821 = (state_17844[(7)]);
var inst_17827 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17821) : p.call(null,inst_17821));
var state_17844__$1 = state_17844;
if(cljs.core.truth_(inst_17827)){
var statearr_17852_19682 = state_17844__$1;
(statearr_17852_19682[(1)] = (9));

} else {
var statearr_17853_19683 = state_17844__$1;
(statearr_17853_19683[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (3))){
var inst_17842 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17844__$1,inst_17842);
} else {
if((state_val_17845 === (12))){
var state_17844__$1 = state_17844;
var statearr_17854_19688 = state_17844__$1;
(statearr_17854_19688[(2)] = null);

(statearr_17854_19688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (2))){
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17844__$1,(4),ch);
} else {
if((state_val_17845 === (11))){
var inst_17821 = (state_17844[(7)]);
var inst_17831 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17844__$1,(8),inst_17831,inst_17821);
} else {
if((state_val_17845 === (9))){
var state_17844__$1 = state_17844;
var statearr_17856_19692 = state_17844__$1;
(statearr_17856_19692[(2)] = tc);

(statearr_17856_19692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (5))){
var inst_17824 = cljs.core.async.close_BANG_(tc);
var inst_17825 = cljs.core.async.close_BANG_(fc);
var state_17844__$1 = (function (){var statearr_17858 = state_17844;
(statearr_17858[(8)] = inst_17824);

return statearr_17858;
})();
var statearr_17859_19693 = state_17844__$1;
(statearr_17859_19693[(2)] = inst_17825);

(statearr_17859_19693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (14))){
var inst_17838 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
var statearr_17860_19694 = state_17844__$1;
(statearr_17860_19694[(2)] = inst_17838);

(statearr_17860_19694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (10))){
var state_17844__$1 = state_17844;
var statearr_17862_19699 = state_17844__$1;
(statearr_17862_19699[(2)] = fc);

(statearr_17862_19699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (8))){
var inst_17833 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
if(cljs.core.truth_(inst_17833)){
var statearr_17863_19701 = state_17844__$1;
(statearr_17863_19701[(1)] = (12));

} else {
var statearr_17864_19702 = state_17844__$1;
(statearr_17864_19702[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_17866 = [null,null,null,null,null,null,null,null,null];
(statearr_17866[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_17866[(1)] = (1));

return statearr_17866;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_17844){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17844);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17867){var ex__17103__auto__ = e17867;
var statearr_17868_19706 = state_17844;
(statearr_17868_19706[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17844[(4)]))){
var statearr_17869_19707 = state_17844;
(statearr_17869_19707[(1)] = cljs.core.first((state_17844[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19708 = state_17844;
state_17844 = G__19708;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_17844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_17844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_17870 = f__17239__auto__();
(statearr_17870[(6)] = c__17238__auto___19676);

return statearr_17870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_17893){
var state_val_17894 = (state_17893[(1)]);
if((state_val_17894 === (7))){
var inst_17889 = (state_17893[(2)]);
var state_17893__$1 = state_17893;
var statearr_17896_19713 = state_17893__$1;
(statearr_17896_19713[(2)] = inst_17889);

(statearr_17896_19713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17894 === (1))){
var inst_17872 = init;
var inst_17873 = inst_17872;
var state_17893__$1 = (function (){var statearr_17897 = state_17893;
(statearr_17897[(7)] = inst_17873);

return statearr_17897;
})();
var statearr_17898_19724 = state_17893__$1;
(statearr_17898_19724[(2)] = null);

(statearr_17898_19724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17894 === (4))){
var inst_17876 = (state_17893[(8)]);
var inst_17876__$1 = (state_17893[(2)]);
var inst_17877 = (inst_17876__$1 == null);
var state_17893__$1 = (function (){var statearr_17899 = state_17893;
(statearr_17899[(8)] = inst_17876__$1);

return statearr_17899;
})();
if(cljs.core.truth_(inst_17877)){
var statearr_17900_19725 = state_17893__$1;
(statearr_17900_19725[(1)] = (5));

} else {
var statearr_17901_19726 = state_17893__$1;
(statearr_17901_19726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17894 === (6))){
var inst_17876 = (state_17893[(8)]);
var inst_17880 = (state_17893[(9)]);
var inst_17873 = (state_17893[(7)]);
var inst_17880__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17873,inst_17876) : f.call(null,inst_17873,inst_17876));
var inst_17881 = cljs.core.reduced_QMARK_(inst_17880__$1);
var state_17893__$1 = (function (){var statearr_17902 = state_17893;
(statearr_17902[(9)] = inst_17880__$1);

return statearr_17902;
})();
if(inst_17881){
var statearr_17903_19734 = state_17893__$1;
(statearr_17903_19734[(1)] = (8));

} else {
var statearr_17904_19735 = state_17893__$1;
(statearr_17904_19735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17894 === (3))){
var inst_17891 = (state_17893[(2)]);
var state_17893__$1 = state_17893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17893__$1,inst_17891);
} else {
if((state_val_17894 === (2))){
var state_17893__$1 = state_17893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17893__$1,(4),ch);
} else {
if((state_val_17894 === (9))){
var inst_17880 = (state_17893[(9)]);
var inst_17873 = inst_17880;
var state_17893__$1 = (function (){var statearr_17906 = state_17893;
(statearr_17906[(7)] = inst_17873);

return statearr_17906;
})();
var statearr_17907_19737 = state_17893__$1;
(statearr_17907_19737[(2)] = null);

(statearr_17907_19737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17894 === (5))){
var inst_17873 = (state_17893[(7)]);
var state_17893__$1 = state_17893;
var statearr_17908_19739 = state_17893__$1;
(statearr_17908_19739[(2)] = inst_17873);

(statearr_17908_19739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17894 === (10))){
var inst_17887 = (state_17893[(2)]);
var state_17893__$1 = state_17893;
var statearr_17909_19743 = state_17893__$1;
(statearr_17909_19743[(2)] = inst_17887);

(statearr_17909_19743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17894 === (8))){
var inst_17880 = (state_17893[(9)]);
var inst_17883 = cljs.core.deref(inst_17880);
var state_17893__$1 = state_17893;
var statearr_17910_19744 = state_17893__$1;
(statearr_17910_19744[(2)] = inst_17883);

(statearr_17910_19744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17100__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17100__auto____0 = (function (){
var statearr_17911 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17911[(0)] = cljs$core$async$reduce_$_state_machine__17100__auto__);

(statearr_17911[(1)] = (1));

return statearr_17911;
});
var cljs$core$async$reduce_$_state_machine__17100__auto____1 = (function (state_17893){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17893);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17913){var ex__17103__auto__ = e17913;
var statearr_17914_19748 = state_17893;
(statearr_17914_19748[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17893[(4)]))){
var statearr_17915_19749 = state_17893;
(statearr_17915_19749[(1)] = cljs.core.first((state_17893[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19750 = state_17893;
state_17893 = G__19750;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17100__auto__ = function(state_17893){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17100__auto____1.call(this,state_17893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17100__auto____0;
cljs$core$async$reduce_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17100__auto____1;
return cljs$core$async$reduce_$_state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_17916 = f__17239__auto__();
(statearr_17916[(6)] = c__17238__auto__);

return statearr_17916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));

return c__17238__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_17923){
var state_val_17924 = (state_17923[(1)]);
if((state_val_17924 === (1))){
var inst_17918 = cljs.core.async.reduce(f__$1,init,ch);
var state_17923__$1 = state_17923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17923__$1,(2),inst_17918);
} else {
if((state_val_17924 === (2))){
var inst_17920 = (state_17923[(2)]);
var inst_17921 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17920) : f__$1.call(null,inst_17920));
var state_17923__$1 = state_17923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17923__$1,inst_17921);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17100__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17100__auto____0 = (function (){
var statearr_17925 = [null,null,null,null,null,null,null];
(statearr_17925[(0)] = cljs$core$async$transduce_$_state_machine__17100__auto__);

(statearr_17925[(1)] = (1));

return statearr_17925;
});
var cljs$core$async$transduce_$_state_machine__17100__auto____1 = (function (state_17923){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17923);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17927){var ex__17103__auto__ = e17927;
var statearr_17928_19754 = state_17923;
(statearr_17928_19754[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17923[(4)]))){
var statearr_17929_19755 = state_17923;
(statearr_17929_19755[(1)] = cljs.core.first((state_17923[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19756 = state_17923;
state_17923 = G__19756;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17100__auto__ = function(state_17923){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17100__auto____1.call(this,state_17923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17100__auto____0;
cljs$core$async$transduce_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17100__auto____1;
return cljs$core$async$transduce_$_state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_17930 = f__17239__auto__();
(statearr_17930[(6)] = c__17238__auto__);

return statearr_17930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));

return c__17238__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17932 = arguments.length;
switch (G__17932) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_17958){
var state_val_17959 = (state_17958[(1)]);
if((state_val_17959 === (7))){
var inst_17940 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
var statearr_17961_19759 = state_17958__$1;
(statearr_17961_19759[(2)] = inst_17940);

(statearr_17961_19759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (1))){
var inst_17934 = cljs.core.seq(coll);
var inst_17935 = inst_17934;
var state_17958__$1 = (function (){var statearr_17962 = state_17958;
(statearr_17962[(7)] = inst_17935);

return statearr_17962;
})();
var statearr_17963_19760 = state_17958__$1;
(statearr_17963_19760[(2)] = null);

(statearr_17963_19760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (4))){
var inst_17935 = (state_17958[(7)]);
var inst_17938 = cljs.core.first(inst_17935);
var state_17958__$1 = state_17958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17958__$1,(7),ch,inst_17938);
} else {
if((state_val_17959 === (13))){
var inst_17952 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
var statearr_17964_19761 = state_17958__$1;
(statearr_17964_19761[(2)] = inst_17952);

(statearr_17964_19761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (6))){
var inst_17943 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
if(cljs.core.truth_(inst_17943)){
var statearr_17966_19762 = state_17958__$1;
(statearr_17966_19762[(1)] = (8));

} else {
var statearr_17967_19763 = state_17958__$1;
(statearr_17967_19763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (3))){
var inst_17956 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17958__$1,inst_17956);
} else {
if((state_val_17959 === (12))){
var state_17958__$1 = state_17958;
var statearr_17968_19764 = state_17958__$1;
(statearr_17968_19764[(2)] = null);

(statearr_17968_19764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (2))){
var inst_17935 = (state_17958[(7)]);
var state_17958__$1 = state_17958;
if(cljs.core.truth_(inst_17935)){
var statearr_17969_19765 = state_17958__$1;
(statearr_17969_19765[(1)] = (4));

} else {
var statearr_17970_19766 = state_17958__$1;
(statearr_17970_19766[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (11))){
var inst_17949 = cljs.core.async.close_BANG_(ch);
var state_17958__$1 = state_17958;
var statearr_17971_19767 = state_17958__$1;
(statearr_17971_19767[(2)] = inst_17949);

(statearr_17971_19767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (9))){
var state_17958__$1 = state_17958;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17973_19770 = state_17958__$1;
(statearr_17973_19770[(1)] = (11));

} else {
var statearr_17974_19771 = state_17958__$1;
(statearr_17974_19771[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (5))){
var inst_17935 = (state_17958[(7)]);
var state_17958__$1 = state_17958;
var statearr_17975_19772 = state_17958__$1;
(statearr_17975_19772[(2)] = inst_17935);

(statearr_17975_19772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (10))){
var inst_17954 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
var statearr_17976_19773 = state_17958__$1;
(statearr_17976_19773[(2)] = inst_17954);

(statearr_17976_19773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (8))){
var inst_17935 = (state_17958[(7)]);
var inst_17945 = cljs.core.next(inst_17935);
var inst_17935__$1 = inst_17945;
var state_17958__$1 = (function (){var statearr_17977 = state_17958;
(statearr_17977[(7)] = inst_17935__$1);

return statearr_17977;
})();
var statearr_17978_19774 = state_17958__$1;
(statearr_17978_19774[(2)] = null);

(statearr_17978_19774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_17980 = [null,null,null,null,null,null,null,null];
(statearr_17980[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_17980[(1)] = (1));

return statearr_17980;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_17958){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_17958);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e17981){var ex__17103__auto__ = e17981;
var statearr_17982_19776 = state_17958;
(statearr_17982_19776[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_17958[(4)]))){
var statearr_17983_19777 = state_17958;
(statearr_17983_19777[(1)] = cljs.core.first((state_17958[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19778 = state_17958;
state_17958 = G__19778;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_17958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_17958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_17984 = f__17239__auto__();
(statearr_17984[(6)] = c__17238__auto__);

return statearr_17984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));

return c__17238__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17987 = arguments.length;
switch (G__17987) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19780 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19780(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19781 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19781(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19796 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19796(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19798 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19798(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17993 = (function (ch,cs,meta17994){
this.ch = ch;
this.cs = cs;
this.meta17994 = meta17994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17995,meta17994__$1){
var self__ = this;
var _17995__$1 = this;
return (new cljs.core.async.t_cljs$core$async17993(self__.ch,self__.cs,meta17994__$1));
}));

(cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17995){
var self__ = this;
var _17995__$1 = this;
return self__.meta17994;
}));

(cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17994","meta17994",-1027458096,null)], null);
}));

(cljs.core.async.t_cljs$core$async17993.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17993");

(cljs.core.async.t_cljs$core$async17993.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17993");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17993.
 */
cljs.core.async.__GT_t_cljs$core$async17993 = (function cljs$core$async$__GT_t_cljs$core$async17993(ch,cs,meta17994){
return (new cljs.core.async.t_cljs$core$async17993(ch,cs,meta17994));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async17993(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17238__auto___19802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_18131){
var state_val_18132 = (state_18131[(1)]);
if((state_val_18132 === (7))){
var inst_18127 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18133_19803 = state_18131__$1;
(statearr_18133_19803[(2)] = inst_18127);

(statearr_18133_19803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (20))){
var inst_18031 = (state_18131[(7)]);
var inst_18043 = cljs.core.first(inst_18031);
var inst_18044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18043,(0),null);
var inst_18045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18043,(1),null);
var state_18131__$1 = (function (){var statearr_18135 = state_18131;
(statearr_18135[(8)] = inst_18044);

return statearr_18135;
})();
if(cljs.core.truth_(inst_18045)){
var statearr_18136_19804 = state_18131__$1;
(statearr_18136_19804[(1)] = (22));

} else {
var statearr_18137_19805 = state_18131__$1;
(statearr_18137_19805[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (27))){
var inst_18075 = (state_18131[(9)]);
var inst_18000 = (state_18131[(10)]);
var inst_18080 = (state_18131[(11)]);
var inst_18073 = (state_18131[(12)]);
var inst_18080__$1 = cljs.core._nth(inst_18073,inst_18075);
var inst_18081 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18080__$1,inst_18000,done);
var state_18131__$1 = (function (){var statearr_18138 = state_18131;
(statearr_18138[(11)] = inst_18080__$1);

return statearr_18138;
})();
if(cljs.core.truth_(inst_18081)){
var statearr_18139_19810 = state_18131__$1;
(statearr_18139_19810[(1)] = (30));

} else {
var statearr_18140_19811 = state_18131__$1;
(statearr_18140_19811[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (1))){
var state_18131__$1 = state_18131;
var statearr_18141_19812 = state_18131__$1;
(statearr_18141_19812[(2)] = null);

(statearr_18141_19812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (24))){
var inst_18031 = (state_18131[(7)]);
var inst_18050 = (state_18131[(2)]);
var inst_18051 = cljs.core.next(inst_18031);
var inst_18009 = inst_18051;
var inst_18010 = null;
var inst_18011 = (0);
var inst_18012 = (0);
var state_18131__$1 = (function (){var statearr_18142 = state_18131;
(statearr_18142[(13)] = inst_18012);

(statearr_18142[(14)] = inst_18050);

(statearr_18142[(15)] = inst_18010);

(statearr_18142[(16)] = inst_18009);

(statearr_18142[(17)] = inst_18011);

return statearr_18142;
})();
var statearr_18144_19815 = state_18131__$1;
(statearr_18144_19815[(2)] = null);

(statearr_18144_19815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (39))){
var state_18131__$1 = state_18131;
var statearr_18148_19818 = state_18131__$1;
(statearr_18148_19818[(2)] = null);

(statearr_18148_19818[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (4))){
var inst_18000 = (state_18131[(10)]);
var inst_18000__$1 = (state_18131[(2)]);
var inst_18001 = (inst_18000__$1 == null);
var state_18131__$1 = (function (){var statearr_18149 = state_18131;
(statearr_18149[(10)] = inst_18000__$1);

return statearr_18149;
})();
if(cljs.core.truth_(inst_18001)){
var statearr_18150_19819 = state_18131__$1;
(statearr_18150_19819[(1)] = (5));

} else {
var statearr_18151_19820 = state_18131__$1;
(statearr_18151_19820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (15))){
var inst_18012 = (state_18131[(13)]);
var inst_18010 = (state_18131[(15)]);
var inst_18009 = (state_18131[(16)]);
var inst_18011 = (state_18131[(17)]);
var inst_18027 = (state_18131[(2)]);
var inst_18028 = (inst_18012 + (1));
var tmp18145 = inst_18010;
var tmp18146 = inst_18009;
var tmp18147 = inst_18011;
var inst_18009__$1 = tmp18146;
var inst_18010__$1 = tmp18145;
var inst_18011__$1 = tmp18147;
var inst_18012__$1 = inst_18028;
var state_18131__$1 = (function (){var statearr_18152 = state_18131;
(statearr_18152[(13)] = inst_18012__$1);

(statearr_18152[(15)] = inst_18010__$1);

(statearr_18152[(16)] = inst_18009__$1);

(statearr_18152[(17)] = inst_18011__$1);

(statearr_18152[(18)] = inst_18027);

return statearr_18152;
})();
var statearr_18154_19830 = state_18131__$1;
(statearr_18154_19830[(2)] = null);

(statearr_18154_19830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (21))){
var inst_18054 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18158_19831 = state_18131__$1;
(statearr_18158_19831[(2)] = inst_18054);

(statearr_18158_19831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (31))){
var inst_18080 = (state_18131[(11)]);
var inst_18084 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18080);
var state_18131__$1 = state_18131;
var statearr_18159_19838 = state_18131__$1;
(statearr_18159_19838[(2)] = inst_18084);

(statearr_18159_19838[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (32))){
var inst_18074 = (state_18131[(19)]);
var inst_18072 = (state_18131[(20)]);
var inst_18075 = (state_18131[(9)]);
var inst_18073 = (state_18131[(12)]);
var inst_18086 = (state_18131[(2)]);
var inst_18088 = (inst_18075 + (1));
var tmp18155 = inst_18074;
var tmp18156 = inst_18072;
var tmp18157 = inst_18073;
var inst_18072__$1 = tmp18156;
var inst_18073__$1 = tmp18157;
var inst_18074__$1 = tmp18155;
var inst_18075__$1 = inst_18088;
var state_18131__$1 = (function (){var statearr_18160 = state_18131;
(statearr_18160[(19)] = inst_18074__$1);

(statearr_18160[(20)] = inst_18072__$1);

(statearr_18160[(9)] = inst_18075__$1);

(statearr_18160[(21)] = inst_18086);

(statearr_18160[(12)] = inst_18073__$1);

return statearr_18160;
})();
var statearr_18161_19840 = state_18131__$1;
(statearr_18161_19840[(2)] = null);

(statearr_18161_19840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (40))){
var inst_18100 = (state_18131[(22)]);
var inst_18104 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18100);
var state_18131__$1 = state_18131;
var statearr_18163_19842 = state_18131__$1;
(statearr_18163_19842[(2)] = inst_18104);

(statearr_18163_19842[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (33))){
var inst_18091 = (state_18131[(23)]);
var inst_18093 = cljs.core.chunked_seq_QMARK_(inst_18091);
var state_18131__$1 = state_18131;
if(inst_18093){
var statearr_18164_19843 = state_18131__$1;
(statearr_18164_19843[(1)] = (36));

} else {
var statearr_18165_19844 = state_18131__$1;
(statearr_18165_19844[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (13))){
var inst_18021 = (state_18131[(24)]);
var inst_18024 = cljs.core.async.close_BANG_(inst_18021);
var state_18131__$1 = state_18131;
var statearr_18166_19845 = state_18131__$1;
(statearr_18166_19845[(2)] = inst_18024);

(statearr_18166_19845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (22))){
var inst_18044 = (state_18131[(8)]);
var inst_18047 = cljs.core.async.close_BANG_(inst_18044);
var state_18131__$1 = state_18131;
var statearr_18167_19846 = state_18131__$1;
(statearr_18167_19846[(2)] = inst_18047);

(statearr_18167_19846[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (36))){
var inst_18091 = (state_18131[(23)]);
var inst_18095 = cljs.core.chunk_first(inst_18091);
var inst_18096 = cljs.core.chunk_rest(inst_18091);
var inst_18097 = cljs.core.count(inst_18095);
var inst_18072 = inst_18096;
var inst_18073 = inst_18095;
var inst_18074 = inst_18097;
var inst_18075 = (0);
var state_18131__$1 = (function (){var statearr_18168 = state_18131;
(statearr_18168[(19)] = inst_18074);

(statearr_18168[(20)] = inst_18072);

(statearr_18168[(9)] = inst_18075);

(statearr_18168[(12)] = inst_18073);

return statearr_18168;
})();
var statearr_18169_19847 = state_18131__$1;
(statearr_18169_19847[(2)] = null);

(statearr_18169_19847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (41))){
var inst_18091 = (state_18131[(23)]);
var inst_18106 = (state_18131[(2)]);
var inst_18107 = cljs.core.next(inst_18091);
var inst_18072 = inst_18107;
var inst_18073 = null;
var inst_18074 = (0);
var inst_18075 = (0);
var state_18131__$1 = (function (){var statearr_18171 = state_18131;
(statearr_18171[(19)] = inst_18074);

(statearr_18171[(25)] = inst_18106);

(statearr_18171[(20)] = inst_18072);

(statearr_18171[(9)] = inst_18075);

(statearr_18171[(12)] = inst_18073);

return statearr_18171;
})();
var statearr_18172_19848 = state_18131__$1;
(statearr_18172_19848[(2)] = null);

(statearr_18172_19848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (43))){
var state_18131__$1 = state_18131;
var statearr_18173_19849 = state_18131__$1;
(statearr_18173_19849[(2)] = null);

(statearr_18173_19849[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (29))){
var inst_18115 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18174_19856 = state_18131__$1;
(statearr_18174_19856[(2)] = inst_18115);

(statearr_18174_19856[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (44))){
var inst_18124 = (state_18131[(2)]);
var state_18131__$1 = (function (){var statearr_18175 = state_18131;
(statearr_18175[(26)] = inst_18124);

return statearr_18175;
})();
var statearr_18176_19857 = state_18131__$1;
(statearr_18176_19857[(2)] = null);

(statearr_18176_19857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (6))){
var inst_18064 = (state_18131[(27)]);
var inst_18063 = cljs.core.deref(cs);
var inst_18064__$1 = cljs.core.keys(inst_18063);
var inst_18065 = cljs.core.count(inst_18064__$1);
var inst_18066 = cljs.core.reset_BANG_(dctr,inst_18065);
var inst_18071 = cljs.core.seq(inst_18064__$1);
var inst_18072 = inst_18071;
var inst_18073 = null;
var inst_18074 = (0);
var inst_18075 = (0);
var state_18131__$1 = (function (){var statearr_18178 = state_18131;
(statearr_18178[(19)] = inst_18074);

(statearr_18178[(28)] = inst_18066);

(statearr_18178[(20)] = inst_18072);

(statearr_18178[(9)] = inst_18075);

(statearr_18178[(12)] = inst_18073);

(statearr_18178[(27)] = inst_18064__$1);

return statearr_18178;
})();
var statearr_18179_19865 = state_18131__$1;
(statearr_18179_19865[(2)] = null);

(statearr_18179_19865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (28))){
var inst_18072 = (state_18131[(20)]);
var inst_18091 = (state_18131[(23)]);
var inst_18091__$1 = cljs.core.seq(inst_18072);
var state_18131__$1 = (function (){var statearr_18180 = state_18131;
(statearr_18180[(23)] = inst_18091__$1);

return statearr_18180;
})();
if(inst_18091__$1){
var statearr_18181_19866 = state_18131__$1;
(statearr_18181_19866[(1)] = (33));

} else {
var statearr_18182_19867 = state_18131__$1;
(statearr_18182_19867[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (25))){
var inst_18074 = (state_18131[(19)]);
var inst_18075 = (state_18131[(9)]);
var inst_18077 = (inst_18075 < inst_18074);
var inst_18078 = inst_18077;
var state_18131__$1 = state_18131;
if(cljs.core.truth_(inst_18078)){
var statearr_18183_19869 = state_18131__$1;
(statearr_18183_19869[(1)] = (27));

} else {
var statearr_18184_19870 = state_18131__$1;
(statearr_18184_19870[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (34))){
var state_18131__$1 = state_18131;
var statearr_18186_19871 = state_18131__$1;
(statearr_18186_19871[(2)] = null);

(statearr_18186_19871[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (17))){
var state_18131__$1 = state_18131;
var statearr_18187_19872 = state_18131__$1;
(statearr_18187_19872[(2)] = null);

(statearr_18187_19872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (3))){
var inst_18129 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18131__$1,inst_18129);
} else {
if((state_val_18132 === (12))){
var inst_18059 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18189_19873 = state_18131__$1;
(statearr_18189_19873[(2)] = inst_18059);

(statearr_18189_19873[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (2))){
var state_18131__$1 = state_18131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18131__$1,(4),ch);
} else {
if((state_val_18132 === (23))){
var state_18131__$1 = state_18131;
var statearr_18190_19883 = state_18131__$1;
(statearr_18190_19883[(2)] = null);

(statearr_18190_19883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (35))){
var inst_18113 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18191_19884 = state_18131__$1;
(statearr_18191_19884[(2)] = inst_18113);

(statearr_18191_19884[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (19))){
var inst_18031 = (state_18131[(7)]);
var inst_18035 = cljs.core.chunk_first(inst_18031);
var inst_18036 = cljs.core.chunk_rest(inst_18031);
var inst_18037 = cljs.core.count(inst_18035);
var inst_18009 = inst_18036;
var inst_18010 = inst_18035;
var inst_18011 = inst_18037;
var inst_18012 = (0);
var state_18131__$1 = (function (){var statearr_18193 = state_18131;
(statearr_18193[(13)] = inst_18012);

(statearr_18193[(15)] = inst_18010);

(statearr_18193[(16)] = inst_18009);

(statearr_18193[(17)] = inst_18011);

return statearr_18193;
})();
var statearr_18194_19885 = state_18131__$1;
(statearr_18194_19885[(2)] = null);

(statearr_18194_19885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (11))){
var inst_18031 = (state_18131[(7)]);
var inst_18009 = (state_18131[(16)]);
var inst_18031__$1 = cljs.core.seq(inst_18009);
var state_18131__$1 = (function (){var statearr_18195 = state_18131;
(statearr_18195[(7)] = inst_18031__$1);

return statearr_18195;
})();
if(inst_18031__$1){
var statearr_18196_19896 = state_18131__$1;
(statearr_18196_19896[(1)] = (16));

} else {
var statearr_18197_19897 = state_18131__$1;
(statearr_18197_19897[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (9))){
var inst_18061 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18198_19898 = state_18131__$1;
(statearr_18198_19898[(2)] = inst_18061);

(statearr_18198_19898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (5))){
var inst_18007 = cljs.core.deref(cs);
var inst_18008 = cljs.core.seq(inst_18007);
var inst_18009 = inst_18008;
var inst_18010 = null;
var inst_18011 = (0);
var inst_18012 = (0);
var state_18131__$1 = (function (){var statearr_18199 = state_18131;
(statearr_18199[(13)] = inst_18012);

(statearr_18199[(15)] = inst_18010);

(statearr_18199[(16)] = inst_18009);

(statearr_18199[(17)] = inst_18011);

return statearr_18199;
})();
var statearr_18201_19906 = state_18131__$1;
(statearr_18201_19906[(2)] = null);

(statearr_18201_19906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (14))){
var state_18131__$1 = state_18131;
var statearr_18202_19907 = state_18131__$1;
(statearr_18202_19907[(2)] = null);

(statearr_18202_19907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (45))){
var inst_18121 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18203_19908 = state_18131__$1;
(statearr_18203_19908[(2)] = inst_18121);

(statearr_18203_19908[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (26))){
var inst_18064 = (state_18131[(27)]);
var inst_18117 = (state_18131[(2)]);
var inst_18118 = cljs.core.seq(inst_18064);
var state_18131__$1 = (function (){var statearr_18204 = state_18131;
(statearr_18204[(29)] = inst_18117);

return statearr_18204;
})();
if(inst_18118){
var statearr_18205_19909 = state_18131__$1;
(statearr_18205_19909[(1)] = (42));

} else {
var statearr_18206_19910 = state_18131__$1;
(statearr_18206_19910[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (16))){
var inst_18031 = (state_18131[(7)]);
var inst_18033 = cljs.core.chunked_seq_QMARK_(inst_18031);
var state_18131__$1 = state_18131;
if(inst_18033){
var statearr_18207_19912 = state_18131__$1;
(statearr_18207_19912[(1)] = (19));

} else {
var statearr_18209_19913 = state_18131__$1;
(statearr_18209_19913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (38))){
var inst_18110 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18210_19914 = state_18131__$1;
(statearr_18210_19914[(2)] = inst_18110);

(statearr_18210_19914[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (30))){
var state_18131__$1 = state_18131;
var statearr_18211_19915 = state_18131__$1;
(statearr_18211_19915[(2)] = null);

(statearr_18211_19915[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (10))){
var inst_18012 = (state_18131[(13)]);
var inst_18010 = (state_18131[(15)]);
var inst_18020 = cljs.core._nth(inst_18010,inst_18012);
var inst_18021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18020,(0),null);
var inst_18022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18020,(1),null);
var state_18131__$1 = (function (){var statearr_18212 = state_18131;
(statearr_18212[(24)] = inst_18021);

return statearr_18212;
})();
if(cljs.core.truth_(inst_18022)){
var statearr_18213_19916 = state_18131__$1;
(statearr_18213_19916[(1)] = (13));

} else {
var statearr_18214_19917 = state_18131__$1;
(statearr_18214_19917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (18))){
var inst_18057 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18215_19918 = state_18131__$1;
(statearr_18215_19918[(2)] = inst_18057);

(statearr_18215_19918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (42))){
var state_18131__$1 = state_18131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18131__$1,(45),dchan);
} else {
if((state_val_18132 === (37))){
var inst_18091 = (state_18131[(23)]);
var inst_18000 = (state_18131[(10)]);
var inst_18100 = (state_18131[(22)]);
var inst_18100__$1 = cljs.core.first(inst_18091);
var inst_18101 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18100__$1,inst_18000,done);
var state_18131__$1 = (function (){var statearr_18217 = state_18131;
(statearr_18217[(22)] = inst_18100__$1);

return statearr_18217;
})();
if(cljs.core.truth_(inst_18101)){
var statearr_18218_19924 = state_18131__$1;
(statearr_18218_19924[(1)] = (39));

} else {
var statearr_18219_19931 = state_18131__$1;
(statearr_18219_19931[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (8))){
var inst_18012 = (state_18131[(13)]);
var inst_18011 = (state_18131[(17)]);
var inst_18014 = (inst_18012 < inst_18011);
var inst_18015 = inst_18014;
var state_18131__$1 = state_18131;
if(cljs.core.truth_(inst_18015)){
var statearr_18220_19934 = state_18131__$1;
(statearr_18220_19934[(1)] = (10));

} else {
var statearr_18221_19935 = state_18131__$1;
(statearr_18221_19935[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17100__auto__ = null;
var cljs$core$async$mult_$_state_machine__17100__auto____0 = (function (){
var statearr_18222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18222[(0)] = cljs$core$async$mult_$_state_machine__17100__auto__);

(statearr_18222[(1)] = (1));

return statearr_18222;
});
var cljs$core$async$mult_$_state_machine__17100__auto____1 = (function (state_18131){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18131);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18224){var ex__17103__auto__ = e18224;
var statearr_18225_19936 = state_18131;
(statearr_18225_19936[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18131[(4)]))){
var statearr_18226_19937 = state_18131;
(statearr_18226_19937[(1)] = cljs.core.first((state_18131[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19938 = state_18131;
state_18131 = G__19938;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17100__auto__ = function(state_18131){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17100__auto____1.call(this,state_18131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17100__auto____0;
cljs$core$async$mult_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17100__auto____1;
return cljs$core$async$mult_$_state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_18227 = f__17239__auto__();
(statearr_18227[(6)] = c__17238__auto___19802);

return statearr_18227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18229 = arguments.length;
switch (G__18229) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19941 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19941(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19946 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19946(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19947 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19947(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19948 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19948(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19949 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19949(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19952 = arguments.length;
var i__5770__auto___19953 = (0);
while(true){
if((i__5770__auto___19953 < len__5769__auto___19952)){
args__5775__auto__.push((arguments[i__5770__auto___19953]));

var G__19960 = (i__5770__auto___19953 + (1));
i__5770__auto___19953 = G__19960;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18239){
var map__18240 = p__18239;
var map__18240__$1 = cljs.core.__destructure_map(map__18240);
var opts = map__18240__$1;
var statearr_18241_19962 = state;
(statearr_18241_19962[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18243_19963 = state;
(statearr_18243_19963[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18244_19968 = state;
(statearr_18244_19968[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18235){
var G__18236 = cljs.core.first(seq18235);
var seq18235__$1 = cljs.core.next(seq18235);
var G__18237 = cljs.core.first(seq18235__$1);
var seq18235__$2 = cljs.core.next(seq18235__$1);
var G__18238 = cljs.core.first(seq18235__$2);
var seq18235__$3 = cljs.core.next(seq18235__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18236,G__18237,G__18238,seq18235__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18246 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18247){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18247 = meta18247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18248,meta18247__$1){
var self__ = this;
var _18248__$1 = this;
return (new cljs.core.async.t_cljs$core$async18246(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18247__$1));
}));

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18248){
var self__ = this;
var _18248__$1 = this;
return self__.meta18247;
}));

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18246.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18247","meta18247",241116735,null)], null);
}));

(cljs.core.async.t_cljs$core$async18246.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18246");

(cljs.core.async.t_cljs$core$async18246.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18246");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18246.
 */
cljs.core.async.__GT_t_cljs$core$async18246 = (function cljs$core$async$__GT_t_cljs$core$async18246(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18247){
return (new cljs.core.async.t_cljs$core$async18246(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18247));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async18246(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17238__auto___19977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_18322){
var state_val_18323 = (state_18322[(1)]);
if((state_val_18323 === (7))){
var inst_18280 = (state_18322[(2)]);
var state_18322__$1 = state_18322;
if(cljs.core.truth_(inst_18280)){
var statearr_18324_19980 = state_18322__$1;
(statearr_18324_19980[(1)] = (8));

} else {
var statearr_18325_19981 = state_18322__$1;
(statearr_18325_19981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (20))){
var inst_18273 = (state_18322[(7)]);
var state_18322__$1 = state_18322;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18322__$1,(23),out,inst_18273);
} else {
if((state_val_18323 === (1))){
var inst_18256 = calc_state();
var inst_18257 = cljs.core.__destructure_map(inst_18256);
var inst_18258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18257,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18257,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18257,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18261 = inst_18256;
var state_18322__$1 = (function (){var statearr_18326 = state_18322;
(statearr_18326[(8)] = inst_18260);

(statearr_18326[(9)] = inst_18258);

(statearr_18326[(10)] = inst_18259);

(statearr_18326[(11)] = inst_18261);

return statearr_18326;
})();
var statearr_18327_19983 = state_18322__$1;
(statearr_18327_19983[(2)] = null);

(statearr_18327_19983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (24))){
var inst_18264 = (state_18322[(12)]);
var inst_18261 = inst_18264;
var state_18322__$1 = (function (){var statearr_18328 = state_18322;
(statearr_18328[(11)] = inst_18261);

return statearr_18328;
})();
var statearr_18329_19984 = state_18322__$1;
(statearr_18329_19984[(2)] = null);

(statearr_18329_19984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (4))){
var inst_18273 = (state_18322[(7)]);
var inst_18275 = (state_18322[(13)]);
var inst_18272 = (state_18322[(2)]);
var inst_18273__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18272,(0),null);
var inst_18274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18272,(1),null);
var inst_18275__$1 = (inst_18273__$1 == null);
var state_18322__$1 = (function (){var statearr_18330 = state_18322;
(statearr_18330[(7)] = inst_18273__$1);

(statearr_18330[(14)] = inst_18274);

(statearr_18330[(13)] = inst_18275__$1);

return statearr_18330;
})();
if(cljs.core.truth_(inst_18275__$1)){
var statearr_18331_19985 = state_18322__$1;
(statearr_18331_19985[(1)] = (5));

} else {
var statearr_18332_19986 = state_18322__$1;
(statearr_18332_19986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (15))){
var inst_18294 = (state_18322[(15)]);
var inst_18265 = (state_18322[(16)]);
var inst_18294__$1 = cljs.core.empty_QMARK_(inst_18265);
var state_18322__$1 = (function (){var statearr_18333 = state_18322;
(statearr_18333[(15)] = inst_18294__$1);

return statearr_18333;
})();
if(inst_18294__$1){
var statearr_18334_19987 = state_18322__$1;
(statearr_18334_19987[(1)] = (17));

} else {
var statearr_18335_19988 = state_18322__$1;
(statearr_18335_19988[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (21))){
var inst_18264 = (state_18322[(12)]);
var inst_18261 = inst_18264;
var state_18322__$1 = (function (){var statearr_18336 = state_18322;
(statearr_18336[(11)] = inst_18261);

return statearr_18336;
})();
var statearr_18337_19989 = state_18322__$1;
(statearr_18337_19989[(2)] = null);

(statearr_18337_19989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (13))){
var inst_18287 = (state_18322[(2)]);
var inst_18288 = calc_state();
var inst_18261 = inst_18288;
var state_18322__$1 = (function (){var statearr_18340 = state_18322;
(statearr_18340[(17)] = inst_18287);

(statearr_18340[(11)] = inst_18261);

return statearr_18340;
})();
var statearr_18341_19990 = state_18322__$1;
(statearr_18341_19990[(2)] = null);

(statearr_18341_19990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (22))){
var inst_18316 = (state_18322[(2)]);
var state_18322__$1 = state_18322;
var statearr_18342_19991 = state_18322__$1;
(statearr_18342_19991[(2)] = inst_18316);

(statearr_18342_19991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (6))){
var inst_18274 = (state_18322[(14)]);
var inst_18278 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18274,change);
var state_18322__$1 = state_18322;
var statearr_18343_19996 = state_18322__$1;
(statearr_18343_19996[(2)] = inst_18278);

(statearr_18343_19996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (25))){
var state_18322__$1 = state_18322;
var statearr_18344_19999 = state_18322__$1;
(statearr_18344_19999[(2)] = null);

(statearr_18344_19999[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (17))){
var inst_18266 = (state_18322[(18)]);
var inst_18274 = (state_18322[(14)]);
var inst_18296 = (inst_18266.cljs$core$IFn$_invoke$arity$1 ? inst_18266.cljs$core$IFn$_invoke$arity$1(inst_18274) : inst_18266.call(null,inst_18274));
var inst_18297 = cljs.core.not(inst_18296);
var state_18322__$1 = state_18322;
var statearr_18345_20000 = state_18322__$1;
(statearr_18345_20000[(2)] = inst_18297);

(statearr_18345_20000[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (3))){
var inst_18320 = (state_18322[(2)]);
var state_18322__$1 = state_18322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18322__$1,inst_18320);
} else {
if((state_val_18323 === (12))){
var state_18322__$1 = state_18322;
var statearr_18346_20001 = state_18322__$1;
(statearr_18346_20001[(2)] = null);

(statearr_18346_20001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (2))){
var inst_18264 = (state_18322[(12)]);
var inst_18261 = (state_18322[(11)]);
var inst_18264__$1 = cljs.core.__destructure_map(inst_18261);
var inst_18265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18264__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18264__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18264__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18322__$1 = (function (){var statearr_18347 = state_18322;
(statearr_18347[(12)] = inst_18264__$1);

(statearr_18347[(18)] = inst_18266);

(statearr_18347[(16)] = inst_18265);

return statearr_18347;
})();
return cljs.core.async.ioc_alts_BANG_(state_18322__$1,(4),inst_18267);
} else {
if((state_val_18323 === (23))){
var inst_18306 = (state_18322[(2)]);
var state_18322__$1 = state_18322;
if(cljs.core.truth_(inst_18306)){
var statearr_18348_20003 = state_18322__$1;
(statearr_18348_20003[(1)] = (24));

} else {
var statearr_18349_20004 = state_18322__$1;
(statearr_18349_20004[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (19))){
var inst_18300 = (state_18322[(2)]);
var state_18322__$1 = state_18322;
var statearr_18350_20005 = state_18322__$1;
(statearr_18350_20005[(2)] = inst_18300);

(statearr_18350_20005[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (11))){
var inst_18274 = (state_18322[(14)]);
var inst_18284 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18274);
var state_18322__$1 = state_18322;
var statearr_18351_20006 = state_18322__$1;
(statearr_18351_20006[(2)] = inst_18284);

(statearr_18351_20006[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (9))){
var inst_18291 = (state_18322[(19)]);
var inst_18274 = (state_18322[(14)]);
var inst_18265 = (state_18322[(16)]);
var inst_18291__$1 = (inst_18265.cljs$core$IFn$_invoke$arity$1 ? inst_18265.cljs$core$IFn$_invoke$arity$1(inst_18274) : inst_18265.call(null,inst_18274));
var state_18322__$1 = (function (){var statearr_18352 = state_18322;
(statearr_18352[(19)] = inst_18291__$1);

return statearr_18352;
})();
if(cljs.core.truth_(inst_18291__$1)){
var statearr_18353_20007 = state_18322__$1;
(statearr_18353_20007[(1)] = (14));

} else {
var statearr_18354_20014 = state_18322__$1;
(statearr_18354_20014[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (5))){
var inst_18275 = (state_18322[(13)]);
var state_18322__$1 = state_18322;
var statearr_18355_20015 = state_18322__$1;
(statearr_18355_20015[(2)] = inst_18275);

(statearr_18355_20015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (14))){
var inst_18291 = (state_18322[(19)]);
var state_18322__$1 = state_18322;
var statearr_18356_20016 = state_18322__$1;
(statearr_18356_20016[(2)] = inst_18291);

(statearr_18356_20016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (26))){
var inst_18312 = (state_18322[(2)]);
var state_18322__$1 = state_18322;
var statearr_18360_20020 = state_18322__$1;
(statearr_18360_20020[(2)] = inst_18312);

(statearr_18360_20020[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (16))){
var inst_18302 = (state_18322[(2)]);
var state_18322__$1 = state_18322;
if(cljs.core.truth_(inst_18302)){
var statearr_18361_20021 = state_18322__$1;
(statearr_18361_20021[(1)] = (20));

} else {
var statearr_18362_20022 = state_18322__$1;
(statearr_18362_20022[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (10))){
var inst_18318 = (state_18322[(2)]);
var state_18322__$1 = state_18322;
var statearr_18363_20023 = state_18322__$1;
(statearr_18363_20023[(2)] = inst_18318);

(statearr_18363_20023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (18))){
var inst_18294 = (state_18322[(15)]);
var state_18322__$1 = state_18322;
var statearr_18366_20024 = state_18322__$1;
(statearr_18366_20024[(2)] = inst_18294);

(statearr_18366_20024[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (8))){
var inst_18273 = (state_18322[(7)]);
var inst_18282 = (inst_18273 == null);
var state_18322__$1 = state_18322;
if(cljs.core.truth_(inst_18282)){
var statearr_18368_20029 = state_18322__$1;
(statearr_18368_20029[(1)] = (11));

} else {
var statearr_18372_20030 = state_18322__$1;
(statearr_18372_20030[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17100__auto__ = null;
var cljs$core$async$mix_$_state_machine__17100__auto____0 = (function (){
var statearr_18373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18373[(0)] = cljs$core$async$mix_$_state_machine__17100__auto__);

(statearr_18373[(1)] = (1));

return statearr_18373;
});
var cljs$core$async$mix_$_state_machine__17100__auto____1 = (function (state_18322){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18322);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18374){var ex__17103__auto__ = e18374;
var statearr_18375_20032 = state_18322;
(statearr_18375_20032[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18322[(4)]))){
var statearr_18376_20033 = state_18322;
(statearr_18376_20033[(1)] = cljs.core.first((state_18322[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20034 = state_18322;
state_18322 = G__20034;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17100__auto__ = function(state_18322){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17100__auto____1.call(this,state_18322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17100__auto____0;
cljs$core$async$mix_$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17100__auto____1;
return cljs$core$async$mix_$_state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_18377 = f__17239__auto__();
(statearr_18377[(6)] = c__17238__auto___19977);

return statearr_18377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20045 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20045(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20046 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20046(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20053 = (function() {
var G__20054 = null;
var G__20054__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20054__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20054 = function(p,v){
switch(arguments.length){
case 1:
return G__20054__1.call(this,p);
case 2:
return G__20054__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20054.cljs$core$IFn$_invoke$arity$1 = G__20054__1;
G__20054.cljs$core$IFn$_invoke$arity$2 = G__20054__2;
return G__20054;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18408 = arguments.length;
switch (G__18408) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20053(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20053(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18431 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18432){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18432 = meta18432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18433,meta18432__$1){
var self__ = this;
var _18433__$1 = this;
return (new cljs.core.async.t_cljs$core$async18431(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18432__$1));
}));

(cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18433){
var self__ = this;
var _18433__$1 = this;
return self__.meta18432;
}));

(cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18431.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18432","meta18432",-1780972233,null)], null);
}));

(cljs.core.async.t_cljs$core$async18431.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18431");

(cljs.core.async.t_cljs$core$async18431.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18431");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18431.
 */
cljs.core.async.__GT_t_cljs$core$async18431 = (function cljs$core$async$__GT_t_cljs$core$async18431(ch,topic_fn,buf_fn,mults,ensure_mult,meta18432){
return (new cljs.core.async.t_cljs$core$async18431(ch,topic_fn,buf_fn,mults,ensure_mult,meta18432));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18423 = arguments.length;
switch (G__18423) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18417_SHARP_){
if(cljs.core.truth_((p1__18417_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18417_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18417_SHARP_.call(null,topic)))){
return p1__18417_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18417_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18431(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17238__auto___20085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_18538){
var state_val_18540 = (state_18538[(1)]);
if((state_val_18540 === (7))){
var inst_18534 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
var statearr_18545_20086 = state_18538__$1;
(statearr_18545_20086[(2)] = inst_18534);

(statearr_18545_20086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (20))){
var state_18538__$1 = state_18538;
var statearr_18548_20088 = state_18538__$1;
(statearr_18548_20088[(2)] = null);

(statearr_18548_20088[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (1))){
var state_18538__$1 = state_18538;
var statearr_18550_20092 = state_18538__$1;
(statearr_18550_20092[(2)] = null);

(statearr_18550_20092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (24))){
var inst_18514 = (state_18538[(7)]);
var inst_18526 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18514);
var state_18538__$1 = state_18538;
var statearr_18553_20093 = state_18538__$1;
(statearr_18553_20093[(2)] = inst_18526);

(statearr_18553_20093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (4))){
var inst_18459 = (state_18538[(8)]);
var inst_18459__$1 = (state_18538[(2)]);
var inst_18460 = (inst_18459__$1 == null);
var state_18538__$1 = (function (){var statearr_18557 = state_18538;
(statearr_18557[(8)] = inst_18459__$1);

return statearr_18557;
})();
if(cljs.core.truth_(inst_18460)){
var statearr_18558_20095 = state_18538__$1;
(statearr_18558_20095[(1)] = (5));

} else {
var statearr_18559_20096 = state_18538__$1;
(statearr_18559_20096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (15))){
var inst_18508 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
var statearr_18563_20097 = state_18538__$1;
(statearr_18563_20097[(2)] = inst_18508);

(statearr_18563_20097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (21))){
var inst_18531 = (state_18538[(2)]);
var state_18538__$1 = (function (){var statearr_18564 = state_18538;
(statearr_18564[(9)] = inst_18531);

return statearr_18564;
})();
var statearr_18566_20098 = state_18538__$1;
(statearr_18566_20098[(2)] = null);

(statearr_18566_20098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (13))){
var inst_18488 = (state_18538[(10)]);
var inst_18491 = cljs.core.chunked_seq_QMARK_(inst_18488);
var state_18538__$1 = state_18538;
if(inst_18491){
var statearr_18569_20100 = state_18538__$1;
(statearr_18569_20100[(1)] = (16));

} else {
var statearr_18571_20101 = state_18538__$1;
(statearr_18571_20101[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (22))){
var inst_18523 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
if(cljs.core.truth_(inst_18523)){
var statearr_18572_20102 = state_18538__$1;
(statearr_18572_20102[(1)] = (23));

} else {
var statearr_18574_20103 = state_18538__$1;
(statearr_18574_20103[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (6))){
var inst_18514 = (state_18538[(7)]);
var inst_18459 = (state_18538[(8)]);
var inst_18517 = (state_18538[(11)]);
var inst_18514__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18459) : topic_fn.call(null,inst_18459));
var inst_18516 = cljs.core.deref(mults);
var inst_18517__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18516,inst_18514__$1);
var state_18538__$1 = (function (){var statearr_18578 = state_18538;
(statearr_18578[(7)] = inst_18514__$1);

(statearr_18578[(11)] = inst_18517__$1);

return statearr_18578;
})();
if(cljs.core.truth_(inst_18517__$1)){
var statearr_18579_20109 = state_18538__$1;
(statearr_18579_20109[(1)] = (19));

} else {
var statearr_18581_20110 = state_18538__$1;
(statearr_18581_20110[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (25))){
var inst_18528 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
var statearr_18584_20111 = state_18538__$1;
(statearr_18584_20111[(2)] = inst_18528);

(statearr_18584_20111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (17))){
var inst_18488 = (state_18538[(10)]);
var inst_18499 = cljs.core.first(inst_18488);
var inst_18500 = cljs.core.async.muxch_STAR_(inst_18499);
var inst_18501 = cljs.core.async.close_BANG_(inst_18500);
var inst_18502 = cljs.core.next(inst_18488);
var inst_18470 = inst_18502;
var inst_18471 = null;
var inst_18472 = (0);
var inst_18473 = (0);
var state_18538__$1 = (function (){var statearr_18588 = state_18538;
(statearr_18588[(12)] = inst_18501);

(statearr_18588[(13)] = inst_18473);

(statearr_18588[(14)] = inst_18471);

(statearr_18588[(15)] = inst_18472);

(statearr_18588[(16)] = inst_18470);

return statearr_18588;
})();
var statearr_18589_20114 = state_18538__$1;
(statearr_18589_20114[(2)] = null);

(statearr_18589_20114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (3))){
var inst_18536 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18538__$1,inst_18536);
} else {
if((state_val_18540 === (12))){
var inst_18510 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
var statearr_18591_20115 = state_18538__$1;
(statearr_18591_20115[(2)] = inst_18510);

(statearr_18591_20115[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (2))){
var state_18538__$1 = state_18538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18538__$1,(4),ch);
} else {
if((state_val_18540 === (23))){
var state_18538__$1 = state_18538;
var statearr_18595_20116 = state_18538__$1;
(statearr_18595_20116[(2)] = null);

(statearr_18595_20116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (19))){
var inst_18459 = (state_18538[(8)]);
var inst_18517 = (state_18538[(11)]);
var inst_18521 = cljs.core.async.muxch_STAR_(inst_18517);
var state_18538__$1 = state_18538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18538__$1,(22),inst_18521,inst_18459);
} else {
if((state_val_18540 === (11))){
var inst_18488 = (state_18538[(10)]);
var inst_18470 = (state_18538[(16)]);
var inst_18488__$1 = cljs.core.seq(inst_18470);
var state_18538__$1 = (function (){var statearr_18597 = state_18538;
(statearr_18597[(10)] = inst_18488__$1);

return statearr_18597;
})();
if(inst_18488__$1){
var statearr_18598_20117 = state_18538__$1;
(statearr_18598_20117[(1)] = (13));

} else {
var statearr_18601_20118 = state_18538__$1;
(statearr_18601_20118[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (9))){
var inst_18512 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
var statearr_18603_20119 = state_18538__$1;
(statearr_18603_20119[(2)] = inst_18512);

(statearr_18603_20119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (5))){
var inst_18466 = cljs.core.deref(mults);
var inst_18467 = cljs.core.vals(inst_18466);
var inst_18468 = cljs.core.seq(inst_18467);
var inst_18470 = inst_18468;
var inst_18471 = null;
var inst_18472 = (0);
var inst_18473 = (0);
var state_18538__$1 = (function (){var statearr_18605 = state_18538;
(statearr_18605[(13)] = inst_18473);

(statearr_18605[(14)] = inst_18471);

(statearr_18605[(15)] = inst_18472);

(statearr_18605[(16)] = inst_18470);

return statearr_18605;
})();
var statearr_18608_20121 = state_18538__$1;
(statearr_18608_20121[(2)] = null);

(statearr_18608_20121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (14))){
var state_18538__$1 = state_18538;
var statearr_18613_20125 = state_18538__$1;
(statearr_18613_20125[(2)] = null);

(statearr_18613_20125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (16))){
var inst_18488 = (state_18538[(10)]);
var inst_18493 = cljs.core.chunk_first(inst_18488);
var inst_18494 = cljs.core.chunk_rest(inst_18488);
var inst_18495 = cljs.core.count(inst_18493);
var inst_18470 = inst_18494;
var inst_18471 = inst_18493;
var inst_18472 = inst_18495;
var inst_18473 = (0);
var state_18538__$1 = (function (){var statearr_18617 = state_18538;
(statearr_18617[(13)] = inst_18473);

(statearr_18617[(14)] = inst_18471);

(statearr_18617[(15)] = inst_18472);

(statearr_18617[(16)] = inst_18470);

return statearr_18617;
})();
var statearr_18619_20126 = state_18538__$1;
(statearr_18619_20126[(2)] = null);

(statearr_18619_20126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (10))){
var inst_18473 = (state_18538[(13)]);
var inst_18471 = (state_18538[(14)]);
var inst_18472 = (state_18538[(15)]);
var inst_18470 = (state_18538[(16)]);
var inst_18478 = cljs.core._nth(inst_18471,inst_18473);
var inst_18479 = cljs.core.async.muxch_STAR_(inst_18478);
var inst_18480 = cljs.core.async.close_BANG_(inst_18479);
var inst_18482 = (inst_18473 + (1));
var tmp18610 = inst_18471;
var tmp18611 = inst_18472;
var tmp18612 = inst_18470;
var inst_18470__$1 = tmp18612;
var inst_18471__$1 = tmp18610;
var inst_18472__$1 = tmp18611;
var inst_18473__$1 = inst_18482;
var state_18538__$1 = (function (){var statearr_18623 = state_18538;
(statearr_18623[(13)] = inst_18473__$1);

(statearr_18623[(14)] = inst_18471__$1);

(statearr_18623[(15)] = inst_18472__$1);

(statearr_18623[(16)] = inst_18470__$1);

(statearr_18623[(17)] = inst_18480);

return statearr_18623;
})();
var statearr_18625_20127 = state_18538__$1;
(statearr_18625_20127[(2)] = null);

(statearr_18625_20127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (18))){
var inst_18505 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
var statearr_18626_20128 = state_18538__$1;
(statearr_18626_20128[(2)] = inst_18505);

(statearr_18626_20128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18540 === (8))){
var inst_18473 = (state_18538[(13)]);
var inst_18472 = (state_18538[(15)]);
var inst_18475 = (inst_18473 < inst_18472);
var inst_18476 = inst_18475;
var state_18538__$1 = state_18538;
if(cljs.core.truth_(inst_18476)){
var statearr_18628_20133 = state_18538__$1;
(statearr_18628_20133[(1)] = (10));

} else {
var statearr_18629_20137 = state_18538__$1;
(statearr_18629_20137[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_18633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18633[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_18633[(1)] = (1));

return statearr_18633;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_18538){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18538);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18635){var ex__17103__auto__ = e18635;
var statearr_18636_20141 = state_18538;
(statearr_18636_20141[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18538[(4)]))){
var statearr_18637_20144 = state_18538;
(statearr_18637_20144[(1)] = cljs.core.first((state_18538[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20147 = state_18538;
state_18538 = G__20147;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_18538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_18538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_18641 = f__17239__auto__();
(statearr_18641[(6)] = c__17238__auto___20085);

return statearr_18641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18649 = arguments.length;
switch (G__18649) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18668 = arguments.length;
switch (G__18668) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18686 = arguments.length;
switch (G__18686) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17238__auto___20159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_18760){
var state_val_18761 = (state_18760[(1)]);
if((state_val_18761 === (7))){
var state_18760__$1 = state_18760;
var statearr_18763_20160 = state_18760__$1;
(statearr_18763_20160[(2)] = null);

(statearr_18763_20160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (1))){
var state_18760__$1 = state_18760;
var statearr_18764_20161 = state_18760__$1;
(statearr_18764_20161[(2)] = null);

(statearr_18764_20161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (4))){
var inst_18706 = (state_18760[(7)]);
var inst_18709 = (state_18760[(8)]);
var inst_18712 = (inst_18709 < inst_18706);
var state_18760__$1 = state_18760;
if(cljs.core.truth_(inst_18712)){
var statearr_18769_20162 = state_18760__$1;
(statearr_18769_20162[(1)] = (6));

} else {
var statearr_18770_20163 = state_18760__$1;
(statearr_18770_20163[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (15))){
var inst_18744 = (state_18760[(9)]);
var inst_18750 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18744);
var state_18760__$1 = state_18760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18760__$1,(17),out,inst_18750);
} else {
if((state_val_18761 === (13))){
var inst_18744 = (state_18760[(9)]);
var inst_18744__$1 = (state_18760[(2)]);
var inst_18745 = cljs.core.some(cljs.core.nil_QMARK_,inst_18744__$1);
var state_18760__$1 = (function (){var statearr_18775 = state_18760;
(statearr_18775[(9)] = inst_18744__$1);

return statearr_18775;
})();
if(cljs.core.truth_(inst_18745)){
var statearr_18776_20165 = state_18760__$1;
(statearr_18776_20165[(1)] = (14));

} else {
var statearr_18777_20166 = state_18760__$1;
(statearr_18777_20166[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (6))){
var state_18760__$1 = state_18760;
var statearr_18778_20167 = state_18760__$1;
(statearr_18778_20167[(2)] = null);

(statearr_18778_20167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (17))){
var inst_18752 = (state_18760[(2)]);
var state_18760__$1 = (function (){var statearr_18788 = state_18760;
(statearr_18788[(10)] = inst_18752);

return statearr_18788;
})();
var statearr_18789_20168 = state_18760__$1;
(statearr_18789_20168[(2)] = null);

(statearr_18789_20168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (3))){
var inst_18758 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18760__$1,inst_18758);
} else {
if((state_val_18761 === (12))){
var _ = (function (){var statearr_18793 = state_18760;
(statearr_18793[(4)] = cljs.core.rest((state_18760[(4)])));

return statearr_18793;
})();
var state_18760__$1 = state_18760;
var ex18787 = (state_18760__$1[(2)]);
var statearr_18795_20170 = state_18760__$1;
(statearr_18795_20170[(5)] = ex18787);


if((ex18787 instanceof Object)){
var statearr_18796_20174 = state_18760__$1;
(statearr_18796_20174[(1)] = (11));

(statearr_18796_20174[(5)] = null);

} else {
throw ex18787;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (2))){
var inst_18705 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18706 = cnt;
var inst_18709 = (0);
var state_18760__$1 = (function (){var statearr_18798 = state_18760;
(statearr_18798[(7)] = inst_18706);

(statearr_18798[(8)] = inst_18709);

(statearr_18798[(11)] = inst_18705);

return statearr_18798;
})();
var statearr_18799_20175 = state_18760__$1;
(statearr_18799_20175[(2)] = null);

(statearr_18799_20175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (11))){
var inst_18721 = (state_18760[(2)]);
var inst_18723 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18760__$1 = (function (){var statearr_18804 = state_18760;
(statearr_18804[(12)] = inst_18721);

return statearr_18804;
})();
var statearr_18805_20176 = state_18760__$1;
(statearr_18805_20176[(2)] = inst_18723);

(statearr_18805_20176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (9))){
var inst_18709 = (state_18760[(8)]);
var _ = (function (){var statearr_18810 = state_18760;
(statearr_18810[(4)] = cljs.core.cons((12),(state_18760[(4)])));

return statearr_18810;
})();
var inst_18729 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18709) : chs__$1.call(null,inst_18709));
var inst_18730 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18709) : done.call(null,inst_18709));
var inst_18731 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18729,inst_18730);
var ___$1 = (function (){var statearr_18811 = state_18760;
(statearr_18811[(4)] = cljs.core.rest((state_18760[(4)])));

return statearr_18811;
})();
var state_18760__$1 = state_18760;
var statearr_18812_20177 = state_18760__$1;
(statearr_18812_20177[(2)] = inst_18731);

(statearr_18812_20177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (5))){
var inst_18741 = (state_18760[(2)]);
var state_18760__$1 = (function (){var statearr_18813 = state_18760;
(statearr_18813[(13)] = inst_18741);

return statearr_18813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18760__$1,(13),dchan);
} else {
if((state_val_18761 === (14))){
var inst_18748 = cljs.core.async.close_BANG_(out);
var state_18760__$1 = state_18760;
var statearr_18818_20178 = state_18760__$1;
(statearr_18818_20178[(2)] = inst_18748);

(statearr_18818_20178[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (16))){
var inst_18756 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
var statearr_18819_20179 = state_18760__$1;
(statearr_18819_20179[(2)] = inst_18756);

(statearr_18819_20179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (10))){
var inst_18709 = (state_18760[(8)]);
var inst_18734 = (state_18760[(2)]);
var inst_18735 = (inst_18709 + (1));
var inst_18709__$1 = inst_18735;
var state_18760__$1 = (function (){var statearr_18823 = state_18760;
(statearr_18823[(14)] = inst_18734);

(statearr_18823[(8)] = inst_18709__$1);

return statearr_18823;
})();
var statearr_18825_20180 = state_18760__$1;
(statearr_18825_20180[(2)] = null);

(statearr_18825_20180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (8))){
var inst_18739 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
var statearr_18826_20181 = state_18760__$1;
(statearr_18826_20181[(2)] = inst_18739);

(statearr_18826_20181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_18830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18830[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_18830[(1)] = (1));

return statearr_18830;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_18760){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18760);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18832){var ex__17103__auto__ = e18832;
var statearr_18833_20182 = state_18760;
(statearr_18833_20182[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18760[(4)]))){
var statearr_18834_20183 = state_18760;
(statearr_18834_20183[(1)] = cljs.core.first((state_18760[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20184 = state_18760;
state_18760 = G__20184;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_18760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_18760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_18835 = f__17239__auto__();
(statearr_18835[(6)] = c__17238__auto___20159);

return statearr_18835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18839 = arguments.length;
switch (G__18839) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17238__auto___20186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_18882){
var state_val_18883 = (state_18882[(1)]);
if((state_val_18883 === (7))){
var inst_18858 = (state_18882[(7)]);
var inst_18859 = (state_18882[(8)]);
var inst_18858__$1 = (state_18882[(2)]);
var inst_18859__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18858__$1,(0),null);
var inst_18860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18858__$1,(1),null);
var inst_18861 = (inst_18859__$1 == null);
var state_18882__$1 = (function (){var statearr_18889 = state_18882;
(statearr_18889[(7)] = inst_18858__$1);

(statearr_18889[(9)] = inst_18860);

(statearr_18889[(8)] = inst_18859__$1);

return statearr_18889;
})();
if(cljs.core.truth_(inst_18861)){
var statearr_18890_20187 = state_18882__$1;
(statearr_18890_20187[(1)] = (8));

} else {
var statearr_18891_20188 = state_18882__$1;
(statearr_18891_20188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18883 === (1))){
var inst_18848 = cljs.core.vec(chs);
var inst_18849 = inst_18848;
var state_18882__$1 = (function (){var statearr_18892 = state_18882;
(statearr_18892[(10)] = inst_18849);

return statearr_18892;
})();
var statearr_18893_20190 = state_18882__$1;
(statearr_18893_20190[(2)] = null);

(statearr_18893_20190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18883 === (4))){
var inst_18849 = (state_18882[(10)]);
var state_18882__$1 = state_18882;
return cljs.core.async.ioc_alts_BANG_(state_18882__$1,(7),inst_18849);
} else {
if((state_val_18883 === (6))){
var inst_18875 = (state_18882[(2)]);
var state_18882__$1 = state_18882;
var statearr_18898_20191 = state_18882__$1;
(statearr_18898_20191[(2)] = inst_18875);

(statearr_18898_20191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18883 === (3))){
var inst_18877 = (state_18882[(2)]);
var state_18882__$1 = state_18882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18882__$1,inst_18877);
} else {
if((state_val_18883 === (2))){
var inst_18849 = (state_18882[(10)]);
var inst_18851 = cljs.core.count(inst_18849);
var inst_18852 = (inst_18851 > (0));
var state_18882__$1 = state_18882;
if(cljs.core.truth_(inst_18852)){
var statearr_18900_20196 = state_18882__$1;
(statearr_18900_20196[(1)] = (4));

} else {
var statearr_18901_20197 = state_18882__$1;
(statearr_18901_20197[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18883 === (11))){
var inst_18849 = (state_18882[(10)]);
var inst_18868 = (state_18882[(2)]);
var tmp18899 = inst_18849;
var inst_18849__$1 = tmp18899;
var state_18882__$1 = (function (){var statearr_18902 = state_18882;
(statearr_18902[(11)] = inst_18868);

(statearr_18902[(10)] = inst_18849__$1);

return statearr_18902;
})();
var statearr_18903_20198 = state_18882__$1;
(statearr_18903_20198[(2)] = null);

(statearr_18903_20198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18883 === (9))){
var inst_18859 = (state_18882[(8)]);
var state_18882__$1 = state_18882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18882__$1,(11),out,inst_18859);
} else {
if((state_val_18883 === (5))){
var inst_18873 = cljs.core.async.close_BANG_(out);
var state_18882__$1 = state_18882;
var statearr_18909_20199 = state_18882__$1;
(statearr_18909_20199[(2)] = inst_18873);

(statearr_18909_20199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18883 === (10))){
var inst_18871 = (state_18882[(2)]);
var state_18882__$1 = state_18882;
var statearr_18910_20200 = state_18882__$1;
(statearr_18910_20200[(2)] = inst_18871);

(statearr_18910_20200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18883 === (8))){
var inst_18858 = (state_18882[(7)]);
var inst_18860 = (state_18882[(9)]);
var inst_18859 = (state_18882[(8)]);
var inst_18849 = (state_18882[(10)]);
var inst_18863 = (function (){var cs = inst_18849;
var vec__18854 = inst_18858;
var v = inst_18859;
var c = inst_18860;
return (function (p1__18837_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18837_SHARP_);
});
})();
var inst_18864 = cljs.core.filterv(inst_18863,inst_18849);
var inst_18849__$1 = inst_18864;
var state_18882__$1 = (function (){var statearr_18911 = state_18882;
(statearr_18911[(10)] = inst_18849__$1);

return statearr_18911;
})();
var statearr_18912_20204 = state_18882__$1;
(statearr_18912_20204[(2)] = null);

(statearr_18912_20204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_18913 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18913[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_18913[(1)] = (1));

return statearr_18913;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_18882){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18882);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18915){var ex__17103__auto__ = e18915;
var statearr_18916_20205 = state_18882;
(statearr_18916_20205[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18882[(4)]))){
var statearr_18918_20206 = state_18882;
(statearr_18918_20206[(1)] = cljs.core.first((state_18882[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20207 = state_18882;
state_18882 = G__20207;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_18882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_18882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_18919 = f__17239__auto__();
(statearr_18919[(6)] = c__17238__auto___20186);

return statearr_18919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18921 = arguments.length;
switch (G__18921) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17238__auto___20213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_18945){
var state_val_18946 = (state_18945[(1)]);
if((state_val_18946 === (7))){
var inst_18927 = (state_18945[(7)]);
var inst_18927__$1 = (state_18945[(2)]);
var inst_18928 = (inst_18927__$1 == null);
var inst_18929 = cljs.core.not(inst_18928);
var state_18945__$1 = (function (){var statearr_18947 = state_18945;
(statearr_18947[(7)] = inst_18927__$1);

return statearr_18947;
})();
if(inst_18929){
var statearr_18948_20214 = state_18945__$1;
(statearr_18948_20214[(1)] = (8));

} else {
var statearr_18949_20215 = state_18945__$1;
(statearr_18949_20215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18946 === (1))){
var inst_18922 = (0);
var state_18945__$1 = (function (){var statearr_18950 = state_18945;
(statearr_18950[(8)] = inst_18922);

return statearr_18950;
})();
var statearr_18951_20216 = state_18945__$1;
(statearr_18951_20216[(2)] = null);

(statearr_18951_20216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18946 === (4))){
var state_18945__$1 = state_18945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18945__$1,(7),ch);
} else {
if((state_val_18946 === (6))){
var inst_18940 = (state_18945[(2)]);
var state_18945__$1 = state_18945;
var statearr_18952_20217 = state_18945__$1;
(statearr_18952_20217[(2)] = inst_18940);

(statearr_18952_20217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18946 === (3))){
var inst_18942 = (state_18945[(2)]);
var inst_18943 = cljs.core.async.close_BANG_(out);
var state_18945__$1 = (function (){var statearr_18953 = state_18945;
(statearr_18953[(9)] = inst_18942);

return statearr_18953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18945__$1,inst_18943);
} else {
if((state_val_18946 === (2))){
var inst_18922 = (state_18945[(8)]);
var inst_18924 = (inst_18922 < n);
var state_18945__$1 = state_18945;
if(cljs.core.truth_(inst_18924)){
var statearr_18954_20218 = state_18945__$1;
(statearr_18954_20218[(1)] = (4));

} else {
var statearr_18955_20219 = state_18945__$1;
(statearr_18955_20219[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18946 === (11))){
var inst_18922 = (state_18945[(8)]);
var inst_18932 = (state_18945[(2)]);
var inst_18933 = (inst_18922 + (1));
var inst_18922__$1 = inst_18933;
var state_18945__$1 = (function (){var statearr_18956 = state_18945;
(statearr_18956[(10)] = inst_18932);

(statearr_18956[(8)] = inst_18922__$1);

return statearr_18956;
})();
var statearr_18957_20220 = state_18945__$1;
(statearr_18957_20220[(2)] = null);

(statearr_18957_20220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18946 === (9))){
var state_18945__$1 = state_18945;
var statearr_18958_20221 = state_18945__$1;
(statearr_18958_20221[(2)] = null);

(statearr_18958_20221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18946 === (5))){
var state_18945__$1 = state_18945;
var statearr_18959_20224 = state_18945__$1;
(statearr_18959_20224[(2)] = null);

(statearr_18959_20224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18946 === (10))){
var inst_18937 = (state_18945[(2)]);
var state_18945__$1 = state_18945;
var statearr_18960_20227 = state_18945__$1;
(statearr_18960_20227[(2)] = inst_18937);

(statearr_18960_20227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18946 === (8))){
var inst_18927 = (state_18945[(7)]);
var state_18945__$1 = state_18945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18945__$1,(11),out,inst_18927);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_18961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18961[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_18961[(1)] = (1));

return statearr_18961;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_18945){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_18945);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e18963){var ex__17103__auto__ = e18963;
var statearr_18964_20229 = state_18945;
(statearr_18964_20229[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_18945[(4)]))){
var statearr_18966_20231 = state_18945;
(statearr_18966_20231[(1)] = cljs.core.first((state_18945[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20232 = state_18945;
state_18945 = G__20232;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_18945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_18945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_18967 = f__17239__auto__();
(statearr_18967[(6)] = c__17238__auto___20213);

return statearr_18967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18974 = (function (f,ch,meta18970,_,fn1,meta18975){
this.f = f;
this.ch = ch;
this.meta18970 = meta18970;
this._ = _;
this.fn1 = fn1;
this.meta18975 = meta18975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18976,meta18975__$1){
var self__ = this;
var _18976__$1 = this;
return (new cljs.core.async.t_cljs$core$async18974(self__.f,self__.ch,self__.meta18970,self__._,self__.fn1,meta18975__$1));
}));

(cljs.core.async.t_cljs$core$async18974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18976){
var self__ = this;
var _18976__$1 = this;
return self__.meta18975;
}));

(cljs.core.async.t_cljs$core$async18974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18968_SHARP_){
var G__18979 = (((p1__18968_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18968_SHARP_) : self__.f.call(null,p1__18968_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18979) : f1.call(null,G__18979));
});
}));

(cljs.core.async.t_cljs$core$async18974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18970","meta18970",-1725589164,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18969","cljs.core.async/t_cljs$core$async18969",504679490,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18975","meta18975",1774169870,null)], null);
}));

(cljs.core.async.t_cljs$core$async18974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18974");

(cljs.core.async.t_cljs$core$async18974.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18974.
 */
cljs.core.async.__GT_t_cljs$core$async18974 = (function cljs$core$async$__GT_t_cljs$core$async18974(f,ch,meta18970,_,fn1,meta18975){
return (new cljs.core.async.t_cljs$core$async18974(f,ch,meta18970,_,fn1,meta18975));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18969 = (function (f,ch,meta18970){
this.f = f;
this.ch = ch;
this.meta18970 = meta18970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18971,meta18970__$1){
var self__ = this;
var _18971__$1 = this;
return (new cljs.core.async.t_cljs$core$async18969(self__.f,self__.ch,meta18970__$1));
}));

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18971){
var self__ = this;
var _18971__$1 = this;
return self__.meta18970;
}));

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18974(self__.f,self__.ch,self__.meta18970,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18980 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18980) : self__.f.call(null,G__18980));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18970","meta18970",-1725589164,null)], null);
}));

(cljs.core.async.t_cljs$core$async18969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18969");

(cljs.core.async.t_cljs$core$async18969.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18969.
 */
cljs.core.async.__GT_t_cljs$core$async18969 = (function cljs$core$async$__GT_t_cljs$core$async18969(f,ch,meta18970){
return (new cljs.core.async.t_cljs$core$async18969(f,ch,meta18970));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18969(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18984 = (function (f,ch,meta18985){
this.f = f;
this.ch = ch;
this.meta18985 = meta18985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18986,meta18985__$1){
var self__ = this;
var _18986__$1 = this;
return (new cljs.core.async.t_cljs$core$async18984(self__.f,self__.ch,meta18985__$1));
}));

(cljs.core.async.t_cljs$core$async18984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18986){
var self__ = this;
var _18986__$1 = this;
return self__.meta18985;
}));

(cljs.core.async.t_cljs$core$async18984.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18984.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18984.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18985","meta18985",1629267367,null)], null);
}));

(cljs.core.async.t_cljs$core$async18984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18984");

(cljs.core.async.t_cljs$core$async18984.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18984.
 */
cljs.core.async.__GT_t_cljs$core$async18984 = (function cljs$core$async$__GT_t_cljs$core$async18984(f,ch,meta18985){
return (new cljs.core.async.t_cljs$core$async18984(f,ch,meta18985));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18984(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18998 = (function (p,ch,meta18999){
this.p = p;
this.ch = ch;
this.meta18999 = meta18999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19000,meta18999__$1){
var self__ = this;
var _19000__$1 = this;
return (new cljs.core.async.t_cljs$core$async18998(self__.p,self__.ch,meta18999__$1));
}));

(cljs.core.async.t_cljs$core$async18998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19000){
var self__ = this;
var _19000__$1 = this;
return self__.meta18999;
}));

(cljs.core.async.t_cljs$core$async18998.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18998.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18998.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18998.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18998.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18998.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18998.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18999","meta18999",-576700908,null)], null);
}));

(cljs.core.async.t_cljs$core$async18998.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18998");

(cljs.core.async.t_cljs$core$async18998.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18998");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18998.
 */
cljs.core.async.__GT_t_cljs$core$async18998 = (function cljs$core$async$__GT_t_cljs$core$async18998(p,ch,meta18999){
return (new cljs.core.async.t_cljs$core$async18998(p,ch,meta18999));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18998(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19034 = arguments.length;
switch (G__19034) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17238__auto___20247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_19055){
var state_val_19056 = (state_19055[(1)]);
if((state_val_19056 === (7))){
var inst_19051 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
var statearr_19061_20248 = state_19055__$1;
(statearr_19061_20248[(2)] = inst_19051);

(statearr_19061_20248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19056 === (1))){
var state_19055__$1 = state_19055;
var statearr_19062_20251 = state_19055__$1;
(statearr_19062_20251[(2)] = null);

(statearr_19062_20251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19056 === (4))){
var inst_19037 = (state_19055[(7)]);
var inst_19037__$1 = (state_19055[(2)]);
var inst_19038 = (inst_19037__$1 == null);
var state_19055__$1 = (function (){var statearr_19063 = state_19055;
(statearr_19063[(7)] = inst_19037__$1);

return statearr_19063;
})();
if(cljs.core.truth_(inst_19038)){
var statearr_19064_20252 = state_19055__$1;
(statearr_19064_20252[(1)] = (5));

} else {
var statearr_19065_20253 = state_19055__$1;
(statearr_19065_20253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19056 === (6))){
var inst_19037 = (state_19055[(7)]);
var inst_19042 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19037) : p.call(null,inst_19037));
var state_19055__$1 = state_19055;
if(cljs.core.truth_(inst_19042)){
var statearr_19066_20255 = state_19055__$1;
(statearr_19066_20255[(1)] = (8));

} else {
var statearr_19067_20256 = state_19055__$1;
(statearr_19067_20256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19056 === (3))){
var inst_19053 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19055__$1,inst_19053);
} else {
if((state_val_19056 === (2))){
var state_19055__$1 = state_19055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19055__$1,(4),ch);
} else {
if((state_val_19056 === (11))){
var inst_19045 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
var statearr_19068_20260 = state_19055__$1;
(statearr_19068_20260[(2)] = inst_19045);

(statearr_19068_20260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19056 === (9))){
var state_19055__$1 = state_19055;
var statearr_19069_20261 = state_19055__$1;
(statearr_19069_20261[(2)] = null);

(statearr_19069_20261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19056 === (5))){
var inst_19040 = cljs.core.async.close_BANG_(out);
var state_19055__$1 = state_19055;
var statearr_19070_20262 = state_19055__$1;
(statearr_19070_20262[(2)] = inst_19040);

(statearr_19070_20262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19056 === (10))){
var inst_19048 = (state_19055[(2)]);
var state_19055__$1 = (function (){var statearr_19071 = state_19055;
(statearr_19071[(8)] = inst_19048);

return statearr_19071;
})();
var statearr_19072_20263 = state_19055__$1;
(statearr_19072_20263[(2)] = null);

(statearr_19072_20263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19056 === (8))){
var inst_19037 = (state_19055[(7)]);
var state_19055__$1 = state_19055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19055__$1,(11),out,inst_19037);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19073 = [null,null,null,null,null,null,null,null,null];
(statearr_19073[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19073[(1)] = (1));

return statearr_19073;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19055){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19055);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19075){var ex__17103__auto__ = e19075;
var statearr_19079_20264 = state_19055;
(statearr_19079_20264[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19055[(4)]))){
var statearr_19080_20265 = state_19055;
(statearr_19080_20265[(1)] = cljs.core.first((state_19055[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20266 = state_19055;
state_19055 = G__20266;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_19081 = f__17239__auto__();
(statearr_19081[(6)] = c__17238__auto___20247);

return statearr_19081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19085 = arguments.length;
switch (G__19085) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_19149){
var state_val_19150 = (state_19149[(1)]);
if((state_val_19150 === (7))){
var inst_19145 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
var statearr_19152_20268 = state_19149__$1;
(statearr_19152_20268[(2)] = inst_19145);

(statearr_19152_20268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (20))){
var inst_19115 = (state_19149[(7)]);
var inst_19126 = (state_19149[(2)]);
var inst_19127 = cljs.core.next(inst_19115);
var inst_19101 = inst_19127;
var inst_19102 = null;
var inst_19103 = (0);
var inst_19104 = (0);
var state_19149__$1 = (function (){var statearr_19154 = state_19149;
(statearr_19154[(8)] = inst_19103);

(statearr_19154[(9)] = inst_19102);

(statearr_19154[(10)] = inst_19126);

(statearr_19154[(11)] = inst_19104);

(statearr_19154[(12)] = inst_19101);

return statearr_19154;
})();
var statearr_19155_20270 = state_19149__$1;
(statearr_19155_20270[(2)] = null);

(statearr_19155_20270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (1))){
var state_19149__$1 = state_19149;
var statearr_19156_20271 = state_19149__$1;
(statearr_19156_20271[(2)] = null);

(statearr_19156_20271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (4))){
var inst_19090 = (state_19149[(13)]);
var inst_19090__$1 = (state_19149[(2)]);
var inst_19091 = (inst_19090__$1 == null);
var state_19149__$1 = (function (){var statearr_19157 = state_19149;
(statearr_19157[(13)] = inst_19090__$1);

return statearr_19157;
})();
if(cljs.core.truth_(inst_19091)){
var statearr_19158_20272 = state_19149__$1;
(statearr_19158_20272[(1)] = (5));

} else {
var statearr_19159_20273 = state_19149__$1;
(statearr_19159_20273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (15))){
var state_19149__$1 = state_19149;
var statearr_19163_20274 = state_19149__$1;
(statearr_19163_20274[(2)] = null);

(statearr_19163_20274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (21))){
var state_19149__$1 = state_19149;
var statearr_19165_20275 = state_19149__$1;
(statearr_19165_20275[(2)] = null);

(statearr_19165_20275[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (13))){
var inst_19103 = (state_19149[(8)]);
var inst_19102 = (state_19149[(9)]);
var inst_19104 = (state_19149[(11)]);
var inst_19101 = (state_19149[(12)]);
var inst_19111 = (state_19149[(2)]);
var inst_19112 = (inst_19104 + (1));
var tmp19160 = inst_19103;
var tmp19161 = inst_19102;
var tmp19162 = inst_19101;
var inst_19101__$1 = tmp19162;
var inst_19102__$1 = tmp19161;
var inst_19103__$1 = tmp19160;
var inst_19104__$1 = inst_19112;
var state_19149__$1 = (function (){var statearr_19170 = state_19149;
(statearr_19170[(8)] = inst_19103__$1);

(statearr_19170[(9)] = inst_19102__$1);

(statearr_19170[(14)] = inst_19111);

(statearr_19170[(11)] = inst_19104__$1);

(statearr_19170[(12)] = inst_19101__$1);

return statearr_19170;
})();
var statearr_19171_20276 = state_19149__$1;
(statearr_19171_20276[(2)] = null);

(statearr_19171_20276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (22))){
var state_19149__$1 = state_19149;
var statearr_19172_20277 = state_19149__$1;
(statearr_19172_20277[(2)] = null);

(statearr_19172_20277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (6))){
var inst_19090 = (state_19149[(13)]);
var inst_19099 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19090) : f.call(null,inst_19090));
var inst_19100 = cljs.core.seq(inst_19099);
var inst_19101 = inst_19100;
var inst_19102 = null;
var inst_19103 = (0);
var inst_19104 = (0);
var state_19149__$1 = (function (){var statearr_19173 = state_19149;
(statearr_19173[(8)] = inst_19103);

(statearr_19173[(9)] = inst_19102);

(statearr_19173[(11)] = inst_19104);

(statearr_19173[(12)] = inst_19101);

return statearr_19173;
})();
var statearr_19174_20282 = state_19149__$1;
(statearr_19174_20282[(2)] = null);

(statearr_19174_20282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (17))){
var inst_19115 = (state_19149[(7)]);
var inst_19119 = cljs.core.chunk_first(inst_19115);
var inst_19120 = cljs.core.chunk_rest(inst_19115);
var inst_19121 = cljs.core.count(inst_19119);
var inst_19101 = inst_19120;
var inst_19102 = inst_19119;
var inst_19103 = inst_19121;
var inst_19104 = (0);
var state_19149__$1 = (function (){var statearr_19175 = state_19149;
(statearr_19175[(8)] = inst_19103);

(statearr_19175[(9)] = inst_19102);

(statearr_19175[(11)] = inst_19104);

(statearr_19175[(12)] = inst_19101);

return statearr_19175;
})();
var statearr_19176_20283 = state_19149__$1;
(statearr_19176_20283[(2)] = null);

(statearr_19176_20283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (3))){
var inst_19147 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19149__$1,inst_19147);
} else {
if((state_val_19150 === (12))){
var inst_19135 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
var statearr_19177_20287 = state_19149__$1;
(statearr_19177_20287[(2)] = inst_19135);

(statearr_19177_20287[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (2))){
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19149__$1,(4),in$);
} else {
if((state_val_19150 === (23))){
var inst_19143 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
var statearr_19178_20288 = state_19149__$1;
(statearr_19178_20288[(2)] = inst_19143);

(statearr_19178_20288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (19))){
var inst_19130 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
var statearr_19179_20289 = state_19149__$1;
(statearr_19179_20289[(2)] = inst_19130);

(statearr_19179_20289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (11))){
var inst_19101 = (state_19149[(12)]);
var inst_19115 = (state_19149[(7)]);
var inst_19115__$1 = cljs.core.seq(inst_19101);
var state_19149__$1 = (function (){var statearr_19180 = state_19149;
(statearr_19180[(7)] = inst_19115__$1);

return statearr_19180;
})();
if(inst_19115__$1){
var statearr_19181_20290 = state_19149__$1;
(statearr_19181_20290[(1)] = (14));

} else {
var statearr_19182_20291 = state_19149__$1;
(statearr_19182_20291[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (9))){
var inst_19137 = (state_19149[(2)]);
var inst_19138 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19149__$1 = (function (){var statearr_19183 = state_19149;
(statearr_19183[(15)] = inst_19137);

return statearr_19183;
})();
if(cljs.core.truth_(inst_19138)){
var statearr_19184_20292 = state_19149__$1;
(statearr_19184_20292[(1)] = (21));

} else {
var statearr_19185_20293 = state_19149__$1;
(statearr_19185_20293[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (5))){
var inst_19093 = cljs.core.async.close_BANG_(out);
var state_19149__$1 = state_19149;
var statearr_19187_20294 = state_19149__$1;
(statearr_19187_20294[(2)] = inst_19093);

(statearr_19187_20294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (14))){
var inst_19115 = (state_19149[(7)]);
var inst_19117 = cljs.core.chunked_seq_QMARK_(inst_19115);
var state_19149__$1 = state_19149;
if(inst_19117){
var statearr_19192_20296 = state_19149__$1;
(statearr_19192_20296[(1)] = (17));

} else {
var statearr_19193_20300 = state_19149__$1;
(statearr_19193_20300[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (16))){
var inst_19133 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
var statearr_19194_20301 = state_19149__$1;
(statearr_19194_20301[(2)] = inst_19133);

(statearr_19194_20301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (10))){
var inst_19102 = (state_19149[(9)]);
var inst_19104 = (state_19149[(11)]);
var inst_19109 = cljs.core._nth(inst_19102,inst_19104);
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19149__$1,(13),out,inst_19109);
} else {
if((state_val_19150 === (18))){
var inst_19115 = (state_19149[(7)]);
var inst_19124 = cljs.core.first(inst_19115);
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19149__$1,(20),out,inst_19124);
} else {
if((state_val_19150 === (8))){
var inst_19103 = (state_19149[(8)]);
var inst_19104 = (state_19149[(11)]);
var inst_19106 = (inst_19104 < inst_19103);
var inst_19107 = inst_19106;
var state_19149__$1 = state_19149;
if(cljs.core.truth_(inst_19107)){
var statearr_19197_20306 = state_19149__$1;
(statearr_19197_20306[(1)] = (10));

} else {
var statearr_19198_20307 = state_19149__$1;
(statearr_19198_20307[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____0 = (function (){
var statearr_19199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19199[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__);

(statearr_19199[(1)] = (1));

return statearr_19199;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____1 = (function (state_19149){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19149);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19201){var ex__17103__auto__ = e19201;
var statearr_19202_20308 = state_19149;
(statearr_19202_20308[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19149[(4)]))){
var statearr_19203_20310 = state_19149;
(statearr_19203_20310[(1)] = cljs.core.first((state_19149[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20313 = state_19149;
state_19149 = G__20313;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__ = function(state_19149){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____1.call(this,state_19149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17100__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_19205 = f__17239__auto__();
(statearr_19205[(6)] = c__17238__auto__);

return statearr_19205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));

return c__17238__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19210 = arguments.length;
switch (G__19210) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19212 = arguments.length;
switch (G__19212) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19218 = arguments.length;
switch (G__19218) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17238__auto___20317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_19246){
var state_val_19247 = (state_19246[(1)]);
if((state_val_19247 === (7))){
var inst_19241 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
var statearr_19248_20318 = state_19246__$1;
(statearr_19248_20318[(2)] = inst_19241);

(statearr_19248_20318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (1))){
var inst_19223 = null;
var state_19246__$1 = (function (){var statearr_19249 = state_19246;
(statearr_19249[(7)] = inst_19223);

return statearr_19249;
})();
var statearr_19250_20319 = state_19246__$1;
(statearr_19250_20319[(2)] = null);

(statearr_19250_20319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (4))){
var inst_19226 = (state_19246[(8)]);
var inst_19226__$1 = (state_19246[(2)]);
var inst_19227 = (inst_19226__$1 == null);
var inst_19228 = cljs.core.not(inst_19227);
var state_19246__$1 = (function (){var statearr_19251 = state_19246;
(statearr_19251[(8)] = inst_19226__$1);

return statearr_19251;
})();
if(inst_19228){
var statearr_19252_20323 = state_19246__$1;
(statearr_19252_20323[(1)] = (5));

} else {
var statearr_19253_20324 = state_19246__$1;
(statearr_19253_20324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (6))){
var state_19246__$1 = state_19246;
var statearr_19254_20325 = state_19246__$1;
(statearr_19254_20325[(2)] = null);

(statearr_19254_20325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (3))){
var inst_19243 = (state_19246[(2)]);
var inst_19244 = cljs.core.async.close_BANG_(out);
var state_19246__$1 = (function (){var statearr_19255 = state_19246;
(statearr_19255[(9)] = inst_19243);

return statearr_19255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19246__$1,inst_19244);
} else {
if((state_val_19247 === (2))){
var state_19246__$1 = state_19246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19246__$1,(4),ch);
} else {
if((state_val_19247 === (11))){
var inst_19226 = (state_19246[(8)]);
var inst_19235 = (state_19246[(2)]);
var inst_19223 = inst_19226;
var state_19246__$1 = (function (){var statearr_19257 = state_19246;
(statearr_19257[(10)] = inst_19235);

(statearr_19257[(7)] = inst_19223);

return statearr_19257;
})();
var statearr_19258_20326 = state_19246__$1;
(statearr_19258_20326[(2)] = null);

(statearr_19258_20326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (9))){
var inst_19226 = (state_19246[(8)]);
var state_19246__$1 = state_19246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19246__$1,(11),out,inst_19226);
} else {
if((state_val_19247 === (5))){
var inst_19226 = (state_19246[(8)]);
var inst_19223 = (state_19246[(7)]);
var inst_19230 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19226,inst_19223);
var state_19246__$1 = state_19246;
if(inst_19230){
var statearr_19261_20327 = state_19246__$1;
(statearr_19261_20327[(1)] = (8));

} else {
var statearr_19262_20328 = state_19246__$1;
(statearr_19262_20328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (10))){
var inst_19238 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
var statearr_19263_20329 = state_19246__$1;
(statearr_19263_20329[(2)] = inst_19238);

(statearr_19263_20329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (8))){
var inst_19223 = (state_19246[(7)]);
var tmp19260 = inst_19223;
var inst_19223__$1 = tmp19260;
var state_19246__$1 = (function (){var statearr_19264 = state_19246;
(statearr_19264[(7)] = inst_19223__$1);

return statearr_19264;
})();
var statearr_19265_20330 = state_19246__$1;
(statearr_19265_20330[(2)] = null);

(statearr_19265_20330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19269[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19269[(1)] = (1));

return statearr_19269;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19246){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19246);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19270){var ex__17103__auto__ = e19270;
var statearr_19271_20331 = state_19246;
(statearr_19271_20331[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19246[(4)]))){
var statearr_19272_20332 = state_19246;
(statearr_19272_20332[(1)] = cljs.core.first((state_19246[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20333 = state_19246;
state_19246 = G__20333;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_19273 = f__17239__auto__();
(statearr_19273[(6)] = c__17238__auto___20317);

return statearr_19273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19275 = arguments.length;
switch (G__19275) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17238__auto___20335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_19313){
var state_val_19314 = (state_19313[(1)]);
if((state_val_19314 === (7))){
var inst_19309 = (state_19313[(2)]);
var state_19313__$1 = state_19313;
var statearr_19315_20336 = state_19313__$1;
(statearr_19315_20336[(2)] = inst_19309);

(statearr_19315_20336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (1))){
var inst_19276 = (new Array(n));
var inst_19277 = inst_19276;
var inst_19278 = (0);
var state_19313__$1 = (function (){var statearr_19316 = state_19313;
(statearr_19316[(7)] = inst_19277);

(statearr_19316[(8)] = inst_19278);

return statearr_19316;
})();
var statearr_19317_20337 = state_19313__$1;
(statearr_19317_20337[(2)] = null);

(statearr_19317_20337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (4))){
var inst_19281 = (state_19313[(9)]);
var inst_19281__$1 = (state_19313[(2)]);
var inst_19282 = (inst_19281__$1 == null);
var inst_19283 = cljs.core.not(inst_19282);
var state_19313__$1 = (function (){var statearr_19318 = state_19313;
(statearr_19318[(9)] = inst_19281__$1);

return statearr_19318;
})();
if(inst_19283){
var statearr_19319_20338 = state_19313__$1;
(statearr_19319_20338[(1)] = (5));

} else {
var statearr_19320_20339 = state_19313__$1;
(statearr_19320_20339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (15))){
var inst_19303 = (state_19313[(2)]);
var state_19313__$1 = state_19313;
var statearr_19321_20340 = state_19313__$1;
(statearr_19321_20340[(2)] = inst_19303);

(statearr_19321_20340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (13))){
var state_19313__$1 = state_19313;
var statearr_19322_20344 = state_19313__$1;
(statearr_19322_20344[(2)] = null);

(statearr_19322_20344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (6))){
var inst_19278 = (state_19313[(8)]);
var inst_19299 = (inst_19278 > (0));
var state_19313__$1 = state_19313;
if(cljs.core.truth_(inst_19299)){
var statearr_19323_20345 = state_19313__$1;
(statearr_19323_20345[(1)] = (12));

} else {
var statearr_19324_20346 = state_19313__$1;
(statearr_19324_20346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (3))){
var inst_19311 = (state_19313[(2)]);
var state_19313__$1 = state_19313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19313__$1,inst_19311);
} else {
if((state_val_19314 === (12))){
var inst_19277 = (state_19313[(7)]);
var inst_19301 = cljs.core.vec(inst_19277);
var state_19313__$1 = state_19313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19313__$1,(15),out,inst_19301);
} else {
if((state_val_19314 === (2))){
var state_19313__$1 = state_19313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19313__$1,(4),ch);
} else {
if((state_val_19314 === (11))){
var inst_19293 = (state_19313[(2)]);
var inst_19294 = (new Array(n));
var inst_19277 = inst_19294;
var inst_19278 = (0);
var state_19313__$1 = (function (){var statearr_19325 = state_19313;
(statearr_19325[(7)] = inst_19277);

(statearr_19325[(10)] = inst_19293);

(statearr_19325[(8)] = inst_19278);

return statearr_19325;
})();
var statearr_19326_20354 = state_19313__$1;
(statearr_19326_20354[(2)] = null);

(statearr_19326_20354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (9))){
var inst_19277 = (state_19313[(7)]);
var inst_19291 = cljs.core.vec(inst_19277);
var state_19313__$1 = state_19313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19313__$1,(11),out,inst_19291);
} else {
if((state_val_19314 === (5))){
var inst_19277 = (state_19313[(7)]);
var inst_19278 = (state_19313[(8)]);
var inst_19286 = (state_19313[(11)]);
var inst_19281 = (state_19313[(9)]);
var inst_19285 = (inst_19277[inst_19278] = inst_19281);
var inst_19286__$1 = (inst_19278 + (1));
var inst_19287 = (inst_19286__$1 < n);
var state_19313__$1 = (function (){var statearr_19327 = state_19313;
(statearr_19327[(12)] = inst_19285);

(statearr_19327[(11)] = inst_19286__$1);

return statearr_19327;
})();
if(cljs.core.truth_(inst_19287)){
var statearr_19328_20357 = state_19313__$1;
(statearr_19328_20357[(1)] = (8));

} else {
var statearr_19329_20359 = state_19313__$1;
(statearr_19329_20359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (14))){
var inst_19306 = (state_19313[(2)]);
var inst_19307 = cljs.core.async.close_BANG_(out);
var state_19313__$1 = (function (){var statearr_19331 = state_19313;
(statearr_19331[(13)] = inst_19306);

return statearr_19331;
})();
var statearr_19332_20360 = state_19313__$1;
(statearr_19332_20360[(2)] = inst_19307);

(statearr_19332_20360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (10))){
var inst_19297 = (state_19313[(2)]);
var state_19313__$1 = state_19313;
var statearr_19333_20364 = state_19313__$1;
(statearr_19333_20364[(2)] = inst_19297);

(statearr_19333_20364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (8))){
var inst_19277 = (state_19313[(7)]);
var inst_19286 = (state_19313[(11)]);
var tmp19330 = inst_19277;
var inst_19277__$1 = tmp19330;
var inst_19278 = inst_19286;
var state_19313__$1 = (function (){var statearr_19334 = state_19313;
(statearr_19334[(7)] = inst_19277__$1);

(statearr_19334[(8)] = inst_19278);

return statearr_19334;
})();
var statearr_19335_20365 = state_19313__$1;
(statearr_19335_20365[(2)] = null);

(statearr_19335_20365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19336[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19336[(1)] = (1));

return statearr_19336;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19313){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19313);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19337){var ex__17103__auto__ = e19337;
var statearr_19338_20369 = state_19313;
(statearr_19338_20369[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19313[(4)]))){
var statearr_19339_20370 = state_19313;
(statearr_19339_20370[(1)] = cljs.core.first((state_19313[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20371 = state_19313;
state_19313 = G__20371;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_19341 = f__17239__auto__();
(statearr_19341[(6)] = c__17238__auto___20335);

return statearr_19341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19343 = arguments.length;
switch (G__19343) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17238__auto___20376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17239__auto__ = (function (){var switch__17099__auto__ = (function (state_19391){
var state_val_19392 = (state_19391[(1)]);
if((state_val_19392 === (7))){
var inst_19387 = (state_19391[(2)]);
var state_19391__$1 = state_19391;
var statearr_19397_20377 = state_19391__$1;
(statearr_19397_20377[(2)] = inst_19387);

(statearr_19397_20377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (1))){
var inst_19347 = [];
var inst_19348 = inst_19347;
var inst_19349 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19391__$1 = (function (){var statearr_19398 = state_19391;
(statearr_19398[(7)] = inst_19348);

(statearr_19398[(8)] = inst_19349);

return statearr_19398;
})();
var statearr_19399_20378 = state_19391__$1;
(statearr_19399_20378[(2)] = null);

(statearr_19399_20378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (4))){
var inst_19352 = (state_19391[(9)]);
var inst_19352__$1 = (state_19391[(2)]);
var inst_19353 = (inst_19352__$1 == null);
var inst_19354 = cljs.core.not(inst_19353);
var state_19391__$1 = (function (){var statearr_19400 = state_19391;
(statearr_19400[(9)] = inst_19352__$1);

return statearr_19400;
})();
if(inst_19354){
var statearr_19401_20380 = state_19391__$1;
(statearr_19401_20380[(1)] = (5));

} else {
var statearr_19402_20381 = state_19391__$1;
(statearr_19402_20381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (15))){
var inst_19348 = (state_19391[(7)]);
var inst_19379 = cljs.core.vec(inst_19348);
var state_19391__$1 = state_19391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19391__$1,(18),out,inst_19379);
} else {
if((state_val_19392 === (13))){
var inst_19374 = (state_19391[(2)]);
var state_19391__$1 = state_19391;
var statearr_19403_20382 = state_19391__$1;
(statearr_19403_20382[(2)] = inst_19374);

(statearr_19403_20382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (6))){
var inst_19348 = (state_19391[(7)]);
var inst_19376 = inst_19348.length;
var inst_19377 = (inst_19376 > (0));
var state_19391__$1 = state_19391;
if(cljs.core.truth_(inst_19377)){
var statearr_19404_20383 = state_19391__$1;
(statearr_19404_20383[(1)] = (15));

} else {
var statearr_19405_20384 = state_19391__$1;
(statearr_19405_20384[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (17))){
var inst_19384 = (state_19391[(2)]);
var inst_19385 = cljs.core.async.close_BANG_(out);
var state_19391__$1 = (function (){var statearr_19406 = state_19391;
(statearr_19406[(10)] = inst_19384);

return statearr_19406;
})();
var statearr_19407_20388 = state_19391__$1;
(statearr_19407_20388[(2)] = inst_19385);

(statearr_19407_20388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (3))){
var inst_19389 = (state_19391[(2)]);
var state_19391__$1 = state_19391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19391__$1,inst_19389);
} else {
if((state_val_19392 === (12))){
var inst_19348 = (state_19391[(7)]);
var inst_19367 = cljs.core.vec(inst_19348);
var state_19391__$1 = state_19391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19391__$1,(14),out,inst_19367);
} else {
if((state_val_19392 === (2))){
var state_19391__$1 = state_19391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19391__$1,(4),ch);
} else {
if((state_val_19392 === (11))){
var inst_19348 = (state_19391[(7)]);
var inst_19356 = (state_19391[(11)]);
var inst_19352 = (state_19391[(9)]);
var inst_19364 = inst_19348.push(inst_19352);
var tmp19408 = inst_19348;
var inst_19348__$1 = tmp19408;
var inst_19349 = inst_19356;
var state_19391__$1 = (function (){var statearr_19409 = state_19391;
(statearr_19409[(12)] = inst_19364);

(statearr_19409[(7)] = inst_19348__$1);

(statearr_19409[(8)] = inst_19349);

return statearr_19409;
})();
var statearr_19410_20401 = state_19391__$1;
(statearr_19410_20401[(2)] = null);

(statearr_19410_20401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (9))){
var inst_19349 = (state_19391[(8)]);
var inst_19360 = cljs.core.keyword_identical_QMARK_(inst_19349,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19391__$1 = state_19391;
var statearr_19411_20402 = state_19391__$1;
(statearr_19411_20402[(2)] = inst_19360);

(statearr_19411_20402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (5))){
var inst_19349 = (state_19391[(8)]);
var inst_19356 = (state_19391[(11)]);
var inst_19352 = (state_19391[(9)]);
var inst_19357 = (state_19391[(13)]);
var inst_19356__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19352) : f.call(null,inst_19352));
var inst_19357__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19356__$1,inst_19349);
var state_19391__$1 = (function (){var statearr_19412 = state_19391;
(statearr_19412[(11)] = inst_19356__$1);

(statearr_19412[(13)] = inst_19357__$1);

return statearr_19412;
})();
if(inst_19357__$1){
var statearr_19413_20407 = state_19391__$1;
(statearr_19413_20407[(1)] = (8));

} else {
var statearr_19414_20408 = state_19391__$1;
(statearr_19414_20408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (14))){
var inst_19356 = (state_19391[(11)]);
var inst_19352 = (state_19391[(9)]);
var inst_19369 = (state_19391[(2)]);
var inst_19370 = [];
var inst_19371 = inst_19370.push(inst_19352);
var inst_19348 = inst_19370;
var inst_19349 = inst_19356;
var state_19391__$1 = (function (){var statearr_19415 = state_19391;
(statearr_19415[(7)] = inst_19348);

(statearr_19415[(14)] = inst_19371);

(statearr_19415[(8)] = inst_19349);

(statearr_19415[(15)] = inst_19369);

return statearr_19415;
})();
var statearr_19423_20413 = state_19391__$1;
(statearr_19423_20413[(2)] = null);

(statearr_19423_20413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (16))){
var state_19391__$1 = state_19391;
var statearr_19431_20414 = state_19391__$1;
(statearr_19431_20414[(2)] = null);

(statearr_19431_20414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (10))){
var inst_19362 = (state_19391[(2)]);
var state_19391__$1 = state_19391;
if(cljs.core.truth_(inst_19362)){
var statearr_19432_20415 = state_19391__$1;
(statearr_19432_20415[(1)] = (11));

} else {
var statearr_19433_20416 = state_19391__$1;
(statearr_19433_20416[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (18))){
var inst_19381 = (state_19391[(2)]);
var state_19391__$1 = state_19391;
var statearr_19440_20417 = state_19391__$1;
(statearr_19440_20417[(2)] = inst_19381);

(statearr_19440_20417[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (8))){
var inst_19357 = (state_19391[(13)]);
var state_19391__$1 = state_19391;
var statearr_19441_20418 = state_19391__$1;
(statearr_19441_20418[(2)] = inst_19357);

(statearr_19441_20418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17100__auto__ = null;
var cljs$core$async$state_machine__17100__auto____0 = (function (){
var statearr_19442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19442[(0)] = cljs$core$async$state_machine__17100__auto__);

(statearr_19442[(1)] = (1));

return statearr_19442;
});
var cljs$core$async$state_machine__17100__auto____1 = (function (state_19391){
while(true){
var ret_value__17101__auto__ = (function (){try{while(true){
var result__17102__auto__ = switch__17099__auto__(state_19391);
if(cljs.core.keyword_identical_QMARK_(result__17102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17102__auto__;
}
break;
}
}catch (e19443){var ex__17103__auto__ = e19443;
var statearr_19444_20419 = state_19391;
(statearr_19444_20419[(2)] = ex__17103__auto__);


if(cljs.core.seq((state_19391[(4)]))){
var statearr_19445_20420 = state_19391;
(statearr_19445_20420[(1)] = cljs.core.first((state_19391[(4)])));

} else {
throw ex__17103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20427 = state_19391;
state_19391 = G__20427;
continue;
} else {
return ret_value__17101__auto__;
}
break;
}
});
cljs$core$async$state_machine__17100__auto__ = function(state_19391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17100__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17100__auto____1.call(this,state_19391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17100__auto____0;
cljs$core$async$state_machine__17100__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17100__auto____1;
return cljs$core$async$state_machine__17100__auto__;
})()
})();
var state__17240__auto__ = (function (){var statearr_19460 = f__17239__auto__();
(statearr_19460[(6)] = c__17238__auto___20376);

return statearr_19460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17240__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
