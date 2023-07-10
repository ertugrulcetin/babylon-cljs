goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13226 = arguments.length;
var i__5770__auto___13227 = (0);
while(true){
if((i__5770__auto___13227 < len__5769__auto___13226)){
args__5775__auto__.push((arguments[i__5770__auto___13227]));

var G__13228 = (i__5770__auto___13227 + (1));
i__5770__auto___13227 = G__13228;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__13136_13229 = keyvals;
var vec__13137_13230 = G__13136_13229;
var seq__13138_13231 = cljs.core.seq(vec__13137_13230);
var first__13139_13232 = cljs.core.first(seq__13138_13231);
var seq__13138_13233__$1 = cljs.core.next(seq__13138_13231);
var k_13234 = first__13139_13232;
var first__13139_13235__$1 = cljs.core.first(seq__13138_13233__$1);
var seq__13138_13236__$2 = cljs.core.next(seq__13138_13233__$1);
var v_13237 = first__13139_13235__$1;
var keyvals_13238__$1 = seq__13138_13236__$2;
var G__13136_13239__$1 = G__13136_13229;
while(true){
var vec__13140_13240 = G__13136_13239__$1;
var seq__13141_13241 = cljs.core.seq(vec__13140_13240);
var first__13142_13242 = cljs.core.first(seq__13141_13241);
var seq__13141_13243__$1 = cljs.core.next(seq__13141_13241);
var k_13244__$1 = first__13142_13242;
var first__13142_13245__$1 = cljs.core.first(seq__13141_13243__$1);
var seq__13141_13246__$2 = cljs.core.next(seq__13141_13243__$1);
var v_13247__$1 = first__13142_13245__$1;
var keyvals_13248__$2 = seq__13141_13246__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_13244__$1)] = v_13247__$1);

