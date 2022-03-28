import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Tooltip } from '@mui/material';
import { FormattedMessage } from "react-intl";
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import EmailIcon from '@mui/icons-material/Email';
import { RiAdvertisementFill } from "react-icons/ri";
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { SiGoogleads, SiGoogleadsense } from 'react-icons/si';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
// import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import { Link } from 'gatsby';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import ListCatChild from './ListCatChild'
import SvgIcon from '@mui/material/SvgIcon';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
import VrpanoOutlinedIcon from '@mui/icons-material/VrpanoOutlined';
import { BrandVoiceicon, SubHeader, SubjectFinder, SearchKeyword, QuestionGeneration, MetaDescription, LandingPageHeader, LandingPageHeaderDescription, BlogConclusion, Thankyou, BlogIntro, BlogOutline, ProspectingEmail, TaglineIcon, KeywordIcon, TagIcon, DictionaryCheck, BulpIdea, AddEmail, ProductDescriptionIcon, Hashtag, WriteVisionStatement, AdjustTone, GrammarCorrection, ProductDescriptionAmazon, WriteFollowUpEmail, WriteColdEmail, WriteMissionStatement } from '../icons/Icons'
import ListItemTextParent from './ListItemTextParent'

function asSvgIcon(reactSvgComponent) {
    const Icon = function (props) {
        const viewBox = React.useMemo(() => reactSvgComponent({}).props.attr.viewBox, []);
        return <SvgIcon component={reactSvgComponent} viewBox={viewBox} {...props} />;
    };

    Object.defineProperty(Icon, 'displayName', {
        value: `AsSvgIcon(${reactSvgComponent.displayName || reactSvgComponent.name})`,
    });

    return Icon;
}

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


