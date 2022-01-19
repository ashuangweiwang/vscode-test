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
    DrawLine() {}
}