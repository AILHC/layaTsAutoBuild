(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestModule_1 = require("./TestModule");
var TestModule2_1 = require("./TestModule2");
// 程序入口
var AppMain = /** @class */ (function () {
    function AppMain() {
        //初始化微信小游戏
        Laya.MiniAdpter.init();
        //初始化引擎
        Laya3D.init(0, 0, true);
        //适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        //开启统计信息
        Laya.Stat.show();
        //添加3D场景
        var scene1 = Laya.stage.addChild(new Laya.Scene());
        //添加照相机
        var camera = (scene1.addChild(new Laya.Camera(0, 0.1, 100)));
        camera.transform.translate(new Laya.Vector3(0, 3, 3));
        camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
        camera.clearColor = null;
        //添加方向光
        var directionLight = scene1.addChild(new Laya.DirectionLight());
        directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
        directionLight.direction = new Laya.Vector3(1, -1, 0);
        //添加自定义模型
        var box = scene1.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1, 1, 1)));
        box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
        var material = new Laya.StandardMaterial();
        material.diffuseTexture = Laya.Texture2D.load("res/layabox.png");
        box.meshRender.material = material;
        console.log("hahahahhahahha");
        var A = new TestModule_1.a();
        console.log("缓存a不存在");
        A.a();
        var B = new TestModule2_1.b();
        B.b();
    }
    return AppMain;
}());
exports.default = AppMain;
new AppMain();
},{"./TestModule":2,"./TestModule2":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = /** @class */ (function () {
    function a() {
    }
    a.prototype.a = function () {
        console.log("aaaaa");
    };
    return a;
}());
exports.a = a;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = /** @class */ (function () {
    function b() {
    }
    b.prototype.b = function () {
        console.log("bbbb");
    };
    return b;
}());
exports.b = b;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQXBwTWFpbi50cyIsInNyYy9UZXN0TW9kdWxlLnRzIiwic3JjL1Rlc3RNb2R1bGUyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSwyQ0FBaUM7QUFDakMsNkNBQWtDO0FBRWxDLE9BQU87QUFDUDtJQUNJO1FBQ0ksVUFBVTtRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsT0FBTztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV4QixNQUFNO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFFL0MsUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFakIsUUFBUTtRQUNSLElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFlLENBQUM7UUFFN0UsT0FBTztRQUNQLElBQUksTUFBTSxHQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztRQUN6RixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXpCLE9BQU87UUFDUCxJQUFJLGNBQWMsR0FBd0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBd0IsQ0FBQztRQUM1RyxjQUFjLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0RCxTQUFTO1FBQ1QsSUFBSSxHQUFHLEdBQXNCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQXNCLENBQUM7UUFDcEgsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9ELElBQUksUUFBUSxHQUEwQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2xFLFFBQVEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNqRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLElBQUksY0FBQyxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNyQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDTixJQUFJLENBQUMsR0FBRyxJQUFJLGVBQUMsRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTs7QUFDRCxJQUFJLE9BQU8sRUFBRSxDQUFDOzs7O0FDOUNkO0lBQUE7SUFJQSxDQUFDO0lBSFUsYUFBQyxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsUUFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksY0FBQzs7OztBQ0FkO0lBQUE7SUFJQSxDQUFDO0lBSFUsYUFBQyxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0wsUUFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksY0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IGEgfSBmcm9tIFwiLi9UZXN0TW9kdWxlXCI7XHJcbmltcG9ydCB7IGIgfSBmcm9tIFwiLi9UZXN0TW9kdWxlMlwiO1xyXG5cclxuLy8g56iL5bqP5YWl5Y+jXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcE1haW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJblvq7kv6HlsI/muLjmiI9cclxuICAgICAgICBMYXlhLk1pbmlBZHB0ZXIuaW5pdCgpO1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5byV5pOOXHJcbiAgICAgICAgTGF5YTNELmluaXQoMCwgMCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8v6YCC6YWN5qih5byPXHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBMYXlhLlN0YWdlLlNDQUxFX0ZVTEw7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gTGF5YS5TdGFnZS5TQ1JFRU5fTk9ORTtcclxuXHJcbiAgICAgICAgLy/lvIDlkK/nu5/orqHkv6Hmga9cclxuICAgICAgICBMYXlhLlN0YXQuc2hvdygpO1xyXG5cclxuICAgICAgICAvL+a3u+WKoDNE5Zy65pmvXHJcbiAgICAgICAgdmFyIHNjZW5lMTogTGF5YS5TY2VuZSA9IExheWEuc3RhZ2UuYWRkQ2hpbGQobmV3IExheWEuU2NlbmUoKSkgYXMgTGF5YS5TY2VuZTtcclxuXHJcbiAgICAgICAgLy/mt7vliqDnhafnm7jmnLpcclxuICAgICAgICB2YXIgY2FtZXJhOiBMYXlhLkNhbWVyYSA9IChzY2VuZTEuYWRkQ2hpbGQobmV3IExheWEuQ2FtZXJhKDAsIDAuMSwgMTAwKSkpIGFzIExheWEuQ2FtZXJhO1xyXG4gICAgICAgIGNhbWVyYS50cmFuc2Zvcm0udHJhbnNsYXRlKG5ldyBMYXlhLlZlY3RvcjMoMCwgMywgMykpO1xyXG4gICAgICAgIGNhbWVyYS50cmFuc2Zvcm0ucm90YXRlKG5ldyBMYXlhLlZlY3RvcjMoLTMwLCAwLCAwKSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgIGNhbWVyYS5jbGVhckNvbG9yID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy/mt7vliqDmlrnlkJHlhYlcclxuICAgICAgICB2YXIgZGlyZWN0aW9uTGlnaHQ6IExheWEuRGlyZWN0aW9uTGlnaHQgPSBzY2VuZTEuYWRkQ2hpbGQobmV3IExheWEuRGlyZWN0aW9uTGlnaHQoKSkgYXMgTGF5YS5EaXJlY3Rpb25MaWdodDtcclxuICAgICAgICBkaXJlY3Rpb25MaWdodC5jb2xvciA9IG5ldyBMYXlhLlZlY3RvcjMoMC42LCAwLjYsIDAuNik7XHJcbiAgICAgICAgZGlyZWN0aW9uTGlnaHQuZGlyZWN0aW9uID0gbmV3IExheWEuVmVjdG9yMygxLCAtMSwgMCk7XHJcblxyXG4gICAgICAgIC8v5re75Yqg6Ieq5a6a5LmJ5qih5Z6LXHJcbiAgICAgICAgdmFyIGJveDogTGF5YS5NZXNoU3ByaXRlM0QgPSBzY2VuZTEuYWRkQ2hpbGQobmV3IExheWEuTWVzaFNwcml0ZTNEKG5ldyBMYXlhLkJveE1lc2goMSwgMSwgMSkpKSBhcyBMYXlhLk1lc2hTcHJpdGUzRDtcclxuICAgICAgICBib3gudHJhbnNmb3JtLnJvdGF0ZShuZXcgTGF5YS5WZWN0b3IzKDAsIDQ1LCAwKSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICB2YXIgbWF0ZXJpYWw6IExheWEuU3RhbmRhcmRNYXRlcmlhbCA9IG5ldyBMYXlhLlN0YW5kYXJkTWF0ZXJpYWwoKTtcclxuICAgICAgICBtYXRlcmlhbC5kaWZmdXNlVGV4dHVyZSA9IExheWEuVGV4dHVyZTJELmxvYWQoXCJyZXMvbGF5YWJveC5wbmdcIik7XHJcbiAgICAgICAgYm94Lm1lc2hSZW5kZXIubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhaGFoYWhoYWhhaGhhXCIpO1xyXG4gICAgICAgIGxldCBBID0gbmV3IGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIue8k+WtmGHkuI3lrZjlnKhcIilcclxuICAgICAgICBBLmEoKTtcclxuICAgICAgICBsZXQgQiA9IG5ldyBiKCk7XHJcbiAgICAgICAgQi5iKCk7XHJcbiAgICB9XHJcbn1cclxubmV3IEFwcE1haW4oKTsiLCJleHBvcnQgY2xhc3MgYSB7XHJcbiAgICBwdWJsaWMgYSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWFhYWFcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIGIge1xyXG4gICAgcHVibGljIGIoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImJiYmJcIik7XHJcbiAgICB9XHJcbn0iXX0=
