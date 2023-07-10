goog.provide('main.core');
var module$node_modules$babylonjs$babylon=shadow.js.require("module$node_modules$babylonjs$babylon", {});
var module$node_modules$babylonjs_materials$babylonjs_materials=shadow.js.require("module$node_modules$babylonjs_materials$babylonjs_materials", {});
var module$vendor$havok=shadow.js.require("module$vendor$havok", {});
if((typeof main !== 'undefined') && (typeof main.core !== 'undefined') && (typeof main.core.db !== 'undefined')){
} else {
main.core.db = ({});
}
main.core.create_engine = (function main$core$create_engine(canvas){
var e = (new module$node_modules$babylonjs$babylon.Engine(canvas,true,({"preserveDrawingBuffer": true, "stencil": true})));
var obj107263_107433 = main.core.db;
var obj107264_107434 = (function (){var obj107265 = (((!((obj107263_107433 == null))))?obj107263_107433:({}));
(obj107265["engine"] = e);

return obj107265;
})();
(obj107264_107434["canvas"] = canvas);


return e;
});
main.core.create_scene = (function main$core$create_scene(engine){
var s = (new module$node_modules$babylonjs$babylon.Scene(engine));
var obj107268_107435 = main.core.db;
var obj107269_107436 = (((!((obj107268_107435 == null))))?obj107268_107435:({}));
(obj107269_107436["scene"] = s);


return s;
});
main.core.v3 = (function main$core$v3(var_args){
var G__107273 = arguments.length;
switch (G__107273) {
case 0:
return main.core.v3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return main.core.v3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return main.core.v3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(main.core.v3.cljs$core$IFn$_invoke$arity$0 = (function (){
return main.core.v3.cljs$core$IFn$_invoke$arity$1((0));
}));

(main.core.v3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (new module$node_modules$babylonjs$babylon.Vector3(n,n,n));
}));

(main.core.v3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return (new module$node_modules$babylonjs$babylon.Vector3(x,y,z));
}));

(main.core.v3.cljs$lang$maxFixedArity = 3);

