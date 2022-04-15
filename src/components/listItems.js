import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Tooltip } from '@mui/material';
import { FormattedMessage } from "react-intl";
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import EmailIcon from '@mui/icons-material/Email';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListCatChild from './ListCatChild'
import ListItemTextParent from './ListItemTextParent'
import useToolsProducts from "../hooks/useToolsProducts";
import useSettings from "../hooks/useSettings";
import IconsList from './icons'
import { EmailOpen, CopyWritingIcon, WritingToolsIcon, AddBlog } from "../icons/Icons";

const initialState = { ProductTools01: false, EmailTools01: false, CopyTools01: false, WritingTools01: false, BlogTools01: false, WebPageTools01: false, TranslationTools01: false };

function reducer(state, action) {
    switch (action.type) {
        case 'ProductTools01':
            return { ProductTools01: !(state.ProductTools01) };
        case 'EmailTools01':
            return { EmailTools01: !(state.EmailTools01) };
        case 'CopyTools01':
            return { CopyTools01: !(state.CopyTools01) };
        case 'WritingTools01':
            return { WritingTools01: !(state.WritingTools01) };
        case 'BlogTools01':
            return { BlogTools01: !(state.BlogTools01) };
        case 'TranslationTools01':
            return { TranslationTools01: !(state.TranslationTools01) };
        case 'GAds01':
            return { GAds01: !(state.GAds01) };
        case 'WebPageTools01':
            return { WebPageTools01: !(state.WebPageTools01) };
        default:
            throw new Error();
    }
}

const iconList = (props) => (
    <IconsList type={props.icon} />
)