if(keyvals_13248__$2){
var G__13249 = keyvals_13248__$2;
G__13136_13239__$1 = G__13249;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq13131){
var G__13132 = cljs.core.first(seq13131);
var seq13131__$1 = cljs.core.next(seq13131);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13132,seq13131__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__13144 = arguments.length;
switch (G__13144) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj13145 = obj;
if((!((obj13145 == null)))){
return (obj13145[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj13146 = obj;
if((!((obj13146 == null)))){
return (obj13146[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__12862__auto__ = (function (){var obj13147 = obj;
if((!((obj13147 == null)))){
return (obj13147[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__12862__auto__)){
return not_found;
} else {
return val__12862__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__13149 = arguments.length;
switch (G__13149) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj13150 = self__.obj;
if((!((obj13150 == null)))){
return (obj13150[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__12862__auto__ = (function (){var obj13151 = self__.obj;
if((!((obj13151 == null)))){
return (obj13151[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__12862__auto__)){
return not_found;
} else {
return val__12862__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13252 = arguments.length;
var i__5770__auto___13253 = (0);
while(true){
if((i__5770__auto___13253 < len__5769__auto___13252)){
args__5775__auto__.push((arguments[i__5770__auto___13253]));

var G__13254 = (i__5770__auto___13253 + (1));
i__5770__auto___13253 = G__13254;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__13157 = keyvals;
var vec__13158 = G__13157;
var seq__13159 = cljs.core.seq(vec__13158);
var first__13160 = cljs.core.first(seq__13159);
var seq__13159__$1 = cljs.core.next(seq__13159);
var k = first__13160;
var first__13160__$1 = cljs.core.first(seq__13159__$1);
var seq__13159__$2 = cljs.core.next(seq__13159__$1);
var v = first__13160__$1;
var kvs = seq__13159__$2;
var G__13157__$1 = G__13157;
while(true){
var vec__13161 = G__13157__$1;
var seq__13162 = cljs.core.seq(vec__13161);
var first__13163 = cljs.core.first(seq__13162);
var seq__13162__$1 = cljs.core.next(seq__13162);
var k__$1 = first__13163;
var first__13163__$1 = cljs.core.first(seq__13162__$1);
var seq__13162__$2 = cljs.core.next(seq__13162__$1);
var v__$1 = first__13163__$1;
var kvs__$1 = seq__13162__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__13255 = kvs__$1;
G__13157__$1 = G__13255;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq13152){
var G__13153 = cljs.core.first(seq13152);
var seq13152__$1 = cljs.core.next(seq13152);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13153,seq13152__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13256 = arguments.length;
var i__5770__auto___13257 = (0);
while(true){
if((i__5770__auto___13257 < len__5769__auto___13256)){
args__5775__auto__.push((arguments[i__5770__auto___13257]));

var G__13258 = (i__5770__auto___13257 + (1));
i__5770__auto___13257 = G__13258;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq13164){
var G__13165 = cljs.core.first(seq13164);
var seq13164__$1 = cljs.core.next(seq13164);
var G__13166 = cljs.core.first(seq13164__$1);
var seq13164__$2 = cljs.core.next(seq13164__$1);
var G__13167 = cljs.core.first(seq13164__$2);
var seq13164__$3 = cljs.core.next(seq13164__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13165,G__13166,G__13167,seq13164__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13259 = arguments.length;
var i__5770__auto___13260 = (0);
while(true){
if((i__5770__auto___13260 < len__5769__auto___13259)){
args__5775__auto__.push((arguments[i__5770__auto___13260]));

var G__13261 = (i__5770__auto___13260 + (1));
i__5770__auto___13260 = G__13261;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq13168){
var G__13169 = cljs.core.first(seq13168);
var seq13168__$1 = cljs.core.next(seq13168);
var G__13170 = cljs.core.first(seq13168__$1);
var seq13168__$2 = cljs.core.next(seq13168__$1);
var G__13171 = cljs.core.first(seq13168__$2);
var seq13168__$3 = cljs.core.next(seq13168__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13169,G__13170,G__13171,seq13168__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__13176 = arguments.length;
switch (G__13176) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___13264 = arguments.length;
var i__5770__auto___13265 = (0);
while(true){
if((i__5770__auto___13265 < len__5769__auto___13264)){
args_arr__5794__auto__.push((arguments[i__5770__auto___13265]));

var G__13266 = (i__5770__auto___13265 + (1));
i__5770__auto___13265 = G__13266;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__13177_13267 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__13178_13268 = null;
var count__13179_13269 = (0);
var i__13180_13270 = (0);
while(true){
if((i__13180_13270 < count__13179_13269)){
var k_13271 = chunk__13178_13268.cljs$core$IIndexed$_nth$arity$2(null,i__13180_13270);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_13271,applied_science.js_interop.unchecked_get(x,k_13271)], 0));


var G__13272 = seq__13177_13267;
var G__13273 = chunk__13178_13268;
var G__13274 = count__13179_13269;
var G__13275 = (i__13180_13270 + (1));
seq__13177_13267 = G__13272;
chunk__13178_13268 = G__13273;
count__13179_13269 = G__13274;
i__13180_13270 = G__13275;
continue;
} else {
var temp__5804__auto___13276 = cljs.core.seq(seq__13177_13267);
if(temp__5804__auto___13276){
var seq__13177_13277__$1 = temp__5804__auto___13276;
if(cljs.core.chunked_seq_QMARK_(seq__13177_13277__$1)){
var c__5568__auto___13278 = cljs.core.chunk_first(seq__13177_13277__$1);
var G__13279 = cljs.core.chunk_rest(seq__13177_13277__$1);
var G__13280 = c__5568__auto___13278;
var G__13281 = cljs.core.count(c__5568__auto___13278);
var G__13282 = (0);
seq__13177_13267 = G__13279;
chunk__13178_13268 = G__13280;
count__13179_13269 = G__13281;
i__13180_13270 = G__13282;
continue;
} else {
var k_13283 = cljs.core.first(seq__13177_13277__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_13283,applied_science.js_interop.unchecked_get(x,k_13283)], 0));


var G__13284 = cljs.core.next(seq__13177_13277__$1);
var G__13285 = null;
var G__13286 = (0);
var G__13287 = (0);
seq__13177_13267 = G__13284;
chunk__13178_13268 = G__13285;
count__13179_13269 = G__13286;
i__13180_13270 = G__13287;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq13173){
var G__13174 = cljs.core.first(seq13173);
var seq13173__$1 = cljs.core.next(seq13173);
var G__13175 = cljs.core.first(seq13173__$1);
var seq13173__$2 = cljs.core.next(seq13173__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13174,G__13175,seq13173__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__13181 = array;
G__13181.push(x);

return G__13181;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__13182 = array;
G__13182.unshift(x);

return G__13182;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13288 = arguments.length;
var i__5770__auto___13289 = (0);
while(true){
if((i__5770__auto___13289 < len__5769__auto___13288)){
args__5775__auto__.push((arguments[i__5770__auto___13289]));

var G__13290 = (i__5770__auto___13289 + (1));
i__5770__auto___13289 = G__13290;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj13186 = obj;
if((!((obj13186 == null)))){
return (obj13186[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq13183){
var G__13184 = cljs.core.first(seq13183);
var seq13183__$1 = cljs.core.next(seq13183);
var G__13185 = cljs.core.first(seq13183__$1);
var seq13183__$2 = cljs.core.next(seq13183__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13184,G__13185,seq13183__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj13187 = obj;
if((!((obj13187 == null)))){
return (obj13187[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13291 = arguments.length;
var i__5770__auto___13292 = (0);
while(true){
if((i__5770__auto___13292 < len__5769__auto___13291)){
args__5775__auto__.push((arguments[i__5770__auto___13292]));

var G__13293 = (i__5770__auto___13292 + (1));
i__5770__auto___13292 = G__13293;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq13188){
var G__13189 = cljs.core.first(seq13188);
var seq13188__$1 = cljs.core.next(seq13188);
var G__13190 = cljs.core.first(seq13188__$1);
var seq13188__$2 = cljs.core.next(seq13188__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13189,G__13190,seq13188__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13294 = arguments.length;
var i__5770__auto___13295 = (0);
while(true){
if((i__5770__auto___13295 < len__5769__auto___13294)){
args__5775__auto__.push((arguments[i__5770__auto___13295]));

var G__13296 = (i__5770__auto___13295 + (1));
i__5770__auto___13295 = G__13296;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__13194_13297 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__13195_13298 = null;
var count__13196_13299 = (0);
var i__13197_13300 = (0);
while(true){
if((i__13197_13300 < count__13196_13299)){
var vec__13212_13301 = chunk__13195_13298.cljs$core$IIndexed$_nth$arity$2(null,i__13197_13300);
var k_13302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13212_13301,(0),null);
var v_13303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13212_13301,(1),null);
var obj13215_13304 = obj;
var obj13216_13305 = (((!((obj13215_13304 == null))))?obj13215_13304:({}));
(obj13216_13305[applied_science.js_interop.impl.wrap_key(k_13302)] = v_13303);



var G__13306 = seq__13194_13297;
var G__13307 = chunk__13195_13298;
var G__13308 = count__13196_13299;
var G__13309 = (i__13197_13300 + (1));
seq__13194_13297 = G__13306;
chunk__13195_13298 = G__13307;
count__13196_13299 = G__13308;
i__13197_13300 = G__13309;
continue;
} else {
var temp__5804__auto___13310 = cljs.core.seq(seq__13194_13297);
if(temp__5804__auto___13310){
var seq__13194_13311__$1 = temp__5804__auto___13310;
if(cljs.core.chunked_seq_QMARK_(seq__13194_13311__$1)){
var c__5568__auto___13312 = cljs.core.chunk_first(seq__13194_13311__$1);
var G__13313 = cljs.core.chunk_rest(seq__13194_13311__$1);
var G__13314 = c__5568__auto___13312;
var G__13315 = cljs.core.count(c__5568__auto___13312);
var G__13316 = (0);
seq__13194_13297 = G__13313;
chunk__13195_13298 = G__13314;
count__13196_13299 = G__13315;
i__13197_13300 = G__13316;
continue;
} else {
var vec__13219_13317 = cljs.core.first(seq__13194_13311__$1);
var k_13318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13219_13317,(0),null);
var v_13319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13219_13317,(1),null);
var obj13222_13320 = obj;
var obj13223_13321 = (((!((obj13222_13320 == null))))?obj13222_13320:({}));
(obj13223_13321[applied_science.js_interop.impl.wrap_key(k_13318)] = v_13319);



var G__13322 = cljs.core.next(seq__13194_13311__$1);
var G__13323 = null;
var G__13324 = (0);
var G__13325 = (0);
seq__13194_13297 = G__13322;
chunk__13195_13298 = G__13323;
count__13196_13299 = G__13324;
i__13197_13300 = G__13325;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq13191){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13191));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
