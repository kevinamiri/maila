import React from 'react';
import { List, Collapse, ListItem, ListItemIcon, Tooltip } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { FormattedMessage } from "react-intl";
import ListCatChild from './ListCatChild';
import ListItemTextParent from './ListItemTextParent';
import useToolsProducts from "../hooks/useToolsProducts";
import useSettings from "../hooks/useSettings";
import IconsList from './icons';
import { EmailOpen, CopyWritingIcon, WritingToolsIcon, AddBlog } from "../icons/Icons";

// Define interfaces
interface Product {
  slug: string;
  url: string;
  title: string;
  icon: string;
}

interface Category {
  id: string;
  Icon: React.ComponentType;
}

interface CategoryState {
  [key: string]: boolean;
}

interface CategoryAction {
  type: string;
}

interface CategorySectionProps {
  category: string;
  state: CategoryState;
  dispatch: React.Dispatch<CategoryAction>;
  items: Product[];
}

// Category types and their initial states
const categories: Record<string, Category> = {
  email: { id: 'ET01', Icon: EmailOpen },
  copywriting: { id: 'CT01', Icon: CopyWritingIcon },
  writing: { id: 'WT01', Icon: WritingToolsIcon },
  blog: { id: 'BT02', Icon: AddBlog }
};

const initialState: CategoryState = Object.keys(categories).reduce((acc, key) => ({
  ...acc,
  [key]: false
}), {});

// Simple toggle reducer
const reducer = (state: CategoryState, action: CategoryAction): CategoryState => ({
  ...state,
  [action.type]: !state[action.type]
});

// Category section component
const CategorySection: React.FC<CategorySectionProps> = ({ category, state, dispatch, items }) => (
  <>
    <Tooltip title={<FormattedMessage id={categories[category].id} />} 
             placement='right-start' 
             disableFocusListener 
             disableInteractive>
      <ListItem 
        sx={{ color: 'text.secondary' }} 
        button 
        onClick={() => dispatch({ type: category })}>
        <ListItemIcon>
          {React.createElement(categories[category].Icon)}
        </ListItemIcon>
        <ListItemTextParent primary={<FormattedMessage id={categories[category].id} />} />
        {state[category] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    </Tooltip>
    <Collapse in={state[category]} timeout="auto" unmountOnExit>
      <List dense>
        {items.map((item, index) => (
          <ListCatChild 
            key={index} 
            dirList={item.url} 
            formattedId={item.title}>
            <IconsList type={item.icon} />
          </ListCatChild>
        ))}
      </List>
    </Collapse>
  </>
);

const ListSidebar: React.FC = () => {
  const useTools = useToolsProducts();
  const { settings } = useSettings();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // Get products by language
  const products: Product[] = useTools[settings.lang].edges.map(
    (item: any) => item.node.frontmatter
  );

  // Group products by category
  const productsByCategory: Record<string, Product[]> = {
    blog: products.filter(item => item.slug.split("/")[3] === "blog"),
    copywriting: products.filter(item => item.slug.split("/")[3] === "copywriting"),
    email: products.filter(item => item.slug.split("/")[3] === "email"),
    writing: products.filter(item => item.slug.split("/")[3] === "writing")
  };

  return (
    <List sx={{
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper',
      overflowY: 'auto',
      overflowX: "clip"
    }} dense>
      {Object.keys(categories).map(category => (
        <CategorySection
          key={category}
          category={category}
          state={state}
          dispatch={dispatch}
          items={productsByCategory[category]}
        />
      ))}
    </List>
  );
};

export default ListSidebar;
