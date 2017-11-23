import * as React from "react";
import { Grid } from "semantic-ui-react";

interface GridTricksProps {

}

interface GridTricksState {
  positions: number[][]
}

const RectangleComp = props =>
  (
    <div style={{ height: "20px", width: "20px", background: "red" }}>
    </div>
  )

export class GridTricks extends React.Component<GridTricksProps, GridTricksState> {
 private _rows : number = 16;
 private _columns : number = 16;
 
 //-------------------------------------------------------------------------------------------------------
 //-------------------------------------------------------------------------------------------------------
 
  constructor(props) {
    super(props);

    const mtrx: number[][] = [];
    let columnPosition: number = 0;

    for (let x = 0; x < this._rows; x++) {

      mtrx[x] = new Array(this._columns);
      for (let y = 0; y < this._columns; y++) {
        mtrx[x][y] = y === columnPosition ? 1 : 0;
      }
      columnPosition++;
    }

    this.state = { positions: mtrx };
  }

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------

  private createColumn = (column: number, index: string) => {
    const rectangle = column > 0 ? <RectangleComp /> : null;
    return (
      <Grid.Column index={index}>
        {rectangle}
      </Grid.Column>)
  }


  private createRows = (row: number[], index: number) => {
    return (
      <Grid.Row columns={16} index={index}>
        {row.map((x, newindex) => {
          return this.createColumn(x, index + "." + newindex)
        })}
      </Grid.Row>
    );

  }

  render() {
    return (
      <Grid >
        {this.state.positions.map(this.createRows)}
      </Grid>
    );
  }
}