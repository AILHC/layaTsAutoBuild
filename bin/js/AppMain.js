define(["require", "exports", "./testclass"], function (require, exports, testclass_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 程序入口
    var AppMain = /** @class */ (function () {
        function AppMain() {
            //初始化引擎
            Laya3D.init(0, 0, true);
            //适配模式
            Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
            Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
            //开启统计信息
            Laya.Stat.show();
            //添加3D场景
            var scene = Laya.stage.addChild(new Laya.Scene());
            //添加照相机
            var camera = (scene.addChild(new Laya.Camera(0, 0.1, 100)));
            camera.transform.translate(new Laya.Vector3(0, 3, 3));
            camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
            camera.clearColor = null;
            //添加方向光
            var directionLight = scene.addChild(new Laya.DirectionLight());
            directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
            directionLight.direction = new Laya.Vector3(1, -1, 0);
            //添加自定义模型
            var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1, 1, 1)));
            box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
            var material = new Laya.StandardMaterial();
            material.diffuseTexture = Laya.Texture2D.load("res/layabox.png");
            box.meshRender.material = material;
            //测试
            var te = new testclass_1.default();
            te.a();
        }
        return AppMain;
    }());
    exports.AppMain = AppMain;
    new AppMain();
    if (!window["AppMain"]) {
        window["AppMain"] = AppMain;
    }
});
//# sourceMappingURL=AppMain.js.map