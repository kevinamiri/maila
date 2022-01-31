
export default function asSvgIcon(reactSvgComponent) {
    const Icon = function (props) {
        const viewBox = React.useMemo(() => reactSvgComponent({}).props.attr.viewBox, []);
        return <SvgIcon component={reactSvgComponent} viewBox={viewBox} {...props} />;
    };

    Object.defineProperty(Icon, 'displayName', {
        value: `AsSvgIcon(${reactSvgComponent.displayName || reactSvgComponent.name})`,
    });

    return Icon;
}