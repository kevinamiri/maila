import React from "react";
import PropTypes from "prop-types";
import TagList from "../../components/landings/modules/TagList";
import Content from "../../components/homepage/Content";
import Time from "../../components/homepage/Time"
import { FormattedMessage } from "react-intl";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'


const BlogPostTemplate = ({
  dateOfPost,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  langKey,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {helmet || ""}
      <Container maxWidth="lg">
        <Box>
          <Box sx={{
            p: 2,
            mt: 7,
            pt: 4,
          }}>
            <Typography variant="h3" color="initial">
              {title}
            </Typography>
          </Box>
          <Box sx={{
            p: 2,
          }}>
            <Typography variant="caption" color="initial">
              <FormattedMessage id='P02' />
              <Time className="font-weight-light"
                langKey={langKey}
                date={dateOfPost}
              />
            </Typography>
          </Box>
          <Box sx={{
            p: 2,
          }}>
            <Typography variant="subtitle2" color="initial">
              {description}
            </Typography>
          </Box>
          <PostContent content={content} />
          <TagList tags={tags} langKey={langKey} />
        </Box>
      </Container>
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  location: PropTypes.string,
  tags: PropTypes.array,
  langKey: PropTypes.string,
};
export default BlogPostTemplate;
