import { useState } from "react";
import UiVideo from "./UiVideo";
import video from "./video/han-solo.mp4"

export default {
    title: 'Ui-Kit/UiVideo',
    component: UiVideo
}
  
const Template = (args) => {
    return (
        <UiVideo 
            {...args}
        />
    )

};

const props = {
    src: video,
    playbackRate: 1.0,
    classes: '',
}

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
    ...props,
};