const ListSidebar = () => {
    const useTools = useToolsProducts();
    const { settings, saveSettings } = useSettings();
    const products = useTools[`${settings.lang}`].edges.map(
        (item) => item.node.frontmatter
    );
    const blog = products.filter((item) => item.slug.split("/")[3] === "blog")
    const copywriting = products.filter((item) => item.slug.split("/")[3] === "copywriting")
    const emails = products.filter((item) => item.slug.split("/")[3] === "email")
    const writing = products.filter((item) => item.slug.split("/")[3] === "writing")

    const [state, dispatch] = React.useReducer(reducer, initialState);
    let windowsStatus = (window.location.pathname == '/app/productdescription') ? true : false
    let selectedList = (url) => {
        if (url == window.location.pathname) {
            return true
        } else {
            return false
        }
    }
    return (
        <>
            <List sx={{
                width: '100%',
                maxWidth: 360,
                backgroundColor: (theme) => theme.palette.background.paper,
                overflowY: 'auto',
                overflowX: "clip"
            }} dense>
                <Tooltip title={<FormattedMessage id='ET01' />} disableFocusListener placement='right-start' disableInteractive >
                    <ListItem sx={{ color: 'text.secondary' }} button onClick={() => dispatch({ type: 'EmailTools01' })}>
                        <ListItemIcon>
                            <EmailOpen />
                        </ListItemIcon>
                        <ListItemTextParent primary={<FormattedMessage id='ET01' />} />
                        {(state.EmailTools01) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Tooltip>
                <Collapse in={(state.EmailTools01)} timeout="auto" unmountOnExit>
                    <List dense>
                        {emails.map((item, index) => {

                            return (
                                <ListCatChild key={index} dirList={item.url} formattedId={item.title}>
                                    <IconsList type={item.icon} />
                                </ListCatChild>
                            )
                        })}
                    </List>
                </Collapse>
                <Tooltip title={<FormattedMessage id='CT01' />} disableFocusListener placement='right-start' disableInteractive >
                    <ListItem sx={{ color: 'text.secondary' }} button onClick={() => dispatch({ type: 'CopyTools01' })}>
                        <ListItemIcon>
                            <CopyWritingIcon />
                        </ListItemIcon>
                        <ListItemTextParent primary={<FormattedMessage id='CT01' />} />
                        {(state.CopyTools01) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Tooltip>

                <Collapse in={(state.CopyTools01)} timeout="auto" unmountOnExit>
                    <List dense>
                        {copywriting.map((item, index) => {
                            return (
                                <ListCatChild key={index} dirList={item.url} formattedId={item.title}>
                                    <IconsList type={item.icon} />
                                </ListCatChild>
                            )
                        })}
                    </List>
                </Collapse>
                {/* ************************************************************************************* */}
                <Tooltip title={<FormattedMessage id='WT01' />} disableFocusListener placement='right-start' disableInteractive >
                    <ListItem sx={{ color: 'text.secondary' }} button onClick={() => dispatch({ type: 'WritingTools01' })}>
                        <ListItemIcon>
                            <WritingToolsIcon />
                        </ListItemIcon>
                        <ListItemTextParent primary={<FormattedMessage id='WT01' />} />
                        {(state.WritingTools01) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Tooltip>

                <Collapse in={(state.WritingTools01)} timeout="auto" unmountOnExit>
                    <List dense>
                        {writing.map((item, index) => {
                            return (
                                <ListCatChild key={index} dirList={item.url} formattedId={item.title}>
                                    <IconsList type={item.icon} />
                                </ListCatChild>
                            )
                        })}
                        {/* <ListCatChild dirList="/app/paraphrase" formattedId="RH004" iconComponent={<DictionaryCheck viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/possible-answers" formattedId="RH004" iconComponent={<HistoryEduRoundedIcon viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/grammar" formattedId="GC009" iconComponent={<GrammarCorrection viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/adjust-tone-rewriting" formattedId="B04" iconComponent={<BrandVoiceicon viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/create-outline" formattedId="CT940" iconComponent={<DoneOutlineRoundedIcon viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/expand" formattedId="E405" iconComponent={<PlaylistAddRoundedIcon viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} /> */}
                    </List>
                </Collapse>
                {/* ************************************************************************************* */}
                <Tooltip title={<FormattedMessage id='BT02' />} disableFocusListener placement='right-start' disableInteractive >
                    <ListItem sx={{ color: 'text.secondary' }} button onClick={() => dispatch({ type: 'BlogTools01' })}>
                        <ListItemIcon>
                            <AddBlog />
                        </ListItemIcon>
                        <ListItemTextParent primary={<FormattedMessage id='BT02' />} />
                        {(state.BlogTools01) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Tooltip>

                <Collapse in={(state.BlogTools01)} timeout="auto" unmountOnExit>
                    <List dense>
                        {blog.map((item, index) => {
                            return (
                                <ListCatChild key={index} dirList={item.url} formattedId={item.title}>
                                    <IconsList type={item.icon} />
                                </ListCatChild>
                            )
                        })}
                        {/* <ListCatChild dirList="/app/blog-post-intro" formattedId="BT03" iconComponent={<BlogIntro viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/blog-post-ideas" formattedId="BT04" iconComponent={<BulpIdea viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/blog-post-conclusion" formattedId="BT05" iconComponent={<BlogConclusion viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/blog-post-headline" formattedId="BT06" iconComponent={<ViewHeadlineOutlinedIcon fontSize="small" />} />
                        <ListCatChild dirList="/app/blog-post-summary" formattedId="BT07" iconComponent={<SummarizeOutlinedIcon fontSize="small" />} />
                        <ListCatChild dirList="/app/blog-post-aida" formattedId="BT08" iconComponent={<BulpIdea viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/blog-post-pas" formattedId="BT09" iconComponent={<BlogOutline viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} /> */}
                    </List>
                </Collapse>
                {/* ************************************************************************************* */}
                {/* <Tooltip title={<FormattedMessage id='WT02' />} disableFocusListener placement='right-start' disableInteractive >
                    <ListItem sx={{ color: 'text.secondary' }} button onClick={() => dispatch({ type: 'WebPageTools01' })}>
                        <ListItemIcon>
                            <WebRoundedIcon />
                        </ListItemIcon>
                        <ListItemTextParent primary={<FormattedMessage id='WT02' />} />
                        {(state.WebPageTools01) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Tooltip> */}
                {/* <Collapse in={(state.WebPageTools01)} timeout="auto" unmountOnExit>
                    <List dense>
                        <ListCatChild dirList="/app/tagline" formattedId="TG03" iconComponent={<TaglineIcon viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/landing-page-headline-description" formattedId="LP02" iconComponent={<LandingPageHeaderDescription viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/landing-page-headline" formattedId="LP01" iconComponent={<LandingPageHeader viewBox="0 0 656 656" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/meta-descriptions" formattedId="LP03" iconComponent={<MetaDescription viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/question-generator" formattedId="LP04" iconComponent={<QuestionGeneration viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/keyword-finder" formattedId="LP06" iconComponent={<SearchKeyword viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/subject-suggestion" formattedId="LP07" iconComponent={<SubjectFinder viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                    </List>
                </Collapse> */}

                {/* <Tooltip title={<FormattedMessage id='A1203' />} disableFocusListener placement='right-start' disableInteractive >
                    <ListItem sx={{ color: 'text.secondary' }} button onClick={() => dispatch({ type: 'GAds01' })}>
                        <ListItemIcon>
                            <MaterialSiGoogleadsense />
                        </ListItemIcon>
                        <ListItemTextParent primary={<FormattedMessage id='A1203' />} />
                        {(state.GAds01) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Tooltip>
                <Collapse in={(state.GAds01)} timeout="auto" unmountOnExit>
                    <List dense>
                        <ListCatChild dirList="/app/g-ad-title" formattedId="AG0021" iconComponent={<MaterialSiGoogleads viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/g-ad-description" formattedId="AG0022" iconComponent={<MaterialSiGoogleads viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                    </List>
                </Collapse> */}
            </List>
        </>
    )
}

export default ListSidebar