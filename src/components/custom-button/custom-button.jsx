import React from "react";
import {CustomButtonContainer} from "./custom-button.syles";


const   CustomButton = ({children, ...props}) => (
    <CustomButtonContainer  {...props} >
        {children}
    </CustomButtonContainer>
);

export default CustomButton;
