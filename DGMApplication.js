//import DGMObject from './DGMObject.js';

class DGMApplication {
    constructor(curDocument) {
        this.UI;
        this.ClassName = 'DGMApplication';
        this.WorkSpace;

        this.RendererApp = new PIXI.Application({
            backgroundColor: 0xFFFFFF,
            //width: 1000,         // default: 800 宽度
            //height: 800,        // default: 600 高度
        });

        curDocument.body.appendChild(this.RendererApp.view);

        this.RendererApp.stage.scale.set(1);
        this.zoomScale = [1, 1]; // 1.0;

        this.WorkSpaceStage = new PIXI.Container; //绘图
        this.frameStage = new FrameStage();//背景
        

        this.RendererApp.stage.addChild(this.WorkSpaceStage);
        this.RendererApp.stage.addChild(this.frameStage);

        // this.CreateWorkSpace();
        this.downEvent = [];
        this.pivotPoint = [0, 0];



        this.RendererApp.stage.width = window.innerWidth;
        this.RendererApp.stage.height = window.innerHeight;

    }

    CreateFrameStage() {
        



    }

}