main.core.color = (function main$core$color(r,g,b){
return (new module$node_modules$babylonjs$babylon.Color3(r,g,b));
});
main.core.box = (function main$core$box(var_args){
var args__5775__auto__ = [];
var len__5769__auto___107438 = arguments.length;
var i__5770__auto___107439 = (0);
while(true){
if((i__5770__auto___107439 < len__5769__auto___107438)){
args__5775__auto__.push((arguments[i__5770__auto___107439]));

var G__107440 = (i__5770__auto___107439 + (1));
i__5770__auto___107439 = G__107440;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return main.core.box.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(main.core.box.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__107276){
var map__107277 = p__107276;
var map__107277__$1 = cljs.core.__destructure_map(map__107277);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107277__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var obj__12045__auto__ = module$node_modules$babylonjs$babylon.MeshBuilder;
var f__12046__auto__ = (obj__12045__auto__["CreateBox"]);
return f__12046__auto__.call(obj__12045__auto__,name,({"size": size}));
}));

(main.core.box.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(main.core.box.cljs$lang$applyTo = (function (seq107274){
var G__107275 = cljs.core.first(seq107274);
var seq107274__$1 = cljs.core.next(seq107274);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__107275,seq107274__$1);
}));

main.core.capsule = (function main$core$capsule(var_args){
var args__5775__auto__ = [];
var len__5769__auto___107441 = arguments.length;
var i__5770__auto___107442 = (0);
while(true){
if((i__5770__auto___107442 < len__5769__auto___107441)){
args__5775__auto__.push((arguments[i__5770__auto___107442]));

var G__107443 = (i__5770__auto___107442 + (1));
i__5770__auto___107442 = G__107443;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return main.core.capsule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(main.core.capsule.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__107280){
var map__107281 = p__107280;
var map__107281__$1 = cljs.core.__destructure_map(map__107281);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107281__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107281__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var obj__12045__auto__ = module$node_modules$babylonjs$babylon.MeshBuilder;
var f__12046__auto__ = (obj__12045__auto__["CreateCapsule"]);
return f__12046__auto__.call(obj__12045__auto__,name,({"height": height, "radius": radius}));
}));

(main.core.capsule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(main.core.capsule.cljs$lang$applyTo = (function (seq107278){
var G__107279 = cljs.core.first(seq107278);
var seq107278__$1 = cljs.core.next(seq107278);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__107279,seq107278__$1);
}));

main.core.create_action_manager = (function main$core$create_action_manager(obj){
var am = (new module$node_modules$babylonjs$babylon.ActionManager());
var obj107282_107444 = obj;
var obj107283_107445 = (((!((obj107282_107444 == null))))?obj107282_107444:({}));
(obj107283_107445["actionManager"] = am);


return am;
});
main.core.register_action = (function main$core$register_action(action_manager,type,callback){
var obj__12045__auto__ = action_manager;
var f__12046__auto__ = (obj__12045__auto__["registerAction"]);
return f__12046__auto__.call(obj__12045__auto__,(new module$node_modules$babylonjs$babylon.ExecuteCodeAction((function (){var obj107286 = module$node_modules$babylonjs$babylon.ActionManager;
if((!((obj107286 == null)))){
return (obj107286[cljs.core.name(type)]);
} else {
return undefined;
}
})(),callback)));
});
main.core.create_ground = (function main$core$create_ground(var_args){
var args__5775__auto__ = [];
var len__5769__auto___107446 = arguments.length;
var i__5770__auto___107447 = (0);
while(true){
if((i__5770__auto___107447 < len__5769__auto___107446)){
args__5775__auto__.push((arguments[i__5770__auto___107447]));

var G__107448 = (i__5770__auto___107447 + (1));
i__5770__auto___107447 = G__107448;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return main.core.create_ground.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(main.core.create_ground.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__107289){
var map__107290 = p__107289;
var map__107290__$1 = cljs.core.__destructure_map(map__107290);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107290__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107290__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var obj__12045__auto__ = module$node_modules$babylonjs$babylon.MeshBuilder;
var f__12046__auto__ = (obj__12045__auto__["CreateGround"]);
return f__12046__auto__.call(obj__12045__auto__,name,({"width": width, "height": height}));
}));

(main.core.create_ground.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(main.core.create_ground.cljs$lang$applyTo = (function (seq107287){
var G__107288 = cljs.core.first(seq107287);
var seq107287__$1 = cljs.core.next(seq107287);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__107288,seq107287__$1);
}));

main.core.create_ground_from_hm = (function main$core$create_ground_from_hm(var_args){
var args__5775__auto__ = [];
var len__5769__auto___107449 = arguments.length;
var i__5770__auto___107450 = (0);
while(true){
if((i__5770__auto___107450 < len__5769__auto___107449)){
args__5775__auto__.push((arguments[i__5770__auto___107450]));

var G__107451 = (i__5770__auto___107450 + (1));
i__5770__auto___107450 = G__107451;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return main.core.create_ground_from_hm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(main.core.create_ground_from_hm.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__107293){
var map__107294 = p__107293;
var map__107294__$1 = cljs.core.__destructure_map(map__107294);
var texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107294__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
var subdivisions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107294__$1,new cljs.core.Keyword(null,"subdivisions","subdivisions",-926538536));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107294__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107294__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107294__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107294__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var on_ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107294__$1,new cljs.core.Keyword(null,"on-ready","on-ready",628441937));
var obj__12045__auto__ = module$node_modules$babylonjs$babylon.MeshBuilder;
var f__12046__auto__ = (obj__12045__auto__["CreateGroundFromHeightMap"]);
return f__12046__auto__.call(obj__12045__auto__,name,texture,({"subdivisions": subdivisions, "width": width, "height": height, "maxHeight": max_height, "minHeight": min_height, "onReady": on_ready}));
}));

(main.core.create_ground_from_hm.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(main.core.create_ground_from_hm.cljs$lang$applyTo = (function (seq107291){
var G__107292 = cljs.core.first(seq107291);
var seq107291__$1 = cljs.core.next(seq107291);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__107292,seq107291__$1);
}));

main.core.create_arc_camera = (function main$core$create_arc_camera(){
var camera = (new module$node_modules$babylonjs$babylon.ArcRotateCamera("camera",(0),(0),(10),main.core.v3.cljs$core$IFn$_invoke$arity$0()));
var obj__12045__auto___107452 = camera;
var f__12046__auto___107453 = (obj__12045__auto___107452["setPosition"]);
f__12046__auto___107453.call(obj__12045__auto___107452,main.core.v3.cljs$core$IFn$_invoke$arity$3((50),(50),(50)));

var obj__12045__auto___107454 = camera;
var f__12046__auto___107455 = (obj__12045__auto___107454["attachControl"]);
f__12046__auto___107455.call(obj__12045__auto___107454,(function (){var obj107295 = main.core.db;
if((!((obj107295 == null)))){
return (obj107295["canvas"]);
} else {
return undefined;
}
})(),true);

var obj107296_107456 = camera;
var obj107297_107457 = (function (){var obj107298 = (function (){var obj107299 = (function (){var obj107300 = (function (){var obj107301 = (((!((obj107296_107456 == null))))?obj107296_107456:({}));
(obj107301["checkCollisions"] = true);

return obj107301;
})();
(obj107300["applyGravity"] = true);

return obj107300;
})();
(obj107299["collisionRadius"] = main.core.v3.cljs$core$IFn$_invoke$arity$1(0.5));

return obj107299;
})();
(obj107298["lowerRadiusLimit"] = (2));

return obj107298;
})();
(obj107297_107457["upperRadiusLimit"] = (20));


var obj107304_107458 = main.core.db;
var obj107305_107459 = (((!((obj107304_107458 == null))))?obj107304_107458:({}));
(obj107305_107459["camera"] = camera);


return camera;
});
main.core.physics_agg = (function main$core$physics_agg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___107460 = arguments.length;
var i__5770__auto___107461 = (0);
while(true){
if((i__5770__auto___107461 < len__5769__auto___107460)){
args__5775__auto__.push((arguments[i__5770__auto___107461]));

var G__107462 = (i__5770__auto___107461 + (1));
i__5770__auto___107461 = G__107462;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return main.core.physics_agg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(main.core.physics_agg.cljs$core$IFn$_invoke$arity$variadic = (function (mesh,p__107310){
var map__107311 = p__107310;
var map__107311__$1 = cljs.core.__destructure_map(map__107311);
var friction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107311__$1,new cljs.core.Keyword(null,"friction","friction",-1603603910));
var linear_damping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107311__$1,new cljs.core.Keyword(null,"linear-damping","linear-damping",668010335));
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107311__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var motion_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107311__$1,new cljs.core.Keyword(null,"motion-type","motion-type",-723704028));
var mass_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107311__$1,new cljs.core.Keyword(null,"mass-props","mass-props",1889261508));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107311__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var gravity_factor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107311__$1,new cljs.core.Keyword(null,"gravity-factor","gravity-factor",-221792559));
var restitution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107311__$1,new cljs.core.Keyword(null,"restitution","restitution",364735539));
var angular_damping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107311__$1,new cljs.core.Keyword(null,"angular-damping","angular-damping",1999095124));
var agg = (new module$node_modules$babylonjs$babylon.PhysicsAggregate(mesh,(function (){var obj107312 = module$node_modules$babylonjs$babylon.PhysicsShapeType;
if((!((obj107312 == null)))){
return (obj107312[cljs.core.name(type)]);
} else {
return undefined;
}
})(),({"mass": mass, "friction": friction, "restitution": restitution})));
if(cljs.core.truth_(gravity_factor)){
var parent__12052__auto___107463 = (agg["body"]);
var f__12053__auto___107464 = (parent__12052__auto___107463["setGravityFactor"]);
f__12053__auto___107464.call(parent__12052__auto___107463,gravity_factor);
} else {
}

if(cljs.core.truth_(linear_damping)){
var parent__12052__auto___107465 = (agg["body"]);
var f__12053__auto___107466 = (parent__12052__auto___107465["setLinearDamping"]);
f__12053__auto___107466.call(parent__12052__auto___107465,linear_damping);
} else {
}

if(cljs.core.truth_(angular_damping)){
var parent__12052__auto___107467 = (agg["body"]);
var f__12053__auto___107468 = (parent__12052__auto___107467["setAngularDamping"]);
f__12053__auto___107468.call(parent__12052__auto___107467,angular_damping);
} else {
}

if(cljs.core.truth_(mass_props)){
var parent__12052__auto___107469 = (agg["body"]);
var f__12053__auto___107470 = (parent__12052__auto___107469["setMassProperties"]);
f__12053__auto___107470.call(parent__12052__auto___107469,cljs.core.clj__GT_js(mass_props));
} else {
}

if(cljs.core.truth_(motion_type)){
var parent__12052__auto__ = (agg["body"]);
var f__12053__auto__ = (parent__12052__auto__["setMotionType"]);
return f__12053__auto__.call(parent__12052__auto__,(function (){var obj107313 = module$node_modules$babylonjs$babylon.PhysicsMotionType;
if((!((obj107313 == null)))){
return (obj107313[cljs.core.name(motion_type)]);
} else {
return undefined;
}
})());
} else {
return null;
}
}));

(main.core.physics_agg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(main.core.physics_agg.cljs$lang$applyTo = (function (seq107308){
var G__107309 = cljs.core.first(seq107308);
var seq107308__$1 = cljs.core.next(seq107308);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__107309,seq107308__$1);
}));

main.core.create_player = (function main$core$create_player(){
var player = main.core.capsule.cljs$core$IFn$_invoke$arity$variadic("player",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),(1)], 0));
var mass = (50);
var obj107314_107471 = player;
var obj107315_107472 = (((!((obj107314_107471 == null))))?obj107314_107471:({}));
(obj107315_107472["checkCollisions"] = true);


var obj107318_107473 = main.core.db;
var obj107319_107474 = (((!((obj107318_107473 == null))))?obj107318_107473:({}));
(obj107319_107474["player"] = player);


var obj107322_107475 = player;
var obj107322_107476__$1 = (((!((obj107322_107475 == null))))?obj107322_107475:({}));
var obj107326_107477 = (function (){var child107323 = (obj107322_107476__$1["position"]);
if((!((child107323 == null)))){
return child107323;
} else {
var new_child__11977__auto__ = ({});
var obj107329_107478 = obj107322_107476__$1;
(obj107329_107478["position"] = new_child__11977__auto__);


return new_child__11977__auto__;
}
})();
(obj107326_107477["y"] = (8));



main.core.physics_agg.cljs$core$IFn$_invoke$arity$variadic(player,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("PhysicsShapeType","CAPSULE","PhysicsShapeType/CAPSULE",-1712974577),new cljs.core.Keyword(null,"mass","mass",-2138950046),mass,new cljs.core.Keyword(null,"restitution","restitution",364735539),0.0,new cljs.core.Keyword(null,"friction","friction",-1603603910),1.0,new cljs.core.Keyword(null,"linear-damping","linear-damping",668010335),1.5,new cljs.core.Keyword(null,"angular-damping","angular-damping",1999095124),(0),new cljs.core.Keyword(null,"gravity-factor","gravity-factor",-221792559),1.5,new cljs.core.Keyword(null,"motion-type","motion-type",-723704028),new cljs.core.Keyword("PhysicsMotionType","DYNAMIC","PhysicsMotionType/DYNAMIC",-1855982946),new cljs.core.Keyword(null,"mass-props","mass-props",1889261508),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inertia","inertia",-1478343701),main.core.v3.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"mass","mass",-2138950046),mass], null)], 0));

return player;
});
main.core.set_pointer_down = (function main$core$set_pointer_down(scene,canvas){
var obj107330 = scene;
var obj107331 = (((!((obj107330 == null))))?obj107330:({}));
(obj107331["onPointerDown"] = (function (){
var request_pointer_lock = (function (){var or__5045__auto__ = (function (){var obj107334 = canvas;
if((!((obj107334 == null)))){
return (obj107334["requestPointerLock"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var obj107335 = canvas;
if((!((obj107335 == null)))){
return (obj107335["msRequestPointerLock"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var obj107336 = canvas;
if((!((obj107336 == null)))){
return (obj107336["mozRequestPointerLock"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var obj107337 = canvas;
if((!((obj107337 == null)))){
return (obj107337["webkitRequestPointerLock"]);
} else {
return undefined;
}
}
}
}
})();
if(cljs.core.truth_(request_pointer_lock)){
var obj__12045__auto__ = canvas;
var f__12046__auto__ = (obj__12045__auto__["requestPointerLock"]);
return f__12046__auto__.call(obj__12045__auto__);
} else {
return null;
}
}));

return obj107331;
});
main.core.create_sky_box = (function main$core$create_sky_box(){
var skybox = main.core.box.cljs$core$IFn$_invoke$arity$variadic("skyBox",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"size","size",1098693007),5000.0], 0));
var mat = (new module$node_modules$babylonjs$babylon.StandardMaterial("skyBox"));
var obj107338_107479 = (function (){var obj107339 = (function (){var obj107340 = (function (){var obj107341 = (function (){var obj107343 = (function (){var obj107344 = mat;
var obj107344__$1 = (((!((obj107344 == null))))?obj107344:({}));
var obj107347_107481 = obj107344__$1;
(obj107347_107481["backFaceCulling"] = false);


return obj107344__$1;
})();
var obj107343__$1 = (((!((obj107343 == null))))?obj107343:({}));
var obj107350_107482 = obj107343__$1;
(obj107350_107482["reflectionTexture"] = (new module$node_modules$babylonjs$babylon.CubeTexture("//www.babylonjs.com/assets/skybox/TropicalSunnyDay")));


return obj107343__$1;
})();
var obj107341__$1 = (((!((obj107341 == null))))?obj107341:({}));
var obj107353_107483 = (function (){var child107342 = (obj107341__$1["reflectionTexture"]);
if((!((child107342 == null)))){
return child107342;
} else {
var new_child__11977__auto__ = ({});
var obj107356_107484 = obj107341__$1;
(obj107356_107484["reflectionTexture"] = new_child__11977__auto__);


return new_child__11977__auto__;
}
})();
(obj107353_107483["coordinatesMode"] = (function (){var obj107357 = module$node_modules$babylonjs$babylon.Texture;
if((!((obj107357 == null)))){
return (obj107357["SKYBOX_MODE"]);
} else {
return undefined;
}
})());


return obj107341__$1;
})();
var obj107340__$1 = (((!((obj107340 == null))))?obj107340:({}));
var obj107360_107485 = obj107340__$1;
(obj107360_107485["diffuseColor"] = main.core.color((0),(0),(0)));


return obj107340__$1;
})();
var obj107339__$1 = (((!((obj107339 == null))))?obj107339:({}));
var obj107363_107486 = obj107339__$1;
(obj107363_107486["specularColor"] = main.core.color((0),(0),(0)));


return obj107339__$1;
})();
var obj107338_107480__$1 = (((!((obj107338_107479 == null))))?obj107338_107479:({}));
var obj107366_107487 = obj107338_107480__$1;
(obj107366_107487["disableLighting"] = true);



var obj107367_107488 = skybox;
var obj107368_107489 = (((!((obj107367_107488 == null))))?obj107367_107488:({}));
(obj107368_107489["material"] = mat);


return skybox;
});
main.core.enable_physic_engine = (function main$core$enable_physic_engine(hk,scene){
var hk__$1 = (new module$node_modules$babylonjs$babylon.HavokPlugin(true,hk));
var gravity = main.core.v3.cljs$core$IFn$_invoke$arity$3((0),-9.8,(0));
var obj__12045__auto___107490 = scene;
var f__12046__auto___107491 = (obj__12045__auto___107490["enablePhysics"]);
f__12046__auto___107491.call(obj__12045__auto___107490,gravity,hk__$1);

var obj107371 = scene;
var obj107372 = (((!((obj107371 == null))))?obj107371:({}));
(obj107372["collisionsEnabled"] = true);

return obj107372;
});
main.core.create_terrain = (function main$core$create_terrain(){
return main.core.create_ground_from_hm.cljs$core$IFn$_invoke$arity$variadic("ground",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"texture","texture",-266291651),"img/heightMap.png",new cljs.core.Keyword(null,"subdivisions","subdivisions",-926538536),(50),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"max-height","max-height",-612563804),(10),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"on-ready","on-ready",628441937),(function (ground){
main.core.physics_agg.cljs$core$IFn$_invoke$arity$variadic(ground,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("PhysicsShapeType","MESH","PhysicsShapeType/MESH",830058532),new cljs.core.Keyword(null,"friction","friction",-1603603910),0.5,new cljs.core.Keyword(null,"restitution","restitution",364735539),0.0,new cljs.core.Keyword(null,"mass","mass",-2138950046),(0),new cljs.core.Keyword(null,"motion-type","motion-type",-723704028),new cljs.core.Keyword("PhysicsMotionType","STATIC","PhysicsMotionType/STATIC",110554546)], 0));

var obj107375 = (function (){var obj107377 = (function (){var obj107379 = (function (){var obj107380 = ground;
var obj107380__$1 = (((!((obj107380 == null))))?obj107380:({}));
var obj107383_107492 = obj107380__$1;
(obj107383_107492["material"] = (new module$node_modules$babylonjs_materials$babylonjs_materials.GridMaterial("groundMaterial")));


return obj107380__$1;
})();
var obj107379__$1 = (((!((obj107379 == null))))?obj107379:({}));
var obj107386_107493 = obj107379__$1;
(obj107386_107493["checkCollisions"] = true);


return obj107379__$1;
})();
var obj107377__$1 = (((!((obj107377 == null))))?obj107377:({}));
var obj107389_107494 = (function (){var child107378 = (obj107377__$1["position"]);
if((!((child107378 == null)))){
return child107378;
} else {
var new_child__11977__auto__ = ({});
var obj107392_107495 = obj107377__$1;
(obj107392_107495["position"] = new_child__11977__auto__);


return new_child__11977__auto__;
}
})();
(obj107389_107494["y"] = (-2));


return obj107377__$1;
})();
var obj107375__$1 = (((!((obj107375 == null))))?obj107375:({}));
var obj107395_107496 = (function (){var child107376 = (obj107375__$1["position"]);
if((!((child107376 == null)))){
return child107376;
} else {
var new_child__11977__auto__ = ({});
var obj107398_107497 = obj107375__$1;
(obj107398_107497["position"] = new_child__11977__auto__);


return new_child__11977__auto__;
}
})();
(obj107395_107496["x"] = (-28));


return obj107375__$1;
})], 0));
});
main.core.key_pressed_QMARK_ = (function main$core$key_pressed_QMARK_(key){
var out__11935__auto__ = (function (){var out__11934__auto__ = (function (){var out__11934__auto__ = main.core.db;
if((void 0 === out__11934__auto__)){
return undefined;
} else {
var obj107399 = out__11934__auto__;
if((!((obj107399 == null)))){
return (obj107399["input-map"]);
} else {
return undefined;
}
}
})();
if((void 0 === out__11934__auto__)){
return undefined;
} else {
var obj107400 = out__11934__auto__;
if((!((obj107400 == null)))){
return (obj107400[applied_science.js_interop.impl.wrap_key(key)]);
} else {
return undefined;
}
}
})();
if((void 0 === out__11935__auto__)){
return false;
} else {
return out__11935__auto__;
}
});
main.core.apply_force = (function main$core$apply_force(mesh,force,location){
var parent__12052__auto__ = (mesh["physicsBody"]);
var f__12053__auto__ = (parent__12052__auto__["applyForce"]);
return f__12053__auto__.call(parent__12052__auto__,force,location);
});
main.core.apply_impulse = (function main$core$apply_impulse(mesh,impulse,location){
var parent__12052__auto__ = (mesh["physicsBody"]);
var f__12053__auto__ = (parent__12052__auto__["applyImpulse"]);
return f__12053__auto__.call(parent__12052__auto__,impulse,location);
});
main.core.update_from_keyboard = (function main$core$update_from_keyboard(){
var camera = (function (){var obj107401 = main.core.db;
if((!((obj107401 == null)))){
return (obj107401["camera"]);
} else {
return undefined;
}
})();
var forward = (function (){var obj107402 = (function (){var obj__12045__auto__ = camera;
var f__12046__auto__ = (obj__12045__auto__["getForwardRay"]);
return f__12046__auto__.call(obj__12045__auto__);
})();
if((!((obj107402 == null)))){
return (obj107402["direction"]);
} else {
return undefined;
}
})();
var forward__$1 = main.core.v3.cljs$core$IFn$_invoke$arity$3((function (){var obj107403 = forward;
if((!((obj107403 == null)))){
return (obj107403["x"]);
} else {
return undefined;
}
})(),(0),(function (){var obj107404 = forward;
if((!((obj107404 == null)))){
return (obj107404["z"]);
} else {
return undefined;
}
})());
var len = (function (){var obj__12045__auto__ = forward__$1;
var f__12046__auto__ = (obj__12045__auto__["length"]);
return f__12046__auto__.call(obj__12045__auto__);
})();
var forward__$2 = main.core.v3.cljs$core$IFn$_invoke$arity$3(((function (){var obj107405 = forward__$1;
if((!((obj107405 == null)))){
return (obj107405["x"]);
} else {
return undefined;
}
})() / len),(0),((function (){var obj107406 = forward__$1;
if((!((obj107406 == null)))){
return (obj107406["z"]);
} else {
return undefined;
}
})() / len));
var x = (function (){var obj107407 = forward__$2;
if((!((obj107407 == null)))){
return (obj107407["x"]);
} else {
return undefined;
}
})();
var z = (function (){var obj107408 = forward__$2;
if((!((obj107408 == null)))){
return (obj107408["z"]);
} else {
return undefined;
}
})();
var ref = main.core.v3.cljs$core$IFn$_invoke$arity$0();
var _ = (function (){var parent__12052__auto__ = ((main.core.db["player"])["physicsBody"]);
var f__12053__auto__ = (parent__12052__auto__["getLinearVelocityToRef"]);
return f__12053__auto__.call(parent__12052__auto__,ref);
})();
var speed = (2);
var dir_vec = main.core.v3.cljs$core$IFn$_invoke$arity$3((x * speed),(function (){var obj107409 = ref;
if((!((obj107409 == null)))){
return (obj107409["y"]);
} else {
return undefined;
}
})(),(z * speed));
if(cljs.core.truth_(main.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"Space","Space",1500017025)))){
main.core.apply_impulse((function (){var obj107410 = main.core.db;
if((!((obj107410 == null)))){
return (obj107410["player"]);
} else {
return undefined;
}
})(),main.core.v3.cljs$core$IFn$_invoke$arity$3((0),(100),(0)),(function (){var parent__12052__auto__ = (main.core.db["player"]);
var f__12053__auto__ = (parent__12052__auto__["getAbsolutePosition"]);
return f__12053__auto__.call(parent__12052__auto__);
})());
} else {
}

