import React from "react";
import { kebabCase } from "lodash";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import AccessibleLink from "../../Link";
import TagIcon from "@mui/icons-material/Tag";

interface tagListsProps {
  tags?: string[];
  langKey: string;
}

const TagList = ({ tags, langKey }: tagListsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        flexWrap: "wrap",
      }}
    >
      {tags &&
        tags.map((tag, i) => (
          <AccessibleLink
            sx={{
              borderBottom: "none",
              textDecoration: "none",
              "&:hover": {
                borderBottom: "none",
                textDecoration: "none",
              },
            }}
            key={i}
            to={`/${langKey}/tags/${kebabCase(tag)}/`}
          >
            <Chip
              sx={{
                m: 1,
              }}
              icon={<TagIcon color='success' />}
              label={tag}
              color='success'
              size='small'
              clickable
            />
          </AccessibleLink>
        ))}
    </Box>
  );
};

export default TagList;
