//*==================================================================*
//*                            EDERGR.COM                            *
//*------------------------------------------------------------------*
//*    PROGRAM.......: myCustomizedInput.tsx                         *
//*    DEVELOPER.....: EDER GUIMARAES RODRIGUES                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: BUILD AN INPUT FIELD WITH CUSTOMIZED PROPERTIES *
//*                  AND STYLES                                      *
//*------------------------------------------------------------------*
//*    IMPORTS.......:                                               *
import React from 'react';
import CSS from 'csstype';
//*==================================================================*
//*                                                                  *
//* ---------------------------------------------------------------- *
//* ALLOWED TYPES:                                                   *
export declare type TypesWorking = 'text' | 'color' | 'date' | 'url' |
    'datetime-local' | 'email' | 'hidden' | 'time' | 'file' | 'week' |
    'month' | 'number' | 'password' | 'range' | 'submit' | 'button'
//*                                                                  *
//* ---------------------------------------------------------------- *
//* INTERFACE WITH CUSTOMIZED PROPERTIES:                            *
interface InputOptions {
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* OPTIONAL FUNCTIONS CALLBACK:                                 *
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* REQUIRED PROPERTIES FIELDS:                                  *
    //* ------------------------------------------------------------ *
    id: string;
    type: TypesWorking;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* OPTIONAL PROPERTIES FIELDS:                                  *
    //* ------------------------------------------------------------ *
    placeholder?: string;
    defaultValue?: string;
    disabled?: boolean;
    readOnly?: boolean;
    maxLength?: number;
    minLength?: number;
    required?: boolean;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUT GROUP CUSTOMIZED PROPERTIES:                           *
    //* ------------------------------------------------------------ *        
    inputGroupMargin?: string;
    inputGroupDisplay?: string;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUT CUSTOMIZED PROPERTIES:                                 *
    //* ------------------------------------------------------------ *            
    inputHeight?: string;
    inputWidth?: string;
    inputFontSize?: string;
    inputBorderRadius?: string;
    inputFontColor?: string;
    inputBackgroundColor?: string;
    inputBorder?: string;
    inputBorderBottom?: string;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUT FOCUSED CUSTOMIZED PROPERTIES:                         *
    //* ------------------------------------------------------------ *   
    inputFocusedFontColor?: string;
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUT PLACEHOLDER CUSTOMIZED PROPERTIES:                     *
    //* ------------------------------------------------------------ *           
    inputLabelPlaceholderColor?: string;
    inputLabelFontSize?: string;
    inputLabelMarginLeft?: string;
    inputLabelTop?: string;
}

class CustomizedInput extends React.Component<InputOptions, {
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* CONTROLL.....:                                               *
    onFocus: boolean;
}> {
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* CONSTRUCTOR..:                                               *
    constructor(props: any) {
        super(props);
        this.state = {
            onFocus: false,
        };
        //*                                                          *
        //* -------------------------------------------------------  *
        //* BINDS....:                                               *
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUT_GROUP CSS..:                                           *
    input_group: CSS.Properties = {
        position: "relative",
        display: this.props.inputGroupDisplay !== undefined ? this.props.inputGroupDisplay : "inline-grid",
        margin: this.props.inputGroupMargin !== undefined ? this.props.inputGroupMargin : "10px",
    }
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* inputLabel CSS..:                                           *
    inputLabel: CSS.Properties = {
        position: "absolute",
        top: this.props.inputLabelTop !== undefined ? this.props.inputLabelTop : "17px",
        color: this.props.inputLabelPlaceholderColor !== undefined ? this.props.inputLabelPlaceholderColor : "#999",
        fontSize: this.props.inputLabelFontSize !== undefined ? this.props.inputLabelFontSize : "20px",
        marginLeft: this.props.inputLabelMarginLeft !== undefined ? this.props.inputLabelMarginLeft : "10px",
    };
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* FOCUSED CSS......:                                           *
    focused: CSS.Properties = {
        color: this.props.inputFocusedFontColor !== undefined ? this.props.inputFocusedFontColor : '#999',
        fontSize: "15px",
        transition: "transform 150ms, font-size 150ms",
        transform: "translateY(-100%)",
    }
    //*                                                              *
    //* ------------------------------------------------------------ *
    //* INPUT CSS........:                                           *
    input: CSS.Properties = {
        height: this.props.inputHeight !== undefined ? this.props.inputHeight : "42px",
        width: this.props.inputWidth !== undefined ? this.props.inputWidth : "250px",
        fontSize: this.props.inputFontSize !== undefined ? this.props.inputFontSize : "20px",
        paddingLeft: this.props.type === 'submit' || this.props.type === 'range' || this.props.type === 'color' || this.props.type === 'button' ? "0px" : "9px",
        paddingTop: this.props.type === 'submit' || this.props.type === 'range' || this.props.type === 'color' || this.props.type === 'button' ? "0px" : "15px",
        border: this.props.inputBorder !== undefined ? this.props.inputBorder : 0,
        borderBottom: this.props.inputBorderBottom !== undefined ? this.props.inputBorderBottom : "1px solid",
        borderRadius: this.props.inputBorderRadius !== undefined ? this.props.inputBorderRadius : "0",
        color: this.props.inputFontColor !== undefined ? this.props.inputFontColor : '#999',
        backgroundColor: this.props.inputBackgroundColor !== undefined ? this.props.inputBackgroundColor : '#FFF'
    }
    //*                                                              *
    //*--------------------------------------------------------------*
    //* ONFOCUS FUNCTION                                             *
    onFocus() {
        this.setState({
            onFocus: true
        })
    }
    //*                                                              *
    //*--------------------------------------------------------------*
    //* ONBLUR FUNCTION                                              *
    onBlur(e: any) {
        if (e.target.value === "" || e.target.value === undefined) {
            this.setState({
                onFocus: false
            })
        }
    }
    //*                                                              *
    //*--------------------------------------------------------------*
    //* MAIN RENDER FUNCTION                                         *
    render() {
        //*----------------------------------------------------------*
        //* HTML RETURN                                              *
        //*----------------------------------------------------------*
        let borderBottom: CSS.Properties = this.state.onFocus
            ? { borderBottomColor: this.props.inputLabelPlaceholderColor !== undefined ? this.props.inputLabelPlaceholderColor : "#999" }
            : { borderBottomColor: this.props.required === true ? "#F00" : "#999" }
        return (
            <div style={this.input_group}>
                <label
                    htmlFor={this.props.id}
                    style={this.state.onFocus
                        ? Object.assign({}, this.inputLabel, this.focused)
                        : this.inputLabel}>
                    {this.props.placeholder}
                </label>
                <input
                    style={Object.assign({}, this.input, borderBottom)}
                    id={this.props.id}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onClick={this.props.onClick}
                    onChange={this.props.onChange}
                    defaultValue={this.props.defaultValue}
                    disabled={this.props.disabled}
                    readOnly={this.props.readOnly}
                    maxLength={this.props.maxLength}
                    minLength={this.props.minLength}
                    required={this.props.required}
                    type={this.props.type} />
            </div>
        );
    };
};
//*                                                                  *
//*==================================================================*
//*                                                                  *
export default CustomizedInput;
//*                                                                  *
//*==================================================================*