const ListSidebar = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const MaterialSiGoogleadsense = asSvgIcon(SiGoogleadsense);
    const MaterialSiGoogleads = asSvgIcon(SiGoogleads);

    function ListItemLink(props) {
        return <Link {...props} />;
    }
    let windowsStatus = (window.location.pathname == '/app/productdescription') ? true : false
    console.log(windowsStatus)

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

                <Tooltip title={<FormattedMessage id='PT01' />} disableFocusListener placement='right-start' disableInteractive >
                    <ListItem sx={{ color: 'text.secondary' }} button onClick={() => dispatch({ type: 'ProductTools01' })}>
                        <ListItemIcon>
                            <DescriptionRoundedIcon />
                        </ListItemIcon >

                        <ListItemTextParent primary={<FormattedMessage id='PT01' />} />
                        {(state.ProductTools01) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Tooltip>
                <Collapse in={(state.ProductTools01)} timeout="auto" unmountOnExit>
                    <List dense>
                        <ListCatChild dirList="/app/productdescription" formattedId="PD02" iconComponent={<ProductDescriptionIcon viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/productdescriptionamazon" formattedId="PD03" iconComponent={<ProductDescriptionAmazon viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                    </List>
                </Collapse>

                <Tooltip title={<FormattedMessage id='ET01' />} disableFocusListener placement='right-start' disableInteractive >
                    <ListItem sx={{ color: 'text.secondary' }} button onClick={() => dispatch({ type: 'EmailTools01' })}>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemTextParent primary={<FormattedMessage id='ET01' />} />
                        {(state.EmailTools01) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Tooltip>
                <Collapse in={(state.EmailTools01)} timeout="auto" unmountOnExit>
                    <List dense>
                        <ListCatChild dirList="/app/friendly-email" formattedId="ET09" iconComponent={<AddEmail viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/followup-email" formattedId="ET02" iconComponent={<WriteFollowUpEmail viewBox="0 0 512 512" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/cold-email" formattedId="ET03" iconComponent={<WriteColdEmail viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/thanks-you-email" formattedId="ET04" iconComponent={<Thankyou viewBox="0 0 512 512" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/prospecting-email" formattedId="ET05" iconComponent={<ProspectingEmail viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                    </List>
                </Collapse>
                <Tooltip title={<FormattedMessage id='CT01' />} disableFocusListener placement='right-start' disableInteractive >
                    <ListItem sx={{ color: 'text.secondary' }} button onClick={() => dispatch({ type: 'CopyTools01' })}>
                        <ListItemIcon>
                            <CopyrightRoundedIcon />
                        </ListItemIcon>
                        <ListItemTextParent primary={<FormattedMessage id='CT01' />} />
                        {(state.CopyTools01) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Tooltip>

                <Collapse in={(state.CopyTools01)} timeout="auto" unmountOnExit>
                    <List dense>
                        <ListCatChild dirList="/app/mission-statement" formattedId="B01" iconComponent={<WriteMissionStatement viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/vision-statement" formattedId="B02" iconComponent={<WriteVisionStatement viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/value-proposition" formattedId="B03" iconComponent={<VrpanoOutlinedIcon fontSize="small" />} />

                    </List>
                </Collapse>
                {/* ************************************************************************************* */}
                <Tooltip title={<FormattedMessage id='WT01' />} disableFocusListener placement='right-start' disableInteractive >
                    <ListItem sx={{ color: 'text.secondary' }} button onClick={() => dispatch({ type: 'WritingTools01' })}>
                        <ListItemIcon>
                            <BorderColorRoundedIcon />
                        </ListItemIcon>
                        <ListItemTextParent primary={<FormattedMessage id='WT01' />} />
                        {(state.WritingTools01) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Tooltip>

                <Collapse in={(state.WritingTools01)} timeout="auto" unmountOnExit>
                    <List dense>
                        <ListCatChild dirList="/app/paraphrase" formattedId="RH004" iconComponent={<DictionaryCheck viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/possible-answers" formattedId="RH004" iconComponent={<HistoryEduRoundedIcon viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/grammar" formattedId="GC009" iconComponent={<GrammarCorrection viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/adjust-tone-rewriting" formattedId="B04" iconComponent={<BrandVoiceicon viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/create-outline" formattedId="CT940" iconComponent={<DoneOutlineRoundedIcon viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/expand" formattedId="E405" iconComponent={<PlaylistAddRoundedIcon viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                    </List>
                </Collapse>
                {/* ************************************************************************************* */}
                <Tooltip title={<FormattedMessage id='BT02' />} disableFocusListener placement='right-start' disableInteractive >
                    <ListItem sx={{ color: 'text.secondary' }} button onClick={() => dispatch({ type: 'BlogTools01' })}>
                        <ListItemIcon>
                            <LibraryBooksRoundedIcon />
                        </ListItemIcon>
                        <ListItemTextParent primary={<FormattedMessage id='BT02' />} />
                        {(state.BlogTools01) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Tooltip>

                <Collapse in={(state.BlogTools01)} timeout="auto" unmountOnExit>
                    <List dense>
                        <ListCatChild dirList="/app/blog-post-intro" formattedId="BT03" iconComponent={<BlogIntro viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/blog-post-ideas" formattedId="BT04" iconComponent={<BulpIdea viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/blog-post-conclusion" formattedId="BT05" iconComponent={<BlogConclusion viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/blog-post-headline" formattedId="BT06" iconComponent={<ViewHeadlineOutlinedIcon fontSize="small" />} />
                        <ListCatChild dirList="/app/blog-post-summary" formattedId="BT07" iconComponent={<SummarizeOutlinedIcon fontSize="small" />} />
                        <ListCatChild dirList="/app/blog-post-aida" formattedId="BT08" iconComponent={<BulpIdea viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/blog-post-pas" formattedId="BT09" iconComponent={<BlogOutline viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                    </List>
                </Collapse>
                {/* ************************************************************************************* */}
                <Tooltip title={<FormattedMessage id='WT02' />} disableFocusListener placement='right-start' disableInteractive >
                    <ListItem sx={{ color: 'text.secondary' }} button onClick={() => dispatch({ type: 'WebPageTools01' })}>
                        <ListItemIcon>
                            <WebRoundedIcon />
                        </ListItemIcon>
                        <ListItemTextParent primary={<FormattedMessage id='WT02' />} />
                        {(state.WebPageTools01) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Tooltip>
                <Collapse in={(state.WebPageTools01)} timeout="auto" unmountOnExit>
                    <List dense>
                        <ListCatChild dirList="/app/tagline" formattedId="TG03" iconComponent={<TaglineIcon viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/landing-page-headline-description" formattedId="LP02" iconComponent={<LandingPageHeaderDescription viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/landing-page-headline" formattedId="LP01" iconComponent={<LandingPageHeader viewBox="0 0 656 656" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/meta-descriptions" formattedId="LP03" iconComponent={<MetaDescription viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/question-generator" formattedId="LP04" iconComponent={<QuestionGeneration viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/sub-headers" formattedId="LP05" iconComponent={<SubHeader viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/keyword-finder" formattedId="LP06" iconComponent={<SearchKeyword viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                        <ListCatChild dirList="/app/subject-suggestion" formattedId="LP07" iconComponent={<SubjectFinder viewBox="0 0 32 32" height="24" width="24" fontSize="small" />} />
                    </List>
                </Collapse>

                <Tooltip title={<FormattedMessage id='A1203' />} disableFocusListener placement='right-start' disableInteractive >
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
                </Collapse>
            </List>
        </>
    )
}

export default ListSidebar