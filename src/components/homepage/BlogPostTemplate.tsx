import React from "react";
import TagList from "../landings/modules/TagList";
import Time from "./Time";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface BlogPostTemplateProps {
  image: IGatsbyImageData;
  imageAlt?: string;
  date: string;
  content: string;
  tags: string[];
  lang: string;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  image,
  imageAlt,
  date,
  content,
  tags,
  lang,
}) => {
  const gatsbyImage = image ? getImage(image) : null;

  return (
    <Container maxWidth="lg" component="section" sx={{ mt: 8, minHeight: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ my: 4 }}>
          {date && <Time date={date} />}

          {gatsbyImage && (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <GatsbyImage
                style={{
                  border: "2px solid #43C6B7",
                  borderRadius: "5px",
                }}
                image={gatsbyImage}
                alt={imageAlt || "Blog post image"}
              />
            </Box>
          )}
          
          {content && (
            <Box
              color="text.primary"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </Grid>
        
        {tags && tags.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", mb: 5 }}>
            <TagList tags={tags} langKey={lang} />
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default BlogPostTemplate;