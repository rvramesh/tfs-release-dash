import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

import React from "react";
import { ReleaseData } from "./Types";

const ReleaseTable: React.FC<{ data: ReleaseData[] }> = ({ data }) => {
  return (
    <Table size="small">
      <TableHead style={{ background: "#add6ff" }}>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow
            key={row.rank}
            style={
              index % 2 ? { background: "#f0f0f0" } : { background: "white" }
            }
          >
            <TableCell component="th" scope="row">
              {row.name} - {index}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ReleaseTable;
