/* Component that takes props as string and depend on type of the props will return material icon related to the props */

import React from "react";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import EmailIcon from "@mui/icons-material/Email";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import ViewHeadlineOutlinedIcon from "@mui/icons-material/ViewHeadlineOutlined";
import VrpanoOutlinedIcon from "@mui/icons-material/VrpanoOutlined";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import {
  BrandVoiceicon,
  SubHeader,
  SubjectFinder,
  SearchKeyword,
  QuestionGeneration,
  MetaDescription,
  LandingPageHeader,
  BlogPostHeaderIcon,
  LandingPageHeaderDescription,
  BlogPASIcon,
  Thankyou,
  BlogIntro,
  AddBlog,
  RewriterIcon,
  ProspectingEmail,
  TaglineIcon,
  KeywordIcon,
  TagIcon,
  DictionaryCheck,
  EmailOpen,
  AddEmail,
  ProductDescriptionIcon,
  Hashtag,
  WriteVisionStatement,
  GrammarCorrection,
  WriteValueProp,
  CopyWritingIcon,
  WritingToolsIcon,
  EcommerceDescription,
  ProductDescriptionAmazon,
  WriteFollowUpEmail,
  WriteColdEmail,
  WriteMissionStatement,
  BlogPostConclusionIcon,
  BlogPostAidaIcon,
} from "../icons/Icons";

interface IconProps {
  type: string;
}

const IconsList = (props) => {
  switch (props.type) {
    case "email":
      return (
        <EmailIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "add":
      return (
        <PlaylistAddRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );

    case "copyWritingIcon":
      return (
        <CopyWritingIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "rewriter":
      return (
        <RewriterIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "done":
      return (
        <DoneOutlineRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "library":
      return (
        <LibraryBooksRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "description":
      return (
        <DescriptionRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "writingToolsIcon":
      return (
        <WritingToolsIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "expandLess":
      return (
        <ExpandLess
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "expandMore":
      return (
        <ExpandMore
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "web":
      return (
        <WebRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "history":
      return (
        <HistoryEduRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "summarize":
      return (
        <SummarizeOutlinedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "viewHeadline":
      return (
        <ViewHeadlineOutlinedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "vrpano":
      return (
        <WriteValueProp
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "borderColor":
      return (
        <BorderColorRoundedIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "brandVoice":
      return (
        <BrandVoiceicon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "subHeader":
      return (
        <SubHeader
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "subjectFinder":
      return (
        <SubjectFinder
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "searchKeyword":
      return (
        <SearchKeyword
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "questionGeneration":
      return (
        <QuestionGeneration
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "metaDescription":
      return (
        <MetaDescription
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "landingPageHeader":
      return (
        <LandingPageHeader
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "landingPageHeaderDescription":
      return (
        <LandingPageHeaderDescription
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "blogPAS":
      return (
        <BlogPASIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "thankyou":
      return (
        <Thankyou
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "blogIntro":
      return (
        <BlogIntro
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "addBlog":
      return (
        <AddBlog
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "prospectingEmail":
      return (
        <ProspectingEmail
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "taglineIcon":
      return (
        <TaglineIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "keywordIcon":
      return (
        <KeywordIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "tagIcon":
      return (
        <TagIcon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "paraphrase":
      return (
        <DictionaryCheck
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "emailOpen":
      return (
        <EmailOpen
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "addEmail":
      return (
        <AddEmail
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "productDescriptionIcon":
      return (
        <ProductDescriptionIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "hashtag":
      return (
        <Hashtag
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "writeVisionStatement":
      return (
        <WriteVisionStatement
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "grammarCorrection":
      return (
        <GrammarCorrection
          viewBox='0 0 24 24'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "productDescriptionAmazon":
      return (
        <ProductDescriptionAmazon
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "writeFollowUpEmail":
      return (
        <WriteFollowUpEmail
          viewBox='0 0 32 32'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "writeColdEmail":
      return (
        <WriteColdEmail
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "ecommerceDescription":
      return (
        <EcommerceDescription
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "writeMissionStatement":
      return (
        <WriteMissionStatement
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "blogPostAida":
      return (
        <BlogPostAidaIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "blogPostConclusionIcon":
      return (
        <BlogPostConclusionIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    case "blogPostHeaderIcon":
      return (
        <BlogPostHeaderIcon
          viewBox='0 0 600 600'
          height='24'
          width='24'
          fontSize='small'
          {...props}
        />
      );
    default:
      return <></>;
  }
};

export default IconsList;
