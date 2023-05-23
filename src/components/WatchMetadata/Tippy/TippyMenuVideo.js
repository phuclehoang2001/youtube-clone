import Tippy from '@tippyjs/react'
import React from 'react'
import MenuItem from '../../Popper/Menu/MenuItem'
import "./TippyMenuVideo.scss"
import 'tippy.js/dist/tippy.css';

const TippyMenuVideo = ({
    items = [],
    className,
    placement,
    children
}) => {


    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <div>
                    <MenuItem key={index} data={item} />
                </div>

            );
        });
    }

    const renderResult = () => {
        return (
            <div className="tippy_menu_video">
                {renderItems()}
            </div>
        )
    }

    return (
        <Tippy
            interactive
            trigger="click"
            hideOnClick={true}
            offset={[0, 20]}
            delay={[0, 150]}
            placement={placement}
            render={renderResult}
            interactiveBorder="40"

        >
            {children}
        </Tippy>
    )
}


export default TippyMenuVideo