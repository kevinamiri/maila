import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Tooltip } from '@mui/material';
import { FormattedMessage } from "react-intl";
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
                    </List>
                </Collapse>
            </List>
        </>
    )
}

export default ListSidebar