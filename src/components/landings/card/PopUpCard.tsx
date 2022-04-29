import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SubdirectoryArrowRightRoundedIcon from "@mui/icons-material/SubdirectoryArrowRightRounded";

interface PopUpCardProps {
  title?: string;
  input?: string;
  output?: string;
  neww?: string;
  buttonLabel?: string;
}

const PopUpCard: React.FC<PopUpCardProps> = ({
  title = "Headline:",
  input = "The Secret of Writing Magnetic",
  output = "Who Else Wants To Be A More Creative Person?",
  buttonLabel = "Accept",
}: PopUpCardProps) => {
  return (
    <Card
      sx={{
        minWidth: 270,
        border: (theme) => `2px solid ${theme.palette.divider}`,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='textSecondary' gutterBottom>
          {title}
        </Typography>
        <Typography variant='body2' component='span'>
          <Typography
            variant='body1'
            component='span'
            sx={{
              textDecoration: "line-through",
              backgroundColor: (theme) => theme.palette.error.light,
              borderRadius: "2px",
              padding: "2px",
            }}
          >
            {input}
          </Typography>
          <br />
          <br />
          <SubdirectoryArrowRightRoundedIcon fontSize='small' color='primary' />
          <Typography
            variant='body1'
            component='span'
            sx={{
              backgroundColor: (theme) => theme.palette.success.light,
              borderRadius: "2px",
              padding: "2px",
            }}
          >
            {output}
          </Typography>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' variant='contained' color='primary'>
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PopUpCard;
