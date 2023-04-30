import { Grid } from "@mui/material";
import Summary from "../Summary";
import HighlightCard from "./HighlightCard";

function Highlight() {
  return (
    <Grid container spacing={3}>
      {Summary.map((data) => (
        <Grid item sm={4} xs={12}>
          <HighlightCard
            title={data.title}
            count={data.count}
            type={data.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Highlight;