if(cljs.core.truth_(main.core.key_pressed_QMARK_(new cljs.core.Keyword(null,"KeyW","KeyW",-1083909461)))){
var parent__12052__auto__ = ((main.core.db["player"])["physicsBody"]);
var f__12053__auto__ = (parent__12052__auto__["setLinearVelocity"]);
return f__12053__auto__.call(parent__12052__auto__,dir_vec);
} else {
return null;
}
});
main.core.register_scene_event = (function main$core$register_scene_event(scene){
var action_manager = main.core.create_action_manager(scene);
var f = (function (evt){
var obj107411 = main.core.db;
var obj107411__$1 = (((!((obj107411 == null))))?obj107411:({}));
var obj107415_107498 = (function (){var child107412 = (obj107411__$1["input-map"]);
if((!((child107412 == null)))){
return child107412;
} else {
var new_child__11977__auto__ = ({});
var obj107420_107499 = obj107411__$1;
(obj107420_107499["input-map"] = new_child__11977__auto__);


return new_child__11977__auto__;
}
})();
(obj107415_107498[applied_science.js_interop.impl.wrap_key((function (){var obj107422 = (function (){var obj107421 = evt;
if((!((obj107421 == null)))){
return (obj107421["sourceEvent"]);
} else {
return undefined;
}
})();
if((!((obj107422 == null)))){
return (obj107422["code"]);
} else {
return undefined;
}
})())] = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var obj107424 = (function (){var obj107423 = evt;
if((!((obj107423 == null)))){
return (obj107423["sourceEvent"]);
} else {
return undefined;
}
})();
if((!((obj107424 == null)))){
return (obj107424["type"]);
} else {
return undefined;
}
})(),"keydown"));


return obj107411__$1;
});
main.core.register_action(action_manager,new cljs.core.Keyword("ActionManager","OnKeyDownTrigger","ActionManager/OnKeyDownTrigger",311530337),f);

