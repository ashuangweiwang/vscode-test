//import DGMObject from './DGMObject.js';

class DGMApplication {
    constructor(curDocument) {
        this.UI;
        this.ClassName = 'DGMApplication';
        this.WorkSpace;

        this.RendererApp = new PIXI.Application({
            backgroundColor: 0x1099bb,
            width: 800,         // default: 800 宽度
            height: 600,        // default: 600 高度
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
        this.WorkSpace = new DGMWorkSpace();
        var Map = new DGMGeoMap2D();
        Map.Name = 'map';
        this.WorkSpace.AddObject(Map);

        var Layer1 = new DGMGraphicsLayer();
        Layer1.Name = 'lay';
        Map.AddObject(Layer1);

        var Tile = new DGMTile();
        Layer1.AddObject(Tile);

        var graphicsFeature = new GraphicsFeature();

        Tile.FeatureCollection.AddObject(graphicsFeature);



        graphicsFeature.id = 1;
        graphicsFeature.Name = 'gra';


        var data = new GraphicData();
        data.GeoType = 'Line';
        data.points.push(100);
        data.points.push(100);
        data.points.push(500);
        data.points.push(600);
 
        graphicsFeature.AddGraphicData(data);

        this.zoomScale[0] = this.RendererApp.view.width / 0.05;
        this.zoomScale[1] = this.RendererApp.view.height / 0.1;

        this.RendererApp.stage.addChild(graphicsFeature);
        this.RendererApp.stage.x = this.RendererApp.stage.x - 0.10;
        this.RendererApp.stage.y = this.RendererApp.stage.y - 0.50; //12400

        graphicsFeature.DrawGraphic();



    }

}