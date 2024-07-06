import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export default function asSvgIcon(reactSvgComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>) {
    const Icon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
        const { component, ...svgIconProps } = props;
        const viewBox = React.useMemo(() => {
            const Comp = reactSvgComponent as any;
            return new Comp({}).props.attr?.viewBox;
        }, []);
        return <SvgIcon ref={ref} component={reactSvgComponent} viewBox={viewBox} {...svgIconProps} />;
    });

    Icon.displayName = `AsSvgIcon(${reactSvgComponent.displayName || reactSvgComponent.name})`;

    return Icon;
}