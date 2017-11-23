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

  constructor(props) {
    super(props);

    let mtrx: number[][] = [];

    const rows: number = 5;
    const columns: number = 16;
    const columnPosition: number = 0;

    for (let x = 0; x < rows; x++) {

      mtrx[x] = new Array(columns);
      for (let y = 0; y < columns; y++) {
        mtrx[x][y] = y === columnPosition ? 1 : 0;
      }
    }

    this.state = { positions: mtrx };
  }

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------


  private createColumn = (column: number, index: number) => {

    const rectangle = column > 0 ? <RectangleComp /> : null;

    return (
    <Grid.Column index={index}>
      {rectangle}
    </Grid.Column>)
  }


  private createRows = (row: number[], index: number) => {
    return (
      <Grid.Row columns={16} index={index}>
        {row.map(this.createColumn)}
      </Grid.Row>
    )

  }

  private createMtrx = (metrix: number[], index: number) => {
    
    return (
      <Grid>
        {/* {metrix.map(this.createRows)} */}
      </Grid>
      
    );
    // var list : any;
    // for (;let x: number = 0; x < metrix.length; x++) {
    //   this.createRows(metrix[x], index);
    //     list.push(this.createRows(metrix[x], index))
    // }

    // return list;
  }

  render() {
    return (
      <Grid >
        {this.state.positions.map(this.createMtrx)}
        {/* <Grid.Row columns={16}>
          <Grid.Column>
            <RectangleComp />
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={16}>
          <Grid.Column>
          </Grid.Column>

          <Grid.Column >
            <RectangleComp />
          </Grid.Column>

          <Grid.Column>
          </Grid.Column>

        </Grid.Row> */}
      </Grid>
    );
  }
}