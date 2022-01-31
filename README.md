## removeing margin 0 default in the Global style

In order that ul and li tags be as normal I had to remove the default margin and padding
```
const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0

```

Thus the new would be as below

```
const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
```