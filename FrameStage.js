class FrameStage extends PIXI.Container {
    constructor() {
        super()
        this.ClassName = 'Frame';
        this.GraphicsData = [];
        this.Text = [];

        this.CellSize;
        this.editor;
        this.picker;
    }
    AddGraphicsData(d) {
        this.GraphicsData.push(d);
    }
    SetCellSize(size) {
        this.CellSize = size;

    }
    DrawLine() {
        //取得画布（根容器Stage）的长宽
        var appwidth=app.renderer.view.width;
        var appheight=app.renderer.view.height;
        var delta=40;//网格间隙

        var line_h = new Array();
        for (var i = 0; i < (appwidth-40)/delta-1; i++) {
            line_h[i] = new PIXI.Graphics;
            line_h[i].lineStyle(1, 0x00FF00, 1);
            line_h[i].moveTo(0, 0);
            line_h[i].lineTo(0, appheight-40);
            line_h[i].x = 20 + (i + 1) * delta;
            line_h[i].y = 20;
            app.stage.addChild(line_h[i]);
        }

        var line_a = new Array();
        for (var i = 0; i < (appheight-40)/delta-1; i++) {
            line_a[i] = new PIXI.Graphics;
            line_a[i].lineStyle(1, 0x00FF00, 1);
            line_a[i].moveTo(0, 0);
            line_a[i].lineTo(appwidth-40, 0);
            line_a[i].x = 20;
            line_a[i].y = 20 + (i + 1) * delta;;
            app.stage.addChild(line_a[i]);
        }
        var linex = new PIXI.Graphics;
        linex.lineStyle(1, 0x000000, 1);
        linex.moveTo(0, 0);
        linex.lineTo(appwidth-40, 0);
        linex.x = 20;
        linex.y = appheight-20;
        app.stage.addChild(linex);

        var liney = new PIXI.Graphics;
        liney.lineStyle(1, 0x000000, 1);
        liney.moveTo(0, 0);
        liney.lineTo(0, appheight-40);
        liney.x = 20;
        liney.y = 20;
        app.stage.addChild(liney);



    }
}