return main.core.register_action(action_manager,new cljs.core.Keyword("ActionManager","OnKeyUpTrigger","ActionManager/OnKeyUpTrigger",-196731912),f);
});
main.core.start_scene = (function main$core$start_scene(){
var canvas = document.getElementById("renderCanvas");
var engine = main.core.create_engine(canvas);
var scene = main.core.create_scene(engine);
var camera = main.core.create_arc_camera();
var mat = (new module$node_modules$babylonjs$babylon.StandardMaterial("material"));
var obj107425_107500 = mat;
var obj107426_107501 = (((!((obj107425_107500 == null))))?obj107425_107500:({}));
(obj107426_107501["emissiveColor"] = main.core.color((0),0.58,0.86));


main.core.set_pointer_down(scene,canvas);

main.core.create_sky_box();

module$vendor$havok().then((function (hk){
main.core.enable_physic_engine(hk,scene);

var player_107502 = main.core.create_player();
var obj107429_107503 = player_107502;
var obj107430_107504 = (((!((obj107429_107503 == null))))?obj107429_107503:({}));
(obj107430_107504["material"] = mat);


var obj__12045__auto___107505 = camera;
var f__12046__auto___107506 = (obj__12045__auto___107505["setTarget"]);
f__12046__auto___107506.call(obj__12045__auto___107505,player_107502);

main.core.create_terrain();

main.core.register_scene_event(scene);

var parent__12052__auto__ = (scene["onBeforeRenderObservable"]);
var f__12053__auto__ = (parent__12052__auto__["add"]);
return f__12053__auto__.call(parent__12052__auto__,(function (){
return main.core.update_from_keyboard();
}));
}),(function (error){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error], 0));
}));

