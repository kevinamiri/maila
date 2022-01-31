import React from "react";
import { kebabCase } from "lodash";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Link } from "gatsby";


const TagList = ({ tags, langKey }) => {
  return (
    <Box sx={{
      m: 1
    }}>
      {tags && tags.length ? (
        <Box>
          {tags.map((tag, i) => (
            <Link key={Math.random + i} to={`/${langKey}/tags/${kebabCase(tag)}/`}>
              <Chip sx={{
                m: 1
              }} size="small" label={tag} color="primary" clickable />
            </Link>
          ))}
        </Box>
      ) : null
      }
    </Box >
  );
};


export default TagList;