(new module$node_modules$babylonjs$babylon.HemisphericLight("light1",main.core.v3.cljs$core$IFn$_invoke$arity$3((0),(1),(0))));

var obj__12045__auto___107507 = engine;
var f__12046__auto___107508 = (obj__12045__auto___107507["runRenderLoop"]);
f__12046__auto___107508.call(obj__12045__auto___107507,(function (){
var obj__12045__auto____$1 = scene;
var f__12046__auto____$1 = (obj__12045__auto____$1["render"]);
return f__12046__auto____$1.call(obj__12045__auto____$1);
}));

return window.addEventListener("resize",(function (){
var obj__12045__auto__ = engine;
var f__12046__auto__ = (obj__12045__auto__["resize"]);
return f__12046__auto__.call(obj__12045__auto__);
}));
});
main.core.start = (function main$core$start(){
console.log("start");

return main.core.start_scene();
});
main.core.stop = (function main$core$stop(){
console.clear();

console.log("stop");

var parent__12052__auto__ = (main.core.db["engine"]);
var f__12053__auto__ = (parent__12052__auto__["dispose"]);
return f__12053__auto__.call(parent__12052__auto__);
});
main.core.init = (function main$core$init(){
console.log("init");

return main.core.start();
});

//# sourceMappingURL=main.core.js.map
